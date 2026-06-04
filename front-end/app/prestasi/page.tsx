// app/prestasi/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrestasiHero from '@/components/prestasi/PrestasiHero';
import PrestasiSection from '@/components/prestasi/PrestasiSection';

export const metadata = {
  title: 'Prestasi — Driven by Passion, Defined by Impact | CSSMoRA ITS',
  description:
    'Kumpulan karya, inovasi, dan prestasi mahasantri CSSMoRA ITS untuk almamater, pesantren, dan negeri.',
};

export default function PrestasiPage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Header />
      <PrestasiHero />
      <PrestasiSection />
      <Footer />
    </main>
  );
}
