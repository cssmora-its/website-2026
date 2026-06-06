// components/prestasi/PrestasiDetailModal.tsx
'use client';

import { useEffect } from 'react';
import { Noto_Serif, Poppins } from 'next/font/google';
import type { Prestasi } from './prestasiData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface Props {
  prestasi: Prestasi | null;
  onClose: () => void;
}

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

/** Baris label biru : nilai — selaras pola modal scholar. */
function InfoRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
      <span className="text-[#0082c6] font-semibold text-sm shrink-0 sm:w-32">{label}</span>
      <span className="text-gray-800 text-sm">{value}</span>
    </div>
  );
}

export default function PrestasiDetailModal({ prestasi, onClose }: Props) {
  // Esc untuk menutup
  useEffect(() => {
    if (!prestasi) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prestasi, onClose]);

  // Lock body scroll selama modal terbuka
  useEffect(() => {
    if (!prestasi) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [prestasi]);

  if (!prestasi) return null;

  const hasImage = Boolean(prestasi.image);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="prestasi-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-[fadeIn_150ms_ease-out]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className={`relative bg-white rounded-[20px] shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-[modalIn_180ms_ease-out] ${poppins.className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail prestasi"
          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-500 hover:text-gray-800 shadow-sm flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        {/* Scrollable body */}
        <div className="overflow-y-auto">
          {/* Header: title + juara · tingkat */}
          <div className="px-6 md:px-8 pt-6 pb-4 pr-14 md:pr-16">
            <h3
              id="prestasi-modal-title"
              className={`text-xl md:text-2xl font-bold text-gray-900 leading-tight ${notoSerif.className}`}
            >
              {prestasi.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="px-3 py-1 rounded-full bg-[#a8f070] text-[#2a411b] text-xs font-bold">
                {prestasi.juara}
              </span>
              <span className="text-gray-400 text-sm">{prestasi.tingkat}</span>
            </div>
          </div>

          {/* Image besar */}
          <div className="px-6 md:px-8 pb-4">
            <div className="relative w-full aspect-[16/9] rounded-[12px] overflow-hidden bg-gray-100 shadow-[0_18px_30px_-18px_rgba(0,130,198,0.4)]">
              {hasImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={prestasi.image}
                  alt={prestasi.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <PlaceholderChecker />
              )}
            </div>
          </div>

          {/* Identitas peraih */}
          <div className="px-6 md:px-8 pb-4 flex flex-col gap-2.5">
            <InfoRow label="Nama" value={prestasi.nama} />
            <InfoRow label="NRP" value={prestasi.nrp} />
            <InfoRow label="Departemen" value={prestasi.departemen} />
            <InfoRow label="Angkatan" value={prestasi.angkatan} />
            <InfoRow label="Penyelenggara" value={prestasi.penyelenggara} />
          </div>

          {/* Deskripsi */}
          <div className="px-6 md:px-8 pt-2 pb-7 border-t border-gray-100 mt-1">
            <p className="italic text-gray-700 text-[14px] md:text-[15px] leading-relaxed text-justify pt-4">
              {prestasi.description}
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
