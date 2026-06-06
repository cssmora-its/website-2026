// components/renjana-cita/KabinetSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Noto_Serif, Poppins } from 'next/font/google';
import MemberCard from './MemberCard';
import MemberCarousel from './MemberCarousel';
import { useHeaderVisibility } from '@/components/HeaderVisibilityContext';
import {
  departments,
  executiveBoard,
  EXECUTIVE_SLUG,
  TAB_ITEMS,
  type Department,
} from './renjanaData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function KabinetSection() {
  const [activeSlug, setActiveSlug] = useState<string>(EXECUTIVE_SLUG);
  const { setHidden } = useHeaderVisibility();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  const activeDept = departments.find((d) => d.slug === activeSlug);

  useEffect(() => {
    const onScroll = () => {
      const el = sentinelRef.current;
      if (!el) return;
      const headerOffset = window.innerWidth >= 768 ? 80 : 64;
      setCollapsed(el.getBoundingClientRect().top <= headerOffset);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    setHidden(collapsed);
  }, [collapsed, setHidden]);

  useEffect(() => () => setHidden(false), [setHidden]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-0" />

      {/* ===== Tab Pills (sticky) ===== */}
      <section
        className={`sticky ${
          collapsed ? 'top-0' : 'top-[64px] md:top-[80px]'
        } z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-[top] duration-300 ${poppins.className}`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl py-4">
          <div
            className="flex md:flex-wrap md:justify-center gap-2.5 overflow-x-auto md:overflow-visible pb-1 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Pilih departemen kabinet"
          >
            {TAB_ITEMS.map((tab) => {
              const isActive = tab.slug === activeSlug;
              return (
                <button
                  key={tab.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveSlug(tab.slug)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-[13px] md:text-sm font-semibold transition-all shadow-sm ${
                    isActive
                      ? 'bg-[#a8f070] text-[#2a411b]'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-[#79ba4e] hover:text-[#0082c6]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Konten Tab ===== */}
      {activeSlug === EXECUTIVE_SLUG ? (
        <ExecutiveBoardView />
      ) : activeDept ? (
        <DepartmentView dept={activeDept} />
      ) : null}
    </>
  );
}

/* =========================================================
   Reusable: judul section
   ========================================================= */
function SectionHeading({
  title,
  subtitle,
  withRule = false,
}: {
  title: string;
  subtitle?: string;
  withRule?: boolean;
}) {
  return (
    <div className="text-center mb-10 md:mb-12">
      <h2
        className={`text-3xl md:text-[38px] font-bold text-[#0082c6] mb-3 ${notoSerif.className}`}
      >
        {title}
      </h2>
      {subtitle && <p className={`text-gray-500 text-sm md:text-base ${poppins.className}`}>{subtitle}</p>}
      {withRule && <div className="w-20 h-1 bg-[#a8f070] mx-auto rounded-full mt-4" />}
    </div>
  );
}

function GroupHeading({ title }: { title: string }) {
  return (
    <h3
      className={`text-xl md:text-2xl font-bold text-[#0082c6] mb-8 text-center ${notoSerif.className}`}
    >
      {title}
    </h3>
  );
}

/* =========================================================
   EXECUTIVE BOARD VIEW (DIREVISI SESUAI REFERENSI)
   ========================================================= */
function ExecutiveBoardView() {
  const { visi, misi, topBoard, directors } = executiveBoard;

  return (
    <>
      {/* =====================================
          SECTION: VISION & MISSION
      ===================================== */}
      <section className="py-16 md:py-24 px-6 bg-[#fcfdfc]">
        <div className="container mx-auto max-w-6xl flex flex-col items-center">
          
          {/* Judul Utama Vision & Mission */}
          <h2 className={`text-3xl md:text-5xl font-bold mb-10 md:mb-14 text-center ${notoSerif.className}`}>
            <span className="text-[#2a411b]">Vision </span>
            <span className="text-[#0082c6]">& Mission</span>
          </h2>

          {/* Banner VISI */}
          <div className="relative w-full h-[250px] md:h-[320px] rounded-3xl overflow-hidden mb-20 shadow-2xl flex items-center justify-center group">
            {/* Background Image (Gunakan gambar yang relevan, saya set default ke anggota-1.png) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: 'url(/anggota-1.png)' }}
            />
            {/* Overlay Gradasi Hitam & Biru CSSMoRA agar teks terbaca jelas */}
            <div className="absolute inset-0 bg-[#0082c6]/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/60" />

            {/* Teks Visi */}
            <div className="relative z-10 text-center px-8 md:px-16 flex flex-col items-center">
              <h3 className={`text-2xl md:text-3xl font-bold text-[#a8f070] mb-4 tracking-[0.2em] ${poppins.className}`}>
                VISI
              </h3>
              <p className={`text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto font-medium ${poppins.className}`}>
                &ldquo;{visi}&rdquo;
              </p>
            </div>
          </div>


          {/* Judul Core Values (Misi) */}
          <h2 className={`text-3xl md:text-[38px] font-bold mb-10 text-center ${notoSerif.className}`}>
            <span className="text-[#0082c6]">Core </span>
            <span className="text-[#2a411b]">Values</span>
          </h2>

          {/* Grid MISI / Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {misi.map((m) => (
              <div
                key={m.judul}
                className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 hover:shadow-xl hover:-translate-y-2 hover:border-[#a8f070]/50 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <h4 className={`text-[#0082c6] font-bold text-xl mb-4 italic group-hover:text-[#2a411b] transition-colors ${poppins.className}`}>
                  {m.judul}
                </h4>
                <p className={`text-gray-600 text-[14px] md:text-[15px] leading-relaxed ${poppins.className}`}>
                  {m.deskripsi}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          SECTION: TOP EXECUTIVE BOARD
      ===================================== */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading title="Top Executive Board" subtitle="Leading the Vision" withRule />

          <div className="flex flex-col items-center gap-8 mt-10">
            {/* Chairman (featured) */}
            <div className="w-full max-w-[320px] h-[440px]">
              <MemberCard member={topBoard.chairman} />
            </div>

            {/* Vice Chairmen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
              {topBoard.viceChairmen.map((vc) => (
                <div key={vc.id} className="h-[400px]">
                  <MemberCard member={vc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION: BOARD OF DIRECTOR
      ===================================== */}
      <section className="py-16 md:py-20 px-6 bg-[#f8fafc]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Board of Director" subtitle="The Administrative & Financial Excellence" withRule />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {directors.map((d) => (
              <div key={d.id} className="h-[400px]">
                <MemberCard member={d} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   DEPARTMENT VIEW
   ========================================================= */
function DepartmentView({ dept }: { dept: Department }) {
  return (
    <section className="py-16 md:py-20 px-6 bg-[#f8fafc]">
      <div className="container mx-auto max-w-6xl">
        {/* Header departemen */}
        <div className="text-center mb-14 md:mb-16">
          <span
            className={`inline-block px-4 py-1 bg-[#a8f070]/40 text-[#2a411b] border border-[#79ba4e] rounded-full text-xs font-bold uppercase tracking-[0.12em] mb-4 ${poppins.className}`}
          >
            Department
          </span>
          <h2 className={`text-3xl md:text-5xl font-bold text-[#0082c6] mb-6 ${notoSerif.className}`}>
            {dept.nama}
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className={`text-[#0082c6] text-base md:text-lg leading-relaxed italic ${poppins.className}`}>
              &ldquo;{dept.tagline}&rdquo;
            </p>
          </div>
        </div>

        {/* Department Leadership */}
        <div className="mb-16 md:mb-20">
          <GroupHeading title="Department Leadership" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {dept.leadership.map((m) => (
              <div key={m.id} className="w-full max-w-[320px] sm:w-[320px] h-[440px]">
                <MemberCard member={m} />
              </div>
            ))}
          </div>
        </div>

        {/* Expert Staff */}
        {dept.expertStaff.length > 0 && (
          <div className="mb-16 md:mb-20">
            <GroupHeading title="Expert Staff" />
            <MemberCarousel members={dept.expertStaff} groupLabel={`Expert Staff ${dept.nama}`} />
          </div>
        )}

        {/* Staff */}
        {dept.staff.length > 0 && (
          <div>
            <GroupHeading title="Staff" />
            <MemberCarousel members={dept.staff} groupLabel={`Staff ${dept.nama}`} />
          </div>
        )}
      </div>
    </section>
  );
}