// app/gallery/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryContent from '@/components/gallery/GalleryContent';

export const metadata = {
  title: 'Gallery — The Soul of Renjana Cita | CSSMoRA ITS',
  description:
    'Dokumentasi proker dan agenda Kabinet Renjana Cita CSSMoRA ITS — dari Proker BPH hingga Personalia.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Header />
      <GalleryHero />
      <GalleryContent />
      <Footer />
    </main>
  );
}
