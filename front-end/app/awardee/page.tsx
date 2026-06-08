// app/awardee/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AwardeeHero from '@/components/awardee/AwardeeHero';
import CaptainsSection from '@/components/awardee/CaptainsSection';
import ScholarsDirectory from '@/components/awardee/ScholarsDirectory';
import { JsonLdScript } from '@/components/JsonLdScript';
import { generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: {
    absolute: 'Awardee — Tempat Setiap Babak Bermula | CSSMoRA ITS',
  },
  description:
    'Direktori mahasantri CSSMoRA ITS — jejak ketua angkatan dan seluruh mahasantri lintas generasi sejak 2007.',
  alternates: {
    canonical: '/awardee',
  },
  openGraph: {
    title: 'Awardee — Tempat Setiap Babak Bermula | CSSMoRA ITS',
    description:
      'Direktori mahasantri CSSMoRA ITS — jejak ketua angkatan dan seluruh mahasantri lintas generasi sejak 2007.',
    url: 'https://cssmoraits.com/awardee',
    images: [
      {
        url: 'https://cssmoraits.com/og-image.png',
        alt: 'Awardee CSSMoRA ITS',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awardee — Tempat Setiap Babak Bermula | CSSMoRA ITS',
    description:
      'Direktori mahasantri CSSMoRA ITS — jejak ketua angkatan dan seluruh mahasantri lintas generasi sejak 2007.',
    images: ['https://cssmoraits.com/og-image.png'],
  },
};

export default function AwardeePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://cssmoraits.com' },
    { name: 'Awardee', url: 'https://cssmoraits.com/awardee' },
  ]);

  const webPageSchema = generateWebPageSchema(
    'Awardee — Tempat Setiap Babak Bermula | CSSMoRA ITS',
    'Direktori mahasantri CSSMoRA ITS — jejak ketua angkatan dan seluruh mahasantri lintas generasi sejak 2007.',
    'https://cssmoraits.com/awardee',
    'https://cssmoraits.com/og-image.png',
  );

  return (
    <main className="min-h-screen relative flex flex-col">
      <JsonLdScript schema={breadcrumbSchema} />
      <JsonLdScript schema={webPageSchema} />
      <Header />
      <AwardeeHero />
      <CaptainsSection />
      <ScholarsDirectory />
      <Footer />
    </main>
  );
}
