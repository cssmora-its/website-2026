// components/awardee/CaptainsSection.tsx
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Noto_Serif, Poppins } from 'next/font/google';
import CaptainCard from './CaptainCard';
import { captains } from './awardeeData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

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
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const total = captains.length;

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(total - 1, index));
      setActive(clamped);
      itemRefs.current[clamped]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    },
    [total],
  );

  // Sinkronkan kartu aktif dengan posisi scroll (mis. saat di-swipe di mobile).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let nearest = 0;
        let nearestDist = Infinity;
        itemRefs.current.forEach((el, i) => {
          if (!el) return;
          const elCenter = el.offsetLeft + el.offsetWidth / 2;
          const dist = Math.abs(elCenter - center);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearest = i;
          }
        });
        setActive(nearest);
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading + quote */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#0082c6] mb-4 ${notoSerif.className}`}
          >
            The Lineage of Captains
          </h2>
          <p className={`text-gray-500 text-base md:text-lg italic leading-relaxed ${poppins.className}`}>
            &ldquo;More than just names, they are the soul of every generation, ensuring our light
            remains undimmed.&rdquo;
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-2 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {captains.map((captain, i) => {
              const isActive = i === active;
              return (
                <div
                  key={captain.id}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  onClick={() => goTo(i)}
                  className="relative shrink-0 snap-center basis-full sm:basis-[calc(50%-10px)] lg:basis-[calc(25%-15px)] h-[200px] cursor-pointer"
                >
                  <div
                    className={`h-full transition-all duration-300 ${
                      isActive ? 'scale-100' : 'scale-[0.97]'
                    }`}
                  >
                    <CaptainCard captain={captain} active={isActive} />
                  </div>
                  {/* Layer putih tipis untuk kartu non-fokus */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-white transition-opacity duration-300 ${
                      isActive ? 'opacity-0' : 'opacity-45'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigasi + dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label="Ketua angkatan sebelumnya"
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md text-[#0082c6] border border-gray-100 hover:bg-[#0082c6] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#0082c6]"
            >
              <ArrowIcon dir="left" />
            </button>

            <div className="flex items-center gap-2">
              {captains.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ke ketua angkatan ${c.generation}`}
                  aria-current={i === active}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-6 bg-[#79ba4e]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(active + 1)}
              disabled={active === total - 1}
              aria-label="Ketua angkatan berikutnya"
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md text-[#0082c6] border border-gray-100 hover:bg-[#0082c6] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#0082c6]"
            >
              <ArrowIcon dir="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
