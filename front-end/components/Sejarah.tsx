"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

// Hanya menggunakan Poppins untuk seluruh halaman
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

const chairmanData = [
  { id: 1, name: 'Helvea Rezano (Mas Gori)', jurusan: 'Sistem Informasi 2006', tahun: '2007 - 2008', kabinet: '' },
  { id: 2, name: 'Imam Trio U', jurusan: 'Teknik Mesin 2007', tahun: '2008 - 2009', kabinet: '' },
  { id: 3, name: 'Ahmad Zahid A', jurusan: 'Teknik Industri 2007', tahun: '2009 - 2010', kabinet: '' },
  { id: 4, name: 'Darmawan Rasyid H', jurusan: 'Teknik Mesin 2008', tahun: '2010 - 2011', kabinet: '' },
  { id: 5, name: 'Ulir Rohwana', jurusan: 'Matematika 2009', tahun: '2011 - 2012', kabinet: '' },
  { id: 6, name: 'Mansur Maturidi A', jurusan: 'Teknik Industri 2010', tahun: '2012 - 2013', kabinet: '' },
  { id: 7, name: 'Suwarno', jurusan: 'Statistika 2011', tahun: '2013 - 2014', kabinet: '' },
  { id: 8, name: 'Nur Ahmad Syahid', jurusan: 'Teknik Elektro 2012', tahun: '2014 - 2015', kabinet: '' },
  { id: 9, name: 'M Khoirur Rokhman', jurusan: 'Teknik Lingkungan 2012', tahun: '2015 - 2016', kabinet: '' },
  { id: 10, name: 'Ahmad Athoillah', jurusan: 'Teknik Industri 2014', tahun: '2016 - 2017', kabinet: '' },
  { id: 11, name: 'Zishwa Muhammad Jauhar', jurusan: 'Teknik Elektro 2015', tahun: '2017 - 2018', kabinet: '' },
  { id: 12, name: 'Ainul Imam', jurusan: 'Matematika 2016', tahun: '2018 - 2019', kabinet: '' },
  { id: 13, name: 'M Salman Aqil', jurusan: 'Teknik Industri 2017', tahun: '2019 - 2020', kabinet: '' },
  { id: 14, name: 'Misbah Choirul Humam', jurusan: 'Teknik Industri 2018', tahun: '2020 - 2023', kabinet: '' },
  { id: 15, name: 'Ilham Insan Wafi', jurusan: 'Teknik Informatika 2021', tahun: '2023 - 2024', kabinet: '' },
  { id: 16, name: 'Wildan Nazhif Irsyadi', jurusan: 'Statistika 2022', tahun: '2024 - 2025', kabinet: '' },
  { id: 17, name: 'Nabiel Nizar Anwari', jurusan: 'Teknologi Informasi 2023', tahun: '2025 - 2026', kabinet: 'Kabinet Renjana Cita' },
];

export default function Sejarah() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timelineContentRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Efek Scroll HANYA berlaku untuk Desktop
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return; 
      if (!scrollContainerRef.current || !timelineContentRef.current) return;

      const { top, height } = scrollContainerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollDistance = height - viewportHeight;

      let currentProgress = -top / scrollDistance;
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      setProgress(currentProgress);

      const maxTranslate = timelineContentRef.current.scrollWidth - window.innerWidth;
      if (maxTranslate > 0) {
        setTranslateX(-(currentProgress * maxTranslate));
      }

      const currentActiveIndex = Math.round(currentProgress * (chairmanData.length - 1));
      setActiveIndex(currentActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="sejarah" className={`relative w-full flex flex-col bg-white ${poppins.className}`}>

      {/* =========================================
          BAGIAN 1: Where the Heart Belongs
      ========================================= */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-[150px] sm:h-[250px] md:h-[350px] z-0 opacity-80 pointer-events-none"
          style={{ backgroundImage: 'url(/pattern-border.png)', backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat' }}
        />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          
          {/* Dekorasi Polaroid Kiri Atas */}
          <div className="hidden lg:block absolute top-10 left-10 transform -rotate-12 bg-white p-3 shadow-xl w-64 h-72 rounded-sm">
             <div className="relative w-full h-5/6 bg-gray-200 overflow-hidden">
                <Image 
                  src="/station1.jpeg" 
                  alt="Foto Station 1" 
                  fill 
                  className="object-cover" 
                />
             </div>
             <div className="absolute -top-3 left-4 w-5 h-5 bg-gray-300 rounded-full shadow-sm" />
          </div>

          {/* Dekorasi Polaroid Kanan Bawah */}
          <div className="hidden lg:block absolute bottom-0 right-10 transform rotate-12 bg-white p-3 shadow-xl w-64 h-72 rounded-sm">
             <div className="relative w-full h-5/6 bg-gray-200 overflow-hidden">
                <Image 
                  src="/station2.jpeg" 
                  alt="Foto Station 2" 
                  fill 
                  className="object-cover" 
                />
             </div>
          </div>

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="relative w-[280px] h-[70px] md:w-[450px] md:h-[110px] mb-8">
              <Image src="/logo-color-clean.png" alt="Logo CSSMoRA ITS" fill className="object-contain" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0082c6] mb-8">
              Where the Heart Belongs
            </h2>

            <div className="text-gray-600 space-y-6 text-[14px] md:text-[16px] leading-relaxed text-justify md:text-center">
              <p>
                Jauh sebelum nama CSSMoRA menggema di kampus Ibu yang Luhur, harmoni mahasantri PBSB di ITS telah terpupuk sejak 19 Mei 2007 melalui komunitas HADITS (Himpunan Anak Depag ITS). Diprakarsai oleh Mas Gori (Sistem Informasi 2006), perkumpulan ini lahir sebagai rumah dan tempat berpulang yang hangat bagi para mahasantri di tengah dinamika akademis.
              </p>
              <p>
                Moving forward with a bigger vision, organisasi ini resmi bertransformasi dan menyandang nama CSSMoRA ITS pada 13 Juli 2008. Evolusi ini menandai babak baru bagi kami untuk terus mengukuhkan peran sebagai wadah dedikasi, kolaborasi, dan tempat pulang bagi seluruh mahasantri dari masa ke masa.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* =========================================
          BAGIAN 2A: TAMPILAN DESKTOP (STICKY TIMELINE)
      ========================================= */}
      <div ref={scrollContainerRef} className="hidden md:block relative h-[500vh] w-full bg-[#f4fbfc]">
        
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          
          <div className="flex flex-col items-center relative z-20 mb-8 pt-10">
            <h2 className="text-4xl font-bold text-[#0082c6] mb-4">
              History of the Chairman
            </h2>
            <div className="bg-[#a8f070] px-8 py-3 rounded-lg shadow-md transform -rotate-2">
              <span className="text-[#2a411b] font-bold text-3xl tracking-wide">
                CSSMoRA ITS
              </span>
            </div>
          </div>

          <div className="w-full relative h-[450px] flex items-center mt-6">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
              <div className="w-[46px] h-[46px] rounded-full border-[4px] border-[#0082c6] bg-white flex items-center justify-center shadow-[0_0_15px_rgba(0,130,198,0.4)]">
                <div className="w-[18px] h-[18px] rounded-full bg-[#a8f070] shadow-sm" />
              </div>
            </div>

            <div 
              ref={timelineContentRef} 
              className="relative flex items-center h-full w-max transition-transform duration-100 ease-out will-change-transform"
              style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
            >
              <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gray-200 -translate-y-1/2 -z-20" />
              <div 
                className="absolute top-1/2 left-0 h-[4px] bg-[#3a5a24] -translate-y-1/2 z-0 transition-all duration-300" 
                style={{ width: `calc(50vw - 140px + ${activeIndex * 280}px)` }} 
              />
              <div className="w-[calc(50vw-140px)] flex-shrink-0" />

              {chairmanData.map((item, index) => {
                const isActive = index <= activeIndex; 
                const isCurrent = index === activeIndex; 
                const tahunAwal = item.tahun.split(' ')[0];

                return (
                  <div key={item.id} className="relative w-[280px] flex-shrink-0 flex flex-col items-center justify-center h-full">
                    
                    <div className={`absolute top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full transition-all duration-500 z-10 
                      ${isActive ? 'bg-[#3a5a24] scale-125 shadow-[0_0_10px_#a8f070]' : 'bg-gray-300'}`} 
                    />

                    <div className={`absolute top-[120px] text-[32px] font-extrabold transition-all duration-500 tracking-wider
                      ${isCurrent ? 'text-[#0082c6] scale-110 drop-shadow-md' : isActive ? 'text-gray-400' : 'text-gray-200'}`}>
                      {tahunAwal}
                    </div>

                    <div 
                      className={`absolute top-[280px] w-[240px] bg-white border border-gray-100 shadow-xl rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-700 ease-out 
                      ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}
                    >
                       <span className="font-bold text-gray-900 mb-1 leading-tight text-[16px]">{item.name}</span>
                       <span className="text-xs font-medium text-gray-500">{item.jurusan}</span>
                       <span className="text-xs font-bold text-[#0082c6] mt-2 bg-blue-50 px-3 py-1 rounded-full">{item.tahun}</span>
                       
                       {item.kabinet && (
                         <span className="text-[#3a5a24] font-bold mt-3 bg-[#a8f070]/30 px-3 py-1.5 rounded-full text-[10px] tracking-wider uppercase">
                           {item.kabinet}
                         </span>
                       )}
                    </div>

                  </div>
                )
              })}
              <div className="w-[calc(50vw-140px)] flex-shrink-0" />
            </div>
          </div>

          <div 
            className="absolute bottom-0 left-0 w-full h-[200px] z-0 opacity-20 pointer-events-none transform rotate-180"
            style={{ backgroundImage: 'url(/pattern-border.png)', backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat' }}
          />
        </div>
      </div>


      {/* =========================================
          BAGIAN 2B: TAMPILAN MOBILE (VERTIKAL NORMAL)
      ========================================= */}
      <div className="block md:hidden relative w-full bg-[#f4fbfc] py-16 px-6 overflow-hidden">
        
        <div className="flex flex-col items-center relative z-20 mb-16">
            <h2 className="text-3xl font-bold text-[#0082c6] mb-4">
              History of the Chairman
            </h2>
            <div className="bg-[#a8f070] px-6 py-2 rounded-lg shadow-md transform -rotate-2">
              <span className="text-[#2a411b] font-bold text-xl tracking-wide">
                CSSMoRA ITS
              </span>
            </div>
        </div>

        {/* Garis Vertikal dan Kartu Data */}
        <div className="relative border-l-[3px] border-gray-200 ml-4 space-y-12 pb-12">
            
            {chairmanData.map((item) => {
                const tahunAwal = item.tahun.split(' ')[0];
                return (
                    <div key={item.id} className="relative pl-8">
                        
                        <div className="absolute -left-[11px] top-2 w-[18px] h-[18px] rounded-full bg-[#3a5a24] shadow-[0_0_10px_#a8f070]" />

                        <div className="text-3xl font-extrabold text-[#0082c6] mb-3 tracking-wider drop-shadow-sm">
                            {tahunAwal}
                        </div>

                        <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-5 flex flex-col items-start text-left">
                           <span className="font-bold text-gray-900 mb-1 leading-tight text-[16px]">{item.name}</span>
                           <span className="text-xs font-medium text-gray-500">{item.jurusan}</span>

                           <span className="text-xs font-bold text-[#0082c6] mt-3 bg-blue-50 px-3 py-1 rounded-full">{item.tahun}</span>

                           {item.kabinet && (
                             <span className="text-[#3a5a24] font-bold mt-4 bg-[#a8f070]/30 px-3 py-1.5 rounded-full text-[10px] tracking-wider uppercase">
                               {item.kabinet}
                             </span>
                           )}
                        </div>
                    </div>
                )
            })}

        </div>

        <div 
          className="absolute bottom-0 left-0 w-full h-[100px] z-0 opacity-20 pointer-events-none transform rotate-180"
          style={{ backgroundImage: 'url(/pattern-border.png)', backgroundSize: 'auto 100%', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat' }}
        />
      </div>

    </section>
  );
}