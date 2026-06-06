// app/awardee/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AwardeeHero from '@/components/awardee/AwardeeHero';
import CaptainsSection from '@/components/awardee/CaptainsSection';
import ScholarsDirectory from '@/components/awardee/ScholarsDirectory';

export const metadata = {
  title: 'Awardee — Tempat Setiap Babak Bermula | CSSMoRA ITS',
  description:
    'Direktori mahasantri CSSMoRA ITS — jejak ketua angkatan dan seluruh mahasantri lintas generasi sejak 2007.',
};

export default function AwardeePage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Header />
      <AwardeeHero />
      <CaptainsSection />
      <ScholarsDirectory />
      <Footer />
    </main>
  );
}
