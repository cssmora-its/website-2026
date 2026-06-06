// components/Statistik.tsx
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export default function Statistik() {
  
  // Data dipisah antara 'name' dan 'value' agar angka bisa diletakkan di sumbu Y
  const chartBars = [
    { width: '42.5%', name: 'Arsitektur', value: 8 },
    { width: '5.31%', name: 'Biologi', value: 1 },
    { width: '5.31%', name: 'Fisika', value: 1 },
    { width: '5.31%', name: 'Manajemen Bisnis', value: 1 },
    { width: '5.31%', name: 'Matematika', value: 1 },
    { width: '5.31%', name: 'Rekayasa Perangkat Lunak', value: 1 },
    { width: '74.37%', name: 'Sistem Informasi', value: 14 },
    { width: '69.06%', name: 'Statistika', value: 13 },
    { width: '5.31%', name: 'Teknik Fisika', value: 1 },
    { width: '85%', name: 'Teknik Informatika', value: 16 },
    { width: '26.56%', name: 'Teknik Komputer', value: 5 },
    { width: '5.31%', name: 'Teknik Lingkungan', value: 1 },
    { width: '5.31%', name: 'Teknik Perkapalan', value: 1 },
    { width: '47.81%', name: 'Teknik Sipil', value: 9 },
    { width: '74.37%', name: 'Teknik Sistem dan Industri', value: 14 },
    { width: '5.31%', name: 'Teknik Sistem Perkapalan', value: 1 },
    { width: '42.5%', name: 'Teknik Telekomunikasi', value: 8 },
    { width: '47.81%', name: 'Teknologi Informasi', value: 9 },
    { width: '47.81%', name: 'Teknologi Kedokteran', value: 9 },
  ];

  return (
    <section id="statistik" className={`w-full flex flex-col lg:flex-row ${poppins.className}`}>
      
      {/* =========================================
          KOLOM KIRI: Angka Statistik Utama (Putih)
      ========================================= */}
      <div className="relative w-full lg:w-[35%] bg-white py-16 md:py-20 flex flex-col items-center justify-center overflow-hidden">
        
        {/* Pattern Background */}
        <div className="absolute inset-y-0 left-0 w-[120px] md:w-[180px] overflow-hidden z-0 pointer-events-none flex items-center justify-center">
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
            <div className="flex flex-col items-center text-[#0082c6] mb-12 md:mb-16 mt-4">
              <span className="text-[100px] md:text-[130px] font-bold leading-none tracking-tighter">114</span>
              <span className="text-xl md:text-2xl font-semibold mt-2">Mahasiswa Aktif</span>
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
      <div className="w-full lg:w-[65%] bg-[#0082c6] py-16 md:py-20 px-4 md:px-16 lg:px-24 flex flex-col justify-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white mb-8 md:mb-16 text-center md:text-left leading-[1.2]">
          Lintas Disiplin,<br></br>Membawa Perubahan
        </h2>

        {/* BUNGKUS SCROLL HORIZONTAL KHUSUS HP
            Ini adalah kunci utamanya agar grafik tidak hancur di layar kecil
        */}
        <div className="w-full overflow-x-auto pb-8 pt-2 custom-scrollbar">
          
          {/* min-w-[550px] memastikan grafik memiliki lebar yang cukup dan tidak tergencet */}
          <div className="relative min-w-[550px] md:min-w-full max-w-2xl border-l-[3px] border-b-[3px] border-white pb-3 md:pb-4 mt-2 ml-10 md:ml-12 pr-6">
            
            {/* Label Sumbu X (Bawah) */}
            <div className="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-medium tracking-wide">
              Departemen
            </div>

            {/* Area Bar Chart */}
            <div className="flex flex-col gap-[6px] md:gap-[8px] w-full pt-2">
              {chartBars.map((bar, index) => (
                <div key={index} className="flex items-center w-full relative">
                  
                  {/* Angka (Value) ditarik ke kiri garis sumbu Y */}
                  <div className="absolute right-full mr-3 md:mr-4 w-6 text-right text-white text-xs md:text-sm font-bold opacity-90">
                    {bar.value}
                  </div>

                  {/* Balok Hijau */}
                  <div 
                    className="bg-[#a8f070] h-[10px] md:h-[14px] rounded-r-sm ml-2 md:ml-3 transition-all duration-500 hover:brightness-110" 
                    style={{ width: bar.width }}
                  />

                  {/* Label Nama Departemen */}
                  <span className="text-white text-xs md:text-sm ml-3 whitespace-nowrap">
                    {bar.name}
                  </span>
                  
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}