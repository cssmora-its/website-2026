// components/awardee/ScholarDetailModal.tsx
'use client';

import { useEffect } from 'react';
import { Noto_Serif, Poppins } from 'next/font/google';
import type { Scholar } from './awardeeData';
import { InstagramIcon, LinkedInIcon, igHref, liHref } from './social';

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
  scholar: Scholar | null;
  onClose: () => void;
}

/** Baris informasi label : nilai dengan label biru — sesuai pola GSM. */
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
      <span className="text-[#0082c6] font-semibold text-sm shrink-0 sm:w-36">{label}</span>
      <span className="text-gray-800 text-sm">{value}</span>
    </div>
  );
}

export default function ScholarDetailModal({ scholar, onClose }: Props) {
  // Esc untuk menutup
  useEffect(() => {
    if (!scholar) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [scholar, onClose]);

  // Lock body scroll selama modal terbuka
  useEffect(() => {
    if (!scholar) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [scholar]);

  if (!scholar) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="scholar-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-[fadeIn_150ms_ease-out]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className={`relative bg-white rounded-[24px] shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden animate-[modalIn_180ms_ease-out] ${poppins.className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup profil scholar"
          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-gray-700 shadow-sm flex items-center justify-center transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          {/* Foto */}
          <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#e6f3fb] to-[#cfe7f6]">
            {scholar.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={scholar.photo} alt={scholar.name} className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`select-none text-7xl font-bold text-white/70 ${notoSerif.className}`}>
                  {getInitials(scholar.name)}
                </span>
              </div>
            )}
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#a8f070] text-[#2a411b] text-xs font-bold shadow-sm">
              Angkatan {scholar.generation}
            </span>

            {/* Logo sosial — pojok kanan bawah foto, hanya logo, link ke profil */}
            {(scholar.instagram || scholar.linkedin) && (
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                {scholar.instagram && (
                  <a
                    href={igHref(scholar.instagram)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram ${scholar.name}`}
                    className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-[#0082c6] hover:text-white shadow-md flex items-center justify-center transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                )}
                {scholar.linkedin && (
                  <a
                    href={liHref(scholar.linkedin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn ${scholar.name}`}
                    className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-[#0082c6] hover:text-white shadow-md flex items-center justify-center transition-colors"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Detail */}
          <div className="px-6 md:px-7 pt-6 pb-7">
            <h3
              id="scholar-modal-title"
              className={`text-2xl font-bold text-gray-900 mb-4 ${notoSerif.className}`}
            >
              {scholar.name}
            </h3>

            <div className="flex flex-col gap-2.5">
              {scholar.nia && <InfoRow label="NIA" value={scholar.nia} />}
              <InfoRow label="Departemen" value={scholar.department} />
              <InfoRow label="Kota Asal" value={scholar.city} />
              <InfoRow label="Asal Pesantren" value={scholar.pesantren} />
            </div>

            {/* Tombol close utama — aksen lime GSM */}
            <button
              type="button"
              onClick={onClose}
              className="mt-7 w-full bg-[#79ba4e] hover:bg-[#6aa843] text-white font-bold py-3 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#79ba4e] focus:ring-offset-2"
            >
              Close
            </button>
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
