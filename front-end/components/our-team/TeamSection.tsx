// components/our-team/TeamSection.tsx
'use client';

import { Noto_Serif, Poppins } from 'next/font/google';
import TeamMemberCard from './TeamMemberCard';
import { divisions, projectManager } from './teamData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function TeamSection() {
  return (
    <section id="team-grid" className="relative w-full bg-[#f8fafc] py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading section */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#0082c6] mb-4 ${notoSerif.className}`}>
            Tim di Balik Gambar
          </h2>
          <p className={`text-gray-500 text-base md:text-lg leading-relaxed ${poppins.className}`}>
            Setiap divisi memegang perannya masing-masing, bergerak bersama menuju
            satu tujuan yang sama.
          </p>
        </div>

        {/* Project Manager — bukan divisi, ditampilkan tersendiri & di tengah */}
        {projectManager && projectManager.members.length > 0 && (
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span className="px-3 py-1 rounded-full bg-[#0082c6]/10 text-[#0082c6] text-xs font-bold tracking-wide uppercase mb-3">
              Penanggung Jawab
            </span>
            <h3 className={`text-2xl md:text-3xl font-bold text-gray-800 ${notoSerif.className}`}>
              {projectManager.name}
            </h3>
            <p className={`text-gray-500 text-sm md:text-base max-w-xl mt-2 ${poppins.className}`}>
              {projectManager.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-5 md:gap-6 mt-8">
              {projectManager.members.map((member) => (
                <div key={member.id} className="w-[200px] md:w-[230px]">
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Divisi — masing-masing dengan grid yang ter-center */}
        <div className="flex flex-col gap-16 md:gap-20">
          {divisions.map((team) => (
            <div key={team.id} id={team.id} className="scroll-mt-28">
              {/* Heading divisi */}
              <div className="flex flex-col items-center text-center mb-8 md:mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="hidden sm:block h-px w-10 bg-gray-300" />
                  <h3 className={`text-2xl md:text-3xl font-bold text-gray-800 ${notoSerif.className}`}>
                    {team.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#a8f070] text-[#2a411b] text-xs font-bold">
                    {team.members.length}
                  </span>
                  <span className="hidden sm:block h-px w-10 bg-gray-300" />
                </div>
                <p className={`text-gray-500 text-sm md:text-base max-w-xl ${poppins.className}`}>
                  {team.tagline}
                </p>
              </div>

              {/* Grid anggota — flex-wrap + justify-center agar baris tak penuh tetap di tengah */}
              <div className="flex flex-wrap justify-center gap-5 md:gap-6">
                {team.members.map((member) => (
                  <div key={member.id} className="w-[150px] sm:w-[200px] lg:w-[230px]">
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
