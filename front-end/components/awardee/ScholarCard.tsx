// components/awardee/ScholarCard.tsx
'use client';

import { Noto_Serif, Poppins } from 'next/font/google';
import type { Scholar } from './awardeeData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

interface Props {
  scholar: Scholar;
  onClick: (s: Scholar) => void;
}

export default function ScholarCard({ scholar, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={() => onClick(scholar)}
      aria-label={`Lihat profil ${scholar.name}`}
      className={`group text-left bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#a8f070] overflow-hidden transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#79ba4e] focus:ring-offset-2 flex flex-col ${poppins.className}`}
    >
      {/* Foto + badge angkatan */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#e6f3fb] to-[#cfe7f6] overflow-hidden">
        {scholar.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={scholar.photo}
            alt={scholar.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`select-none text-5xl md:text-6xl font-bold text-white/70 ${notoSerif.className}`}>
              {getInitials(scholar.name)}
            </span>
          </div>
        )}

        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#a8f070] text-[#2a411b] text-xs font-bold shadow-sm">
          {scholar.generation}
        </span>
      </div>

      {/* Info */}
      <div className="px-4 py-4 text-center flex flex-col items-center gap-1">
        <h3 className={`text-base md:text-lg font-bold text-gray-800 group-hover:text-[#0082c6] transition-colors line-clamp-1 ${notoSerif.className}`}>
          {scholar.name}
        </h3>
        <p className="text-xs md:text-sm text-[#0082c6] line-clamp-1">{scholar.department}</p>
        <span className="mt-2 inline-block text-xs font-semibold text-gray-500 border border-gray-200 rounded-full px-3 py-1 group-hover:border-[#79ba4e] group-hover:text-[#79ba4e] transition-colors">
          View Profile
        </span>
      </div>
    </button>
  );
}
