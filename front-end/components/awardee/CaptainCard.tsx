// components/awardee/CaptainCard.tsx
import { Noto_Serif, Poppins } from 'next/font/google';
import type { Captain } from './awardeeData';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

interface Props {
  captain: Captain;
  /** Kartu yang sedang menjadi fokus tampil penuh & dengan aksen biru. */
  active?: boolean;
}

export default function CaptainCard({ captain, active = false }: Props) {
  return (
    <article
      className={`h-full w-full rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${poppins.className} ${
        active
          ? 'bg-[#0082c6] border-[#0082c6] shadow-xl text-white'
          : 'bg-white border-gray-100 shadow-sm text-gray-800'
      }`}
    >
      {/* Header: avatar + nama + jabatan */}
      <div className="flex items-center gap-3 p-5">
        <div
          className={`relative w-12 h-12 shrink-0 rounded-full overflow-hidden ring-2 ${
            active ? 'ring-[#a8f070]' : 'ring-[#0082c6]/30'
          } bg-gradient-to-br from-[#e6f3fb] to-[#cfe7f6]`}
        >
          {captain.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={captain.photo}
              alt={`Foto ${captain.name}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#0082c6]">
              {getInitials(captain.name)}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h4 className={`font-bold text-lg leading-tight truncate ${notoSerif.className}`}>
            {captain.name}
          </h4>
          <p className={`text-xs truncate ${active ? 'text-white/80' : 'text-gray-400'}`}>
            Ketua Angkatan {captain.generation}
          </p>
        </div>
      </div>

      {/* Detail rows */}
      <div
        className={`mt-auto border-t text-sm ${active ? 'border-white/20' : 'border-gray-100'}`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <span className={active ? 'text-white/70' : 'text-gray-400'}>Departemen</span>
          <span className="font-semibold text-right truncate ml-3">{captain.department}</span>
        </div>
        <div
          className={`flex items-center justify-between px-5 py-3 border-t ${
            active ? 'border-white/20' : 'border-gray-100'
          }`}
        >
          <span className={active ? 'text-white/70' : 'text-gray-400'}>Memimpin</span>
          <span className="font-semibold">{captain.totalScholars} Scholars</span>
        </div>
      </div>
    </article>
  );
}
