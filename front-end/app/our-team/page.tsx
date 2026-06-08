// app/our-team/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurTeamHero from '@/components/our-team/OurTeamHero';
import TeamSection from '@/components/our-team/TeamSection';
import { JsonLdScript } from '@/components/JsonLdScript';
import { generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: {
    absolute: 'Our Team — Tim di Balik Website | CSSMoRA ITS',
  },
  description:
    'Kenali tim pengembang website CSSMoRA ITS — Backend, Frontend, System Analyst, Content Writer, dan Project Manager.',
  alternates: {
    canonical: 'https://cssmoraits.com/our-team',
  },
  openGraph: {
    title: 'Our Team — Tim di Balik Website | CSSMoRA ITS',
    description:
      'Kenali tim pengembang website CSSMoRA ITS — Backend, Frontend, System Analyst, Content Writer, dan Project Manager.',
    url: 'https://cssmoraits.com/our-team',
    images: [
      {
        url: 'https://cssmoraits.com/og-image.png',
        alt: 'Our Team CSSMoRA ITS',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team — Tim di Balik Website | CSSMoRA ITS',
    description:
      'Kenali tim pengembang website CSSMoRA ITS — Backend, Frontend, System Analyst, Content Writer, dan Project Manager.',
    images: ['https://cssmoraits.com/og-image.png'],
  },
};

export default function OurTeamPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://cssmoraits.com' },
    { name: 'Our Team', url: 'https://cssmoraits.com/our-team' },
  ]);

  const webPageSchema = generateWebPageSchema(
    'Our Team — Tim di Balik Website | CSSMoRA ITS',
    'Kenali tim pengembang website CSSMoRA ITS — Backend, Frontend, System Analyst, Content Writer, dan Project Manager.',
    'https://cssmoraits.com/our-team',
    'https://cssmoraits.com/og-image.png',
  );

  return (
    <main className="min-h-screen relative flex flex-col">
      <JsonLdScript schema={breadcrumbSchema} />
      <JsonLdScript schema={webPageSchema} />
      <Header />
      <OurTeamHero />
      <TeamSection />
      <Footer />
    </main>
  );
}
