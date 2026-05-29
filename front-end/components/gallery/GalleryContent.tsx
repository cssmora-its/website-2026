// components/gallery/GalleryContent.tsx
'use client';

import { useEffect, useState } from 'react';
import { Noto_Serif, Poppins } from 'next/font/google';
import GalleryCard from './GalleryCard';
import ProkerDetailModal from './ProkerDetailModal';
import {
  CATEGORY_ORDER,
  galleryData,
  groupByCategory,
  type Proker,
  type ProkerCategory,
} from './galleryData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function GalleryContent() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Proker[]>([]);
  const [selected, setSelected] = useState<Proker | null>(null);

  // Simulasi pemuatan data — saat backend siap, ganti dengan fetch sebenarnya.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setItems(galleryData);
      setLoading(false);
    }, 450);
    return () => window.clearTimeout(timer);
  }, []);

  const handleCardClick = (p: Proker) => {
    console.log('[Gallery] proker diklik:', p);
    setSelected(p);
  };

  return (
    <section
      id="gallery-list"
      className="relative w-full py-16 lg:py-24 bg-[#f8fafc] overflow-hidden"
    >
      {/* Pattern background ringan */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'url(/pattern-border.png)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {loading ? (
          <LoadingState />
        ) : items.length === 0 ? (
          <EmptyState />
        ) : (
          <CategorySections items={items} onCardClick={handleCardClick} />
        )}
      </div>

      <ProkerDetailModal proker={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function CategorySections({
  items,
  onCardClick,
}: {
  items: Proker[];
  onCardClick: (p: Proker) => void;
}) {
  const grouped = groupByCategory(items);

  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {CATEGORY_ORDER.map((cat) => {
        const list = grouped[cat];
        if (list.length === 0) return null;
        return (
          <div key={cat} className="flex flex-col items-center">
            <CategoryHeading title={cat} />
            <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {list.map((proker) => (
                <GalleryCard key={proker.id} proker={proker} onClick={onCardClick} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CategoryHeading({ title }: { title: ProkerCategory }) {
  return (
    <div
      className={`bg-[#a8f070] px-6 md:px-8 py-2 md:py-2.5 rounded-xl shadow-md ${poppins.className}`}
    >
      <span
        className={`text-[#2a411b] font-bold italic text-lg md:text-2xl tracking-wide ${notoSerif.className}`}
      >
        {title}
      </span>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex flex-col gap-16">
      {Array.from({ length: 2 }).map((_, sectionIdx) => (
        <div key={sectionIdx} className="flex flex-col items-center">
          <div className="h-9 w-56 bg-[#a8f070]/60 rounded-xl animate-pulse" />
          <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {Array.from({ length: 6 }).map((__, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
              >
                <div className="w-full aspect-[4/3] bg-gray-200 animate-pulse" />
                <div className="px-4 py-4 flex flex-col items-center gap-2">
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-20 bg-gray-100 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className={`flex flex-col items-center justify-center py-20 text-center ${poppins.className}`}>
      <div className="w-20 h-20 rounded-full bg-[#a8f070]/30 flex items-center justify-center mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-[#2a411b]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
      <h3 className={`text-xl md:text-2xl font-bold text-gray-800 mb-2 ${notoSerif.className}`}>
        Belum ada dokumentasi proker.
      </h3>
      <p className="text-gray-500 text-sm md:text-base max-w-md">
        Dokumentasi proker dan agenda Kabinet Renjana Cita akan segera hadir. Pantau terus halaman
        ini, ya!
      </p>
    </div>
  );
}
