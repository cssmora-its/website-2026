// components/awardee/CaptainCard.tsx
'use client';

import Image from 'next/image';
import { Noto_Serif, Poppins } from 'next/font/google';
import type { Captain } from './awardeeData';

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
  captain: Captain;
  /** Kartu fokus (tengah carousel) — diberi border lime & shadow lebih kuat. */
  active?: boolean;
}

export default function CaptainCard({ captain, active = false }: Props) {
  return (
    <article
      className={`h-full w-full bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-100 transition-all duration-300 hover:shadow-[0_14px_28px_-12px_rgba(0,130,198,0.6)] hover:scale-105 ${
        active ? 'shadow-[0_14px_28px_-12px_rgba(0,130,198,0.6)]' : 'shadow-sm hover:shadow-lg'
      } ${poppins.className}`}
    >
      {/* Foto / inisial */}
      <div className="relative flex-grow bg-gradient-to-b from-gray-300 to-white overflow-hidden">
        {captain.photo ? (
          <Image
            src={captain.photo}
            alt={captain.name}
            fill
            className="absolute inset-0 w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`select-none text-6xl md:text-7xl font-bold text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)] ${notoSerif.className}`}
            >
              {getInitials(captain.name)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-5 py-5 text-center">
        <h4 className={`text-lg md:text-xl font-bold text-gray-800 truncate ${notoSerif.className}`}>
          {captain.name}
        </h4>
        <p className="text-sm font-medium text-[#0082c6] mt-0.5 truncate">{captain.department}</p>

        <div className="border-t border-gray-100 my-4" />

        <div className="flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold whitespace-nowrap">
            Angkatan {captain.generation}
          </span>
          <span className="text-sm font-bold text-gray-700 whitespace-nowrap">
            {captain.totalScholars} Orang
          </span>
        </div>
      </div>
    </article>
  );
}
