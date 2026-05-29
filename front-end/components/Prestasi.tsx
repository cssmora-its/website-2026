// components/Prestasi.tsx
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function Prestasi() {
  return (
    // 1. REVISI WARNA: Menggunakan biru yang sedikit lebih gelap (#007ab8) 
    //    ditambah efek shadow-inner tipis di atas untuk memisahkan dengan section sebelumnya
    <section id="prestasi" className="relative w-full bg-[#007ab8] py-20 lg:py-28 overflow-hidden shadow-[inset_0_15px_20px_-15px_rgba(0,0,0,0.1)]">
      
      {/* =========================================
          BACKGROUND PATTERN (KIRI & KANAN SAJA)
      ========================================= */}
      
      {/* Motif Kiri */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 -left-[200px] md:-left-[400px] w-[400px] md:w-[800px] h-[400px] md:h-[800px] z-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: 'url(/pattern-bg.png)', 
          backgroundSize: 'contain', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Motif Kanan */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 -right-[200px] md:-right-[400px] w-[400px] md:w-[800px] h-[400px] md:h-[800px] z-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: 'url(/pattern-bg.png)', 
          backgroundSize: 'contain', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 md:mb-14 text-center ${notoSerif.className}`}>
          Beyond the Horizons: Our Legacy of Excellence
        </h2>

        {/* White Card Container */}
        <div className="bg-white rounded-[32px] shadow-2xl p-6 md:p-12 w-full max-w-6xl flex flex-col">
          
          {/* =========================================
              SLIDER AREA
          ========================================= */}
          <div className="relative flex items-center justify-center w-full mb-12 py-8">
            
            {/* Panah Kiri */}
            <button className="absolute left-0 md:left-4 z-20 text-[#0082c6] hover:scale-110 transition-transform" aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Container 3 Foto */}
            <div className="flex items-center justify-center gap-4 md:gap-8 w-full px-12 md:px-24">
              
              {/* Foto Kiri (Lebih kecil, disembunyikan di HP) */}
              <div className="hidden md:flex flex-col w-[25%] aspect-[3/4] bg-gray-100 rounded-[16px] border-4 border-dashed border-gray-300 items-center justify-center text-gray-400 opacity-70">
                <span className={`font-medium text-sm ${poppins.className}`}>Foto 1</span>
              </div>

              {/* Foto Tengah (Besar & Menonjol) */}
              <div className="flex flex-col w-full md:w-[40%] aspect-[3/4] bg-gray-100 rounded-[20px] border-4 border-dashed border-gray-300 items-center justify-center text-gray-400 shadow-xl scale-105 md:scale-110 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className={`font-medium ${poppins.className}`}>Foto 2 (Aktif)</span>
              </div>

              {/* Foto Kanan (Lebih kecil, disembunyikan di HP) */}
              <div className="hidden md:flex flex-col w-[25%] aspect-[3/4] bg-gray-100 rounded-[16px] border-4 border-dashed border-gray-300 items-center justify-center text-gray-400 opacity-70">
                <span className={`font-medium text-sm ${poppins.className}`}>Foto 3</span>
              </div>

            </div>

            {/* Panah Kanan */}
            <button className="absolute right-0 md:right-4 z-20 text-[#0082c6] hover:scale-110 transition-transform" aria-label="Next">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>

          </div>

          {/* =========================================
              TEKS & TOMBOL BAWAH
          ========================================= */}
          <div className="flex flex-col items-start mt-2">
            <p className={`text-gray-600 text-[14px] md:text-[16px] max-w-4xl leading-relaxed mb-6 ${poppins.className}`}>
              Melampaui batas dan terus bertumbuh. Inilah jejak karya serta prestasi mahasantri CSSMoRA ITS yang mengharmonisasikan kecerdasan nalar teknologi dengan integritas dan semangat kesantrian di berbagai bidang.
            </p>
            <button className={`bg-[#a8f070] text-[#2a411b] font-bold text-[15px] md:text-[16px] px-8 py-3 rounded-lg shadow-md hover:scale-105 transition-transform ${poppins.className}`}>
              Read More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}