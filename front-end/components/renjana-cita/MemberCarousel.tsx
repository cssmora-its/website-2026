// components/renjana-cita/MemberCarousel.tsx
'use client';

import { useState } from 'react';
import MemberCard from './MemberCard';
import type { Member } from './renjanaData';

interface Props {
  members: Member[];
  /** Untuk aria-label tombol navigasi, mis. "Expert Staff Internal Affairs". */
  groupLabel: string;
}

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

export default function MemberCarousel({ members, groupLabel }: Props) {
  const [active, setActive] = useState(0);
  const total = members.length;

  if (total === 0) return null;

  const wrap = (i: number) => (i + total) % total;
  const go = (delta: number) => setActive((cur) => wrap(cur + delta));

  // Kartu tunggal: tidak perlu carousel.
  if (total === 1) {
    return (
      <div className="w-full max-w-[340px] mx-auto h-[460px]">
        <MemberCard member={members[0]} />
      </div>
    );
  }

  const prev = members[wrap(active - 1)];
  const next = members[wrap(active + 1)];
  const current = members[active];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-center gap-3 md:gap-6">
        {/* Tombol Prev */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={`Sebelumnya — ${groupLabel}`}
          className="z-20 shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md text-[#0082c6] border border-gray-100 hover:bg-[#0082c6] hover:text-white transition-colors"
        >
          <ArrowIcon dir="left" />
        </button>

        {/* Stage */}
        <div className="flex items-center justify-center gap-4 md:gap-6 grow min-w-0">
          {/* Kartu kiri (faded) — hanya desktop */}
          <div
            className="hidden md:block w-[230px] h-[380px] opacity-50 scale-95 transition-all duration-300 cursor-pointer"
            onClick={() => go(-1)}
            aria-hidden="true"
          >
            <MemberCard member={prev} compact />
          </div>

          {/* Kartu tengah (aktif) */}
          <div className="w-full max-w-[300px] md:w-[320px] md:max-w-none h-[420px] md:h-[460px] transition-all duration-300">
            <MemberCard member={current} />
          </div>

          {/* Kartu kanan (faded) — hanya desktop */}
          <div
            className="hidden md:block w-[230px] h-[380px] opacity-50 scale-95 transition-all duration-300 cursor-pointer"
            onClick={() => go(1)}
            aria-hidden="true"
          >
            <MemberCard member={next} compact />
          </div>
        </div>

        {/* Tombol Next */}
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={`Berikutnya — ${groupLabel}`}
          className="z-20 shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md text-[#0082c6] border border-gray-100 hover:bg-[#0082c6] hover:text-white transition-colors"
        >
          <ArrowIcon dir="right" />
        </button>
      </div>

      {/* Indikator dots + counter */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {members.map((m, i) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ke kartu ${i + 1} dari ${total}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${
              i === active ? 'w-6 bg-[#79ba4e]' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
