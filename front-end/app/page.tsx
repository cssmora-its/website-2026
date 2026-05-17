// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisiMisi from '@/components/VisiMisi';
import Sejarah from '@/components/Sejarah';
import RenjanaCita from '@/components/RenjanaCita';
import Prestasi from '@/components/Prestasi'; // 1. Import komponen baru
import Gallery from '@/components/Gallery';
import Statistik from '@/components/Statistik';
import Footer from '@/components/Footer';

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