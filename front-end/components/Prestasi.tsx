"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function Prestasi() {
  // Daftar 5 foto prestasi (tidak boleh lebih/kurang)
  const prestasiImages = [
    "/prestasi/Arundaya Nurhasan.jpg",
    "/prestasi/fakhri.jpeg",
    "/prestasi/nabiel.jpeg",
    "/prestasi/Arkan Zahir.jpeg",
    "/prestasi/Farchan The Alchemist.jpg",
    "/prestasi/Naufal Mahdy.jpg",
    "/prestasi/anjar kusumawati.JPG"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Status pembatas (True jika berada di ujung)
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === prestasiImages.length - 1;

  // Fungsi Panah Kiri (Mundur) - Hanya jalan jika BUKAN yang pertama
  const handlePrev = () => {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Fungsi Panah Kanan (Maju) - Hanya jalan jika BUKAN yang terakhir
  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section id="prestasi" className="relative w-full bg-[#007ab8] py-20 lg:py-28 overflow-hidden shadow-[inset_0_15px_20px_-15px_rgba(0,0,0,0.1)]">
      
      {/* BACKGROUND PATTERN */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 -left-[200px] md:-left-[400px] w-[400px] md:w-[800px] h-[400px] md:h-[800px] z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'url(/pattern-bg.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      />
      <div 
        className="absolute top-1/2 -translate-y-1/2 -right-[200px] md:-right-[400px] w-[400px] md:w-[800px] h-[400px] md:h-[800px] z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'url(/pattern-bg.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 md:mb-14 text-center ${notoSerif.className}`}>
          Jejak Langkah Prestasi
        </h2>

        <div className="bg-white rounded-[32px] shadow-2xl p-6 md:p-12 w-full max-w-6xl flex flex-col">
          
          {/* =========================================
              SLIDER AREA BERANIMASI
          ========================================= */}
          <div className="relative flex items-center justify-center w-full h-[400px] md:h-[550px] mb-8 md:mb-12 overflow-hidden">
            
            {/* Tombol Kiri (Dengan Kondisi Disabled) */}
            <button 
              onClick={handlePrev} 
              disabled={isFirst}
              className={`absolute left-0 md:left-4 z-30 transition-all duration-300 
                ${isFirst ? 'opacity-20 cursor-not-allowed text-gray-400' : 'opacity-100 text-[#0082c6] hover:scale-110 cursor-pointer'}`} 
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Container Rendering 5 Foto Sekaligus (Ditumpuk) */}
            {prestasiImages.map((src, index) => {
              // Menghitung jarak relatif foto ini dengan foto yang sedang aktif
              const offset = index - currentIndex;
              
              // Logika CSS Dinamis untuk Posisi, Ukuran, dan Transparansi
              let positionClass = '';

              if (offset === 0) {
                 // Foto Aktif (Tengah)
                 positionClass = 'translate-x-0 scale-100 md:scale-110 z-20 opacity-100 shadow-2xl pointer-events-auto';
              } else if (offset === -1) {
                 // Foto Kiri (Mundur 1 step) - Disembunyikan di Mobile
                 positionClass = '-translate-x-[120%] scale-90 z-10 opacity-0 md:opacity-60 cursor-pointer pointer-events-none md:pointer-events-auto';
              } else if (offset === 1) {
                 // Foto Kanan (Maju 1 step) - Disembunyikan di Mobile
                 positionClass = 'translate-x-[120%] scale-90 z-10 opacity-0 md:opacity-60 cursor-pointer pointer-events-none md:pointer-events-auto';
              } else if (offset < -1) {
                 // Foto Kiri Jauh (Mundur > 1 step) - Dibuang dari layar
                 positionClass = '-translate-x-[250%] scale-75 z-0 opacity-0 pointer-events-none';
              } else if (offset > 1) {
                 // Foto Kanan Jauh (Maju > 1 step) - Dibuang dari layar
                 positionClass = 'translate-x-[250%] scale-75 z-0 opacity-0 pointer-events-none';
              }

              return (
                 <div
                    key={index}
                    // Klik foto samping untuk langsung pindah ke sana (khusus Desktop)
                    onClick={() => {
                        if (offset === -1) handlePrev();
                        if (offset === 1) handleNext();
                    }}
                    className={`absolute w-[65%] md:w-[35%] aspect-[3/4] bg-gray-200 rounded-[20px] overflow-hidden transition-all duration-500 ease-in-out ${positionClass}`}
                 >
                    <Image 
                      src={src} 
                      alt={`Prestasi ${index + 1}`} 
                      fill 
                      className="object-cover" 
                      priority={offset === 0} // Hanya prioritaskan loading untuk foto yang aktif
                    />
                 </div>
              )
            })}

            {/* Tombol Kanan (Dengan Kondisi Disabled) */}
            <button 
              onClick={handleNext} 
              disabled={isLast}
              className={`absolute right-0 md:right-4 z-30 transition-all duration-300 
                ${isLast ? 'opacity-20 cursor-not-allowed text-gray-400' : 'opacity-100 text-[#0082c6] hover:scale-110 cursor-pointer'}`} 
              aria-label="Next"
            >
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
            <Link
              href="/prestasi"
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