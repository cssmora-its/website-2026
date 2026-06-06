// components/prestasi/PrestasiHero.tsx
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Ikon panah ke bawah untuk tombol
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

export default function PrestasiHero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero5.jpg)' }}
    >
      {/* Overlay gradient biru CSSMoRA — Tetap konsisten dengan Awardee & Gallery */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/55 via-[#0082c6]/75 to-[#0082c6]" />

      {/* Container utama dibuat fleksibel untuk vertikal center yang presisi */}
      <div className="container mx-auto px-6 max-w-5xl relative z-20 w-full pt-28 pb-20 flex flex-col items-center text-center">
        
        <div className={`text-white flex flex-col items-center ${poppins.className}`}>
          
          {/* Badge Prestasi */}
          <div className="inline-flex items-center justify-center gap-2 bg-[#a8f070] px-6 py-2.5 rounded-full mb-6 shadow-lg">
            {/* Ikon Bintang/Medali */}
            <span className="text-[#2a411b] font-bold text-sm tracking-wide uppercase">
              Prestasi Mahasantri
            </span>
          </div>

          {/* Judul Utama */}
          <h1 className={`text-4xl md:text-5xl lg:text-[68px] font-bold leading-[1.15] tracking-tight mb-8 drop-shadow-lg ${notoSerif.className}`}>
            Digerakkan oleh <span className="text-[#a8f070]">Semangat</span>, <br className="hidden md:block" /> Diarahkan oleh Tujuan
          </h1>

          {/* Deskripsi */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-4xl mb-12 drop-shadow">
            Setiap cita yang diusahakan bersama, selalu ditenagai gairah tulus Renjana.<br /> Jelajahi kumpulan karya, inovasi, dan prestasi membanggakan yang kami persembahkan untuk almamater, pesantren, dan negeri.
          </p>

          {/* Tombol Scroll */}
          <a
            href="#prestasi-list"
            className="group inline-flex items-center bg-[#a8f070] hover:bg-[#9be85f] text-[#2a411b] font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0082c6]"
          >
            Jelajahi Prestasi
            <ArrowDown />
          </a>
        </div>

      </div>
    </section>
  );
}