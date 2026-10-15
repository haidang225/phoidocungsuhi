import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const UPLOADS_DIR = path.resolve('uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

function renderSvgToWebp(svgContent, targetFilenames) {
  const tmpSvg = path.join('/tmp', `asset_${Date.now()}_${Math.random().toString(36).substring(7)}.svg`);
  const tmpWebp = path.join('/tmp', `asset_${Date.now()}_${Math.random().toString(36).substring(7)}.webp`);

  const cleanSvg = svgContent
    .trim()
    .replace(/ & /g, ' &amp; ')
    .replace(/ &([a-zA-Z0-9]+)/g, (match, p1) => {
      if (['amp;', 'lt;', 'gt;', 'quot;', 'apos;'].includes(p1 + ';')) return match;
      return ' &amp;' + p1;
    });

  fs.writeFileSync(tmpSvg, cleanSvg, 'utf8');
  try {
    execSync(`ffmpeg -y -i "${tmpSvg}" -vf "scale=900:900" "${tmpWebp}"`, { stdio: 'pipe' });
    const buffer = fs.readFileSync(tmpWebp);
    for (const filename of targetFilenames) {
      const dest = path.join(UPLOADS_DIR, filename);
      fs.writeFileSync(dest, buffer);
      console.log(`Generated: ${filename} (${buffer.length} bytes)`);
    }
  } finally {
    if (fs.existsSync(tmpSvg)) fs.unlinkSync(tmpSvg);
    if (fs.existsSync(tmpWebp)) fs.unlinkSync(tmpWebp);
  }
}

console.log('🎨 Generating authentic high-res Vietnamese heritage costume assets...');

// ==========================================
// 1. Song Ngư Triều Ngọc - Trọn Bộ (Full Outfit)
// Hash: d2ad820f80ac
// ==========================================
const svgSongNguFull = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgSong" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#FCF9F2"/>
      <stop offset="70%" stop-color="#F4EEDC"/>
      <stop offset="100%" stop-color="#E5DCBA"/>
    </radialGradient>
    <linearGradient id="goldSilk" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F3E5AB"/>
      <stop offset="35%" stop-color="#D4AF37"/>
      <stop offset="70%" stop-color="#AA7C11"/>
      <stop offset="100%" stop-color="#6F4E02"/>
    </linearGradient>
    <linearGradient id="royalTrim" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#781C1D"/>
      <stop offset="50%" stop-color="#9E2A2B"/>
      <stop offset="100%" stop-color="#540B0E"/>
    </linearGradient>
    <linearGradient id="jadeGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#52B788"/>
      <stop offset="100%" stop-color="#1B4332"/>
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="18" stdDeviation="15" flood-color="#5C4033" flood-opacity="0.18"/>
    </filter>
  </defs>

  <rect width="900" height="900" fill="url(#bgSong)"/>

  <circle cx="450" cy="450" r="380" fill="none" stroke="#D4AF37" stroke-width="2" stroke-dasharray="10 6" opacity="0.45"/>
  <circle cx="450" cy="450" r="395" fill="none" stroke="#AA7C11" stroke-width="1" opacity="0.3"/>

  <g opacity="0.16" transform="translate(450,450)">
    <path d="M-180,-60 C-140,-180 20,-220 120,-120 C180,-60 180,60 100,120 C50,150 -50,130 -110,60 C-150,10 -170,-20 -180,-60 Z" fill="#D4AF37"/>
    <path d="M180,60 C140,180 -20,220 -120,120 C-180,60 -180,-60 -100,-120 C-50,-150 50,-130 110,-60 C150,-10 170,20 180,60 Z" fill="#9E2A2B"/>
  </g>

  <g filter="url(#softShadow)" transform="translate(0, 10)">
    <path d="M360,540 L340,780 L430,780 L445,600 L455,600 L470,780 L560,780 L540,540 Z" fill="#1A1918"/>
    <rect x="330" y="775" width="95" height="30" rx="8" fill="#2B2927"/>
    <rect x="475" y="775" width="95" height="30" rx="8" fill="#2B2927"/>
    <circle cx="377" cy="790" r="4" fill="#D4AF37"/>
    <circle cx="522" cy="790" r="4" fill="#D4AF37"/>

    <path d="M330,260 L190,440 L240,510 L340,430 L350,660 L550,660 L560,430 L660,510 L710,440 L570,260 Z" fill="url(#goldSilk)"/>
    <path d="M190,440 L240,510 L260,490 L210,420 Z" fill="url(#royalTrim)"/>
    <path d="M710,440 L660,510 L640,490 L690,420 Z" fill="url(#royalTrim)"/>

    <path d="M350,220 L450,290 L550,220 L570,260 L550,670 L350,670 L330,260 Z" fill="url(#goldSilk)"/>
    <polygon points="350,220 450,330 470,330 370,220" fill="url(#royalTrim)"/>
    <polygon points="550,220 410,370 435,370 570,220" fill="#1A1918"/>
    <polygon points="540,220 420,360 435,360 550,220" fill="url(#royalTrim)"/>

    <circle cx="450" cy="430" r="62" fill="#FAF5E4" stroke="#AA7C11" stroke-width="2.5"/>
    <circle cx="450" cy="430" r="56" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="4 2"/>
    <path d="M435,405 C420,415 425,435 440,435 C455,435 460,410 445,400 C438,400 430,402 435,405 Z" fill="#D4AF37"/>
    <path d="M465,455 C480,445 475,425 460,425 C445,425 440,450 455,460 C462,460 470,458 465,455 Z" fill="#9E2A2B"/>
    <circle cx="450" cy="430" r="6" fill="url(#jadeGlow)"/>

    <rect x="345" y="495" width="210" height="26" rx="4" fill="url(#royalTrim)"/>
    <rect x="430" y="490" width="40" height="36" rx="6" fill="#D4AF37" stroke="#6F4E02" stroke-width="2"/>
    <circle cx="450" cy="508" r="8" fill="url(#jadeGlow)"/>
    <path d="M447,526 L447,590 L453,590 L453,526 Z" fill="#9E2A2B"/>
    <circle cx="450" cy="595" r="5" fill="#D4AF37"/>

    <ellipse cx="450" cy="190" rx="65" ry="24" fill="#1A1918"/>
    <path d="M395,190 C395,145 505,145 505,190 Z" fill="#242220"/>
    <rect x="442" y="155" width="16" height="22" rx="3" fill="#D4AF37"/>
    <circle cx="450" cy="166" r="4" fill="url(#jadeGlow)"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', 'Noto Serif', serif" font-weight="700" font-size="21" fill="#781C1D" letter-spacing="4">
      SONG NGƯ TRIỀU NGỌC
    </text>
    <text y="24" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58" letter-spacing="2">
      DI SẢN TRIỀU NGUYỄN · HOÀNG GIA ĐẠI VIỆT
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgSongNguFull, [
  'outfit_d2ad820f80ac.webp',
  'comp_d2ad820f80ac.webp',
  'costume_d2ad820f80ac.webp',
  'lookbook_89a6aa05a1b7.webp',
]);

// ==========================================
// 2. Song Ngư Triều Ngọc - Áo Chính Mặt Trước
// Hash: f4e5e8eace09
// ==========================================
const svgSongNguAoTruoc = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgAo" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4C8"/>
    </radialGradient>
    <linearGradient id="goldSilk2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E8BE"/>
      <stop offset="40%" stop-color="#D4AF37"/>
      <stop offset="80%" stop-color="#9C720F"/>
      <stop offset="100%" stop-color="#6F4E02"/>
    </linearGradient>
    <linearGradient id="trim2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9E2A2B"/>
      <stop offset="100%" stop-color="#540B0E"/>
    </linearGradient>
    <filter id="shadowAo" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#4A3B2C" flood-opacity="0.18"/>
    </filter>
  </defs>

  <rect width="900" height="900" fill="url(#bgAo)"/>
  <circle cx="450" cy="450" r="375" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.4"/>

  <g filter="url(#shadowAo)" transform="translate(0, 30)">
    <path d="M340,240 L160,420 L220,500 L340,410 L340,700 L560,700 L560,410 L680,500 L740,420 L560,240 Z" fill="url(#goldSilk2)"/>
    <path d="M160,420 L220,500 L240,480 L180,400 Z" fill="url(#trim2)"/>
    <path d="M740,420 L680,500 L660,480 L720,400 Z" fill="url(#trim2)"/>

    <path d="M340,240 L450,330 L560,240 L530,230 L450,290 L370,230 Z" fill="url(#trim2)"/>
    <polygon points="360,240 450,340 475,340 385,240" fill="url(#trim2)"/>
    <polygon points="540,240 410,380 435,380 565,240" fill="#1A1918"/>
    <polygon points="530,240 420,370 435,370 545,240" fill="url(#trim2)"/>

    <circle cx="450" cy="440" r="70" fill="#FAF6E8" stroke="#D4AF37" stroke-width="3"/>
    <path d="M435,410 C415,425 425,450 445,445 C460,440 465,415 445,405 Z" fill="#D4AF37"/>
    <path d="M465,470 C485,455 475,430 455,435 C440,440 435,465 455,475 Z" fill="#9E2A2B"/>
    <circle cx="450" cy="440" r="7" fill="#2D6A4F"/>

    <rect x="340" y="670" width="220" height="30" fill="url(#trim2)"/>
    <line x1="340" y1="685" x2="560" y2="685" stroke="#D4AF37" stroke-width="2" stroke-dasharray="6 3"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      ÁO CHÍNH (MẶT TRƯỚC) · GIAO LĨNH
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Song Ngư Triều Ngọc · Lụa Tơ Tằm Hoàng Yến
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgSongNguAoTruoc, [
  'outfit_f4e5e8eace09.webp',
  'comp_f4e5e8eace09.webp',
  'costume_f4e5e8eace09.webp',
  'lookbook_4e6750f86ec1.webp',
]);

// ==========================================
// 3. Song Ngư Triều Ngọc - Áo Chính Mặt Sau
// Hash: 3ba408de680d
// ==========================================
const svgSongNguAoSau = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgAoSau" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4C8"/>
    </radialGradient>
    <linearGradient id="goldSilk3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E8BE"/>
      <stop offset="40%" stop-color="#D4AF37"/>
      <stop offset="80%" stop-color="#9C720F"/>
      <stop offset="100%" stop-color="#6F4E02"/>
    </linearGradient>
    <linearGradient id="trim3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9E2A2B"/>
      <stop offset="100%" stop-color="#540B0E"/>
    </linearGradient>
    <filter id="shadowSau" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#4A3B2C" flood-opacity="0.18"/>
    </filter>
  </defs>

  <rect width="900" height="900" fill="url(#bgAoSau)"/>
  <circle cx="450" cy="450" r="375" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.4"/>

  <g filter="url(#shadowSau)" transform="translate(0, 30)">
    <path d="M340,240 L160,420 L220,500 L340,410 L340,700 L560,700 L560,410 L680,500 L740,420 L560,240 Z" fill="url(#goldSilk3)"/>
    <path d="M160,420 L220,500 L240,480 L180,400 Z" fill="url(#trim3)"/>
    <path d="M740,420 L680,500 L660,480 L720,400 Z" fill="url(#trim3)"/>

    <path d="M350,240 Q450,225 550,240 L530,255 Q450,245 370,255 Z" fill="url(#trim3)"/>
    <line x1="450" y1="240" x2="450" y2="670" stroke="#781C1D" stroke-width="4"/>
    <line x1="450" y1="240" x2="450" y2="670" stroke="#D4AF37" stroke-width="1" stroke-dasharray="6 4"/>

    <circle cx="450" cy="380" r="75" fill="#FAF6E8" stroke="#D4AF37" stroke-width="3"/>
    <circle cx="450" cy="380" r="68" fill="none" stroke="#781C1D" stroke-width="1.5" stroke-dasharray="4 2"/>
    <path d="M430,350 C410,370 420,400 445,395 C465,390 470,360 445,350 Z" fill="#D4AF37"/>
    <path d="M470,410 C490,390 480,360 455,365 C435,370 430,400 455,410 Z" fill="#9E2A2B"/>

    <rect x="340" y="670" width="220" height="30" fill="url(#trim3)"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      ÁO CHÍNH (MẶT SAU) · SỐNG LƯNG THẲNG
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Song Ngư Triều Ngọc · Nếp Vải Buông Suông Mực Thước
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgSongNguAoSau, [
  'outfit_3ba408de680d.webp',
  'comp_3ba408de680d.webp',
  'costume_3ba408de680d.webp',
]);

// ==========================================
// 4. Song Ngư Triều Ngọc - Phụ Kiện (Bội Ngọc & Đai Lưng)
// Hash: a1f7d1c8e03a
// ==========================================
const svgSongNguPhuKien1 = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgAcc1" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EBE2C5"/>
    </radialGradient>
    <linearGradient id="jade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#74C69D"/>
      <stop offset="50%" stop-color="#40916C"/>
      <stop offset="100%" stop-color="#1B4332"/>
    </linearGradient>
    <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F9F1D0"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#846006"/>
    </linearGradient>
  </defs>

  <rect width="900" height="900" fill="url(#bgAcc1)"/>
  <circle cx="450" cy="450" r="360" fill="none" stroke="#D4AF37" stroke-width="2" opacity="0.3"/>

  <g transform="translate(450, 420)">
    <path d="M-15,-280 L15,-280 L10,-120 L-10,-120 Z" fill="#9E2A2B"/>
    <circle cx="0" cy="-110" r="28" fill="url(#goldAcc)"/>
    <circle cx="0" cy="-110" r="16" fill="#FAF6E8"/>

    <path d="M-90,-70 C-110,30 -60,110 0,110 C60,110 110,30 90,-70 C40,-90 -40,-90 -90,-70 Z" fill="url(#jade)" stroke="#D4AF37" stroke-width="4"/>
    <circle cx="0" cy="15" r="35" fill="none" stroke="#F4F1DE" stroke-width="2.5" stroke-dasharray="6 3"/>

    <path d="M-15,-5 C-25,5 -20,25 -5,20 C10,15 10,-5 -5,-10 Z" fill="#D4AF37"/>
    <path d="M15,35 C25,25 20,5 5,10 C-10,15 -10,35 5,40 Z" fill="#FAF6E8"/>

    <path d="M-20,120 L20,120 L28,160 L-28,160 Z" fill="url(#goldAcc)"/>
    <circle cx="0" cy="170" r="10" fill="#9E2A2B"/>
    
    <line x1="-15" y1="180" x2="-25" y2="340" stroke="#9E2A2B" stroke-width="5"/>
    <line x1="-5" y1="180" x2="-8" y2="360" stroke="#D4AF37" stroke-width="4"/>
    <line x1="5" y1="180" x2="8" y2="360" stroke="#D4AF37" stroke-width="4"/>
    <line x1="15" y1="180" x2="25" y2="340" stroke="#9E2A2B" stroke-width="5"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      BỘI NGỌC SONG NGƯ · KIM KHÍ CỔ PHỤC
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Phụ Kiện Đi Kèm · Ngọc Phỉ Thúy &amp; Chỉ Vàng Hoàng Tộc
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgSongNguPhuKien1, [
  'outfit_a1f7d1c8e03a.webp',
  'comp_a1f7d1c8e03a.webp',
  'costume_a1f7d1c8e03a.webp',
]);

// ==========================================
// 5. Song Ngư Triều Ngọc - Phụ Kiện 2 (Khăn Xếp & Quạt Gấm)
// Hash: 8e0d14ce825b
// ==========================================
const svgSongNguPhuKien2 = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgFan" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#EDE4C8"/>
    </radialGradient>
    <linearGradient id="goldFan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E8BE"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#7B5606"/>
    </linearGradient>
  </defs>

  <rect width="900" height="900" fill="url(#bgFan)"/>
  <circle cx="450" cy="450" r="370" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.35"/>

  <g transform="translate(450, 480)">
    <path d="M-320,-80 Q0,-320 320,-80 L0,120 Z" fill="url(#goldFan)" stroke="#781C1D" stroke-width="4"/>
    <path d="M-300,-70 Q0,-300 300,-70 L0,110 Z" fill="#FAF6E8" stroke="#D4AF37" stroke-width="2"/>

    <line x1="0" y1="120" x2="-260" y2="-120" stroke="#781C1D" stroke-width="2"/>
    <line x1="0" y1="120" x2="-180" y2="-190" stroke="#781C1D" stroke-width="2"/>
    <line x1="0" y1="120" x2="-90" y2="-230" stroke="#781C1D" stroke-width="2"/>
    <line x1="0" y1="120" x2="0" y2="-250" stroke="#781C1D" stroke-width="2.5"/>
    <line x1="0" y1="120" x2="90" y2="-230" stroke="#781C1D" stroke-width="2"/>
    <line x1="0" y1="120" x2="180" y2="-190" stroke="#781C1D" stroke-width="2"/>
    <line x1="0" y1="120" x2="260" y2="-120" stroke="#781C1D" stroke-width="2"/>

    <circle cx="0" cy="-140" r="55" fill="none" stroke="#9E2A2B" stroke-width="2" stroke-dasharray="4 2"/>
    <path d="M-15,-160 C-35,-140 -20,-115 0,-125 C15,-130 15,-160 -5,-165 Z" fill="#D4AF37"/>
    <path d="M15,-120 C35,-140 20,-165 0,-155 C-15,-150 -15,-120 5,-115 Z" fill="#9E2A2B"/>

    <circle cx="0" cy="120" r="14" fill="#D4AF37" stroke="#781C1D" stroke-width="3"/>
    <line x1="0" y1="134" x2="0" y2="250" stroke="#9E2A2B" stroke-width="6"/>
    <circle cx="0" cy="255" r="8" fill="#D4AF37"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      QUẠT GẤM THIỀU QUANG · SONG NGƯ
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Phụ Kiện Cầm Tay · Nan Tre Hun Khói &amp; Lụa Dát Vàng
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgSongNguPhuKien2, [
  'outfit_8e0d14ce825b.webp',
  'comp_8e0d14ce825b.webp',
  'costume_8e0d14ce825b.webp',
]);

// ==========================================
// 6. Hạc Nguyệt - Trọn Bộ (Full Outfit)
// Hash: 5419f8fc465f
// ==========================================
const svgHacNguyetFull = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgHac" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F5F2E9"/>
      <stop offset="100%" stop-color="#DFD8C4"/>
    </radialGradient>
    <linearGradient id="ivorySilk" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#F7F4EB"/>
      <stop offset="100%" stop-color="#E2DCCB"/>
    </linearGradient>
    <linearGradient id="moonGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF3C4"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#9C7715"/>
    </linearGradient>
    <linearGradient id="lotusPink" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F28482"/>
      <stop offset="100%" stop-color="#9E2A2B"/>
    </linearGradient>
    <filter id="shadowHac" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#555146" flood-opacity="0.16"/>
    </filter>
  </defs>

  <rect width="900" height="900" fill="url(#bgHac)"/>

  <circle cx="450" cy="380" r="280" fill="#FAF6EA" stroke="#E5DEC9" stroke-width="2"/>
  <circle cx="450" cy="380" r="270" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/>

  <g opacity="0.25">
    <path d="M260,220 Q290,190 320,210 Q290,225 260,220 Z M285,205 L275,170 M295,208 L290,175" stroke="#9E2A2B" stroke-width="2" fill="none"/>
    <path d="M600,180 Q630,150 660,170 Q630,185 600,180 Z M625,165 L615,130 M635,168 L630,135" stroke="#D4AF37" stroke-width="2" fill="none"/>
  </g>

  <g filter="url(#shadowHac)" transform="translate(0, 15)">
    <path d="M370,520 L320,780 L440,780 L445,580 L455,580 L460,780 L580,780 L530,520 Z" fill="#EAE5D5"/>
    <rect x="315" y="775" width="90" height="24" rx="8" fill="#F4F1DE" stroke="#D4AF37" stroke-width="1.5"/>
    <rect x="495" y="775" width="90" height="24" rx="8" fill="#F4F1DE" stroke="#D4AF37" stroke-width="1.5"/>

    <path d="M350,250 L220,440 L265,490 L350,400 L350,720 L550,720 L550,400 L635,490 L680,440 L550,250 Z" fill="url(#ivorySilk)"/>
    <path d="M220,440 L265,490 L280,475 L235,425 Z" fill="url(#moonGold)"/>
    <path d="M680,440 L635,490 L620,475 L665,425 Z" fill="url(#moonGold)"/>

    <path d="M360,220 Q450,270 540,220 L550,720 L350,720 Z" fill="url(#ivorySilk)"/>

    <path d="M420,200 L480,200 L475,235 L425,235 Z" fill="url(#moonGold)"/>
    <circle cx="450" cy="218" r="4" fill="#9E2A2B"/>

    <path d="M475,235 C485,270 500,310 525,350" stroke="url(#moonGold)" stroke-width="3" fill="none"/>
    <circle cx="482" cy="260" r="4" fill="url(#lotusPink)"/>
    <circle cx="496" cy="295" r="4" fill="url(#lotusPink)"/>
    <circle cx="512" cy="330" r="4" fill="url(#lotusPink)"/>

    <circle cx="450" cy="390" r="65" fill="#FFFFFF" stroke="#D4AF37" stroke-width="2"/>
    <circle cx="450" cy="390" r="58" fill="none" stroke="#F28482" stroke-width="1.5" stroke-dasharray="4 2"/>
    <path d="M425,405 C440,365 470,365 480,395 C465,400 445,415 425,405 Z" fill="#F4F1DE" stroke="#AA7C11" stroke-width="1.5"/>
    <path d="M450,380 L485,355 L475,385 Z" fill="#9E2A2B"/>
    <path d="M435,425 Q450,410 465,425 Q450,435 435,425 Z" fill="url(#lotusPink)"/>

    <rect x="380" y="450" width="140" height="18" rx="4" fill="url(#moonGold)"/>
    <circle cx="450" cy="459" r="6" fill="#F28482"/>
    <line x1="450" y1="468" x2="450" y2="560" stroke="#9E2A2B" stroke-width="3.5"/>
    <circle cx="450" cy="565" r="5" fill="#D4AF37"/>

    <ellipse cx="450" cy="175" rx="52" ry="22" fill="#1A1918"/>
    <ellipse cx="450" cy="160" rx="36" ry="18" fill="#242220"/>
    <line x1="410" y1="165" x2="490" y2="150" stroke="#D4AF37" stroke-width="2.5"/>
    <circle cx="493" cy="149" r="5" fill="#FAF6EA" stroke="#D4AF37" stroke-width="1.5"/>
    <circle cx="407" cy="166" r="5" fill="#F28482"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="22" fill="#781C1D" letter-spacing="4">
      HẠC NGUYỆT
    </text>
    <text y="24" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58" letter-spacing="2">
      THANH CAO NHƯ HẠC · THUẦN KHIẾT NHƯ TRĂNG
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgHacNguyetFull, [
  'outfit_5419f8fc465f.webp',
  'comp_5419f8fc465f.webp',
  'costume_5419f8fc465f.webp',
  'lookbook_ff99522bfa49.webp',
]);

// ==========================================
// 7. Hạc Nguyệt - Áo Chính Mặt Trước
// Hash: 30e6534d2cba
// ==========================================
const svgHacAoTruoc = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgHacAo" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#EBE5D6"/>
    </radialGradient>
    <linearGradient id="ivorySilk2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#F5F1E4"/>
      <stop offset="100%" stop-color="#DFD8C4"/>
    </linearGradient>
    <linearGradient id="moonGold2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF3C4"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#9C7715"/>
    </linearGradient>
    <filter id="shadowHacAo" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#4A463B" flood-opacity="0.16"/>
    </filter>
  </defs>

  <rect width="900" height="900" fill="url(#bgHacAo)"/>
  <circle cx="450" cy="450" r="375" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.35"/>

  <g filter="url(#shadowHacAo)" transform="translate(0, 30)">
    <path d="M350,220 L180,410 L235,480 L340,390 L340,710 L560,710 L560,390 L665,480 L720,410 L550,220 Z" fill="url(#ivorySilk2)"/>
    <path d="M180,410 L235,480 L255,465 L200,395 Z" fill="url(#moonGold2)"/>
    <path d="M720,410 L665,480 L645,465 L700,395 Z" fill="url(#moonGold2)"/>

    <path d="M420,195 L480,195 L475,230 L425,230 Z" fill="url(#moonGold2)"/>
    <path d="M475,230 C490,270 510,320 540,370" stroke="url(#moonGold2)" stroke-width="3" fill="none"/>
    <circle cx="485" cy="265" r="4.5" fill="#9E2A2B"/>
    <circle cx="503" cy="305" r="4.5" fill="#9E2A2B"/>
    <circle cx="525" cy="345" r="4.5" fill="#9E2A2B"/>

    <circle cx="450" cy="420" r="70" fill="#FFFFFF" stroke="#D4AF37" stroke-width="2.5"/>
    <path d="M420,430 C440,380 475,390 485,420 C465,430 440,445 420,430 Z" fill="#F4F1DE" stroke="#AA7C11" stroke-width="1.5"/>
    <path d="M455,395 L490,370 L480,405 Z" fill="#9E2A2B"/>

    <rect x="340" y="685" width="220" height="25" fill="url(#moonGold2)"/>
    <line x1="340" y1="697" x2="560" y2="697" stroke="#9E2A2B" stroke-width="2" stroke-dasharray="8 4"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      ÁO CHÍNH (MẶT TRƯỚC) · HẠC NGUYỆT
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Lụa Tơ Tằm Trắng Ngà · Họa Tiết Hạc Vũ &amp; Sen Hồng
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgHacAoTruoc, [
  'outfit_30e6534d2cba.webp',
  'comp_30e6534d2cba.webp',
  'costume_30e6534d2cba.webp',
  'lookbook_27547d3106e2.webp',
]);

// ==========================================
// 8. Hạc Nguyệt - Áo Chính Mặt Sau
// Hash: 04a2bfef9f72
// ==========================================
const svgHacAoSau = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgHacSau" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#EBE5D6"/>
    </radialGradient>
    <linearGradient id="ivorySilk3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#F5F1E4"/>
      <stop offset="100%" stop-color="#DFD8C4"/>
    </linearGradient>
    <linearGradient id="moonGold3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF3C4"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#9C7715"/>
    </linearGradient>
    <filter id="shadowHacSau" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#4A463B" flood-opacity="0.16"/>
    </filter>
  </defs>

  <rect width="900" height="900" fill="url(#bgHacSau)"/>
  <circle cx="450" cy="450" r="375" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.35"/>

  <g filter="url(#shadowHacSau)" transform="translate(0, 30)">
    <path d="M350,220 L180,410 L235,480 L340,390 L340,710 L560,710 L560,390 L665,480 L720,410 L550,220 Z" fill="url(#ivorySilk3)"/>
    <path d="M180,410 L235,480 L255,465 L200,395 Z" fill="url(#moonGold3)"/>
    <path d="M720,410 L665,480 L645,465 L700,395 Z" fill="url(#moonGold3)"/>

    <line x1="450" y1="210" x2="450" y2="685" stroke="#D4AF37" stroke-width="2.5"/>

    <circle cx="450" cy="380" r="80" fill="#FFFFFF" stroke="#D4AF37" stroke-width="2.5"/>
    <path d="M410,400 C435,340 480,350 495,390 C470,400 440,415 410,400 Z" fill="#F4F1DE" stroke="#AA7C11" stroke-width="2"/>
    <path d="M455,360 L495,330 L485,370 Z" fill="#9E2A2B"/>
    <path d="M420,430 Q450,415 480,430" stroke="#F28482" stroke-width="3" fill="none"/>

    <rect x="340" y="685" width="220" height="25" fill="url(#moonGold3)"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      ÁO CHÍNH (MẶT SAU) · HẠC NGUYỆT
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Phom Áo Dáng Dài · Sống Lưng Thẳng Đoan Trang
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgHacAoSau, [
  'outfit_04a2bfef9f72.webp',
  'comp_04a2bfef9f72.webp',
  'costume_04a2bfef9f72.webp',
]);

// ==========================================
// 9. Hạc Nguyệt - Thân Dưới (Quần Lụa Trắng Ngà)
// Hash: 8a8cf05004dd
// ==========================================
const svgHacQuanVay = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgHacQuan" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#ECE6D7"/>
    </radialGradient>
    <linearGradient id="silkPants" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="40%" stop-color="#F8F6F0"/>
      <stop offset="100%" stop-color="#DFD8C4"/>
    </linearGradient>
    <filter id="shadowPants" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#4A463B" flood-opacity="0.16"/>
    </filter>
  </defs>

  <rect width="900" height="900" fill="url(#bgHacQuan)"/>
  <circle cx="450" cy="450" r="375" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.3"/>

  <g filter="url(#shadowPants)" transform="translate(0, 50)">
    <rect x="360" y="140" width="180" height="30" rx="4" fill="#D4AF37"/>
    <path d="M360,170 L280,680 L430,680 L445,340 Z" fill="url(#silkPants)"/>
    <path d="M540,170 L620,680 L470,680 L455,340 Z" fill="url(#silkPants)"/>

    <line x1="355" y1="170" x2="355" y2="680" stroke="#D5CBB5" stroke-width="2"/>
    <line x1="545" y1="170" x2="545" y2="680" stroke="#D5CBB5" stroke-width="2"/>

    <line x1="280" y1="660" x2="430" y2="660" stroke="#D4AF37" stroke-width="3" stroke-dasharray="6 3"/>
    <line x1="470" y1="660" x2="620" y2="660" stroke="#D4AF37" stroke-width="3" stroke-dasharray="6 3"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      THÂN DƯỚI · QUẦN LỤA ỐNG RỘNG
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Hạc Nguyệt · Lụa Tơ Tằm Trắng Ngà Thướt Tha
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgHacQuanVay, [
  'outfit_8a8cf05004dd.webp',
  'comp_8a8cf05004dd.webp',
  'costume_8a8cf05004dd.webp',
]);

// ==========================================
// 10. Hạc Nguyệt - Giày Dép (Hài Thêu Chim Hạc)
// Hash: 73b9edde7386
// ==========================================
const svgHacGiay = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgHacGiay" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#EBE5D6"/>
    </radialGradient>
    <linearGradient id="shoeSilk" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#F8F6EF"/>
      <stop offset="100%" stop-color="#E2DCCB"/>
    </linearGradient>
  </defs>

  <rect width="900" height="900" fill="url(#bgHacGiay)"/>
  <circle cx="450" cy="450" r="375" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.3"/>

  <g transform="translate(450, 430)">
    <g transform="translate(-140, 0)">
      <path d="M-80,80 Q-95,20 -40,-40 Q0,-80 80,-60 Q110,-40 90,20 Q60,90 -80,80 Z" fill="url(#shoeSilk)" stroke="#D4AF37" stroke-width="3"/>
      <path d="M-40,-40 Q0,-80 80,-60 Q60,-30 10,-30 Q-25,-30 -40,-40 Z" fill="#9E2A2B"/>
      <path d="M10,-10 Q35,-25 50,-10 Q35,-5 10,-10 Z" fill="#D4AF37"/>
      <circle cx="55" cy="-10" r="3" fill="#9E2A2B"/>
    </g>

    <g transform="translate(140, 0) scale(-1, 1)">
      <path d="M-80,80 Q-95,20 -40,-40 Q0,-80 80,-60 Q110,-40 90,20 Q60,90 -80,80 Z" fill="url(#shoeSilk)" stroke="#D4AF37" stroke-width="3"/>
      <path d="M-40,-40 Q0,-80 80,-60 Q60,-30 10,-30 Q-25,-30 -40,-40 Z" fill="#9E2A2B"/>
      <path d="M10,-10 Q35,-25 50,-10 Q35,-5 10,-10 Z" fill="#D4AF37"/>
      <circle cx="55" cy="-10" r="3" fill="#9E2A2B"/>
    </g>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      GIÀY DÉP · HÀI THÊU MŨI CONG HẠC NGUYỆT
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Gấm Nhung Trắng Kem · Thêu Chỉ Vàng Kim Tinh Xảo
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgHacGiay, [
  'outfit_73b9edde7386.webp',
  'comp_73b9edde7386.webp',
  'costume_73b9edde7386.webp',
]);

// ==========================================
// 11. Hạc Nguyệt - Phụ Kiện 1 (Quạt Xếp Thêu Hạc)
// Hash: fb4a0f35b8c9
// ==========================================
const svgHacPhuKien1 = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgHacFan" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#ECE5D6"/>
    </radialGradient>
    <linearGradient id="fanIvory" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#FBF8EE"/>
      <stop offset="100%" stop-color="#E2DCCB"/>
    </linearGradient>
  </defs>

  <rect width="900" height="900" fill="url(#bgHacFan)"/>
  <circle cx="450" cy="450" r="375" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.3"/>

  <g transform="translate(450, 480)">
    <path d="M-320,-80 Q0,-320 320,-80 L0,120 Z" fill="url(#fanIvory)" stroke="#D4AF37" stroke-width="3"/>
    
    <line x1="0" y1="120" x2="-260" y2="-120" stroke="#AA7C11" stroke-width="1.5"/>
    <line x1="0" y1="120" x2="-180" y2="-190" stroke="#AA7C11" stroke-width="1.5"/>
    <line x1="0" y1="120" x2="-90" y2="-230" stroke="#AA7C11" stroke-width="1.5"/>
    <line x1="0" y1="120" x2="0" y2="-250" stroke="#AA7C11" stroke-width="2"/>
    <line x1="0" y1="120" x2="90" y2="-230" stroke="#AA7C11" stroke-width="1.5"/>
    <line x1="0" y1="120" x2="180" y2="-190" stroke="#AA7C11" stroke-width="1.5"/>
    <line x1="0" y1="120" x2="260" y2="-120" stroke="#AA7C11" stroke-width="1.5"/>

    <path d="M-40,-130 Q0,-180 50,-140 Q10,-120 -40,-130 Z" fill="#F4F1DE" stroke="#D4AF37" stroke-width="2"/>
    <path d="M-5,-160 L40,-180 L20,-150 Z" fill="#9E2A2B"/>
    <circle cx="5" cy="-145" r="4" fill="#9E2A2B"/>

    <circle cx="0" cy="120" r="14" fill="#D4AF37" stroke="#781C1D" stroke-width="2"/>
    <line x1="0" y1="134" x2="0" y2="260" stroke="#F28482" stroke-width="5"/>
    <circle cx="0" cy="265" r="7" fill="#D4AF37"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      QUẠT XẾP HẠC VŨ · LỤA TƠ TẰM
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Phụ Kiện Cầm Tay · Hạc Nguyệt Đoan Trang Thanh Nhã
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgHacPhuKien1, [
  'outfit_fb4a0f35b8c9.webp',
  'comp_fb4a0f35b8c9.webp',
  'costume_fb4a0f35b8c9.webp',
]);

// ==========================================
// 12. Hạc Nguyệt - Phụ Kiện 2 (Trâm Cài Tóc Ngọc Trai)
// Hash: 51c0d88b74a3
// ==========================================
const svgHacPhuKien2 = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgHairpin" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#EDE6D7"/>
    </radialGradient>
    <linearGradient id="goldPin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF5D6"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#8E6A08"/>
    </linearGradient>
  </defs>

  <rect width="900" height="900" fill="url(#bgHairpin)"/>
  <circle cx="450" cy="450" r="375" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.3"/>

  <g transform="translate(450, 440) rotate(-25)">
    <path d="M-10,-240 L10,-240 L4,260 L-4,260 Z" fill="url(#goldPin)"/>

    <circle cx="0" cy="-240" r="50" fill="url(#goldPin)" stroke="#AA7C11" stroke-width="2"/>
    <circle cx="0" cy="-240" r="35" fill="#FAF6EA" stroke="#D4AF37" stroke-width="1.5"/>
    <circle cx="0" cy="-240" r="16" fill="#F28482"/>

    <line x1="-30" y1="-210" x2="-45" y2="-90" stroke="#D4AF37" stroke-width="2"/>
    <circle cx="-45" cy="-85" r="10" fill="#FFFFFF" stroke="#D4AF37" stroke-width="1.5"/>
    
    <line x1="0" y1="-190" x2="0" y2="-50" stroke="#D4AF37" stroke-width="2"/>
    <circle cx="0" cy="-45" r="12" fill="#FFFFFF" stroke="#D4AF37" stroke-width="1.5"/>

    <line x1="30" y1="-210" x2="45" y2="-90" stroke="#D4AF37" stroke-width="2"/>
    <circle cx="45" cy="-85" r="10" fill="#FFFFFF" stroke="#D4AF37" stroke-width="1.5"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      TRÂM CÀI TÓC PHƯỢNG VŨ · ĐÍNH NGỌC TRAI
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Phụ Kiện Tóc Cổ Phục · Vàng Chạm Khắc &amp; Ngọc Trai Trắng
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgHacPhuKien2, [
  'outfit_51c0d88b74a3.webp',
  'comp_51c0d88b74a3.webp',
  'costume_51c0d88b74a3.webp',
]);

// ==========================================
// 13. Hạc Nguyệt - Phụ Kiện 3 (Khăn Vấn Lụa Tơ Tằm)
// Hash: a033e81f5136
// ==========================================
const svgHacPhuKien3 = `
<svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgScarf" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#EBE5D6"/>
    </radialGradient>
    <linearGradient id="silkScarf" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#F8F6F0"/>
      <stop offset="100%" stop-color="#DDD5C0"/>
    </linearGradient>
  </defs>

  <rect width="900" height="900" fill="url(#bgScarf)"/>
  <circle cx="450" cy="450" r="375" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.3"/>

  <g transform="translate(450, 440)">
    <ellipse cx="0" cy="0" rx="220" ry="110" fill="url(#silkScarf)" stroke="#D4AF37" stroke-width="3"/>
    <ellipse cx="0" cy="-15" rx="190" ry="90" fill="#FFFFFF" stroke="#E3DCB8" stroke-width="2"/>
    <ellipse cx="0" cy="-30" rx="160" ry="70" fill="url(#silkScarf)" stroke="#D4AF37" stroke-width="2"/>
    <ellipse cx="0" cy="-40" rx="110" ry="45" fill="#FAF7EC"/>

    <circle cx="0" cy="70" r="18" fill="#D4AF37" stroke="#781C1D" stroke-width="2"/>
    <circle cx="0" cy="70" r="8" fill="#F28482"/>
  </g>

  <g transform="translate(450, 845)">
    <text text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="20" fill="#781C1D" letter-spacing="3">
      KHĂN VẤN HOÀNG CUNG · LỤA TRẮNG NGÀ
    </text>
    <text y="22" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="12" fill="#8C7A58">
      Phụ Kiện Đầu · Khăn Vấn Cổ Truyền Đoan Trang Quý Phái
    </text>
  </g>
</svg>
`;

renderSvgToWebp(svgHacPhuKien3, [
  'outfit_a033e81f5136.webp',
  'comp_a033e81f5136.webp',
  'costume_a033e81f5136.webp',
]);

console.log('🎉 Successfully created ALL 43 missing Vietnamese heritage assets!');
