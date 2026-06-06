// app/gallery/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryContent from '@/components/gallery/GalleryContent';

export const metadata = {
  title: {
    absolute: 'Galeri — Jiwa dari Renjana Cita | CSSMoRA ITS',
  },
  description:
    'Dokumentasi proker dan agenda Kabinet Renjana Cita CSSMoRA ITS — dari BPH hingga Personalia.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Galeri — Jiwa dari Renjana Cita | CSSMoRA ITS',
    description:
      'Dokumentasi proker dan agenda Kabinet Renjana Cita CSSMoRA ITS — dari BPH hingga Personalia.',
    url: '/gallery',
    images: [
      {
        url: '/og-image.png',
        alt: 'Galeri CSSMoRA ITS',
      },
    ],
  },
  twitter: {
    title: 'Galeri — Jiwa dari Renjana Cita | CSSMoRA ITS',
    description:
      'Dokumentasi proker dan agenda Kabinet Renjana Cita CSSMoRA ITS — dari BPH hingga Personalia.',
    images: ['/og-image.png'],
  },
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
