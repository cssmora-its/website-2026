// app/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisiMisi from '@/components/VisiMisi';
import Sejarah from '@/components/Sejarah';
import RenjanaCita from '@/components/RenjanaCita';
import Prestasi from '@/components/Prestasi';
import Gallery from '@/components/Gallery';
import Statistik from '@/components/Statistik';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    absolute: 'CSSMoRA ITS — Community of Santri Scholars of MoRA',
  },
  description:
    'CSSMoRA ITS adalah komunitas penerima beasiswa PBSB (Program Beasiswa Santri Berprestasi) di Institut Teknologi Sepuluh Nopember. Menghimpun santri berprestasi lintas disiplin sejak 2007.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CSSMoRA ITS — Community of Santri Scholars of MoRA',
    description:
      'CSSMoRA ITS adalah komunitas penerima beasiswa PBSB di Institut Teknologi Sepuluh Nopember. Menghimpun santri berprestasi lintas disiplin sejak 2007.',
    url: '/',
    images: [
      {
        url: '/og-image.png',
        alt: 'CSSMoRA ITS',
      },
    ],
  },
  twitter: {
    title: 'CSSMoRA ITS — Community of Santri Scholars of MoRA',
    description:
      'CSSMoRA ITS adalah komunitas penerima beasiswa PBSB di Institut Teknologi Sepuluh Nopember.',
    images: ['/og-image.png'],
  },
};

export default function LandingPage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Header />
      <Hero />
      <About />
      <VisiMisi />
      <Sejarah />
      <RenjanaCita />
      <Prestasi /> {/* 2. Letakkan di sini persis */}
      <Gallery />
      <Statistik />
      <Footer />
    </main>
  );
}