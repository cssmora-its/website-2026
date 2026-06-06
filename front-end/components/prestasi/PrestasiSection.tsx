// components/prestasi/PrestasiSection.tsx
'use client';

import { useState } from 'react';
import { Noto_Serif, Poppins } from 'next/font/google';
import PrestasiCard from './PrestasiCard';
import PrestasiDetailModal from './PrestasiDetailModal';
import { prestasiData, type Prestasi } from './prestasiData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function PrestasiSection() {
  const [selected, setSelected] = useState<Prestasi | null>(null);

  return (
    <section
      id="prestasi-list"
      className="relative w-full bg-[#0082c6] py-16 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Motif samar — selaras dengan section biru existing */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -left-[200px] md:-left-[400px] w-[400px] md:w-[800px] h-[400px] md:h-[800px] z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url(/pattern.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-[200px] md:-right-[400px] w-[400px] md:w-[800px] h-[400px] md:h-[800px] z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url(/pattern.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Heading section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#a8f070] mb-3 drop-shadow ${notoSerif.className}`}
          >
            Prestasi Awardee
          </h2>
          <p className={`text-white text-base md:text-lg font-semibold ${poppins.className}`}>
            Mengenang inaugurasi & perjalanan pengabdian CSSMoRA ITS
          </p>
        </div>

        {/* Grid card: 3 / 2 / 1 kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {prestasiData.map((item) => (
            <PrestasiCard key={item.id} prestasi={item} onReadMore={setSelected} />
          ))}
        </div>
      </div>

      <PrestasiDetailModal prestasi={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
