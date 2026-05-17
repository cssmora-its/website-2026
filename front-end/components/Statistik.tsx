// components/Statistik.tsx
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export default function Statistik() {
  
  const chartBars = [
    { width: '60%', label: 'Ini nama dept' },
    { width: '70%', label: '' },
    { width: '95%', label: '' },
    { width: '50%', label: '' },
    { width: '85%', label: '' },
    { width: '40%', label: '' },
    { width: '75%', label: '' },
    { width: '65%', label: '' },
    { width: '65%', label: '' },
    { width: '70%', label: '' },
    { width: '45%', label: '' },
    { width: '65%', label: '' },
    { width: '100%', label: '' },
    { width: '60%', label: '' },
    { width: '80%', label: '' },
    { width: '85%', label: '' },
    { width: '15%', label: '' },
    { width: '95%', label: '' },
  ];

  return (
    <section id="statistik" className={`w-full flex flex-col lg:flex-row ${poppins.className}`}>
      
      {/* =========================================
          KOLOM KIRI: Angka Statistik Utama (Putih)
      ========================================= */}
      <div className="relative w-full lg:w-[35%] bg-white py-20 flex flex-col items-center justify-center overflow-hidden">
        
        {/* =========================================
            KOREKSI MUTLAK: PATTERN DIKUNCI DI KIRI (ANTI-GESER)
        ========================================= */}
        {/* 1. WRAPPER BINGKAI: Mengunci ketat di kiri (left-0), setinggi layar (inset-y-0), 
               dan lebarnya dibatasi maksimal 180px agar tidak menabrak teks (overflow-hidden) */}
        <div className="absolute inset-y-0 left-0 w-[120px] md:w-[180px] overflow-hidden z-0 pointer-events-none flex items-center justify-center">
          
          {/* 2. BUNGA RAKSASA: Dimasukkan ke dalam bingkai, diputar 90 derajat. 
                 Sekarang ia tidak akan pernah bisa keluar dari batas 180px di tepi kiri! */}
          <div 
            className="w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] flex-shrink-0 rotate-90 opacity-100"
            style={{ 
              backgroundImage: 'url(/pattern.png)', 
              backgroundSize: 'contain', 
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat' 
            }}
          />
        </div>

        {/* Container Angka */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-10">
            <div className="flex flex-col items-center text-[#0082c6] mb-16 mt-4">
              <span className="text-[100px] md:text-[130px] font-bold leading-none tracking-tighter">122</span>
              <span className="text-xl md:text-2xl font-semibold mt-2">Active Student</span>
            </div>

            <div className="flex flex-col items-center text-[#0082c6] mb-4">
              <span className="text-[100px] md:text-[130px] font-bold leading-none tracking-tighter">203</span>
              <span className="text-xl md:text-2xl font-semibold mt-2">Alumni</span>
            </div>
        </div>

      </div>

      {/* =========================================
          KOLOM KANAN: Grafik Departemen (Biru)
      ========================================= */}
      <div className="w-full lg:w-[65%] bg-[#0082c6] py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white mb-12 md:mb-16 leading-[1.2]">
          Bridging Disciplines, Creating Impact
        </h2>

        <div className="relative w-full max-w-2xl border-l-[3px] border-b-[3px] border-white pl-3 md:pl-4 pb-3 md:pb-4 mt-4 ml-6 md:ml-8">
          
          <div className="absolute top-1/2 -left-12 md:-left-14 -translate-y-1/2 -rotate-90 origin-center text-white text-sm md:text-base font-medium tracking-wide">
            Jumlah
          </div>

          <div className="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-medium tracking-wide">
            Departemen
          </div>

          <div className="flex flex-col gap-[6px] md:gap-[8px] w-full pt-2">
            {chartBars.map((bar, index) => (
              <div key={index} className="flex items-center w-full">
                <div 
                  className="bg-[#a8f070] h-[10px] md:h-[14px] rounded-r-sm transition-all duration-500 hover:brightness-110" 
                  style={{ width: bar.width }}
                />
                {bar.label && (
                  <span className="text-white text-xs md:text-sm ml-3 whitespace-nowrap">
                    {bar.label}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}