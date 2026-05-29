// components/RenjanaCita.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function RenjanaCita() {
  return (
    <section id="renjana-cita" className="w-full bg-[#0082c6] py-20 lg:py-28 overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

        {/* =========================================
            KOLOM KIRI: Teks & Ikon
        ========================================= */}
        <div className={`flex flex-col text-white ${poppins.className} lg:pr-10`}>
           <h2 className={`text-4xl md:text-5xl lg:text-[54px] font-bold mb-6 leading-[1.1] ${notoSerif.className}`}>
             The Heart behind <br /> Renjana Cita
           </h2>
           <p className="text-[15px] md:text-[16px] text-white/95 leading-relaxed mb-10 text-justify">
             Di balik gerak progresif CSSMoRA ITS, hadir gerak pengabdian dari mahasantri yang bergerak dalam satu frekuensi. Kami bukan sekadar pengurus, melainkan sebuah keluarga yang mendedikasikan diri untuk merawat harmoni dan menumbuhkan potensi. Melalui semangat ketulusan Renjana dalam menggapai Cita, setiap inovasi dan program yang kami bangun adalah langkah nyata untuk membawa santri scholars lebih dekat pada kemaslahatan.
           </p>

           {/* List 3 Poin dengan Ikon */}
           <div className="space-y-8 mt-2">
             
             {/* Poin 1 */}
             <div className="flex items-start gap-5 md:gap-6">
               <div className="relative flex-shrink-0 w-[60px] h-[60px] md:w-[77px] md:h-[77px]">
                 <Image src="/logo-depart.png" alt="Icon 7 Divisions" fill className="object-contain" />
               </div>
               <div>
                 <h3 className="text-xl md:text-[22px] font-bold mb-2">7 Divisions and Bureau</h3>
                 <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed text-justify">
                   Tujuh pilar badan, departemen dan biro CSSMoRA ITS yang saling bersinergi dalam mewujudkan tata kelola organisasi yang profesional dan berkelanjutan.
                 </p>
               </div>
             </div>

             {/* Poin 2 */}
             <div className="flex items-start gap-5 md:gap-6">
               <div className="relative flex-shrink-0 w-[60px] h-[60px] md:w-[77px] md:h-[77px]">
                 <Image src="/logo-santri.png" alt="Icon 100+ Mahasantri" fill className="object-contain" />
               </div>
               <div>
                 <h3 className="text-xl md:text-[22px] font-bold mb-2">100+ Dedicated Mahasantri</h3>
                 <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed text-justify">
                   Lebih dari seratus mahasantri berdedikasi tinggi yang bersatu dalam semangat kekeluargaan untuk membawa dampak positif bagi anggota dan masyarakat.
                 </p>
               </div>
             </div>

             {/* Poin 3 */}
             <div className="flex items-start gap-5 md:gap-6">
               <div className="relative flex-shrink-0 w-[60px] h-[60px] md:w-[77px] md:h-[77px]">
                 <Image src="/logo-agenda.png" alt="Icon 30+ Programs" fill className="object-contain" />
               </div>
               <div>
                 <h3 className="text-xl md:text-[22px] font-bold mb-2">30+ Programs & Agendas</h3>
                 <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed text-justify">
                   Dengan lebih dari 30 program kerja dan agenda unggulan, Kabinet Renjana Cita berfokus mengaktualisasikan nilai luhur kesantrian melalui inovasi dan pengabdian nyata.
                 </p>
               </div>
             </div>

           </div>
        </div>

        {/* =========================================
            KOLOM KANAN: Frame Slider Foto
        ========================================= */}
        <div className="flex flex-col w-full max-w-[550px] mx-auto lg:ml-auto mt-6 lg:mt-0">
           
           {/* Frame Foto Utama (Poster) */}
           <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden shadow-2xl bg-gray-200">
             <Image 
               src="/anggota-1.png" 
               alt="Frame Anggota CSSMoRA" 
               fill 
               className="object-cover" 
             />
           </div>

           {/* Baris Kontrol (Slider Counter, Tombol, Panah) */}
           <div className="flex items-center justify-between w-full mt-6 text-white">
             
             {/* Indikator Angka */}
             <span className={`text-2xl md:text-3xl font-medium ${poppins.className}`}>
               1/8
             </span>

             {/* Tombol Lihat Detail → subpage Kabinet */}
             <Link href="/renjana-cita" className={`inline-block bg-[#a8f070] text-[#2a411b] font-bold text-[16px] md:text-[17px] px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform ${poppins.className}`}>
               Lihat Detail
             </Link>

             {/* Tombol Navigasi Panah */}
             <div className="flex gap-4 md:gap-6">
               <button className="hover:opacity-75 transition-opacity" aria-label="Previous">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                 </svg>
               </button>
               <button className="hover:opacity-75 transition-opacity" aria-label="Next">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8">
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