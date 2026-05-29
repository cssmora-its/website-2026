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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Kolom 1: Logo & Deskripsi (Lebih Lebar) */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <div className="relative w-[350px] h-[90px] md:w-[420px] md:h-[110px] mb-8 -ml-4">
              <Image 
                src="/logo-color.png" 
                alt="Logo CSSMoRA ITS Color" 
                fill 
                className="object-contain object-left"
                priority // Menambahkan priority agar logo dimuat lebih cepat
              />
            </div>
            <p className={`text-gray-600 text-[16px] md:text-[18px] leading-relaxed ${poppins.className}`}>
              The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
            </p>
          </div>

          {/* Kolom 2: Menu 1 */}
          <div className={`lg:col-span-3 ${poppins.className}`}>
            <h4 className={`text-[#0082c6] font-bold text-lg mb-6 ${notoSerif.className}`}>Home Page</h4>
            <ul className="flex flex-col space-y-4 text-gray-600 text-[15px]">
              <li><Link href="#about" className="hover:text-[#0082c6] transition-colors">About CSSMoRA</Link></li>
              <li><Link href="#visi-misi" className="hover:text-[#0082c6] transition-colors">Visi Misi</Link></li>
              <li><Link href="#sejarah" className="hover:text-[#0082c6] transition-colors">Sejarah</Link></li>
              <li><Link href="#renjana-cita" className="hover:text-[#0082c6] transition-colors">Overview Renjana Cita</Link></li>
              <li><Link href="#prestasi" className="hover:text-[#0082c6] transition-colors">Prestasi</Link></li>
              <li><Link href="#gallery" className="hover:text-[#0082c6] transition-colors">Gallery</Link></li>
              <li><Link href="#statistik" className="hover:text-[#0082c6] transition-colors">Statistik</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Menu 2 (Sama persis dengan UI) */}
          <div className={`lg:col-span-2 ${poppins.className}`}>
            <h4 className={`text-[#0082c6] font-bold text-lg mb-6 ${notoSerif.className}`}>Home Page</h4>
            <ul className="flex flex-col space-y-4 text-gray-600 text-[15px]">
              <li><Link href="#about" className="hover:text-[#0082c6] transition-colors">About CSSMoRA</Link></li>
              <li><Link href="#visi-misi" className="hover:text-[#0082c6] transition-colors">Visi Misi</Link></li>
              <li><Link href="#sejarah" className="hover:text-[#0082c6] transition-colors">Sejarah</Link></li>
              <li><Link href="#renjana-cita" className="hover:text-[#0082c6] transition-colors">Overview Renjana Cita</Link></li>
              <li><Link href="#prestasi" className="hover:text-[#0082c6] transition-colors">Prestasi</Link></li>
              <li><Link href="#gallery" className="hover:text-[#0082c6] transition-colors">Gallery</Link></li>
              <li><Link href="#statistik" className="hover:text-[#0082c6] transition-colors">Statistik</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Social Media */}
          <div className={`lg:col-span-2 ${poppins.className}`}>
            <h4 className={`text-[#0082c6] font-bold text-lg mb-6 ${notoSerif.className}`}>Follow Us</h4>
            <ul className="flex flex-col space-y-5 text-gray-600 text-[15px]">
              <li>
                <a href="#" className="flex items-center hover:text-[#0082c6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#0082c6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-4"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-[#0082c6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section Footer (Copyright) */}
        <div className={`pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[14px] ${notoSerif.className}`}>
          <p>Copyright © 2021</p>
          <div className={`flex space-x-8 mt-4 md:mt-0 ${poppins.className}`}>
            <a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}