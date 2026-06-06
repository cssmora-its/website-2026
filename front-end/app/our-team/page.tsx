// app/our-team/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurTeamHero from '@/components/our-team/OurTeamHero';
import TeamSection from '@/components/our-team/TeamSection';

export const metadata = {
  title: 'Our Team — Tim di Balik Website | CSSMoRA ITS',
  description:
    'Kenali tim pengembang website CSSMoRA ITS — Backend, Frontend, System Analyst, Content Writer, dan Project Manager.',
};

export default function OurTeamPage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Header />
      <OurTeamHero />
      <TeamSection />
      <Footer />
    </main>
  );
}
