// components/Gallery.tsx
import Link from 'next/link';
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function Gallery() {
  return (
    <section id="gallery" className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#f8fafc]">
      
      {/* =========================================
          BACKGROUND PATTERN (FULL WIDTH)
      ========================================= */}
      <div 
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{ 
          backgroundImage: 'url(/pattern-border.png)', 
          // KUNCI PERUBAHAN: 100% auto akan memaksa gambar melebar full ke samping
          backgroundSize: '100% auto', 
          backgroundPosition: 'center center', 
          backgroundRepeat: 'no-repeat' 
        }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* =========================================
            HEADING "Gallery"
        ========================================= */}
        <h2 className={`text-4xl md:text-5xl font-bold text-[#0082c6] mb-12 ${notoSerif.className}`}>
          Capturing the Essense of Renjana
        </h2>

        {/* =========================================
            WHITE CARD CONTAINER UTAMA
        ========================================= */}
        <div className="bg-white rounded-[32px] shadow-2xl p-6 md:p-10 lg:p-12 w-full max-w-6xl flex flex-col">
          
          {/* Grid 2 Kolom untuk Foto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            
            {/* Placeholder Foto 1 */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] bg-gray-100 rounded-[20px] border-4 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className={`font-medium mt-2 ${poppins.className}`}>Area Foto 1</span>
            </div>

            {/* Placeholder Foto 2 */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] bg-gray-100 rounded-[20px] border-4 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className={`font-medium mt-2 ${poppins.className}`}>Area Foto 2</span>
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
              Read More
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}