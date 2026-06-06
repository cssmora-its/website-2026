// app/renjana-cita/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RenjanaHero from '@/components/renjana-cita/RenjanaHero';
import KabinetSection from '@/components/renjana-cita/KabinetSection';
import { HeaderVisibilityProvider } from '@/components/HeaderVisibilityContext';

export const metadata = {
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
    url: '/renjana-cita',
    images: [
      {
        url: '/og-image.png',
        alt: 'Kabinet Renjana Cita CSSMoRA ITS',
      },
    ],
  },
  twitter: {
    title: 'Renjana Cita — Kabinet CSSMoRA ITS',
    description:
      'Profil Kabinet Renjana Cita CSSMoRA ITS 2025/2026 — Pengurus Inti hingga seluruh departemen dan biro beserta jajaran pengurusnya.',
    images: ['/og-image.png'],
  },
};

export default function RenjanaCitaPage() {
  return (
    <HeaderVisibilityProvider>
      <main className="min-h-screen relative flex flex-col">
        <Header />
        <RenjanaHero />
        <KabinetSection />
        <Footer />
      </main>
    </HeaderVisibilityProvider>
  );
}
