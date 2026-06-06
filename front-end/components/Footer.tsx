// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Noto_Serif, Poppins } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Section Footer (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Kolom 1: Logo & Deskripsi (Lebih Lebar) */}
          <div className="sm:col-span-2 lg:col-span-6 pr-0 lg:pr-12">
            <div className="relative w-[180px] h-[29px] md:w-[240px] md:h-[39px] mb-8">
              <Image
                src="/logo-color-clean.png"
                alt="Logo CSSMoRA ITS Color"
                fill
                className="object-contain object-left"
                priority // Menambahkan priority agar logo dimuat lebih cepat
              />
            </div>
            <p className={`text-gray-600 text-[16px] md:text-[18px] leading-relaxed ${poppins.className}`}>
CSSMoRA ITS adalah wadah pengembangan dan pengabdian bagi mahasantri penerima beasiswa PBSB di Institut Teknologi Sepuluh Nopember.
            </p>
          </div>

          {/* Kolom 2: Menu Home Page */}
          <div className={`lg:col-span-3 ${poppins.className}`}>
            <h4 className={`text-[#0082c6] font-bold text-lg mb-6 ${notoSerif.className}`}>Beranda</h4>
            <ul className="flex flex-col space-y-4 text-gray-600 text-[15px]">
              <li><Link href="/#home" className="hover:text-[#0082c6] transition-colors">About CSSMoRA</Link></li>
              <li><Link href="/renjana-cita" className="hover:text-[#0082c6] transition-colors">Renjana Cita</Link></li>
              <li><Link href="/prestasi" className="hover:text-[#0082c6] transition-colors">Prestasi</Link></li>
              <li><Link href="/gallery" className="hover:text-[#0082c6] transition-colors">Gallery</Link></li>
              <li><Link href="/awardee" className="hover:text-[#0082c6] transition-colors">Awardee</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Social Media */}
          <div className={`lg:col-span-3 ${poppins.className}`}>
            <h4 className={`text-[#0082c6] font-bold text-lg mb-6 ${notoSerif.className}`}>Ikuti Kami</h4>
            <ul className="flex flex-col space-y-5 text-gray-600 text-[15px]">
              <li>
                <a href="https://www.instagram.com/cssmoraits/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#0082c6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@cssmora.its" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#0082c6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/cssmora-its/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#0082c6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/CSSMORAITS/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#0082c6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section Footer (Copyright) */}
        <div className={`pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[14px] ${notoSerif.className}`}>
          <p>Copyright © 2026 CSSMoRA ITS</p>
          <div className={`flex space-x-8 mt-4 md:mt-0 ${poppins.className}`}>
            <a href="#" className="hover:text-gray-800 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Kebijakan Privasi</a>
          </div>
        </div>

      </div>
    </footer>
  );
}