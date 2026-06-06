// components/Hero.tsx
'use client'; 

import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'] 
});

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero5.jpg)' }} 
    >
      {/* Definisi Animasi Slide Up */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
      
      {/* Overlay gradient biru CSSMoRA */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/55 via-[#0082c6]/75 to-[#0082c6]" />

      {/* Konten Teks */}
      <div className="container mx-auto px-6 max-w-5xl relative z-20 w-full pt-28 pb-20 flex flex-col items-center text-center">
        
        {/* Badge - Animasi Pertama */}
        <div className={`bg-[#79ba4e] px-8 py-3 rounded-full mb-8 shadow-lg transform -rotate-2 animate-fade-in-up ${poppins.className}`}>
          <span className="text-[#2a411b] font-bold italic text-lg md:text-xl tracking-wide">
            “Loyalitas Tanpa Batas”
          </span>
        </div>

        {/* Judul Utama - Animasi Kedua (Delay 0.3s) */}
        <h1 className={`text-5xl md:text-7xl lg:text-[110px] font-bold text-white mb-6 leading-[1.0] tracking-tighter drop-shadow-2xl uppercase animate-fade-in-up ${notoSerif.className}`} style={{ animationDelay: '0.3s', opacity: 0 }}>
          CSSMORA ITS
        </h1>

        {/* Kepanjangan - Animasi Ketiga (Delay 0.6s) */}
        <div className={`flex flex-col items-center space-y-4 animate-fade-in-up ${poppins.className}`} style={{ animationDelay: '0.6s', opacity: 0 }}>
          <p className="text-base md:text-lg lg:text-xl text-white/95 font-medium drop-shadow-md text-center max-w-3xl leading-relaxed">
            Community of Santri Scholars of Ministry of Religious Affairs
          </p>
          <p className="text-sm md:text-base lg:text-lg text-[#a8f070] font-bold tracking-[0.2em] uppercase drop-shadow-md text-center">
            Institut Teknologi Sepuluh Nopember
          </p>
        </div>
        
      </div>
    </section>
  );
}