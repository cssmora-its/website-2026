// components/awardee/social.tsx
// Ikon & helper URL sosial media bersama untuk komponen awardee (card & modal).

interface IconProps {
  className?: string;
}

export const InstagramIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const LinkedInIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.93H5.56v8.41h2.78zM6.95 8.78a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22zm11.39 9.56v-4.61c0-2.47-1.32-3.62-3.08-3.62a2.66 2.66 0 0 0-2.41 1.33h-.04V9.93H9.99v8.41h2.78v-4.16c0-1.1.21-2.16 1.57-2.16s1.36 1.25 1.36 2.23v4.09h2.64z" />
  </svg>
);

/** Normalisasi username menjadi URL profil Instagram. */
export function igHref(value: string): string {
  if (value.startsWith('http')) return value;
  return `https://instagram.com/${value.replace(/^@/, '')}`;
}

/** Normalisasi handle menjadi URL profil LinkedIn. */
export function liHref(value: string): string {
  if (value.startsWith('http')) return value;
  return `https://linkedin.com/${value.replace(/^\//, '')}`;
}
