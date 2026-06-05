// components/prestasi/PrestasiHero.tsx
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function PrestasiHero() {
  return (
    <section
      className="relative w-full min-h-[80vh] md:min-h-screen flex items-end overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero4.jpg)' }}
    >
      {/* Overlay gradient biru CSSMoRA — selaras dengan hero subpage lainnya */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-[#0082c6]/65 to-[#0082c6]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className={`max-w-3xl text-white ${poppins.className}`}>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-lg ${notoSerif.className}`}
          >
            Driven by Passion, Defined by Impact
          </h1>

          <p className="text-base md:text-lg text-white/95 leading-relaxed drop-shadow max-w-2xl">
            Setiap cita yang diusahakan bersama, selalu ditenagai gairah tulus Renjana. Jelajahi
            kumpulan karya, inovasi, dan prestasi membanggakan yang kami persembahkan untuk
            almamater, pesantren, dan negeri.
          </p>

          {/* Decorative line tipis di bawah subtitle */}
          <div className="mt-6 h-[2px] w-40 md:w-56 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
}
