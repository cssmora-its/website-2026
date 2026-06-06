// components/our-team/TeamMemberCard.tsx
'use client';

import { Noto_Serif, Poppins } from 'next/font/google';
import type { TeamMember } from './teamData';

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

/** Lengkapi username sosial menjadi URL penuh; biarkan apa adanya bila sudah URL. */
function socialUrl(base: string, value: string): string {
  const v = value.trim();
  if (!v) return '';
  if (v.startsWith('http://') || v.startsWith('https://')) return v;
  return base + v.replace(/^@/, '');
}

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface Props {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: Props) {
  const instagram = socialUrl('https://instagram.com/', member.instagram);
  const linkedin = socialUrl('https://linkedin.com/in/', member.linkedin);
  const hasSocial = Boolean(instagram || linkedin);

  return (
    <article
      className={`group bg-white rounded-2xl shadow-sm hover:shadow-[0_12px_22px_-12px_rgba(0,130,198,0.55)] border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col ${poppins.className}`}
    >
      {/* Foto / inisial */}
      <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-[#e6f3fb] to-[#cfe7f6] overflow-hidden">
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`select-none text-5xl md:text-6xl font-bold text-white/70 ${notoSerif.className}`}>
              {getInitials(member.name)}
            </span>
          </div>
        )}

        {/* Ikon sosial — muncul saat hover bila tersedia */}
        {hasSocial && (
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${member.name}`}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-[#0082c6] hover:bg-[#0082c6] hover:text-white shadow-sm transition-colors"
              >
                <InstagramIcon />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn ${member.name}`}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-[#0082c6] hover:bg-[#0082c6] hover:text-white shadow-sm transition-colors"
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-4 py-4 text-center flex flex-col items-center gap-1">
        <h3 className={`text-base md:text-lg font-bold text-gray-800 group-hover:text-[#0082c6] transition-colors line-clamp-1 ${notoSerif.className}`}>
          {member.name}
        </h3>
        <p className="text-xs md:text-sm text-[#0082c6] line-clamp-1">{member.role}</p>
      </div>
    </article>
  );
}
