'use client';

import Image from 'next/image';
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
      className={`group text-center items-center bg-white rounded-2xl shadow-sm hover:shadow-[0_10px_18px_-10px_rgba(0,130,198,0.55)] border border-gray-100 overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0082c6] focus:ring-offset-2 flex flex-col ${poppins.className}`}
    >
      {/* Foto + badge angkatan */}
      <div className="cursor-pointer relative w-full aspect-[4/3] bg-gradient-to-br from-[#e6f3fb] to-[#cfe7f6] overflow-hidden">
        {scholar.photo ? (
          <Image
            src={scholar.photo}
            alt={scholar.name}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
        <span className="cursor-pointer mt-2 inline-block text-xs font-semibold text-gray-500 border border-gray-200 rounded-full px-3 py-1 group-hover:border-[#0082c6] group-hover:text-[#0082c6] transition-colors">
          Lihat Profil
        </span>
      </div>
    </button>
  );
}
