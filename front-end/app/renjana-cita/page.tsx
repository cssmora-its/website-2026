// app/renjana-cita/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RenjanaHero from '@/components/renjana-cita/RenjanaHero';
import KabinetSection from '@/components/renjana-cita/KabinetSection';
import { HeaderVisibilityProvider } from '@/components/HeaderVisibilityContext';
import { JsonLdScript } from '@/components/JsonLdScript';
import { generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: {
    absolute: 'Renjana Cita — Kabinet CSSMoRA ITS',
  },
  description:
    'Profil Kabinet Renjana Cita CSSMoRA ITS 2025/2026 — Pengurus Inti hingga seluruh departemen dan biro beserta jajaran pengurusnya.',
  alternates: {
    canonical: '/renjana-cita',
  },
  openGraph: {
    title: 'Renjana Cita — Kabinet CSSMoRA ITS',
    description:
      'Profil Kabinet Renjana Cita CSSMoRA ITS 2025/2026 — Pengurus Inti hingga seluruh departemen dan biro beserta jajaran pengurusnya.',
    url: 'https://cssmoraits.com/renjana-cita',
    images: [
      {
        url: 'https://cssmoraits.com/og-image.png',
        alt: 'Kabinet Renjana Cita CSSMoRA ITS',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renjana Cita — Kabinet CSSMoRA ITS',
    description:
      'Profil Kabinet Renjana Cita CSSMoRA ITS 2025/2026 — Pengurus Inti hingga seluruh departemen dan biro beserta jajaran pengurusnya.',
    images: ['https://cssmoraits.com/og-image.png'],
  },
};

export default function RenjanaCitaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://cssmoraits.com' },
    { name: 'Renjana Cita', url: 'https://cssmoraits.com/renjana-cita' },
  ]);

  const webPageSchema = generateWebPageSchema(
    'Renjana Cita — Kabinet CSSMoRA ITS',
    'Profil Kabinet Renjana Cita CSSMoRA ITS 2025/2026 — Pengurus Inti hingga seluruh departemen dan biro beserta jajaran pengurusnya.',
    'https://cssmoraits.com/renjana-cita',
    'https://cssmoraits.com/og-image.png',
  );

  return (
    <HeaderVisibilityProvider>
      <main className="min-h-screen relative flex flex-col">
        <JsonLdScript schema={breadcrumbSchema} />
        <JsonLdScript schema={webPageSchema} />
        <Header />
        <RenjanaHero />
        <KabinetSection />
        <Footer />
      </main>
    </HeaderVisibilityProvider>
  );
}
