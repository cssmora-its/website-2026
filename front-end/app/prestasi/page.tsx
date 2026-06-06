// app/prestasi/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrestasiHero from '@/components/prestasi/PrestasiHero';
import PrestasiSection from '@/components/prestasi/PrestasiSection';

export const metadata = {
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
    url: '/prestasi',
    images: [
      {
        url: '/og-image.png',
        alt: 'Prestasi CSSMoRA ITS',
      },
    ],
  },
  twitter: {
    title: 'Prestasi — Digerakkan oleh Gairah, Ditentukan oleh Dampak | CSSMoRA ITS',
    description:
      'Kumpulan karya, inovasi, dan prestasi mahasantri CSSMoRA ITS untuk almamater, pesantren, dan negeri.',
    images: ['/og-image.png'],
  },
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
