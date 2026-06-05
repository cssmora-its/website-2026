// components/Header.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import { useHeaderVisibility } from './HeaderVisibilityContext';

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
  /** Submenu dropdown opsional. */
  children?: NavItem[];
}

// Prefix "/" memastikan link tetap jalan saat Header dipakai di subpage.
// "Kabinet" kini menjadi submenu di dalam "Overview Renjana Cita".
const NAV_ITEMS: NavItem[] = [
  {
    label: 'CSSMoRA ITS',
    href: '/#home',
    children: [
      { label: 'About', href: '/#about' },
      { label: 'National Vision', href: '/#visi-misi' },
      { label: 'History', href: '/#sejarah' },
      { label: 'Overview Renjana', href: '/#renjana-cita' },
      { label: 'Achievement', href: '/#prestasi' },
      { label: 'Gallery', href: '/#gallery' },
      { label: 'Awardee', href: '/#statistik' },
    ],
  },
  { label: 'Renjana Cita', href: '/renjana-cita' },
  { label: 'Prestasi', href: '/prestasi' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Awardee', href: '/awardee' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const { hidden } = useHeaderVisibility();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fungsi untuk buka/tutup submenu di mobile
  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hidden && !isMobileMenuOpen
          ? '-translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100'
      } ${
        scrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 md:py-4'
          : 'bg-transparent py-6 md:py-8'
      } px-6 md:px-12 lg:px-20 ${poppins.className}`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo: versi warna saat scrolled agar tetap terbaca di background putih */}
        <div
          className={`relative transition-all duration-300 ${
            scrolled || isMobileMenuOpen
              ? 'w-[180px] h-[40px] md:w-[240px] md:h-[52px]'
              : 'w-[180px] h-[50px] md:w-[240px] md:h-[60px]'
          }`}
        >
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src={scrolled || isMobileMenuOpen ? '/logo-color-clean.png' : '/logo.png'}
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
            <li key={item.href} className={item.children ? 'relative group' : undefined}>
              <Link
                href={item.href}
                className={`flex items-center transition-colors ${
                  scrolled ? 'hover:text-[#0082c6]' : 'hover:text-gray-200'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown />}
              </Link>

              {item.children && (
                <ul className="absolute left-0 top-full pt-3 min-w-[200px] invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 text-[15px] text-gray-700 hover:text-[#0082c6] hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger menu mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden cursor-pointer p-1 transition-colors duration-300 outline-none ${
            scrolled || isMobileMenuOpen ? 'text-gray-800' : 'text-white drop-shadow-md'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100 py-4 border-t border-gray-100' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <ul className="flex flex-col px-8 space-y-2 font-medium text-gray-700">
          {NAV_ITEMS.map((item) => {
            const isDropdownOpen = mobileDropdownOpen === item.label;
            return (
              <li key={item.href} className="flex flex-col">
                <div className="flex items-center justify-between w-full">
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2.5 text-[16px] hover:text-[#0082c6] transition-colors flex-1"
                  >
                    {item.label}
                  </Link>
                  {/* Tombol Panah Buka/Tutup Submenu */}
                  {item.children && (
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="p-2 -mr-2 text-gray-500 hover:text-[#0082c6] transition-colors"
                      aria-label="Toggle submenu"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Area Dropdown Sub-menu yang bisa Expand/Collapse */}
                {item.children && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isDropdownOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="flex flex-col pl-4 border-l-2 border-gray-100 mt-1 mb-2 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-[14px] text-gray-500 hover:text-[#0082c6] transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
