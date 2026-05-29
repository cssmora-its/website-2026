// components/gallery/GalleryCard.tsx
'use client';

import { Poppins } from 'next/font/google';
import type { Proker } from './galleryData';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface Props {
  proker: Proker;
  onClick: (p: Proker) => void;
}

export default function GalleryCard({ proker, onClick }: Props) {
  const hasThumb = Boolean(proker.thumbnail);

  return (
    <button
      type="button"
      onClick={() => onClick(proker)}
      className={`group text-left bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#a8f070] overflow-hidden transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#79ba4e] focus:ring-offset-2 ${poppins.className}`}
      aria-label={`Lihat detail proker ${proker.nama_proker}`}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
        {hasThumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={proker.thumbnail}
            alt={proker.nama_proker}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-4 py-4 text-center">
        <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-[#0082c6] transition-colors line-clamp-1">
          {proker.nama_proker}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-1">{proker.departemen}</p>
      </div>
    </button>
  );
}
