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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#2a411b]">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span className="text-[#2a411b] font-bold text-sm tracking-wide italic">
              Prestasi Mahasantri
            </span>
          </div>

          {/* Judul Utama */}
          <h1 className={`text-4xl md:text-5xl lg:text-[68px] font-bold leading-[1.15] tracking-tight mb-8 drop-shadow-lg ${notoSerif.className}`}>
            Driven by <span className="text-[#a8f070]">Passion</span>, <br className="hidden md:block" /> Defined by Impact
          </h1>

          {/* Deskripsi */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mb-12 drop-shadow">
            Setiap cita yang diusahakan bersama, selalu ditenagai gairah tulus Renjana. Jelajahi kumpulan karya, inovasi, dan prestasi membanggakan yang kami persembahkan untuk almamater, pesantren, dan negeri.
          </p>

          {/* Tombol Scroll */}
          <a
            href="#prestasi-list"
            className="group inline-flex items-center bg-[#a8f070] hover:bg-[#9be85f] text-[#2a411b] font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0082c6]"
          >
            Explore Achievements
            <ArrowDown />
          </a>
        </div>

      </div>
    </section>
  );
}