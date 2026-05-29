// components/renjana-cita/KabinetSection.tsx
'use client';

import { useState } from 'react';
import { Noto_Serif, Poppins } from 'next/font/google';
import MemberCard from './MemberCard';
import MemberCarousel from './MemberCarousel';
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

  const activeDept = departments.find((d) => d.slug === activeSlug);

  return (
    <>
      {/* ===== Tab Pills (sticky) ===== */}
      <section
        className={`sticky top-[64px] md:top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm ${poppins.className}`}
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
   Reusable: judul section + garis lime
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
        className={`text-2xl md:text-[34px] font-bold text-[#0082c6] mb-3 ${notoSerif.className}`}
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
   EXECUTIVE BOARD VIEW
   ========================================================= */
function ExecutiveBoardView() {
  const { visi, misi, topBoard, directors } = executiveBoard;

  return (
    <>
      {/* Strategic Foundation */}
      <section className="py-16 md:py-20 px-6 bg-[#f8fafc]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Strategic Foundation" withRule />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Visi */}
            <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-7 md:p-8 flex flex-col justify-center">
              <div className={`flex items-center gap-3 mb-5 text-[#0082c6] ${poppins.className}`}>
                <span className="w-10 h-10 rounded-full bg-[#0082c6]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1 1 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178a1 1 0 0 1 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </span>
                <h3 className={`text-2xl font-bold ${notoSerif.className}`}>Visi</h3>
              </div>
              <p className={`text-gray-600 text-base md:text-lg leading-relaxed italic ${poppins.className}`}>
                &ldquo;{visi}&rdquo;
              </p>
            </div>

            {/* Misi grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {misi.map((m) => (
                <div
                  key={m.judul}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <span className="inline-flex w-9 h-9 rounded-lg bg-[#a8f070]/40 text-[#2a411b] items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <h4 className={`text-[#0082c6] font-bold text-base mb-2 ${poppins.className}`}>
                    {m.judul}
                  </h4>
                  <p className={`text-gray-500 text-sm leading-relaxed ${poppins.className}`}>
                    {m.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Executive Board */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading title="Top Executive Board" subtitle="Leading the Vision" />

          <div className="flex flex-col items-center gap-8">
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

      {/* Board of Director */}
      <section className="py-16 md:py-20 px-6 bg-[#f8fafc]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Board of Director" subtitle="The Administrative & Financial Excellence" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
