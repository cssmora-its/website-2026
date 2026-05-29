// components/renjana-cita/RenjanaHero.tsx
import Link from 'next/link';
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Ikon chevron kecil untuk breadcrumb
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
      className="relative w-full min-h-[78vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero-bg.png)' }}
    >
      {/* Overlay gradient: gelap di atas → biru CSSMoRA di bawah agar menyatu
          dengan section pills berwarna terang di bawahnya */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-[#0082c6]/65 to-[#0082c6]" />

      <div
        className={`container mx-auto px-6 max-w-4xl relative z-20 pt-28 md:pt-32 pb-16 md:pb-20 flex flex-col items-center text-center text-white ${poppins.className}`}
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center justify-center text-[13px] md:text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight />
              <span className="text-white font-medium">Kabinet</span>
            </li>
          </ol>
        </nav>

        <h1
          className={`text-4xl md:text-6xl lg:text-[64px] font-bold tracking-tight mb-5 drop-shadow-lg ${notoSerif.className}`}
        >
          Renjana Cita
        </h1>

        {/* Badge tagline kabinet */}
        <div
          className={`inline-flex w-fit bg-[#a8f070] px-5 md:px-6 py-2 md:py-2.5 rounded-full mb-6 shadow-lg ${poppins.className}`}
        >
          <span className="text-[#2a411b] font-bold text-xs md:text-sm tracking-[0.12em] uppercase">
            The Pulse of Dedication 2025/2026
          </span>
        </div>

        <p className="text-base md:text-xl text-white/95 leading-relaxed drop-shadow-md max-w-2xl">
          Mengenang inaugurasi &amp; perjalanan pengabdian Kabinet{' '}
          <span className="font-semibold italic">Renjana Cita</span> CSSMoRA ITS.
        </p>
      </div>
    </section>
  );
}
