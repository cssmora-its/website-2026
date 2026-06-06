"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function RenjanaCita() {
  const departemenImages = [
    "/BPH.png",
    "/BIRO PERSONALIA.png",
    "/DAGRI.png",
    "/KESMA.png",
    "/MEDIA INFORMASI.png",
    "/P3M.png",
    "/PSDM.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? departemenImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === departemenImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="renjana-cita" 
      // Di laptop: tinggi menyesuaikan layar (maks 1080px). Di HP: mengalir normal dengan padding
      className="w-full bg-[#0082c6] py-16 lg:py-0 lg:h-screen lg:max-h-[1080px] lg:min-h-[850px] flex items-center overflow-hidden"
    >
      
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

        {/* =========================================
            KOLOM KIRI: Teks & Ikon
        ========================================= */}
        <div className={`flex flex-col text-white ${poppins.className} lg:pr-8`}>
           {/* Teks Judul Disesuaikan */}
           <h2 className={`text-4xl md:text-5xl lg:text-[48px] font-bold mb-4 lg:mb-5 leading-[1.1] ${notoSerif.className}`}>
             Hati dibalik <br /> Renjana Cita
           </h2>
           <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white/95 leading-relaxed mb-8 lg:mb-8 text-justify">
             Di balik gerak progresif CSSMoRA ITS, hadir gerak pengabdian dari mahasantri yang bergerak dalam satu frekuensi. Kami bukan sekadar pengurus, melainkan sebuah keluarga yang mendedikasikan diri untuk merawat harmoni dan menumbuhkan potensi. Melalui semangat ketulusan Renjana dalam menggapai Cita, setiap inovasi dan program yang kami bangun adalah langkah nyata untuk membawa santri scholars lebih dekat pada kemaslahatan.
           </p>

           {/* Spasi antar poin dipadatkan (space-y-5) */}
           <div className="space-y-5 lg:space-y-6 mt-2">
             <div className="flex items-start gap-4 md:gap-5">
               <div className="relative flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
                 <Image src="/logo-depart.png" alt="Icon 7 Divisions" fill className="object-contain" />
               </div>
               <div>
                 <h3 className="text-lg md:text-[20px] font-bold mb-1.5">7 Divisi dan Biro</h3>
                 <p className="text-[13px] md:text-[14px] lg:text-[15px] text-white/90 leading-snug text-justify">
                   Tujuh pilar badan, departemen dan biro CSSMoRA ITS yang saling bersinergi dalam mewujudkan tata kelola organisasi yang profesional dan berkelanjutan.
                 </p>
               </div>
             </div>

             <div className="flex items-start gap-4 md:gap-5">
               <div className="relative flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
                 <Image src="/logo-santri.png" alt="Icon 100+ Mahasantri" fill className="object-contain" />
               </div>
               <div>
                 <h3 className="text-lg md:text-[20px] font-bold mb-1.5">100+ Dedikasi Mahasantri</h3>
                 <p className="text-[13px] md:text-[14px] lg:text-[15px] text-white/90 leading-snug text-justify">
                   Lebih dari seratus mahasantri berdedikasi tinggi yang bersatu dalam semangat kekeluargaan untuk membawa dampak positif bagi anggota dan masyarakat.
                 </p>
               </div>
             </div>

             <div className="flex items-start gap-4 md:gap-5">
               <div className="relative flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
                 <Image src="/logo-agenda.png" alt="Icon 30+ Programs" fill className="object-contain" />
               </div>
               <div>
                 <h3 className="text-lg md:text-[20px] font-bold mb-1.5">30+ Program & Agenda</h3>
                 <p className="text-[13px] md:text-[14px] lg:text-[15px] text-white/90 leading-snug text-justify">
                   Dengan lebih dari 30 program kerja dan agenda unggulan, Kabinet Renjana Cita berfokus mengaktualisasikan nilai luhur kesantrian melalui inovasi dan pengabdian nyata.
                 </p>
               </div>
             </div>
           </div>
        </div>

        {/* =========================================
            KOLOM KANAN: Frame Slider Foto
        ========================================= */}
        {/* Lebar maksimal diperkecil sedikit agar tinggi foto tidak over (proporsional 4/5) */}
        <div className="flex flex-col w-full max-w-[450px] lg:max-w-[480px] mx-auto lg:ml-auto mt-6 lg:mt-0">
           
           {/* Frame Foto Utama (Slider) */}
           <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden shadow-2xl bg-gray-200">
             <Image 
               src={departemenImages[currentIndex]} 
               alt={`Foto Departemen ${currentIndex + 1}`} 
               fill 
               className="object-cover transition-opacity duration-500" 
             />
           </div>

           {/* Baris Kontrol (Slider Counter, Tombol, Panah) */}
           <div className="flex items-center justify-between w-full mt-5 md:mt-6 text-white">
             
             {/* Indikator Angka */}
             <span className={`text-xl md:text-2xl font-medium ${poppins.className}`}>
               {currentIndex + 1}/{departemenImages.length}
             </span>

             {/* Tombol Lihat Detail */}
             <Link href="/renjana-cita" className={`inline-block bg-[#a8f070] text-[#2a411b] font-bold text-[15px] md:text-[16px] px-6 py-2.5 md:py-3 rounded-lg shadow-lg hover:scale-105 transition-transform ${poppins.className}`}>
               Lihat Detail
             </Link>

             {/* Tombol Navigasi Panah */}
             <div className="flex gap-3 md:gap-5">
               <button onClick={handlePrev} className="cursor-pointer hover:opacity-75 transition-opacity" aria-label="Previous">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                 </svg>
               </button>
               <button onClick={handleNext} className="cursor-pointer hover:opacity-75 transition-opacity" aria-label="Next">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                 </svg>
               </button>
             </div>

           </div>

        </div>

      </div>

    </section>
  );
}