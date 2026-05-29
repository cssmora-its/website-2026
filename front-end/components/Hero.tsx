// components/Hero.tsx
import { Noto_Serif, Poppins } from 'next/font/google';

// 1. Deklarasi Font secara langsung di sini agar PASTI jalan
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/hero-bg.png)' }} 
    >
      
      {/* 2. PERBAIKAN GRADIENT: Transparan di atas, Biru di bawah */}
      {/* Ini yang akan membuat bayangan birunya hanya ada di bagian bawah */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0082c6]/60 to-[#0082c6]" />

      {/* 3. Konten Teks */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-20">
        
        {/* Badge "Loyalitas Tanpa Batas" - Menggunakan Poppins */}
        <div className={`bg-[#79ba4e] px-8 py-2 md:py-3 rounded-xl mb-6 shadow-lg transform -rotate-2 ${poppins.className}`}>
          <span className="text-[#2a411b] font-bold italic text-2xl md:text-3xl tracking-wide">
            “Loyalitas Tanpa Batas”
          </span>
        </div>

        {/* Judul Utama - Menggunakan Noto Serif */}
        {/* Kita pasang notoSerif.className langsung di sini */}
        <h1 className={`text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-tight drop-shadow-lg max-w-5xl ${notoSerif.className}`}>
          Community of Santri Scholars of Ministry of Religious Affairs
        </h1>

        {/* Deskripsi - Menggunakan Poppins */}
        {/* Kita pasang poppins.className langsung di sini */}
        <p className={`text-lg md:text-xl text-white max-w-4xl leading-relaxed drop-shadow-md ${poppins.className}`}>
          CSSMoRA merupakan wadah bagi para mahasantri penerima PBSB untuk berkembang 
          sebagai agen perubahan. CSSMoRA bergerak dalam bidang sosial kepesantrenan dan 
          memegang teguh pancasila.
        </p>
        
      </div>
    </section>
  );
}