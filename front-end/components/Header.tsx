// components/Header.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Komponen kecil untuk icon panah bawah (Chevron)
const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block ml-1"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

interface NavItem {
  label: string;
  href: string;
}

// Hanya Gallery yang punya subpage; sisanya anchor di landing page.
// Prefix "/" memastikan link tetap jalan saat Header dipakai di subpage.
const NAV_ITEMS: NavItem[] = [
  { label: 'About CSSMoRA', href: '/#about' },
  { label: 'Overview Renjana Cita', href: '/#renjana-cita' },
  { label: 'Kabinet', href: '/renjana-cita' },
  { label: 'Prestasi', href: '/#prestasi' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Statistik', href: '/#statistik' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 md:py-4'
          : 'bg-transparent py-6 md:py-8'
      } px-6 md:px-12 lg:px-20 ${poppins.className}`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo: versi warna saat scrolled agar tetap terbaca di background putih */}
        <div
          className={`relative transition-all duration-300 ${
            scrolled
              ? 'w-[150px] h-[40px] md:w-[200px] md:h-[52px]'
              : 'w-[180px] h-[50px] md:w-[240px] md:h-[60px]'
          }`}
        >
          <Link href="/">
            <Image
              src={scrolled ? '/logo-color.png' : '/logo.png'}
              alt="Logo CSSMoRA ITS"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* Navigasi desktop */}
        <ul
          className={`hidden lg:flex space-x-8 font-medium text-[15px] items-center transition-colors duration-300 ${
            scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center transition-colors ${
                  scrolled ? 'hover:text-[#0082c6]' : 'hover:text-gray-200'
                }`}
              >
                {item.label}
                <ChevronDown />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger menu mobile (placeholder) */}
        <div
          className={`lg:hidden cursor-pointer transition-colors duration-300 ${
            scrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>
    </header>
  );
}
