// app/renjana-cita/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RenjanaHero from '@/components/renjana-cita/RenjanaHero';
import KabinetSection from '@/components/renjana-cita/KabinetSection';

export const metadata = {
  title: 'Renjana Cita — Kabinet CSSMoRA ITS',
  description:
    'Profil Kabinet Renjana Cita CSSMoRA ITS 2025/2026 — Executive Board hingga seluruh departemen dan biro beserta jajaran pengurusnya.',
};

export default function RenjanaCitaPage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Header />
      <RenjanaHero />
      <KabinetSection />
      <Footer />
    </main>
  );
}
