// components/our-team/OurTeamHero.tsx
'use client';

import { Noto_Serif, Poppins } from 'next/font/google';
import { divisions, totalMembers } from './teamData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1"
  >
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export default function OurTeamHero() {
  const handleScroll = () => {
    document.getElementById('team-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero5.jpg)' }}
    >
      {/* Overlay gradient biru CSSMoRA — selaras dengan hero subpage lainnya */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/55 via-[#0082c6]/75 to-[#0082c6]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20 w-full pt-32 md:pt-28 pb-16 md:pb-20 text-center">
        <div className={`text-white max-w-3xl mx-auto ${poppins.className}`}>
          {/* Badge jumlah anggota */}
          <div className="inline-flex items-center gap-2 bg-[#a8f070] px-5 py-2 rounded-full mb-6 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#2a411b]">
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
            </svg>
            <span className="text-[#2a411b] font-bold text-sm tracking-wide">
              {totalMembers} Orang · {divisions.length} Divisi
            </span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-lg ${notoSerif.className}`}>
            Our <span className="text-[#a8f070]">Team</span>
          </h1>

          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-8 drop-shadow">
            Di balik setiap halaman website ini ada orang-orang yang bekerja sama, <br />
            Apresiasi untuk tim yang telah berkolaborasi dengan penuh dedikasi.
          </p>

          <button
            type="button"
            onClick={handleScroll}
            className="group inline-flex items-center bg-[#a8f070] hover:bg-[#9be85f] text-[#2a411b] font-bold px-7 py-3.5 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0082c6]"
          >
            Siapa Kami
            {/* <ArrowDown /> */}
          </button>
        </div>
      </div>
    </section>
  );
}
