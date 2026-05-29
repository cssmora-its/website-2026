// components/renjana-cita/MemberCard.tsx
import { Noto_Serif, Poppins } from 'next/font/google';
import type { Member } from './renjanaData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

function getInitials(nama: string): string {
  return nama
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

interface Props {
  member: Member;
  /** Versi ringkas (padding & font lebih kecil) untuk kartu samping carousel. */
  compact?: boolean;
}

export default function MemberCard({ member, compact = false }: Props) {
  const initials = getInitials(member.nama);

  return (
    <article
      className={`group h-full w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col ${poppins.className}`}
    >
      {/* Info block (atas) */}
      <div
        className={`bg-white border-b border-gray-100 shrink-0 ${compact ? 'p-4' : 'p-5 md:p-6'}`}
      >
        <h4
          className={`font-bold text-[#0082c6] truncate ${notoSerif.className} ${
            compact ? 'text-lg' : 'text-xl md:text-[22px]'
          }`}
        >
          {member.nama}
        </h4>
        <p
          className={`text-gray-500 truncate mt-0.5 ${compact ? 'text-xs' : 'text-sm md:text-[15px]'}`}
        >
          {member.jabatan}
        </p>

        {member.nia && (
          <span className="inline-block mt-3 px-2.5 py-1 bg-[#a8f070]/80 text-[#2a411b] font-semibold text-[11px] md:text-xs rounded-md tracking-wide">
            NIA: {member.nia}
          </span>
        )}
      </div>

      {/* Foto (bawah, mengisi sisa ruang) */}
      <div className="relative flex-grow bg-gradient-to-br from-[#e6f3fb] to-[#cfe7f6] overflow-hidden">
        {member.foto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.foto}
            alt={`Foto ${member.nama}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`select-none font-bold text-white/70 ${notoSerif.className} ${
                compact ? 'text-5xl' : 'text-6xl md:text-7xl'
              }`}
            >
              {initials}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
