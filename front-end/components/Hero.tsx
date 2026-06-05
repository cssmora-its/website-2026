// components/Hero.tsx
import { Noto_Serif, Poppins, Cinzel } from 'next/font/google';

// 1. Deklarasi Font secara langsung di sini agar PASTI jalan
const notoSerif = Noto_Serif({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'] 
});

// Font khusus untuk Hero agar lebih gagah dan elegan
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['700', '900']
});

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero4.jpg)' }} 
    >
      
      {/* 2. PERBAIKAN GRADIENT: Transparan di atas, Biru di bawah */}
      {/* Ini yang akan membuat bayangan birunya hanya ada di bagian bawah */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0082c6]/60 to-[#0082c6]" />

      {/* 3. Konten Teks */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-20">
        
        {/* Badge "Loyalitas Tanpa Batas" - Menggunakan Poppins */}
        <div className={`bg-[#79ba4e] px-8 py-2 md:py-3 rounded-xl mb-10 shadow-lg transform -rotate-2 ${poppins.className}`}>
          <span className="text-[#2a411b] font-bold italic text-2xl md:text-3xl tracking-wide">
            “Loyalitas Tanpa Batas”
          </span>
        </div>

        {/* Judul Utama (Singkatan) - Cinzel */}
        {/* Menggunakan px agar jarak lebih tetap dan mudah ditebak ukurannya */}
        <h1 className={`text-6xl md:text-8xl lg:text-[120px] font-black text-white mb-4 mt-4 leading-none drop-shadow-2xl tracking-wider uppercase ${cinzel.className}`}>
          CSSMORA ITS
        </h1>

        {/* Kepanjangan - Poppins */}
        <div className={`flex flex-col items-center space-y-4 md:space-y-6 ${poppins.className}`}>
          <p className="text-xl md:text-3xl lg:text-[32px] text-white/95 font-medium tracking-[0px] drop-shadow-md text-center max-w-5xl leading-snug">
            Community of Santri Scholars of Ministry of Religious Affairs
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-[#a8f070] font-bold tracking-[4px] uppercase drop-shadow-md text-center">
            Institut Teknologi Sepuluh Nopember
          </p>
        </div>
        
      </div>
    </section>
  );
}