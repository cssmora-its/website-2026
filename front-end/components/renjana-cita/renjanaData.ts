// components/renjana-cita/renjanaData.ts
//
// Data Kabinet Renjana Cita CSSMoRA ITS.
// Data di bawah ini masih placeholder yang terstruktur — saat backend siap,
// ganti isi `executiveBoard` & `departments` dengan hasil fetch sebenarnya.
// Bentuk tipe (Member / Department / ExecutiveBoard) sudah final, jadi
// integrasi API cukup memetakan response ke tipe-tipe ini.

export interface Member {
  id: number;
  nama: string;
  jabatan: string;
  /** Nomor Induk Anggota — opsional, ditampilkan sebagai tag kecil bila ada. */
  nia?: string;
  /** Path foto di /public atau URL. Bila kosong, kartu menampilkan placeholder. */
  foto?: string;
}

export interface Department {
  /** Dipakai sebagai key tab & anchor. */
  slug: string;
  /** Nama departemen yang ditampilkan. */
  nama: string;
  /** Kutipan/deskripsi singkat peran departemen. */
  tagline: string;
  leadership: Member[];
  expertStaff: Member[];
  staff: Member[];
}

export interface MissionPoint {
  judul: string;
  deskripsi: string;
}

export interface ExecutiveBoard {
  visi: string;
  misi: MissionPoint[];
  /** Ketua + para wakil ketua. */
  topBoard: {
    chairman: Member;
    viceChairmen: Member[];
  };
  /** Sekjen, wasekjen, bendahara, wabendahara, dst. */
  directors: Member[];
}

/* =========================================================
   EXECUTIVE BOARD
   ========================================================= */
export const executiveBoard: ExecutiveBoard = {
  visi:
    'CSSMoRA ITS sebagai wadah pengembangan mahasantri yang harmonis dan progresif guna menghadirkan dampak positif bagi anggota dan masyarakat.',
  misi: [
    {
      judul: 'Harmonious',
      deskripsi: 'Mewujudkan lingkungan internal yang inklusif dan kolaboratif.',
    },
    {
      judul: 'Professional',
      deskripsi: 'Membangun etos kerja dan manajerial organisasi yang unggul.',
    },
    {
      judul: 'Optimal',
      deskripsi: 'Memaksimalkan potensi mahasantri di bidang akademik dan non-akademik.',
    },
    {
      judul: 'Actualize Values',
      deskripsi: 'Mengamalkan nilai-nilai kepesantrenan dalam kehidupan bermasyarakat.',
    },
  ],
  topBoard: {
    chairman: { id: 1, nama: 'Nabiel Nizar Anwari', jabatan: 'Chairman', nia: '12345001' },
    viceChairmen: [
      { id: 2, nama: 'Barrul', jabatan: 'Vice Chairman 1', nia: '12345002' },
      { id: 3, nama: 'Lilis', jabatan: 'Vice Chairman 2', nia: '12345003' },
    ],
  },
  directors: [
    { id: 4, nama: 'Sinta', jabatan: 'General Secretary', nia: '12345004' },
    { id: 5, nama: 'Rara', jabatan: 'Vice General Secretary', nia: '12345005' },
    { id: 6, nama: 'Jacinda', jabatan: 'General Treasurer', nia: '12345006' },
    { id: 7, nama: 'Khasna', jabatan: 'Vice General Treasurer', nia: '12345007' },
  ],
};

/* =========================================================
   DEPARTMENTS & BUREAUS
   Urutan & penamaan diselaraskan dengan galleryData (kategori proker).
   ========================================================= */
export const departments: Department[] = [
  {
    slug: 'internal-affairs',
    nama: 'Internal Affairs',
    tagline:
      'Mengelola dan mengkoordinasikan urusan internal organisasi secara efektif dan efisien untuk mendukung tercapainya tujuan bersama CSSMoRA ITS.',
    leadership: [
      { id: 101, nama: 'Septi', jabatan: 'Head of Department', nia: '12345101' },
      { id: 102, nama: 'Nopal', jabatan: 'Secretary', nia: '12345102' },
    ],
    expertStaff: [
      { id: 103, nama: 'Aisyah Rahma', jabatan: 'Expert Staff', nia: '12345103' },
      { id: 104, nama: 'Fauzan Hakim', jabatan: 'Expert Staff', nia: '12345104' },
      { id: 105, nama: 'Naila Zahra', jabatan: 'Expert Staff', nia: '12345105' },
    ],
    staff: [
      { id: 106, nama: 'Dimas Pratama', jabatan: 'Staff', nia: '12345106' },
      { id: 107, nama: 'Salsabila', jabatan: 'Staff', nia: '12345107' },
      { id: 108, nama: 'Rizky Maulana', jabatan: 'Staff', nia: '12345108' },
      { id: 109, nama: 'Hanifah Putri', jabatan: 'Staff', nia: '12345109' },
    ],
  },
  {
    slug: 'human-capital-development',
    nama: 'Human Capital Development',
    tagline:
      'Mengembangkan kapasitas, kepemimpinan, dan kompetensi mahasantri melalui pembinaan berkelanjutan yang terarah.',
    leadership: [
      { id: 201, nama: 'Hilmi Abdullah', jabatan: 'Head of Department', nia: '12345201' },
      { id: 202, nama: 'Mutiara Dewi', jabatan: 'Secretary', nia: '12345202' },
    ],
    expertStaff: [
      { id: 203, nama: 'Yusuf Ramadhan', jabatan: 'Expert Staff', nia: '12345203' },
      { id: 204, nama: 'Khalisa Nuha', jabatan: 'Expert Staff', nia: '12345204' },
      { id: 205, nama: 'Farhan Aziz', jabatan: 'Expert Staff', nia: '12345205' },
    ],
    staff: [
      { id: 206, nama: 'Zahwa Amelia', jabatan: 'Staff', nia: '12345206' },
      { id: 207, nama: 'Ibnu Sina', jabatan: 'Staff', nia: '12345207' },
      { id: 208, nama: 'Nadia Safitri', jabatan: 'Staff', nia: '12345208' },
    ],
  },
  {
    slug: 'mahasantri-welfare',
    nama: 'Mahasantri Welfare',
    tagline:
      'Menjaga kesejahteraan spiritual dan keilmuan mahasantri melalui program pembinaan keagamaan dan akademik.',
    leadership: [
      { id: 301, nama: 'Ahmad Fikri', jabatan: 'Head of Department', nia: '12345301' },
      { id: 302, nama: 'Halimatus', jabatan: 'Secretary', nia: '12345302' },
    ],
    expertStaff: [
      { id: 303, nama: 'Bilal Hadi', jabatan: 'Expert Staff', nia: '12345303' },
      { id: 304, nama: 'Syifa Kamila', jabatan: 'Expert Staff', nia: '12345304' },
      { id: 305, nama: 'Umar Faruq', jabatan: 'Expert Staff', nia: '12345305' },
    ],
    staff: [
      { id: 306, nama: 'Aulia Rahmah', jabatan: 'Staff', nia: '12345306' },
      { id: 307, nama: 'Hasan Basri', jabatan: 'Staff', nia: '12345307' },
      { id: 308, nama: 'Faiqah Nur', jabatan: 'Staff', nia: '12345308' },
    ],
  },
  {
    slug: 'pesantren-social-development',
    nama: 'Pesantren and Social Development',
    tagline:
      'Menggerakkan pengabdian dan kolaborasi sosial bersama pesantren mitra untuk kemaslahatan masyarakat.',
    leadership: [
      { id: 401, nama: 'Ridho Akbar', jabatan: 'Head of Department', nia: '12345401' },
      { id: 402, nama: 'Kamila Hasna', jabatan: 'Secretary', nia: '12345402' },
    ],
    expertStaff: [
      { id: 403, nama: 'Zaki Mubarak', jabatan: 'Expert Staff', nia: '12345403' },
      { id: 404, nama: 'Hawwa Latifah', jabatan: 'Expert Staff', nia: '12345404' },
      { id: 405, nama: 'Iqbal Fahmi', jabatan: 'Expert Staff', nia: '12345405' },
    ],
    staff: [
      { id: 406, nama: 'Nabila Rizqi', jabatan: 'Staff', nia: '12345406' },
      { id: 407, nama: 'Daffa Pranaja', jabatan: 'Staff', nia: '12345407' },
      { id: 408, nama: 'Marwah Sania', jabatan: 'Staff', nia: '12345408' },
    ],
  },
  {
    slug: 'media-information',
    nama: 'Media and Information',
    tagline:
      'Membangun citra dan ekosistem media organisasi melalui konten kreatif yang informatif dan inspiratif.',
    leadership: [
      { id: 501, nama: 'Raffi Ananta', jabatan: 'Head of Department', nia: '12345501' },
      { id: 502, nama: 'Talita Zahira', jabatan: 'Secretary', nia: '12345502' },
    ],
    expertStaff: [
      { id: 503, nama: 'Galang Saputra', jabatan: 'Expert Staff', nia: '12345503' },
      { id: 504, nama: 'Alya Maharani', jabatan: 'Expert Staff', nia: '12345504' },
      { id: 505, nama: 'Bagas Wicaksono', jabatan: 'Expert Staff', nia: '12345505' },
    ],
    staff: [
      { id: 506, nama: 'Kayla Anindya', jabatan: 'Staff', nia: '12345506' },
      { id: 507, nama: 'Reza Pahlevi', jabatan: 'Staff', nia: '12345507' },
      { id: 508, nama: 'Inara Salma', jabatan: 'Staff', nia: '12345508' },
    ],
  },
  {
    slug: 'personalia',
    nama: 'Personalia',
    tagline:
      'Memonitor kinerja, kedisiplinan, dan kesejahteraan pengurus demi tata kelola organisasi yang sehat.',
    leadership: [
      { id: 601, nama: 'Faris Hidayat', jabatan: 'Head of Bureau', nia: '12345601' },
      { id: 602, nama: 'Nisrina Putri', jabatan: 'Secretary', nia: '12345602' },
    ],
    expertStaff: [
      { id: 603, nama: 'Adib Maulana', jabatan: 'Expert Staff', nia: '12345603' },
      { id: 604, nama: 'Sabrina Aulia', jabatan: 'Expert Staff', nia: '12345604' },
    ],
    staff: [
      { id: 605, nama: 'Hafidz Rahman', jabatan: 'Staff', nia: '12345605' },
      { id: 606, nama: 'Lutfiah Azka', jabatan: 'Staff', nia: '12345606' },
      { id: 607, nama: 'Eka Saputri', jabatan: 'Staff', nia: '12345607' },
    ],
  },
];

/** Daftar tab: Executive Board lebih dulu, lalu seluruh departemen/biro. */
export const EXECUTIVE_SLUG = 'executive-board';

export interface TabItem {
  slug: string;
  label: string;
}

export const TAB_ITEMS: TabItem[] = [
  { slug: EXECUTIVE_SLUG, label: 'Executive Board' },
  ...departments.map((d) => ({ slug: d.slug, label: d.nama })),
];
