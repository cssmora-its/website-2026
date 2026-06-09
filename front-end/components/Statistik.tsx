// components/Statistik.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export default function Statistik() {
  const [displayMahasiswa, setDisplayMahasiswa] = useState(0);
  const [displayAlumni, setDisplayAlumni] = useState(0);
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationDone = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationDone.current) {
          animationDone.current = true;
          
          // Animate angka 116
          let currentMahasiswa = 0;
          const mahasiswaInterval = setInterval(() => {
            currentMahasiswa += Math.ceil(116 / 50);
            if (currentMahasiswa >= 116) {
              setDisplayMahasiswa(116);
              clearInterval(mahasiswaInterval);
            } else {
              setDisplayMahasiswa(currentMahasiswa);
            }
          }, 30);

          // Animate angka 203
          let currentAlumni = 0;
          const alumniInterval = setInterval(() => {
            currentAlumni += Math.ceil(203 / 50);
            if (currentAlumni >= 203) {
              setDisplayAlumni(203);
              clearInterval(alumniInterval);
            } else {
              setDisplayAlumni(currentAlumni);
            }
          }, 30);

          // Trigger bar animation
          setTimeout(() => setAnimateBars(true), 200);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Data dipisah antara 'name' dan 'value' agar angka bisa diletakkan di sumbu Y
  const chartBars = [
    { width: '40%', name: 'Arsitektur', value: 8 },
    { width: '5%', name: 'Biologi', value: 1 },
    { width: '5%', name: 'Fisika', value: 1 },
    { width: '5%', name: 'Manajemen Bisnis', value: 1 },
    { width: '5%', name: 'Matematika', value: 1 },
    { width: '5%', name: 'Rekayasa Perangkat Lunak', value: 1 },
    { width: '70%', name: 'Sistem Informasi', value: 14 },
    { width: '70%', name: 'Statistika', value: 14 },
    { width: '5%', name: 'Teknik Fisika', value: 1 },
    { width: '80%', name: 'Teknik Informatika', value: 16 },
    { width: '30%', name: 'Teknik Komputer', value: 6 },
    { width: '5%', name: 'Teknik Lingkungan', value: 1 },
    { width: '5%', name: 'Teknik Perkapalan', value: 1 },
    { width: '45%', name: 'Teknik Sipil', value: 9 },
    { width: '70%', name: 'Teknik Sistem dan Industri', value: 14 },
    { width: '5%', name: 'Teknik Sistem Perkapalan', value: 1 },
    { width: '40%', name: 'Teknik Telekomunikasi', value: 8 },
    { width: '45%', name: 'Teknologi Informasi', value: 9 },
    { width: '45%', name: 'Teknologi Kedokteran', value: 9 },
  ];

  return (
    <section ref={sectionRef} id="statistik" className={`w-full min-h-screen lg:min-h-[1080px] lg:max-h-[1080px] flex flex-col lg:flex-row overflow-hidden ${poppins.className}`}>
      
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
              <span className="text-[100px] md:text-[130px] font-bold leading-none tracking-tighter">
                {displayMahasiswa}
              </span>
              <span className="text-xl md:text-2xl font-semibold mt-2">Mahasiswa Aktif</span>
            </div>

            <div className="flex flex-col items-center text-[#0082c6] mb-4">
              <span className="text-[100px] md:text-[130px] font-bold leading-none tracking-tighter">
                {displayAlumni}
              </span>
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

        {/* BUNGKUS GRAFIK TANPA SCROLL HORIZONTAL */}
        <div className="w-full pb-8 pt-2">
          
          {/* Lebar grafik dipaksa menyesuaikan ukuran layar tanpa min-width  */}
          <div className="relative w-full max-w-2xl border-l-[3px] border-b-[3px] border-white pb-3 md:pb-4 mt-2 ml-10 md:ml-12 pr-2 md:pr-6">
            
            {/* Label Sumbu X (Bawah) */}
            <div className="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-medium tracking-wide">
              Departemen
            </div>

            {/* Area Bar Chart */}
            {/* Lebar container balok dibatasi agar ada ruang untuk text label (menghindari offside/overflow di layar kecil) */}
            <div className="flex flex-col gap-[6px] md:gap-[8px] w-[40%] sm:w-[50%] md:w-[65%] lg:w-[75%] pt-2">
              {chartBars.map((bar, index) => (
                <div key={index} className="flex items-center w-full relative">
                  
                  {/* Angka (Value) ditarik ke kiri garis sumbu Y */}
                  <div className="absolute right-full mr-2 md:mr-4 w-6 text-right text-white text-[10px] sm:text-xs md:text-sm font-bold opacity-90">
                    {bar.value}
                  </div>

                  {/* Balok Hijau */}
                  <div 
                    className={`bg-[#a8f070] h-[10px] md:h-[12px] rounded-r-sm ml-2 md:ml-3 shrink-0 transition-all ${animateBars ? 'duration-1000' : 'duration-0'} hover:brightness-110`}
                    style={{ 
                      width: animateBars ? bar.width : '0%',
                    }}
                  />

                  {/* Label Nama Departemen */}
                  <span className="text-white text-[10px] sm:text-xs md:text-sm ml-2 md:ml-3 whitespace-nowrap">
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