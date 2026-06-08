// app/gallery/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryContent from '@/components/gallery/GalleryContent';
import { JsonLdScript } from '@/components/JsonLdScript';
import { generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
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
    url: 'https://cssmoraits.com/gallery',
    images: [
      {
        url: 'https://cssmoraits.com/og-image.png',
        alt: 'Galeri CSSMoRA ITS',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeri — Jiwa dari Renjana Cita | CSSMoRA ITS',
    description:
      'Dokumentasi proker dan agenda Kabinet Renjana Cita CSSMoRA ITS — dari BPH hingga Personalia.',
    images: ['https://cssmoraits.com/og-image.png'],
  },
};

export default function GalleryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://cssmoraits.com' },
    { name: 'Gallery', url: 'https://cssmoraits.com/gallery' },
  ]);

  const webPageSchema = generateWebPageSchema(
    'Galeri — Jiwa dari Renjana Cita | CSSMoRA ITS',
    'Dokumentasi proker dan agenda Kabinet Renjana Cita CSSMoRA ITS — dari BPH hingga Personalia.',
    'https://cssmoraits.com/gallery',
    'https://cssmoraits.com/og-image.png',
  );

  return (
    <main className="min-h-screen relative flex flex-col">
      <JsonLdScript schema={breadcrumbSchema} />
      <JsonLdScript schema={webPageSchema} />
      <Header />
      <GalleryHero />
      <GalleryContent />
      <Footer />
    </main>
  );
}
