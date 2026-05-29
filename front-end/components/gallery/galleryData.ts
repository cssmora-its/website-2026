// components/gallery/galleryData.ts

export type ProkerCategory =
  | 'Proker BPH'
  | 'Internal Affairs'
  | 'Mahasantri Welfare'
  | 'Human Capital Development'
  | 'Pesantren and Social Development'
  | 'Media and Information'
  | 'Personalia';

export interface Proker {
  id: number;
  nama_proker: string;
  departemen: string;
  kategori: ProkerCategory;
  waktu_pelaksanaan: string;
  thumbnail?: string;
  images?: string[];
  deskripsi: string;
}

export const CATEGORY_ORDER: ProkerCategory[] = [
  'Proker BPH',
  'Internal Affairs',
  'Mahasantri Welfare',
  'Human Capital Development',
  'Pesantren and Social Development',
  'Media and Information',
  'Personalia',
];

export const galleryData: Proker[] = [
  // Proker BPH
  {
    id: 1,
    nama_proker: 'Musker',
    departemen: 'BPH',
    kategori: 'Proker BPH',
    waktu_pelaksanaan: '2025-08-12T09:00:00',
    deskripsi:
      'Musyawarah Kerja Nasional sebagai forum penyusunan arah kerja organisasi untuk satu periode kepengurusan.',
  },
  {
    id: 2,
    nama_proker: 'KONGMAR',
    departemen: 'BPH',
    kategori: 'Proker BPH',
    waktu_pelaksanaan: '2025-09-05T08:00:00',
    deskripsi:
      'Kongres Mahasantri sebagai wadah evaluasi dan pengambilan keputusan strategis bersama seluruh anggota.',
  },
  {
    id: 3,
    nama_proker: 'Hall of Fame',
    departemen: 'BPH',
    kategori: 'Proker BPH',
    waktu_pelaksanaan: '2025-10-15T19:00:00',
    deskripsi:
      'Apresiasi kepada mahasantri dan pengurus berprestasi atas kontribusi nyata mereka selama periode kepengurusan.',
  },
  {
    id: 4,
    nama_proker: 'Eid Greeting',
    departemen: 'BPH',
    kategori: 'Proker BPH',
    waktu_pelaksanaan: '2025-04-02T10:00:00',
    deskripsi:
      'Silaturahmi Idulfitri seluruh keluarga besar CSSMoRA ITS untuk mempererat ukhuwah antar angkatan.',
  },
  {
    id: 5,
    nama_proker: 'Sukses Harlah CSSMoRA ITS',
    departemen: 'BPH',
    kategori: 'Proker BPH',
    waktu_pelaksanaan: '2025-11-20T08:00:00',
    deskripsi:
      'Rangkaian peringatan Hari Lahir CSSMoRA ITS yang dikemas dengan kegiatan sosial, ilmiah, dan kreatif.',
  },
  {
    id: 6,
    nama_proker: 'P-Trans',
    departemen: 'BPH',
    kategori: 'Proker BPH',
    waktu_pelaksanaan: '2025-12-15T13:00:00',
    deskripsi:
      'Pelatihan transisi kepengurusan untuk mempersiapkan calon pengurus baru menjelang regenerasi.',
  },
  {
    id: 7,
    nama_proker: 'Upgrading Pengurus',
    departemen: 'BPH',
    kategori: 'Proker BPH',
    waktu_pelaksanaan: '2025-02-22T08:00:00',
    deskripsi:
      'Penguatan kapasitas seluruh pengurus melalui pelatihan kepemimpinan, manajemen tim, dan team building.',
  },
  {
    id: 8,
    nama_proker: 'CSS Connect',
    departemen: 'BPH',
    kategori: 'Proker BPH',
    waktu_pelaksanaan: '2025-07-12T09:00:00',
    deskripsi:
      'Forum penghubung antara alumni dan mahasantri aktif untuk membangun jejaring dan kolaborasi lintas generasi.',
  },

  // Internal Affairs
  {
    id: 9,
    nama_proker: 'Inarbu',
    departemen: 'Internal Affairs',
    kategori: 'Internal Affairs',
    waktu_pelaksanaan: '2025-05-18T16:00:00',
    deskripsi:
      'Internal Arabian Bukber sebagai momen kebersamaan dengan nuansa kultural untuk mempererat hubungan antar anggota.',
  },
  {
    id: 10,
    nama_proker: 'Iftor Inafa',
    departemen: 'Internal Affairs',
    kategori: 'Internal Affairs',
    waktu_pelaksanaan: '2025-03-28T17:00:00',
    deskripsi:
      'Iftar bersama keluarga internal CSSMoRA ITS yang dikemas dengan kajian ringan dan sharing antar angkatan.',
  },
  {
    id: 11,
    nama_proker: 'Royalbu',
    departemen: 'Internal Affairs',
    kategori: 'Internal Affairs',
    waktu_pelaksanaan: '2025-06-08T16:30:00',
    deskripsi:
      'Forum kekeluargaan rutin yang menjadi ruang bertukar cerita dan menjaga kehangatan antar mahasantri.',
  },
  {
    id: 12,
    nama_proker: 'CSS Community Life',
    departemen: 'Internal Affairs',
    kategori: 'Internal Affairs',
    waktu_pelaksanaan: '2025-04-12T08:00:00',
    deskripsi:
      'Aktivitas komunitas yang mendorong mahasantri tumbuh bersama melalui kegiatan sosial dan kolaboratif.',
  },
  {
    id: 13,
    nama_proker: 'CSS Tabuh',
    departemen: 'Internal Affairs',
    kategori: 'Internal Affairs',
    waktu_pelaksanaan: '2025-09-19T19:00:00',
    deskripsi:
      'Pentas seni internal yang memberi ruang ekspresi bagi mahasantri melalui musik, hadrah, dan pertunjukan budaya.',
  },

  // Mahasantri Welfare
  {
    id: 14,
    nama_proker: 'Madhfizul',
    departemen: 'Mahasantri Welfare',
    kategori: 'Mahasantri Welfare',
    waktu_pelaksanaan: '2025-03-10T05:00:00',
    deskripsi:
      'Madrasah tahfizul Qur’an rutin sebagai wadah pembinaan hafalan dan murajaah bagi mahasantri.',
  },
  {
    id: 15,
    nama_proker: 'Ta’lim',
    departemen: 'Mahasantri Welfare',
    kategori: 'Mahasantri Welfare',
    waktu_pelaksanaan: '2025-04-05T19:30:00',
    deskripsi:
      'Kajian keagamaan rutin yang menghadirkan asatidz untuk memperdalam pemahaman keilmuan Islam mahasantri.',
  },
  {
    id: 16,
    nama_proker: 'Tadris',
    departemen: 'Mahasantri Welfare',
    kategori: 'Mahasantri Welfare',
    waktu_pelaksanaan: '2025-05-22T18:30:00',
    deskripsi:
      'Pengajaran rutin yang difasilitasi mahasantri senior untuk membantu adik tingkat dalam materi pesantren.',
  },
  {
    id: 17,
    nama_proker: 'CSS Champion',
    departemen: 'Mahasantri Welfare',
    kategori: 'Mahasantri Welfare',
    waktu_pelaksanaan: '2025-10-08T08:00:00',
    deskripsi:
      'Ajang kompetisi internal untuk mengembangkan potensi akademik dan non-akademik mahasantri.',
  },

  // Human Capital Development
  {
    id: 18,
    nama_proker: 'SALAM',
    departemen: 'Human Capital Development',
    kategori: 'Human Capital Development',
    waktu_pelaksanaan: '2025-02-15T08:00:00',
    deskripsi:
      'Santri Leadership and Management program untuk membangun karakter kepemimpinan mahasantri.',
  },
  {
    id: 19,
    nama_proker: 'FALAM',
    departemen: 'Human Capital Development',
    kategori: 'Human Capital Development',
    waktu_pelaksanaan: '2025-07-20T09:00:00',
    deskripsi:
      'Forum pengembangan soft skill dan hard skill yang dirancang untuk meningkatkan kompetensi mahasantri.',
  },

  // Pesantren and Social Development
  {
    id: 20,
    nama_proker: 'Anak Pesantren',
    departemen: 'Pesantren and Social Development',
    kategori: 'Pesantren and Social Development',
    waktu_pelaksanaan: '2025-06-25T08:00:00',
    deskripsi:
      'Program pendampingan dan kegiatan inspiratif bersama santri pesantren mitra di sekitar Surabaya.',
  },
  {
    id: 21,
    nama_proker: 'Ngaji Mahasantri',
    departemen: 'Pesantren and Social Development',
    kategori: 'Pesantren and Social Development',
    waktu_pelaksanaan: '2025-04-30T19:30:00',
    deskripsi:
      'Forum pengajian terbuka untuk umum yang dipimpin oleh asatidz pesantren mitra CSSMoRA ITS.',
  },
  {
    id: 22,
    nama_proker: 'CRH 4.0',
    departemen: 'Pesantren and Social Development',
    kategori: 'Pesantren and Social Development',
    waktu_pelaksanaan: '2025-11-04T08:00:00',
    deskripsi:
      'CSSMoRA Research Hub generasi keempat sebagai wadah riset dan inovasi mahasantri untuk pesantren.',
  },
  {
    id: 23,
    nama_proker: 'Mahasantri Mengabdi',
    departemen: 'Pesantren and Social Development',
    kategori: 'Pesantren and Social Development',
    waktu_pelaksanaan: '2025-08-30T07:00:00',
    deskripsi:
      'Pengabdian masyarakat melalui kegiatan sosial, edukatif, dan keagamaan di pesantren binaan.',
  },

  // Media and Information
  {
    id: 24,
    nama_proker: 'CSS Mubarok',
    departemen: 'Media and Information',
    kategori: 'Media and Information',
    waktu_pelaksanaan: '2025-03-15T08:00:00',
    deskripsi:
      'Kampanye konten Ramadan yang menyebarkan inspirasi keagamaan melalui kanal sosial CSSMoRA ITS.',
  },
  {
    id: 25,
    nama_proker: 'Media Hub',
    departemen: 'Media and Information',
    kategori: 'Media and Information',
    waktu_pelaksanaan: '2025-05-10T13:00:00',
    deskripsi:
      'Pelatihan dan pendampingan kreator konten internal untuk memperkuat ekosistem media CSSMoRA ITS.',
  },
  {
    id: 26,
    nama_proker: 'GCB',
    departemen: 'Media and Information',
    kategori: 'Media and Information',
    waktu_pelaksanaan: '2025-09-02T09:00:00',
    deskripsi:
      'Grand Creative Battle, kompetisi kreatif yang mendorong inovasi konten di kalangan mahasantri.',
  },
  {
    id: 27,
    nama_proker: 'Media Leveling',
    departemen: 'Media and Information',
    kategori: 'Media and Information',
    waktu_pelaksanaan: '2025-04-18T15:00:00',
    deskripsi:
      'Upgrade kapasitas tim media melalui workshop desain, videografi, dan storytelling.',
  },
  {
    id: 28,
    nama_proker: 'Pageant',
    departemen: 'Media and Information',
    kategori: 'Media and Information',
    waktu_pelaksanaan: '2025-10-25T18:00:00',
    deskripsi:
      'Ajang pemilihan duta mahasantri yang menjadi representasi nilai dan citra CSSMoRA ITS.',
  },

  // Personalia
  {
    id: 29,
    nama_proker: 'KU',
    departemen: 'Personalia',
    kategori: 'Personalia',
    waktu_pelaksanaan: '2025-03-08T09:00:00',
    deskripsi:
      'Kontrol Umum sebagai forum monitoring kinerja dan kesejahteraan pengurus secara berkala.',
  },
  {
    id: 30,
    nama_proker: 'STAFARM',
    departemen: 'Personalia',
    kategori: 'Personalia',
    waktu_pelaksanaan: '2025-07-04T08:00:00',
    deskripsi:
      'Staff Farm, kegiatan refreshing dan team building tahunan untuk seluruh pengurus CSSMoRA ITS.',
  },
];

export function groupByCategory(items: Proker[]): Record<ProkerCategory, Proker[]> {
  const grouped = {} as Record<ProkerCategory, Proker[]>;
  for (const cat of CATEGORY_ORDER) {
    grouped[cat] = [];
  }
  for (const item of items) {
    grouped[item.kategori].push(item);
  }
  return grouped;
}

export function formatWaktuPelaksanaan(iso: string): string {
  try {
    const date = new Date(iso);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}
