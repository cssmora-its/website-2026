// components/Sejarah.tsx
import Image from 'next/image';
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const chairmanData = [
  { id: 1, title: 'Ketua Umum', jurusan: 'Sistem Informasi', tahun: '1990 - 2025', kabinet: 'Kabinet Luar Biasa' },
  { id: 2, title: 'Ketua Umum', jurusan: 'Sistem Informasi', tahun: '1990 - 2025', kabinet: 'Kabinet Luar Biasa' },
  { id: 3, title: 'Ketua Umum', jurusan: 'Sistem Informasi', tahun: '1990 - 2025', kabinet: 'Kabinet Luar Biasa' },
  { id: 4, title: 'Ketua Umum', jurusan: 'Sistem Informasi', tahun: '1990 - 2025', kabinet: 'Kabinet Luar Biasa' },
  { id: 5, title: 'Ketua Umum', jurusan: 'Sistem Informasi', tahun: '1990 - 2025', kabinet: 'Kabinet Luar Biasa' },
];

export default function Sejarah() {
  return (
    <section id="sejarah" className="relative w-full flex flex-col bg-white">

      {/* =========================================
          BAGIAN 1: Where the Heart Belongs
      ========================================= */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        
        {/* ASET MOTIF BORDER ATAS (Menggunakan pattern-border-2.png) */}
        <div 
          className="absolute top-0 left-0 w-full h-[150px] sm:h-[250px] md:h-[350px] z-0 opacity-80 pointer-events-none"
          style={{ 
            // Pastikan ekstensi filenya benar (.png atau .jpg) sesuai yang kamu download
            backgroundImage: 'url(/pattern-border.png)', 
            backgroundSize: '100% auto', 
            backgroundPosition: 'top center', 
            backgroundRepeat: 'no-repeat' 
          }}
        />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          
          {/* Dekorasi Polaroid Kiri Atas */}
          <div className="hidden lg:block absolute top-10 left-10 transform -rotate-12 bg-white p-3 shadow-xl w-64 h-72 rounded-sm">
             <div className="w-full h-5/6 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Foto Kiri</span>
             </div>
             <div className="absolute -top-3 left-4 w-5 h-5 bg-gray-300 rounded-full shadow-sm" />
          </div>

          {/* Dekorasi Polaroid Kanan Bawah */}
          <div className="hidden lg:block absolute bottom-0 right-10 transform rotate-12 bg-white p-3 shadow-xl w-64 h-72 rounded-sm">
             <div className="w-full h-5/6 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Foto Kanan</span>
             </div>
          </div>

          {/* Konten Utama Teks */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            <div className="relative w-[320px] h-[80px] md:w-[450px] md:h-[110px] mb-8">
              <Image 
                src="/logo-color.png" 
                alt="Logo CSSMoRA ITS Color" 
                fill 
                className="object-contain"
              />
            </div>

            <h2 className={`text-4xl md:text-5xl font-bold text-[#0082c6] mb-8 ${notoSerif.className}`}>
              Where the Heart Belongs
            </h2>

            <div className={`text-gray-600 space-y-6 text-[15px] md:text-[16px] leading-relaxed ${poppins.className}`}>
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
          BAGIAN 2: History of the Chairman
      ========================================= */}
      <div className="relative py-24 overflow-hidden">
        

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          
          <h2 className={`text-3xl md:text-4xl font-bold text-[#0082c6] mb-4 ${poppins.className}`}>
            History of the Chairman
          </h2>
          <div className={`bg-[#a8f070] px-8 py-2 md:py-3 rounded-lg mb-24 shadow-lg transform -rotate-2 ${poppins.className}`}>
            <span className="text-[#2a411b] font-bold text-2xl md:text-3xl tracking-wide">
              CSSMoRA ITS
            </span>
          </div>

          {/* Timeline Container */}
          <div className="w-full overflow-x-auto pb-10 custom-scrollbar">
            <div className="relative min-w-[900px] flex justify-between items-center px-10">
              
              {/* Garis Horizontal Penghubung */}
              <div className="absolute top-[40px] left-10 right-10 h-[2px] bg-[#3a5a24] -z-10" />

              {/* Render Node Timeline */}
              {chairmanData.map((item) => (
                <div key={item.id} className="flex flex-col items-center group w-40 relative bg-white/80 rounded-xl p-2 backdrop-blur-sm">
                  
                  {/* Lingkaran Garis Luar */}
                  <div className="w-[80px] h-[80px] rounded-full border-2 border-[#3a5a24] flex items-center justify-center bg-white shadow-md relative z-10">
                    {/* Lingkaran Solid Dalam */}
                    <div className="w-[60px] h-[60px] rounded-full bg-[#3a5a24] shadow-inner transition-transform group-hover:scale-110" />
                  </div>

                  {/* Detail Teks Ketua */}
                  <div className={`mt-6 flex flex-col items-center text-center text-sm text-gray-700 space-y-1 ${poppins.className}`}>
                    <span className="font-bold text-gray-900">{item.title}</span>
                    <span>{item.jurusan}</span>
                    <span>{item.tahun}</span>
                    <span className="text-gray-500">{item.kabinet}</span>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
        
        {/* =========================================
            ASET MOTIF BORDER BAWAH
        ========================================= */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[150px] sm:h-[250px] md:h-[350px] z-0 opacity-80 pointer-events-none transform rotate-180"
          style={{ 
            backgroundImage: 'url(/pattern-border.png)', /* atau pattern-border-2.png, sesuaikan filemu */
            backgroundSize: '100% auto', 
            backgroundPosition: 'top center', 
            backgroundRepeat: 'no-repeat' 
          }}
        />
        
    </section>
  );
}