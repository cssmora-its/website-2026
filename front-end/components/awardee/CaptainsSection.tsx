// components/awardee/CaptainsSection.tsx
'use client';

import { useState } from 'react';
import { Noto_Serif, Poppins } from 'next/font/google';
import CaptainCard from './CaptainCard';
import { captains } from './awardeeData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Lebar kartu & jarak antar-kartu (px) — dipakai untuk menghitung geseran track
// agar kartu aktif selalu tepat di tengah viewport.
const CARD_W = 280;
const GAP = 24;

const ArrowIcon = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 md:w-6 md:h-6"
  >
    {dir === 'left' ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
  </svg>
);

export default function CaptainsSection() {
  const [active, setActive] = useState(0);
  const total = captains.length;

  const canPrev = active > 0;
  const canNext = active < total - 1;
  const go = (delta: number) =>
    setActive((cur) => Math.max(0, Math.min(total - 1, cur + delta)));

  // Geser track agar pusat kartu aktif berada di titik tengah viewport.
  const offset = active * (CARD_W + GAP) + CARD_W / 2;

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading + quote */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#0082c6] mb-4 ${notoSerif.className}`}
          >
            Ketua Angkatan
          </h2>
          <p className={`text-gray-500 text-base md:text-lg italic leading-relaxed ${poppins.className}`}>
            &ldquo;Lebih dari sekadar nama, mereka adalah jiwa dari setiap angkatan yang menjaga
            cahaya kami tetap menyala.&rdquo;
          </p>
        </div>

        {/* Carousel — track geser (slide) */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 md:gap-6">
            {/* Tombol Prev — disembunyikan saat di kartu pertama */}
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={!canPrev}
              aria-label="Ketua angkatan sebelumnya"
              className={`z-20 shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md text-[#0082c6] border border-gray-100 hover:bg-[#0082c6] hover:text-white hover:shadow-lg transition-all duration-300 ${
                canPrev ? '' : 'invisible'
              }`}
            >
              <ArrowIcon dir="left" />
            </button>

            {/* Viewport: meng-clip kartu yang mengintip di tepi */}
            <div className="relative grow min-w-0 overflow-hidden h-[440px]">
              {/* Anchor di tengah viewport */}
              <div className="absolute top-0 left-1/2 h-full">
                {/* Track: seluruh kartu dalam satu baris, digeser dengan translateX */}
                <div
                  className="flex items-center h-full transition-transform duration-500 ease-out will-change-transform"
                  style={{ gap: `${GAP}px`, transform: `translateX(-${offset}px)` }}
                >
                  {captains.map((captain, i) => {
                    const isActive = i === active;
                    return (
                      <div
                        key={captain.id}
                        onClick={() => setActive(i)}
                        style={{ width: `${CARD_W}px` }}
                        aria-hidden={!isActive}
                        className={`shrink-0 h-[400px] cursor-pointer transition-all duration-500 ease-out ${
                          isActive
                            ? 'scale-100 opacity-100 blur-0'
                            : 'scale-90 opacity-60 blur-[2px] hover:opacity-90 hover:blur-[1px] hover:scale-[0.94]'
                        }`}
                      >
                        <CaptainCard captain={captain} active={isActive} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Tombol Next — disembunyikan saat di kartu terakhir */}
            <button
              type="button"
              onClick={() => go(1)}
              disabled={!canNext}
              aria-label="Ketua angkatan berikutnya"
              className={`z-20 shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md text-[#0082c6] border border-gray-100 hover:bg-[#0082c6] hover:text-white hover:shadow-lg transition-all duration-300 ${
                canNext ? '' : 'invisible'
              }`}
            >
              <ArrowIcon dir="right" />
            </button>
          </div>

          {/* Indikator dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {captains.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ke ketua angkatan ${c.generation}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all ${
                  i === active ? 'w-6 bg-[#79ba4e]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
