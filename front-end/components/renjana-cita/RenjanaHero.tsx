// components/renjana-cita/RenjanaHero.tsx
import Link from 'next/link';
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 mx-1.5 opacity-80"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function RenjanaHero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero5.jpg)' }}
    >
      {/* Overlay gradient biru CSSMoRA */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/55 via-[#0082c6]/75 to-[#0082c6]" />

      <div
        className={`container mx-auto px-6 max-w-4xl relative z-20 w-full pt-28 pb-16 flex flex-col items-center text-center text-white ${poppins.className}`}
      >

        {/* Judul Utama (Ukuran diperbesar: text-6xl md:text-8xl lg:text-[110px]) */}
        <h1
          className={`text-6xl md:text-8xl lg:text-[110px] font-bold tracking-tighter mb-8 drop-shadow-lg leading-[0.95] ${notoSerif.className}`}
        >
          Renjana Cita
        </h1>

        {/* Badge tagline kabinet */}
        <div
          className={`inline-flex w-fit bg-[#a8f070] px-6 py-2.5 rounded-full mb-8 shadow-lg ${poppins.className}`}
        >
          <span className="text-[#2a411b] font-bold text-xs md:text-sm tracking-[0.12em] uppercase">
            The Pulse of Dedication 2025/2026
          </span>
        </div>

        {/* Deskripsi */}
        <p className="text-base md:text-xl text-white/95 leading-relaxed drop-shadow-md max-w-2xl">
          Mengenang inaugurasi &amp; perjalanan pengabdian Kabinet{' '}
          <span className="whitespace-nowrap">
            <span className="font-semibold italic">Renjana Cita</span> CSSMoRA ITS.
          </span>
        </p>
      </div>
    </section>
  );
}