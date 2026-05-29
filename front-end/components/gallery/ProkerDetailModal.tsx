// components/gallery/ProkerDetailModal.tsx
'use client';

import { useCallback, useEffect, useState } from 'react';
import { Noto_Serif, Poppins } from 'next/font/google';
import { formatWaktuPelaksanaan, type Proker } from './galleryData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface Props {
  proker: Proker | null;
  onClose: () => void;
}

export default function ProkerDetailModal({ proker, onClose }: Props) {
  const currentId = proker?.id ?? null;
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackedId, setTrackedId] = useState<number | null>(currentId);

  // Reset slider saat proker berubah — pola "derived state" React 19.
  if (currentId !== trackedId) {
    setTrackedId(currentId);
    setActiveIndex(0);
  }

  const images = proker?.images ?? [];
  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Esc untuk menutup, panah kiri/kanan untuk navigasi slider
  useEffect(() => {
    if (!proker) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasMultiple) handlePrev();
      if (e.key === 'ArrowRight' && hasMultiple) handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [proker, hasMultiple, handlePrev, handleNext, onClose]);

  // Lock body scroll selama modal terbuka
  useEffect(() => {
    if (!proker) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [proker]);

  if (!proker) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="proker-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-[fadeIn_150ms_ease-out]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className={`relative bg-white rounded-[24px] shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-[modalIn_180ms_ease-out] ${poppins.className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail proker"
          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-gray-700 shadow-sm flex items-center justify-center transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        {/* Scrollable body */}
        <div className="overflow-y-auto">
          {/* Header bar: judul + tanggal di kiri, badge departemen di kanan */}
          <div className="flex justify-between items-start gap-4 px-6 md:px-8 pt-7 pb-4 pr-14 md:pr-16">
            <div className="min-w-0 flex-1">
              <h3
                id="proker-modal-title"
                className={`text-2xl md:text-3xl font-bold text-gray-900 leading-tight ${notoSerif.className}`}
              >
                {proker.nama_proker}
              </h3>
              <p className="italic text-gray-400 text-sm md:text-base mt-1">
                {formatWaktuPelaksanaan(proker.waktu_pelaksanaan)}
              </p>
            </div>

            <span
              className={`inline-block bg-[#a8f070] text-[#2a411b] font-bold px-5 py-2 rounded-full text-sm md:text-base shadow-md whitespace-nowrap ${poppins.className}`}
            >
              {proker.departemen}
            </span>
          </div>

          {/* Image area dengan shadow biru lembut */}
          <div className="px-6 md:px-8 pb-4">
            <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-gray-100 shadow-[0_24px_40px_-20px_rgba(0,130,198,0.35)]">
              {hasImages ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={images[activeIndex]}
                  alt={`${proker.nama_proker} - foto ${activeIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <PlaceholderChecker />
              )}

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Foto berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Tampilkan foto ${idx + 1}`}
                        aria-current={idx === activeIndex}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Deskripsi italic */}
          <div className="px-6 md:px-8 pt-2 pb-7">
            <p className="italic text-gray-700 text-[15px] md:text-base leading-relaxed">
              {proker.deskripsi}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

function PlaceholderChecker() {
  // Pola checker transparansi seperti di mockup — pakai conic-gradient sederhana.
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
