// components/awardee/AwardeeHero.tsx
'use client';

import { Noto_Serif, Poppins } from 'next/font/google';
import { totalScholarsLabel } from './awardeeData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Empat foto komunal untuk collage hero — tata letak rapi 2x2 dengan kemiringan
// halus (selaras desain Figma), bukan tumpukan berantakan. Kolom kanan digeser
// turun sedikit agar dinamis namun tetap teratur. Ganti path bila ada foto yang
// lebih sesuai di /public.
const PHOTOS = [
  { src: '/us-1.png', alt: 'Kebersamaan mahasantri CSSMoRA ITS', tilt: '-rotate-3', offset: '' },
  { src: '/us-2.png', alt: 'Kegiatan komunitas CSSMoRA ITS', tilt: 'rotate-3', offset: 'sm:translate-y-6' },
  { src: '/gallery/BPH_Welpar.jpg', alt: 'Wisuda mahasantri CSSMoRA ITS', tilt: 'rotate-2', offset: '' },
  { src: '/gallery/Dagri_CSS Tabah.jpeg', alt: 'Anggota CSSMoRA ITS', tilt: '-rotate-2', offset: 'sm:translate-y-6' },
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
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero5.jpg)' }}
    >
      {/* Overlay gradient biru CSSMoRA — selaras dengan hero subpage lainnya */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/55 via-[#0082c6]/75 to-[#0082c6]" />

      {/* Container diubah padding-nya (pt-28 pb-16) agar vertikal center proporsional di layar penuh */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 w-full pt-28 md:pt-24 pb-16 md:pb-20">
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
                {totalScholarsLabel} Mahasantri
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-lg ${notoSerif.className}`}
            >
              Tempat Setiap <span className="text-[#a8f070]"><br />Langkah</span> Bermula
            </h1>

            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl mb-8 drop-shadow">
              Sejak berdiri pada 2007, CSSMoRA ITS telah membina lebih dari {totalScholarsLabel}{' '}
              mahasantri. Angka ini bukan sekadar jumlah, melainkan jejaring kecerdasan dan
              integritas yang menyebar ke seluruh penjuru negeri.
            </p>

            <button
              type="button"
              onClick={handleScrollToScholars}
              className="group inline-flex items-center bg-[#a8f070] hover:bg-[#9be85f] text-[#2a411b] font-bold px-7 py-3.5 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0082c6]"
            >
              Lihat Semua Mahasantri
              <ArrowRight />
            </button>
          </div>

          {/* Kanan: collage 4 foto, tata letak 2x2 rapi dengan kemiringan halus */}
          <div className="hidden sm:grid grid-cols-2 gap-4 md:gap-5 w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
            {PHOTOS.map((item) => (
              <figure
                key={item.src}
                className={`bg-white p-2 rounded-xl shadow-2xl ${item.tilt} ${item.offset} hover:rotate-0 hover:scale-[1.04] hover:z-10 transition-transform duration-300`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                </div>
              </figure>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}