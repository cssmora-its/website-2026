// components/awardee/ScholarDetailModal.tsx
'use client';

import { useEffect } from 'react';
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

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.93H5.56v8.41h2.78zM6.95 8.78a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22zm11.39 9.56v-4.61c0-2.47-1.32-3.62-3.08-3.62a2.66 2.66 0 0 0-2.41 1.33h-.04V9.93H9.99v8.41h2.78v-4.16c0-1.1.21-2.16 1.57-2.16s1.36 1.25 1.36 2.23v4.09h2.64z" />
  </svg>
);

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

  const firstName = scholar.name.split(/\s+/)[0];

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

            {/* Connect with */}
            {(scholar.instagram || scholar.linkedin) && (
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-3">
                  Connect with <span className="font-semibold text-gray-700">{firstName}</span> at:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {scholar.instagram && (
                    <a
                      href={igHref(scholar.instagram)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-[#0082c6] hover:text-white text-gray-700 text-sm font-medium transition-colors"
                    >
                      <InstagramIcon />
                      <span className="truncate">{scholar.instagram}</span>
                    </a>
                  )}
                  {scholar.linkedin && (
                    <a
                      href={liHref(scholar.linkedin)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-[#0082c6] hover:text-white text-gray-700 text-sm font-medium transition-colors"
                    >
                      <LinkedInIcon />
                      <span className="truncate">LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            )}

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

/** Normalisasi username menjadi URL Instagram. */
function igHref(value: string): string {
  if (value.startsWith('http')) return value;
  return `https://instagram.com/${value.replace(/^@/, '')}`;
}

/** Normalisasi handle menjadi URL LinkedIn. */
function liHref(value: string): string {
  if (value.startsWith('http')) return value;
  return `https://linkedin.com/${value.replace(/^\//, '')}`;
}
