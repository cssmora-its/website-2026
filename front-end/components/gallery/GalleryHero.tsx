// components/gallery/GalleryHero.tsx
'use client';

import { Noto_Serif, Poppins } from 'next/font/google';

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
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

export default function GalleryHero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero5.jpg)' }}
    >
      {/* Overlay gradient biru CSSMoRA — Sama persis dengan Awardee & Prestasi */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/55 via-[#0082c6]/75 to-[#0082c6]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20 w-full pt-28 md:pt-24 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Kiri: Konten Teks */}
          <div className={`text-white ${poppins.className}`}>
            
            {/* Badge Filosofi */}
            <div className="inline-flex items-center gap-2 bg-[#a8f070] px-5 py-2 rounded-full mb-6 shadow-lg">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4 text-[#2a411b]"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <span className="text-[#2a411b] font-bold text-sm tracking-wide italic">
                Filosofi Kabinet Renjana Cita
              </span>
            </div>

            {/* Judul Utama */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-lg ${notoSerif.className}`}
            >
              The Soul of <br className="hidden md:block" /> <span className="text-[#a8f070]">Renjana Cita</span>
            </h1>

            {/* Deskripsi */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl mb-8 drop-shadow">
              <span className="font-semibold italic">Renjana Cita</span>, Janji setiap Cita yang
              diusahakan bersama, selalu ditenagai gairah tulus Renjana. Kami bersatu dalam aksi,
              merajut simpul kekeluargaan, dan menyatukan langkah untuk melukis jejak pengabdian
              yang nyata.
            </p>

            {/* Tombol Scroll */}
            <a
              href="#gallery-list"
              className="group inline-flex items-center bg-[#a8f070] hover:bg-[#9be85f] text-[#2a411b] font-bold px-7 py-3.5 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0082c6] w-fit"
            >
              Lihat Detail
              <ArrowDown />
            </a>
          </div>

          {/* Kanan: Frame Foto Kabinet Berbingkai (Sama dengan AwardeeHero tapi dengan foto gallery) */}
          <div className="w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 mt-4 md:mt-0">
            <figure className="bg-white/10 p-2 md:p-3 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 hover:scale-[1.02] transition-transform duration-500 backdrop-blur-sm border border-white/20">
              <div className="relative aspect-[4/3] md:aspect-[5/4] w-full rounded-xl overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/gallery/kabinet2.jpg"
                  alt="Foto Kabinet Renjana Cita CSSMoRA ITS"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </figure>
          </div>

        </div>
      </div>
    </section>
  );
}