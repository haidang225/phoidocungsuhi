import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import {
  getAllInvoices,
  upsertInvoice,
  deleteInvoiceById,
  getAllCostumes,
  upsertCostume,
  deleteCostumeById,
  isDbConfigured,
} from './src/db/index.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// Uploads directory for persistent local images with 100% transparent PNG/WebP support
const UPLOADS_DIR = path.resolve(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
app.use('/uploads', express.static(UPLOADS_DIR, { maxAge: '7d' }));

// Helper: Persist base64 data URLs to disk in /uploads/ so JSON payloads stay ultralight (<50KB)
// This ensures infinite capacity for 4, 10, or 100+ outfits without QuotaExceededError or browser crash.
function persistImageToFile(url: string, prefix = 'img'): string {
  if (!url || typeof url !== 'string') return url;
  if (!url.startsWith('data:image/')) return url;

  try {
    const matches = url.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) return url;

    let ext = matches[1].toLowerCase();
    if (ext === 'jpeg') ext = 'jpg';
    if (ext === 'svg+xml') ext = 'svg';

    const buffer = Buffer.from(matches[2], 'base64');
    const hash = crypto.createHash('md5').update(buffer).digest('hex').substring(0, 12);
    const filename = `${prefix}_${hash}.${ext}`;
    const filePath = path.join(UPLOADS_DIR, filename);

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, buffer);
    }

    return `/uploads/${filename}`;
  } catch (err) {
    console.warn('Error persisting base64 to file:', err);
    return url;
  }
}

function processOutfitImages(outfit: any) {
  if (!outfit) return outfit;
  if (outfit.imageUrl) {
    outfit.imageUrl = persistImageToFile(outfit.imageUrl, 'outfit');
  }
  if (Array.isArray(outfit.imageUrls)) {
    outfit.imageUrls = outfit.imageUrls.map((url: string) => persistImageToFile(url, 'outfit'));
  }
  if (Array.isArray(outfit.components)) {
    outfit.components = outfit.components.map((c: any) => {
      if (c && c.imageUrl) {
        c.imageUrl = persistImageToFile(c.imageUrl, 'comp');
      }
      if (c && Array.isArray(c.imageUrls)) {
        c.imageUrls = c.imageUrls.map((url: string) => persistImageToFile(url, 'comp'));
      }
      return c;
    });
  }
  return outfit;
}

function processCostumeImages(costume: any) {
  if (!costume) return costume;
  if (costume.imageUrl) {
    costume.imageUrl = persistImageToFile(costume.imageUrl, 'costume');
  }
  if (Array.isArray(costume.imageUrls)) {
    costume.imageUrls = costume.imageUrls.map((url: string) => persistImageToFile(url, 'costume'));
  }
  return costume;
}

function processLookbookImages(lookbook: any) {
  if (!lookbook) return lookbook;
  if (lookbook.imageUrl) {
    lookbook.imageUrl = persistImageToFile(lookbook.imageUrl, 'lookbook');
  }
  if (lookbook.fullOutfitImage) {
    lookbook.fullOutfitImage = persistImageToFile(lookbook.fullOutfitImage, 'lookbook');
  }
  if (Array.isArray(lookbook.imageUrls)) {
    lookbook.imageUrls = lookbook.imageUrls.map((url: string) => persistImageToFile(url, 'lookbook'));
  }
  return lookbook;
}

// Shared Dataset file persistence (local fallback cache & seed)
const DATA_DIR = path.resolve(__dirname, 'data');
const DATA_FILE = path.resolve(DATA_DIR, 'shared_data.json');
const SEED_FILE = path.resolve(DATA_DIR, 'seed_data.json');

function loadSharedData() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    let seed: any = { costumes: [], lookbooks: [], outfits: [] };
    if (fs.existsSync(SEED_FILE)) {
      try {
        seed = JSON.parse(fs.readFileSync(SEED_FILE, 'utf-8'));
      } catch (err) {
        console.warn('Could not read seed_data.json:', err);
      }
    }

    let parsed: any = { costumes: [], lookbooks: [], outfits: [] };
    if (fs.existsSync(DATA_FILE)) {
      try {
        parsed = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
      } catch (err) {
        console.warn('Could not read shared_data.json:', err);
      }
    }

    // Merge outfits: ensure all seed outfits (Song Ngư Triều Ngọc, Hạc Nguyệt, Sen Ngọc, Vân Hải Giao Lĩnh) exist
    const outfitMap = new Map<string, any>();
    (Array.isArray(seed.outfits) ? seed.outfits : []).forEach((o: any) => {
      if (o && o.id) outfitMap.set(o.id, o);
    });
    (Array.isArray(parsed.outfits) ? parsed.outfits : []).forEach((o: any) => {
      if (o && o.id) outfitMap.set(o.id, o);
    });

    // Merge costumes
    const costumeMap = new Map<string, any>();
    (Array.isArray(seed.costumes) ? seed.costumes : []).forEach((c: any) => {
      if (c && c.id) costumeMap.set(c.id, c);
    });
    (Array.isArray(parsed.costumes) ? parsed.costumes : []).forEach((c: any) => {
      if (c && c.id) costumeMap.set(c.id, c);
    });

    // Merge lookbooks
    const lookbookMap = new Map<string, any>();
    (Array.isArray(seed.lookbooks) ? seed.lookbooks : []).forEach((l: any) => {
      if (l && l.id) lookbookMap.set(l.id, l);
    });
    (Array.isArray(parsed.lookbooks) ? parsed.lookbooks : []).forEach((l: any) => {
      if (l && l.id) lookbookMap.set(l.id, l);
    });

    const costumes = Array.from(costumeMap.values()).map(processCostumeImages);
    const lookbooks = Array.from(lookbookMap.values()).map(processLookbookImages);
    const outfits = Array.from(outfitMap.values()).map(processOutfitImages);

    const merged = { costumes, lookbooks, outfits };
    if (!fs.existsSync(DATA_FILE) || outfits.length > (parsed.outfits || []).length) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(merged, null, 2), 'utf-8');
    }

    return merged;
  } catch (err) {
    console.error('Error loading shared data:', err);
  }
  return { costumes: [], lookbooks: [], outfits: [] };
}

let sharedData = loadSharedData();

function saveSharedData() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    sharedData.costumes = (sharedData.costumes || []).map(processCostumeImages);
    sharedData.lookbooks = (sharedData.lookbooks || []).map(processLookbookImages);
    sharedData.outfits = (sharedData.outfits || []).map(processOutfitImages);
    fs.writeFileSync(DATA_FILE, JSON.stringify(sharedData, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving shared data:', err);
  }
}

// API: Get all shared costumes, lookbooks, and outfits with auto-seed and bidirectional merge
app.get('/api/data', async (req, res) => {
  try {
    let dbOutfits: any[] = [];
    let dbCostumes: any[] = [];

    if (isDbConfigured()) {
      try {
        dbOutfits = await getAllInvoices();
        // Auto-seed missing outfits into PostgreSQL to prevent data loss
        if (Array.isArray(sharedData.outfits) && sharedData.outfits.length > 0) {
          const dbOutfitIds = new Set(dbOutfits.map((o: any) => o.id));
          const missingInOutfits = sharedData.outfits.filter((o: any) => o && o.id && !dbOutfitIds.has(o.id));
          if (missingInOutfits.length > 0) {
            console.log(`Auto-seeding ${missingInOutfits.length} outfits into PostgreSQL...`);
            for (const o of missingInOutfits) {
              await upsertInvoice(o).catch((err: any) => console.warn('Auto-seed outfit warning:', err?.message || err));
              dbOutfits.push(o);
            }
          }
        }
      } catch (e) {
        console.warn('Could not query invoices table from PostgreSQL:', e);
        dbOutfits = sharedData.outfits;
      }

      try {
        dbCostumes = await getAllCostumes();
        if (Array.isArray(sharedData.costumes) && sharedData.costumes.length > 0) {
          const dbCostumeIds = new Set(dbCostumes.map((c: any) => c.id));
          const missingInCostumes = sharedData.costumes.filter((c: any) => c && c.id && !dbCostumeIds.has(c.id));
          if (missingInCostumes.length > 0) {
            console.log(`Auto-seeding ${missingInCostumes.length} costumes into PostgreSQL...`);
            for (const c of missingInCostumes) {
              await upsertCostume(c).catch((err: any) => console.warn('Auto-seed costume warning:', err?.message || err));
              dbCostumes.push(c);
            }
          }
        }
      } catch (e) {
        console.warn('Could not query costumes table from PostgreSQL:', e);
        dbCostumes = sharedData.costumes;
      }
    } else {
      dbOutfits = sharedData.outfits;
      dbCostumes = sharedData.costumes;
    }

    // Merge DB and sharedData to NEVER drop or lose any outfits
    const finalOutfitsMap = new Map<string, any>();
    (sharedData.outfits || []).forEach((o: any) => { if (o && o.id) finalOutfitsMap.set(o.id, o); });
    (dbOutfits || []).forEach((o: any) => { if (o && o.id) finalOutfitsMap.set(o.id, o); });

    const finalCostumesMap = new Map<string, any>();
    (sharedData.costumes || []).forEach((c: any) => { if (c && c.id) finalCostumesMap.set(c.id, c); });
    (dbCostumes || []).forEach((c: any) => { if (c && c.id) finalCostumesMap.set(c.id, c); });

    const resolvedOutfits = Array.from(finalOutfitsMap.values()).map(processOutfitImages);
    const resolvedCostumes = Array.from(finalCostumesMap.values()).map(processCostumeImages);

    sharedData.outfits = resolvedOutfits;
    sharedData.costumes = resolvedCostumes;
    saveSharedData();

    res.json({
      costumes: resolvedCostumes,
      lookbooks: sharedData.lookbooks,
      outfits: resolvedOutfits,
      invoices: resolvedOutfits,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error fetching data:', error);
    res.json({
      costumes: sharedData.costumes,
      lookbooks: sharedData.lookbooks,
      outfits: sharedData.outfits,
      invoices: sharedData.outfits,
      timestamp: new Date().toISOString(),
    });
  }
});

// Optional alias for invoices
app.get('/api/invoices', (req, res) => {
  res.json({ success: true, invoices: sharedData.outfits });
});

// API: Add or update a costume in the shared dataset and database
app.post('/api/costumes', async (req, res) => {
  try {
    let item = req.body;
    if (!item || !item.id) {
      return res.status(400).json({ error: 'Invalid costume item' });
    }
    item = processCostumeImages(item);

    if (isDbConfigured()) {
      try {
        await upsertCostume(item);
      } catch (dbErr) {
        console.warn('DB upsert costume warning:', dbErr);
      }
    }

    const existingIndex = sharedData.costumes.findIndex((c: any) => c.id === item.id);
    if (existingIndex >= 0) {
      sharedData.costumes[existingIndex] = item;
    } else {
      sharedData.costumes.unshift(item);
    }
    saveSharedData();
    res.json({ success: true, item, costumes: sharedData.costumes });
  } catch (error: any) {
    console.error('Error adding costume:', error);
    res.status(500).json({ error: 'Failed to add costume', message: error?.message });
  }
});

// API: Update costume
app.put('/api/costumes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let item = req.body;
    item = processCostumeImages(item);

    if (isDbConfigured()) {
      try {
        await upsertCostume({ ...item, id });
      } catch (dbErr) {
        console.warn('DB update costume warning:', dbErr);
      }
    }

    const existingIndex = sharedData.costumes.findIndex((c: any) => c.id === id);
    if (existingIndex >= 0) {
      sharedData.costumes[existingIndex] = { ...sharedData.costumes[existingIndex], ...item };
    } else {
      sharedData.costumes.unshift({ ...item, id });
    }

    saveSharedData();
    res.json({ success: true, costumes: sharedData.costumes });
  } catch (error: any) {
    console.error('Error updating costume:', error);
    res.status(500).json({ error: 'Failed to update costume', message: error?.message });
  }
});

// API: Delete costume from shared dataset
app.delete('/api/costumes/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (isDbConfigured()) {
      try {
        await deleteCostumeById(id);
      } catch (dbErr) {
        console.warn('DB delete costume warning:', dbErr);
      }
    }

    sharedData.costumes = sharedData.costumes.filter((c: any) => c.id !== id);
    saveSharedData();
    res.json({ success: true, costumes: sharedData.costumes });
  } catch (error: any) {
    console.error('Error deleting costume:', error);
    res.status(500).json({ error: 'Failed to delete costume', message: error?.message });
  }
});

// API: Add or update lookbook in shared dataset
app.post('/api/lookbooks', (req, res) => {
  try {
    let item = req.body;
    if (!item || !item.id) {
      return res.status(400).json({ error: 'Invalid lookbook item' });
    }
    item = processLookbookImages(item);

    const existingIndex = sharedData.lookbooks.findIndex((l: any) => l.id === item.id);
    if (existingIndex >= 0) {
      sharedData.lookbooks[existingIndex] = item;
    } else {
      sharedData.lookbooks.unshift(item);
    }

    saveSharedData();
    res.json({ success: true, item, lookbooks: sharedData.lookbooks });
  } catch (error: any) {
    console.error('Error adding lookbook:', error);
    res.status(500).json({ error: 'Failed to add lookbook', message: error?.message });
  }
});

// API: Delete lookbook from shared dataset
app.delete('/api/lookbooks/:id', (req, res) => {
  try {
    const { id } = req.params;
    sharedData.lookbooks = sharedData.lookbooks.filter((l: any) => l.id !== id);
    saveSharedData();
    res.json({ success: true, lookbooks: sharedData.lookbooks });
  } catch (error: any) {
    console.error('Error deleting lookbook:', error);
    res.status(500).json({ error: 'Failed to delete lookbook', message: error?.message });
  }
});

// API: Add or update outfit in shared dataset and PostgreSQL invoices table
app.post('/api/outfits', async (req, res) => {
  try {
    let item = req.body;
    if (!item || !item.id || item.id === 'test_outfit_1') {
      return res.json({ success: true, item, outfits: sharedData.outfits });
    }
    item = processOutfitImages(item);

    if (isDbConfigured()) {
      try {
        await upsertInvoice(item);
      } catch (dbErr) {
        console.warn('DB upsert invoice warning:', dbErr);
      }
    }

    if (!Array.isArray(sharedData.outfits)) {
      sharedData.outfits = [];
    }

    const existingIndex = sharedData.outfits.findIndex((o: any) => o.id === item.id);
    if (existingIndex >= 0) {
      sharedData.outfits[existingIndex] = item;
    } else {
      sharedData.outfits.unshift(item);
    }

    saveSharedData();
    res.json({ success: true, item, outfits: sharedData.outfits });
  } catch (error: any) {
    console.error('Error adding outfit:', error);
    res.status(500).json({ error: 'Failed to add outfit', message: error?.message });
  }
});

// API: Update outfit
app.put('/api/outfits/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let item = req.body;
    item = processOutfitImages({ ...item, id });

    if (isDbConfigured()) {
      try {
        await upsertInvoice(item);
      } catch (dbErr) {
        console.warn('DB update invoice warning:', dbErr);
      }
    }

    if (!Array.isArray(sharedData.outfits)) {
      sharedData.outfits = [];
    }
    const existingIndex = sharedData.outfits.findIndex((o: any) => o.id === id);
    if (existingIndex >= 0) {
      sharedData.outfits[existingIndex] = { ...sharedData.outfits[existingIndex], ...item };
    } else {
      sharedData.outfits.unshift({ ...item, id });
    }
    saveSharedData();
    res.json({ success: true, outfit: sharedData.outfits.find((o: any) => o.id === id), outfits: sharedData.outfits });
  } catch (error: any) {
    console.error('Error updating outfit:', error);
    res.status(500).json({ error: 'Failed to update outfit', message: error?.message });
  }
});

// API: Delete outfit from shared dataset and PostgreSQL invoices table
app.delete('/api/outfits/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (isDbConfigured()) {
      try {
        await deleteInvoiceById(id);
      } catch (dbErr) {
        console.warn('DB delete invoice warning:', dbErr);
      }
    }

    if (Array.isArray(sharedData.outfits)) {
      sharedData.outfits = sharedData.outfits.filter((o: any) => o.id !== id);
    }
    saveSharedData();
    res.json({ success: true, outfits: sharedData.outfits });
  } catch (error: any) {
    console.error('Error deleting outfit:', error);
    res.status(500).json({ error: 'Failed to delete outfit', message: error?.message });
  }
});

// API: Reset dataset to empty
app.post('/api/reset-data', (req, res) => {
  try {
    sharedData.costumes = [];
    sharedData.lookbooks = [];
    sharedData.outfits = [];
    saveSharedData();
    res.json({ success: true, costumes: [], lookbooks: [], outfits: [] });
  } catch (error: any) {
    console.error('Error resetting data:', error);
    res.status(500).json({ error: 'Failed to reset data', message: error?.message });
  }
});

// Initialize GoogleGenAI SDK on the server side
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// Prompt enhancement endpoint with gemini-3.8-flash
app.post('/api/gemini/enhance-prompt', async (req, res) => {
  try {
    const { rawPrompt, garmentType, gender, era, colorTone } = req.body;

    if (!ai) {
      return res.status(200).json({
        enhancedPrompt: `Thiết kế hình ảnh trang phục cổ phục Việt Nam truyền thống phối phong cách đương đại: ${garmentType || 'Áo Ngũ Thân'} dành cho ${gender || 'Nam'}, cảm hứng ${era || 'Triều Nguyễn'}. Tông màu ${colorTone || 'Xanh chàm'}. Cài vạt sang bên phải (Hữu nhậm - right overlapping lapel), cổ đứng truyền thống. Dáng đứng chính diện toàn thân (full-body front view centered), phông nền studio trắng tinh khiết cô lập (isolated clean white background for virtual try-on mannequin), ánh sáng tự nhiên dịu nhẹ, chất lượng chi tiết cao cấp nhìn rõ vân vải lụa.`,
        note: 'Default enhanced prompt format applied',
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Bạn là chuyên gia nghiên cứu và tạo mẫu cổ phục Việt Nam. Hãy viết lại câu lệnh (prompt) sau đây thành một prompt tạo ảnh (Image Generation Prompt) cực kỳ chuẩn mực, chi tiết và đẹp mắt:
Ý tưởng: "${rawPrompt || garmentType}"
Giới tính: ${gender || 'Nam'}
Thời kỳ: ${era || 'Triều Nguyễn'}
Màu sắc: ${colorTone || 'Trang nhã'}

Bắt buộc tuân thủ các quy tắc:
1. Áo cài vạt sang phải (Hữu nhậm - right lapel), cổ đứng kín đáo.
2. Góc chụp: Người mẫu đứng thẳng chính diện toàn thân (full-body front view centered), hai tay buông tự nhiên hoặc giơ nhẹ ngang thân.
3. Phông nền: Phông nền trắng studio cô lập sạch sẽ (clean isolated white background for mannequin virtual try-on) để ghép vào ma-nơ-canh ảo.
4. Tả rõ chất liệu (lụa, gấm, sa), đường may và hoa văn triều đại.
Chỉ trả về đoạn văn bản prompt hoàn chỉnh, không kèm giải thích rườm rà.`,
    });

    res.json({
      enhancedPrompt: response.text || rawPrompt,
    });
  } catch (error: any) {
    console.error('Error enhancing prompt with Gemini:', error);
    res.status(500).json({
      error: 'Failed to enhance prompt',
      message: error?.message,
    });
  }
});

// Costume generation endpoint
app.post('/api/gemini/generate-costume', async (req, res) => {
  try {
    const { prompt, garmentType, gender, colorTone } = req.body;

    if (!ai) {
      return res.status(200).json({
        fallback: true,
        message: 'No GEMINI_API_KEY detected in runtime environment. Using client fallback presets.',
      });
    }

    const fullPrompt = prompt || `Thiết kế hình ảnh trang phục cổ phục Việt Nam truyền thống phối phong cách đương đại: ${garmentType || 'Áo Ngũ Thân'} dành cho ${gender || 'Nam'}, màu sắc ${colorTone || 'Xanh chàm'}. Cài vạt chéo sang bên phải (Hữu nhậm), cổ đứng. Dáng đứng chính diện toàn thân, phông nền studio trắng cô lập hoàn toàn (isolated clean white background for virtual try-on mannequin), ánh sáng studio tự nhiên sắc nét.`;

    // Attempt image generation using gemini-3.1-flash-lite-image
    const imageResponse = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite-image',
      contents: {
        parts: [
          {
            text: fullPrompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: '3:4',
        },
      },
    });

    let foundImageUrl: string | null = null;
    let foundText: string | null = null;

    if (imageResponse?.candidates?.[0]?.content?.parts) {
      for (const part of imageResponse.candidates[0].content.parts) {
        if (part.inlineData) {
          foundImageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
          break;
        } else if (part.text) {
          foundText = part.text;
        }
      }
    }

    if (foundImageUrl) {
      return res.json({
        imageUrl: foundImageUrl,
        description: foundText,
        garmentType,
      });
    }

    return res.json({
      fallback: true,
      text: foundText,
      message: 'Gemini generated description without inline image part.',
    });
  } catch (error: any) {
    console.warn('Gemini generation warning (falling back gracefully):', error?.message);
    res.status(200).json({
      fallback: true,
      error: error?.message,
      message: 'Server handled Gemini request with graceful fallback.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // In production, serve static assets from dist
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // In development, mount Vite dev server as middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
