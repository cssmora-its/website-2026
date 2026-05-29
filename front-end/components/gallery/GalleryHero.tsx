// components/gallery/GalleryHero.tsx
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function GalleryHero() {
  return (
    <section
      className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero-bg.png)' }}
    >
      {/* Gradient overlay — terang di atas, biru di bawah agar konten tetap kontras */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-[#0082c6]/55 to-[#0082c6]" />

      <div className="container mx-auto px-6 relative z-20 pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Kolom Kiri: Frame visual / placeholder foto */}
          <div className="order-2 lg:order-1 w-full">
            <div className="relative w-full aspect-[4/3] md:aspect-[5/4] rounded-[24px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/30">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="w-16 h-16 mb-3 opacity-80"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span className={`text-sm md:text-base font-medium ${poppins.className}`}>
                  Frame Foto Kabinet
                </span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Judul, deskripsi, filosofi, CTA */}
          <div className={`order-1 lg:order-2 flex flex-col text-white ${poppins.className}`}>
            {/* Filosofi Kabinet (badge) */}
            <div
              className={`inline-flex w-fit bg-[#79ba4e] px-5 py-2 rounded-xl mb-5 shadow-lg transform -rotate-1 ${poppins.className}`}
            >
              <span className="text-[#2a411b] font-bold italic text-base md:text-lg tracking-wide">
                Filosofi Kabinet Renjana Cita
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-[58px] font-bold mb-6 leading-[1.1] drop-shadow-lg ${notoSerif.className}`}
            >
              The Soul of <br className="hidden md:block" /> Renjana Cita
            </h1>

            <p className="text-[15px] md:text-[17px] text-white/95 leading-relaxed drop-shadow-md mb-8 text-justify">
              <span className="font-semibold italic">Renjana Cita</span>, Janji setiap Cita yang
              diusahakan bersama, selalu ditenagai gairah tulus Renjana. Kami bersatu dalam aksi,
              merajut simpul kekeluargaan, dan menyatukan langkah untuk melukis jejak pengabdian
              yang nyata.{' '}
              <span className="italic">
                Dive into the highlights of our journey and discover the essence of our work.
              </span>
            </p>

            <a
              href="#gallery-list"
              className={`bg-[#a8f070] text-[#2a411b] font-bold text-[15px] md:text-[16px] px-7 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform w-fit ${poppins.className}`}
            >
              Lihat Detail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
