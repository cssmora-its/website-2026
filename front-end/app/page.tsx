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
import { getPrestasiData } from '@/lib/fetchPrestasi';

export const metadata: Metadata = {
  title: {
    absolute: 'CSSMoRA ITS — Community of Santri Scholars of Ministry of Religious Affairs',
  },
  description:
    'CSSMoRA ITS adalah organisasi penerima beasiswa PBSB (Program Beasiswa Santri Berprestasi) di Institut Teknologi Sepuluh Nopember. Menghimpun santri berprestasi lintas disiplin sejak 2007.',
  keywords: [
    "CSSMoRA",
    "CSSMoRA ITS",
    "PBSB",
    "PBSB ITS",
    "Beasiswa Santri",
    "BIB Santri",
    "Beasiswa Indonesia Bangkit",
    "Program Beasiswa Santri Berprestasi",
    "ITS",
    "Santri Berprestasi",
    "Renjana Cita",
    "Mahasantri",
    "Mahasantri ITS"
  ],
  alternates: {
    canonical: 'https://cssmoraits.com',
  },
  openGraph: {
    title: 'CSSMoRA ITS — Community of Santri Scholars of Ministry of Religious Affairs',
    description:
      'CSSMoRA ITS adalah organisasi penerima beasiswa PBSB di Institut Teknologi Sepuluh Nopember. Menghimpun santri berprestasi lintas disiplin sejak 2007.',
    url: 'https://cssmoraits.com',
    images: [
      {
        url: 'https://cssmoraits.com/og-image.png',
        alt: 'CSSMoRA ITS',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSSMoRA ITS — Community of Santri Scholars of Ministry of Religious Affairs',
    description:
      'CSSMoRA ITS adalah organisasi penerima beasiswa PBSB di Institut Teknologi Sepuluh Nopember.',
    images: ['https://cssmoraits.com/og-image.png'],
  },
};

export default async function LandingPage() {
  const prestasiData = await getPrestasiData();
  
  // Ambil 7 gambar prestasi teratas (yang ada gambarnya)
  const topPrestasiImages = prestasiData
    .filter(p => p.image)
    .slice(0, 7)
    .map(p => p.image as string);
  return (
    <main className="min-h-screen relative flex flex-col">
      <Header />
      <Hero />
      <About />
      <VisiMisi />
      <Sejarah />
      <RenjanaCita />
      <Prestasi images={topPrestasiImages} /> {/* 2. Letakkan di sini persis */}
      <Gallery />
      <Statistik />
      <Footer />
    </main>
  );
}
