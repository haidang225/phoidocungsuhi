/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
  CostumeItem,
  LookbookItem,
  OutfitComposition,
  CustomOutfit,
  getVietnameseColorName,
} from './types/vietphuc';
import { Header, NavigationTab } from './components/Header';
import { ArchiveCatalog } from './components/ArchiveCatalog';
import { TailorWorkshop } from './components/TailorWorkshop';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { LookbookGallery } from './components/LookbookGallery';
import { CulturalGuideSection } from './components/CulturalGuideSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WardrobeDrawer } from './components/WardrobeDrawer';
import { Footer } from './components/Footer';
import { safeSetLocalStorage, cleanupLegacyStorageKeys } from './utils/imageCompressor';
import {
  loadPersistentOutfits,
  savePersistentOutfits,
  loadPersistentCostumes,
  savePersistentCostumes,
  loadPersistentLookbooks,
  savePersistentLookbooks,
} from './utils/storage';
import { DEFAULT_OUTFITS, DEFAULT_COSTUMES, DEFAULT_LOOKBOOKS } from './data/defaultData';

const STORAGE_KEY_COSTUMES = 'vietphuc_costumes_v1';
const STORAGE_KEY_WARDROBE = 'vietphuc_wardrobe_v1';
const STORAGE_KEY_LOOKBOOKS = 'cophuc_remix_lookbooks_v1';
const STORAGE_KEY_OUTFITS = 'vietphuc_custom_outfits_v4';

const readStorageArray = <T,>(key: string): T[] => {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // Fallback
  }
  return [];
};

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('archive');
  const [outfits, setOutfits] = useState<CustomOutfit[]>(() => {
    const saved = readStorageArray<CustomOutfit>(STORAGE_KEY_OUTFITS);
    if (saved && saved.length > 0) {
      const map = new Map<string, CustomOutfit>();
      DEFAULT_OUTFITS.forEach((o) => map.set(o.id, o));
      saved.forEach((o) => {
        const existing = map.get(o.id) || {};
        map.set(o.id, {
          ...existing,
          ...o,
          components: Array.isArray(o?.components) && o.components.length > 0 ? o.components : (existing as any).components || [],
        });
      });
      return Array.from(map.values());
    }
    return DEFAULT_OUTFITS;
  });
  const [selectedOutfitId, setSelectedOutfitId] = useState<string | null>(null);
  const [costumes, setCostumes] = useState<CostumeItem[]>(() => {
    const saved = readStorageArray<CostumeItem>(STORAGE_KEY_COSTUMES);
    if (saved && saved.length > 0) {
      const map = new Map<string, CostumeItem>();
      DEFAULT_COSTUMES.forEach((c) => map.set(c.id, c));
      saved.forEach((c) => map.set(c.id, { ...map.get(c.id), ...c }));
      return Array.from(map.values());
    }
    return DEFAULT_COSTUMES;
  });
  const [lookbooks, setLookbooks] = useState<LookbookItem[]>(() => {
    const saved = readStorageArray<LookbookItem>(STORAGE_KEY_LOOKBOOKS).filter((item) => !item.id.startsWith('preset_'));
    if (saved && saved.length > 0) {
      const map = new Map<string, LookbookItem>();
      DEFAULT_LOOKBOOKS.forEach((l) => map.set(l.id, l));
      saved.forEach((l) => map.set(l.id, { ...map.get(l.id), ...l }));
      return Array.from(map.values());
    }
    return DEFAULT_LOOKBOOKS;
  });
  const [wardrobeIds, setWardrobeIds] = useState<string[]>(() => readStorageArray(STORAGE_KEY_WARDROBE));

  const [selectedItemForModal, setSelectedItemForModal] = useState<CostumeItem | null>(null);
  const [isWardrobeDrawerOpen, setIsWardrobeDrawerOpen] = useState(false);

  const [currentOutfit, setCurrentOutfit] = useState<OutfitComposition>({
    customColorOuter: '#9E2A2B',
    customColorBottom: '#1A1A1A',
    customColorAccessory: '#D4AF37',
    targetOccasion: 'Dạo Phố & Cafe',
    lookbookTitle: 'Bản Phối Mới',
    creatorName: 'Người Yêu Di Sản',
    gender: 'Nam',
    introduction: '',
  });

  // Fetch shared server data and reconcile with local state
  const syncWithServer = useCallback(async () => {
    try {
      const res = await fetch('/api/data');
      if (!res.ok) return;
      const data = await res.json();

      if (Array.isArray(data.costumes) && data.costumes.length > 0) {
        const valid = data.costumes.filter((c: any) => c && typeof c === 'object' && c.id);
        setCostumes((prev) => {
          const map = new Map<string, CostumeItem>();
          DEFAULT_COSTUMES.forEach((c) => map.set(c.id, c));
          prev.forEach((c) => map.set(c.id, c));
          valid.forEach((c: any) => map.set(c.id, c));
          const merged = Array.from(map.values());
          savePersistentCostumes(merged);
          return merged;
        });
      }

      if (Array.isArray(data.lookbooks)) {
        const valid = data.lookbooks.filter((l: any) => l && typeof l === 'object' && l.id);
        setLookbooks((prev) => {
          const map = new Map<string, LookbookItem>();
          DEFAULT_LOOKBOOKS.forEach((l) => map.set(l.id, l));
          prev.forEach((l) => map.set(l.id, l));
          valid.forEach((l: any) => map.set(l.id, l));
          const merged = Array.from(map.values());
          savePersistentLookbooks(merged);
          return merged;
        });
      }

      if (Array.isArray(data.outfits) && data.outfits.length > 0) {
        const valid = data.outfits.filter((o: any) => o && typeof o === 'object' && o.id);
        setOutfits((prev) => {
          const map = new Map<string, CustomOutfit>();
          DEFAULT_OUTFITS.forEach((o) => map.set(o.id, o));
          prev.forEach((o) => map.set(o.id, o));
          valid.forEach((o: any) => map.set(o.id, o));
          const merged = Array.from(map.values());
          savePersistentOutfits(merged);
          return merged;
        });
      }
    } catch (err) {
      console.warn('Sync server warning:', err);
    }
  }, []);

  // Initialize persistence and background sync
  useEffect(() => {
    let isMounted = true;
    cleanupLegacyStorageKeys();

    loadPersistentOutfits().then((saved) => {
      if (isMounted && Array.isArray(saved) && saved.length > 0) {
        setOutfits((cur) => {
          const map = new Map<string, CustomOutfit>();
          DEFAULT_OUTFITS.forEach((o) => map.set(o.id, o));
          saved.forEach((o) => {
            const existing = map.get(o.id) || {};
            map.set(o.id, {
              ...existing,
              ...o,
              components: Array.isArray(o?.components) && o.components.length > 0 ? o.components : (existing as any).components || [],
            });
          });
          cur.forEach((o) => {
            const existing = map.get(o.id) || {};
            map.set(o.id, {
              ...existing,
              ...o,
              components: Array.isArray(o?.components) && o.components.length > 0 ? o.components : (existing as any).components || [],
            });
          });
          return Array.from(map.values());
        });
      }
    });

    loadPersistentCostumes().then((saved) => {
      if (isMounted && Array.isArray(saved) && saved.length > 0) {
        setCostumes((cur) => {
          const map = new Map<string, CostumeItem>();
          DEFAULT_COSTUMES.forEach((c) => map.set(c.id, c));
          saved.forEach((c) => map.set(c.id, { ...map.get(c.id), ...c }));
          cur.forEach((c) => map.set(c.id, { ...map.get(c.id), ...c }));
          return Array.from(map.values());
        });
      }
    });

    loadPersistentLookbooks().then((saved) => {
      if (isMounted && Array.isArray(saved) && saved.length > 0) {
        setLookbooks((cur) => {
          const map = new Map<string, LookbookItem>();
          DEFAULT_LOOKBOOKS.forEach((l) => map.set(l.id, l));
          saved.forEach((l) => map.set(l.id, { ...map.get(l.id), ...l }));
          cur.forEach((l) => map.set(l.id, { ...map.get(l.id), ...l }));
          return Array.from(map.values());
        });
      }
    });

    syncWithServer();

    const intervalId = setInterval(() => {
      if (!document.hidden) syncWithServer();
    }, 15000);

    const onFocus = () => syncWithServer();
    const onStorage = (e: StorageEvent) => {
      if ([STORAGE_KEY_COSTUMES, STORAGE_KEY_LOOKBOOKS, STORAGE_KEY_OUTFITS].includes(e.key || '')) {
        syncWithServer();
      }
    };

    window.addEventListener('focus', onFocus);
    window.addEventListener('storage', onStorage);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('storage', onStorage);
    };
  }, [syncWithServer]);

  // Persist outfits & costumes safely
  useEffect(() => {
    savePersistentOutfits(outfits);
  }, [outfits]);

  useEffect(() => {
    savePersistentCostumes(costumes);
  }, [costumes]);

  useEffect(() => {
    safeSetLocalStorage(STORAGE_KEY_WARDROBE, wardrobeIds);
  }, [wardrobeIds]);

  useEffect(() => {
    safeSetLocalStorage(STORAGE_KEY_LOOKBOOKS, lookbooks);
  }, [lookbooks]);

  // Lookbook handlers
  const handleAddLookbook = async (newLookbook: LookbookItem) => {
    setLookbooks((prev) => [newLookbook, ...prev]);
    try {
      await fetch('/api/lookbooks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLookbook),
      });
    } catch (err) {
      console.error('Save lookbook error:', err);
    }
  };

  const handleDeleteLookbook = async (id: string) => {
    setLookbooks((prev) => prev.filter((item) => item.id !== id));
    try {
      await fetch(`/api/lookbooks/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.error('Delete lookbook error:', err);
    }
  };

  const handleResetLookbooks = () => {
    setLookbooks([]);
    localStorage.removeItem(STORAGE_KEY_LOOKBOOKS);
  };

  // Wardrobe handlers
  const handleToggleWardrobe = (item: CostumeItem) => {
    setWardrobeIds((prev) => (prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]));
  };

  const handleRemoveFromWardrobe = (id: string) => {
    setWardrobeIds((prev) => prev.filter((item) => item !== id));
  };

  const handleClearWardrobe = () => {
    setWardrobeIds([]);
  };

  const handleSendToStudio = (item: CostumeItem) => {
    const colorLabel = item.colorLabel || getVietnameseColorName(item.heroColor);
    setCurrentOutfit((prev) => {
      const creator = item.creatorName || prev.creatorName;
      if (item.category === 'bo_trang_phuc') {
        return {
          ...prev,
          fullOutfit: item,
          customImage: item.imageUrl,
          fullOutfitImages: item.imageUrls || (item.imageUrl ? [item.imageUrl] : []),
          customColorOuter: item.heroColor || prev.customColorOuter,
          customColorOuterLabel: colorLabel,
          lookbookTitle: item.name,
          creatorName: creator,
          gender: item.gender || prev.gender || 'Nam',
        };
      }
      const mapping: Record<string, Partial<OutfitComposition>> = {
        ao_ngoai: { outerwear: item, customColorOuter: item.heroColor, customColorOuterLabel: colorLabel },
        ao_trong: { innerwear: item, customColorInner: item.heroColor, customColorInnerLabel: colorLabel },
        quan_vay: { bottom: item, customColorBottom: item.heroColor, customColorBottomLabel: colorLabel },
        phu_kien: { accessory: item, customColorAccessory: item.heroColor, customColorAccessoryLabel: colorLabel },
        giay_dep: { footwear: item, customColorFootwear: item.heroColor, customColorFootwearLabel: colorLabel },
      };
      return { ...prev, ...(mapping[item.category] || {}), creatorName: creator, gender: item.gender || prev.gender || 'Nam' };
    });
    setActiveTab('showcase');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadPreset = (preset: LookbookItem) => {
    const outer = costumes.find((c) => c.id === preset.outerId);
    const inner = costumes.find((c) => c.id === preset.innerId);
    const bottom = costumes.find((c) => c.id === preset.bottomId);
    const accessory = costumes.find((c) => c.id === preset.accessoryId);
    const footwear = costumes.find((c) => c.id === preset.footwearId);
    const primaryImg = (preset.imageUrls && preset.imageUrls[0]) || preset.imageUrl || preset.fullOutfitImage;

    setCurrentOutfit({
      outerwear: outer,
      innerwear: inner,
      bottom: bottom,
      accessory: accessory,
      footwear: footwear,
      customColorOuter: preset.customColorOuter || (outer ? outer.heroColor : '#1F3A4B'),
      customColorBottom: preset.customColorBottom || (bottom ? bottom.heroColor : '#1A1A1A'),
      customColorAccessory: preset.customColorAccessory || (accessory ? accessory.heroColor : '#D4AF37'),
      targetOccasion: preset.occasion,
      lookbookTitle: preset.title,
      creatorName: preset.creatorName || 'Bản Phối Lookbook',
      gender: preset.gender || 'Nam',
      customImage: primaryImg,
      fullOutfitImages: preset.imageUrls || (primaryImg ? [primaryImg] : []),
    });
    setActiveTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteCostume = async (id: string) => {
    setCostumes((prev) => prev.filter((c) => c.id !== id));
    setWardrobeIds((prev) => prev.filter((i) => i !== id));
    try {
      await fetch(`/api/costumes/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.error('Delete costume error:', err);
    }
  };

  // Outfit actions with server sync
  const handleSaveOutfit = async (newOutfit: CustomOutfit) => {
    setOutfits((prev) => [newOutfit, ...prev.filter((o) => o.id !== newOutfit.id)]);
    setSelectedOutfitId(newOutfit.id);
    try {
      await fetch('/api/outfits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOutfit),
      });

      if (Array.isArray(newOutfit.components) && newOutfit.components.length > 0) {
        await Promise.all(
          newOutfit.components.map((comp) =>
            fetch('/api/costumes', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(comp),
            }).catch(console.error)
          )
        );
      }
      syncWithServer();
    } catch (err) {
      console.error('Save outfit error:', err);
    }
  };

  const handleDeleteOutfit = async (id: string) => {
    setOutfits((prev) => prev.filter((o) => o.id !== id));
    if (selectedOutfitId === id) setSelectedOutfitId(null);
    try {
      await fetch(`/api/outfits/${id}`, { method: 'DELETE' });
      syncWithServer();
    } catch (err) {
      console.error('Delete outfit error:', err);
    }
  };

  const handleUpdateOutfit = async (updatedOutfit: CustomOutfit) => {
    setOutfits((prev) => prev.map((o) => (o.id === updatedOutfit.id ? updatedOutfit : o)));
    try {
      await fetch(`/api/outfits/${updatedOutfit.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedOutfit),
      });
      syncWithServer();
    } catch (err) {
      console.error('Update outfit error:', err);
    }
  };

  const savedCostumesList = costumes.filter((c) => wardrobeIds.includes(c.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1918]">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        wardrobeCount={wardrobeIds.length}
        openWardrobeDrawer={() => setIsWardrobeDrawerOpen(true)}
      />

      <main className="flex-1">
        {activeTab === 'archive' && (
          <div id="archive-grid">
            <ArchiveCatalog
              outfits={outfits}
              onSelectOutfitAndShowcase={(outfitId) => {
                setSelectedOutfitId(outfitId);
                setActiveTab('showcase');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToWorkshop={() => {
                setActiveTab('studio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onDeleteOutfit={handleDeleteOutfit}
            />
          </div>
        )}

        {activeTab === 'studio' && (
          <TailorWorkshop
            onSaveOutfit={handleSaveOutfit}
            onFinishAndShowcase={(newOutfit) => {
              if (newOutfit) setSelectedOutfitId(newOutfit.id);
              setActiveTab('showcase');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'showcase' && (
          <ShowcaseGallery
            outfits={outfits}
            selectedOutfitId={selectedOutfitId || (outfits[0] ? outfits[0].id : undefined)}
            onSelectOutfit={(id) => setSelectedOutfitId(id)}
            onDeleteOutfit={handleDeleteOutfit}
            onUpdateOutfit={handleUpdateOutfit}
            onNavigateToWorkshop={() => {
              setActiveTab('studio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenItemDetailModal={(item) => setSelectedItemForModal(item)}
          />
        )}

        {activeTab === 'lookbook' && (
          <LookbookGallery
            lookbooks={lookbooks}
            costumes={costumes}
            currentStudioOutfit={currentOutfit}
            onAddLookbook={handleAddLookbook}
            onDeleteLookbook={handleDeleteLookbook}
            onResetLookbooks={handleResetLookbooks}
            onLoadPreset={handleLoadPreset}
            onOpenStudio={() => setActiveTab('showcase')}
          />
        )}

        {activeTab === 'guides' && <CulturalGuideSection />}
      </main>

      {selectedItemForModal && (
        <ProductDetailModal
          item={selectedItemForModal}
          onClose={() => setSelectedItemForModal(null)}
          onSendToStudio={handleSendToStudio}
          onAddToWardrobe={handleToggleWardrobe}
          onDeleteCostume={handleDeleteCostume}
          isSaved={wardrobeIds.includes(selectedItemForModal.id)}
        />
      )}

      <WardrobeDrawer
        isOpen={isWardrobeDrawerOpen}
        onClose={() => setIsWardrobeDrawerOpen(false)}
        savedCostumes={savedCostumesList}
        onRemoveFromWardrobe={handleRemoveFromWardrobe}
        onClearWardrobe={handleClearWardrobe}
        onSendToStudio={handleSendToStudio}
        onOpenStudio={() => setActiveTab('showcase')}
      />

      <Footer onNavigate={(tab) => setActiveTab(tab)} />
    </div>
  );
}
