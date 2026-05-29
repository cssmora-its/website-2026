// components/awardee/ScholarsDirectory.tsx
'use client';

import { useMemo, useState } from 'react';
import { Noto_Serif, Poppins } from 'next/font/google';
import ScholarCard from './ScholarCard';
import ScholarDetailModal from './ScholarDetailModal';
import { generationOptions, scholars, type Scholar } from './awardeeData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const ALL = 'all';
const PAGE_SIZE = 8;

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-gray-400"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-gray-400 pointer-events-none"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function ScholarsDirectory() {
  const [generation, setGeneration] = useState<string>(ALL);
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<Scholar | null>(null);

  // Filter berdasarkan angkatan + pencarian lintas-field.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scholars.filter((s) => {
      if (generation !== ALL && s.generation !== generation) return false;
      if (!q) return true;
      return [
        s.name,
        s.department,
        s.generation,
        s.city,
        s.pesantren,
        s.instagram,
        s.linkedin,
        s.nia,
      ]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [generation, query]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  // Reset jumlah tampil setiap filter/pencarian berubah (pola derived state).
  const filterKey = `${generation}|${query.trim().toLowerCase()}`;
  const [trackedKey, setTrackedKey] = useState(filterKey);
  if (filterKey !== trackedKey) {
    setTrackedKey(filterKey);
    setVisible(PAGE_SIZE);
  }

  return (
    <section id="all-scholars" className="relative w-full bg-[#f8fafc] py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header + filter */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#0082c6] mb-2 ${notoSerif.className}`}>
              All Scholars
            </h2>
            <p className={`text-gray-500 text-base md:text-lg ${poppins.className}`}>
              Discover the brilliant minds across all generations.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-3 ${poppins.className}`}>
            {/* Dropdown angkatan */}
            <div className="relative">
              <select
                value={generation}
                onChange={(e) => setGeneration(e.target.value)}
                aria-label="Filter angkatan"
                className="appearance-none w-full sm:w-48 bg-white border border-gray-200 rounded-full pl-4 pr-10 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0082c6] focus:border-transparent cursor-pointer shadow-sm"
              >
                <option value={ALL}>Semua Angkatan</option>
                {generationOptions.map((g) => (
                  <option key={g} value={g}>
                    Angkatan {g}
                  </option>
                ))}
              </select>
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
                <ChevronDown />
              </span>
            </div>

            {/* Search */}
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, department, city, pesantren, or social media…"
                aria-label="Cari scholar"
                className="w-full sm:w-80 bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0082c6] focus:border-transparent shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        {shown.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {shown.map((s) => (
              <ScholarCard key={s.id} scholar={s} onClick={setSelected} />
            ))}
          </div>
        ) : (
          <div className={`text-center py-20 ${poppins.className}`}>
            <p className="text-gray-500 text-base">
              Tidak ada scholar yang cocok dengan pencarian kamu.
            </p>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className={`bg-white border border-[#0082c6] text-[#0082c6] hover:bg-[#0082c6] hover:text-white font-semibold px-8 py-3 rounded-full shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0082c6] focus:ring-offset-2 ${poppins.className}`}
            >
              Load More Scholars
            </button>
          </div>
        )}
      </div>

      <ScholarDetailModal scholar={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
