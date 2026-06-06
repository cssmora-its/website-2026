// components/prestasi/PrestasiCard.tsx
'use client';

import { Poppins } from 'next/font/google';
import type { Prestasi } from './prestasiData';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface Props {
  prestasi: Prestasi;
  onReadMore: (p: Prestasi) => void;
}

/** Pola checker transparansi untuk placeholder — selaras dengan modal gallery. */
function PlaceholderChecker() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: '#f3f4f6',
        backgroundImage:
          'linear-gradient(45deg, #e5e7eb 25%, transparent 25%), linear-gradient(-45deg, #e5e7eb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e7eb 75%), linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)',
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0',
      }}
    />
  );
}

export default function PrestasiCard({ prestasi, onReadMore }: Props) {
  const hasThumb = Boolean(prestasi.thumbnail);

  return (
    <article className={`flex flex-col gap-3 w-full ${poppins.className}`}>
      {/* Thumbnail */}
      <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden bg-white/10">
        {hasThumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={prestasi.thumbnail}
            alt={prestasi.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <PlaceholderChecker />
        )}
      </div>

      {/* Title */}
      <h3 className="text-white text-[15px] md:text-base font-semibold leading-snug">
        {prestasi.title}
      </h3>

      {/* Subjudul: peraih + capaian */}
      <p className="text-white/70 text-[13px] leading-snug -mt-1">
        {prestasi.nama} · {prestasi.juara}
      </p>

      {/* Tombol Read More */}
      <button
        type="button"
        onClick={() => onReadMore(prestasi)}
        aria-label={`Baca detail prestasi ${prestasi.title}`}
        className="self-start bg-[#a8f070] hover:bg-[#9be85f] text-[#2a411b] font-bold text-sm px-5 py-2 rounded-md shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0082c6]"
      >
        Read More
      </button>
    </article>
  );
}
