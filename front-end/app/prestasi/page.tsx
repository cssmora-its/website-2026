// app/prestasi/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrestasiHero from '@/components/prestasi/PrestasiHero';
import PrestasiSection from '@/components/prestasi/PrestasiSection';
import { JsonLdScript } from '@/components/JsonLdScript';
import { generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: {
    absolute: 'Prestasi — Digerakkan oleh Gairah, Ditentukan oleh Dampak | CSSMoRA ITS',
  },
  description:
    'Kumpulan karya, inovasi, dan prestasi mahasantri CSSMoRA ITS untuk almamater, pesantren, dan negeri.',
  alternates: {
    canonical: '/prestasi',
  },
  openGraph: {
    title: 'Prestasi — Digerakkan oleh Gairah, Ditentukan oleh Dampak | CSSMoRA ITS',
    description:
      'Kumpulan karya, inovasi, dan prestasi mahasantri CSSMoRA ITS untuk almamater, pesantren, dan negeri.',
    url: 'https://cssmoraits.com/prestasi',
    images: [
      {
        url: 'https://cssmoraits.com/og-image.png',
        alt: 'Prestasi CSSMoRA ITS',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prestasi — Digerakkan oleh Gairah, Ditentukan oleh Dampak | CSSMoRA ITS',
    description:
      'Kumpulan karya, inovasi, dan prestasi mahasantri CSSMoRA ITS untuk almamater, pesantren, dan negeri.',
    images: ['https://cssmoraits.com/og-image.png'],
  },
};

export default function PrestasiPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://cssmoraits.com' },
    { name: 'Prestasi', url: 'https://cssmoraits.com/prestasi' },
  ]);

  const webPageSchema = generateWebPageSchema(
    'Prestasi — Digerakkan oleh Gairah, Ditentukan oleh Dampak | CSSMoRA ITS',
    'Kumpulan karya, inovasi, dan prestasi mahasantri CSSMoRA ITS untuk almamater, pesantren, dan negeri.',
    'https://cssmoraits.com/prestasi',
    'https://cssmoraits.com/og-image.png',
  );

  return (
    <main className="min-h-screen relative flex flex-col">
      <JsonLdScript schema={breadcrumbSchema} />
      <JsonLdScript schema={webPageSchema} />
      <Header />
      <PrestasiHero />
      <PrestasiSection />
      <Footer />
    </main>
  );
}
