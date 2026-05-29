// components/awardee/AwardeeHero.tsx
'use client';

import { Noto_Serif, Poppins } from 'next/font/google';
import { totalScholarsLabel } from './awardeeData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Foto komunal untuk collage — pakai aset yang sudah ada di /public.
// Ganti path & caption di sini bila tersedia foto angkatan yang lebih sesuai.
const COLLAGE = [
  { src: '/us-1.png', caption: 'National Seminar', rotate: '-rotate-6', extra: 'md:-translate-x-6 md:translate-y-4' },
  { src: '/anak.png', caption: 'Graduation Day', rotate: 'rotate-3', extra: 'md:translate-x-10 md:translate-y-12' },
  { src: '/us-2.png', caption: 'Community Day', rotate: 'rotate-6', extra: 'md:translate-x-24 md:-translate-y-2' },
];

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function AwardeeHero() {
  const handleScrollToScholars = () => {
    document.getElementById('all-scholars')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero-bg.png)' }}
    >
      {/* Overlay gradient biru CSSMoRA — selaras dengan hero subpage lainnya */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/55 via-[#0082c6]/75 to-[#0082c6]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Kiri: konten teks */}
          <div className={`text-white ${poppins.className}`}>
            {/* Badge jumlah awardee */}
            <div className="inline-flex items-center gap-2 bg-[#a8f070] px-5 py-2 rounded-full mb-6 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#2a411b]"
              >
                <path d="M11.7 1.7a.75.75 0 0 1 .6 0l9 4a.75.75 0 0 1 0 1.37l-9 4a.75.75 0 0 1-.6 0l-9-4a.75.75 0 0 1 0-1.37l9-4Z" />
                <path d="M3.5 9.4v3.9c0 .3.16.56.42.68l7.5 3.34c.37.16.79.16 1.16 0l7.5-3.34a.75.75 0 0 0 .42-.68V9.4l-7.92 3.52a2.25 2.25 0 0 1-1.66 0L3.5 9.4Z" />
              </svg>
              <span className="text-[#2a411b] font-bold text-sm tracking-wide">
                {totalScholarsLabel} Scholars
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-lg ${notoSerif.className}`}
            >
              Where Every <span className="text-[#a8f070]">Chapter</span> Began
            </h1>

            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl mb-8 drop-shadow">
              Since its inception in 2007, CSSMoRA ITS has fostered over {totalScholarsLabel}{' '}
              mahasantri. This number reflects not just a headcount, but a network of intelligence
              and integrity spreading across the nation.
            </p>

            <button
              type="button"
              onClick={handleScrollToScholars}
              className="group inline-flex items-center bg-[#a8f070] hover:bg-[#9be85f] text-[#2a411b] font-bold px-7 py-3.5 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0082c6]"
            >
              See All Scholars
              <ArrowRight />
            </button>
          </div>

          {/* Kanan: collage foto komunal (polaroid stacked) */}
          <div className="relative h-[340px] sm:h-[400px] lg:h-[460px] hidden sm:block">
            {COLLAGE.map((item, i) => (
              <figure
                key={item.src}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${item.rotate} ${item.extra} bg-white p-2.5 pb-8 rounded-md shadow-2xl transition-transform duration-300 hover:scale-[1.03] hover:rotate-0 hover:z-30`}
                style={{ zIndex: 10 + i }}
              >
                <div className="relative w-44 h-52 md:w-52 md:h-60 overflow-hidden rounded-sm bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="absolute bottom-2 left-0 right-0 text-center text-[11px] md:text-xs font-medium text-gray-600">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
