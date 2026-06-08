// components/Gallery.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function Gallery() {
  return (
    <section id="gallery" className="relative w-full min-h-screen lg:min-h-[1080px] lg:max-h-[1080px] py-20 lg:py-28 overflow-hidden bg-[#f8fafc] flex items-center">
      
      {/* =========================================
          BACKGROUND PATTERN (FULL WIDTH)
      ========================================= */}
      <div 
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{ 
          backgroundImage: 'url(/pattern-border.png)', 
          backgroundSize: '100% auto', 
          backgroundPosition: 'center center', 
          backgroundRepeat: 'no-repeat' 
        }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* =========================================
            HEADING "Gallery"
        ========================================= */}
        <h2 className={`text-4xl md:text-5xl font-bold text-[#0082c6] mb-12 text-center ${notoSerif.className}`}>
          Mengabadikan Esensi Renjana
        </h2>

        {/* =========================================
            WHITE CARD CONTAINER UTAMA
        ========================================= */}
        <div className="bg-white rounded-[32px] shadow-2xl p-6 md:p-10 lg:p-12 w-full max-w-6xl flex flex-col">
          
          {/* Grid 2 Kolom untuk Foto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            
            {/* Foto 1 */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] bg-gray-200 rounded-[20px] overflow-hidden shadow-md group cursor-pointer">
              <Image 
                src="/gallery/Dagri_Station.jpeg" // Ganti dengan nama file aslimu nanti
                alt="Gallery CSSMoRA ITS 1"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Foto 2 */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] bg-gray-200 rounded-[20px] overflow-hidden shadow-md group cursor-pointer">
              <Image 
                src="/gallery/Dagri_Halbil.jpg" // Ganti dengan nama file aslimu nanti
                alt="Gallery CSSMoRA ITS 2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>

          {/* Area Teks & Tombol di Bawah Grid */}
          <div className="flex flex-col items-start gap-6">
            <p className={`text-gray-600 text-[15px] md:text-[17px] max-w-4xl leading-relaxed ${poppins.className}`}>
              Setiap bingkai adalah cerita tentang semangat yang terus bertumbuh dan jejak nyata yang kami tinggalkan untuk sesama.
            </p>
            <Link
              href="/gallery"
              className={`inline-block bg-[#a8f070] text-[#2a411b] font-bold text-[16px] md:text-[17px] px-8 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-transform ${poppins.className}`}
            >
              Lihat Detail
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}