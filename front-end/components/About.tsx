// components/About.tsx
import { Noto_Serif, Poppins } from 'next/font/google';
import Image from 'next/image';

// Panggil font sesuai desain UI
const notoSerif = Noto_Serif({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'] 
});

export default function About() {
  return (
    // Tambahkan id="about" agar saat menu header diklik bisa scroll ke sini
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        
        {/* Layout Grid: 1 Kolom di HP, 2 Kolom di Layar Besar (PC) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* KOLOM KIRI: Area Gambar & Badge Hijau */}
          <div className="relative">
            
            {/* 1. Foto Utama About */}
            <div className="w-full aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden relative z-0 shadow-2xl">
              <Image 
                src="/us-1.png" 
                alt="Foto CSSMoRA ITS" 
                fill 
                className="object-cover"
              />
            </div>

            {/* 2. Floating Badge "Santri tidak hanya jago..." */}
            <div className={`absolute -bottom-8 -left-4 md:-bottom-12 md:-left-8 bg-[#a8f070] p-5 md:p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform -rotate-3 z-10 max-w-[280px] md:max-w-[320px] ${poppins.className}`}>
              <p className="text-[#2a411b] font-semibold italic text-lg md:text-xl leading-snug">
                “Santri tidak hanya jago ngaji, tapi juga harus jago teknologi”
              </p>
            </div>
            
          </div>

          {/* KOLOM KANAN: Area Teks Penjelasan */}
          <div className="flex flex-col items-start space-y-6 lg:pl-8">
            
            {/* Label About Us */}
            <div className={`bg-[#a8f070] text-[#2a411b] px-5 py-2 rounded-lg font-semibold text-sm md:text-base shadow-sm ${poppins.className}`}>
              About Us
            </div>

            {/* Heading Biru */}
            <h2 className={`text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0082c6] leading-[1.2] ${notoSerif.className}`}>
              Santri Adalah Orang yang dulu dipukul sekarang memikul
            </h2>

            {/* Paragraf Penjelasan */}
            <div className={`text-gray-600 text-[15px] md:text-[16px] space-y-5 leading-relaxed text-justify ${poppins.className}`}>
              <p>
                Program Beasiswa Santri Berprestasi atau disingkat PBSB adalah program kolaborasi Kementerian Agama dengan Lembaga Pengelola Dana Pendidikan (LPDP) Kementerian Keuangan yang bertujuan meningkatkan kualitas sumber daya manusia di bidang keagamaan dan pendidikan berbasis pesantren dengan memberikan kesempatan kepada santri, alumni pesantren, guru, serta tenaga kependidikan untuk melanjutkan studi pada jenjang sarjana baik di dalam maupun luar negeri.
              </p>
              <p>
                CSSMoRA merupakan wadah bagi para mahasantri penerima PBSB untuk berkembang sebagai agen perubahan. CSSMoRA bergerak dalam bidang sosial kepesantrenan dan memegang teguh pancasila.
              </p>
              <p>
                Lebih dari sekadar wadah, CSSMoRA adalah ruang bertumbuh bagi mahasantri penerima PBSB untuk menjadi agen perubahan. Berakar pada nilai luhur pesantren, kami mendedikasikan diri dalam pengabdian sosial, menjaga keteguhan ideologi Pancasila sebagai kompas dalam setiap pengabdian.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}