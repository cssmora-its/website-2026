// components/awardee/awardeeData.ts
//
// Data Awardee / Scholars CSSMoRA ITS.
// Semua data di bawah masih DUMMY yang terstruktur — saat backend / sheet / API
// siap, cukup ganti isi array `scholars` & `captains` dengan hasil fetch.
// Bentuk tipe (Scholar / Captain) sudah final, jadi integrasi cukup memetakan
// response ke tipe-tipe ini tanpa mengubah komponen UI.
//
// Foto: isi field `photo` dengan path di /public (mis. '/scholars/aisyah.png')
// atau URL penuh. Bila dikosongkan (''), kartu otomatis menampilkan placeholder
// inisial nama — jadi tidak akan ada gambar rusak.

export interface Scholar {
  id: string;
  name: string;
  /** Nomor Induk Anggota — opsional. */
  nia: string;
  department: string;
  /** Tahun angkatan, dipakai juga sebagai opsi filter. */
  generation: string;
  city: string;
  pesantren: string;
  /** Username atau URL Instagram. */
  instagram: string;
  /** Username atau URL LinkedIn. */
  linkedin: string;
  /** Path foto di /public atau URL. Kosongkan untuk pakai placeholder inisial. */
  photo: string;
}

export interface Captain {
  id: string;
  name: string;
  department: string;
  generation: string;
  /** Jumlah anggota angkatan yang dipimpin. */
  totalScholars: number;
  photo: string;
}

/* =========================================================
   KETUA ANGKATAN / CAPTAINS
   Sengaja dibuat > 4 untuk memastikan carousel tidak pecah.
   ========================================================= */
export const captains: Captain[] = [
  {
    id: 'c-2019',
    name: 'Hasan Albanna',
    department: 'Teknik Informatika',
    generation: '2019',
    totalScholars: 68,
    photo: '',
  },
  {
    id: 'c-2020',
    name: 'Lukman Hakim',
    department: 'Teknik Elektro',
    generation: '2020',
    totalScholars: 71,
    photo: '',
  },
  {
    id: 'c-2021',
    name: 'Arif Rahman',
    department: 'Statistika',
    generation: '2021',
    totalScholars: 75,
    photo: '',
  },
  {
    id: 'c-2022',
    name: 'Fajar Hidayat',
    department: 'Teknik Mesin',
    generation: '2022',
    totalScholars: 92,
    photo: '',
  },
  {
    id: 'c-2023',
    name: 'Rizky Maulana',
    department: 'Teknik Kelautan',
    generation: '2023',
    totalScholars: 87,
    photo: '',
  },
  {
    id: 'c-2024',
    name: 'Naufal Akbar',
    department: 'Sistem Informasi',
    generation: '2024',
    totalScholars: 95,
    photo: '',
  },
];

/* =========================================================
   ALL SCHOLARS / DIRECTORY
   ========================================================= */
export const scholars: Scholar[] = [
  {
    id: 's-001',
    name: 'Aisyah Fitriani',
    nia: '12323001',
    department: 'Sistem Informasi',
    generation: '2023',
    city: 'Surabaya',
    pesantren: "PP. Matholi'ul Anwar",
    instagram: '@aisyah.fitriani',
    linkedin: 'in/aisyah-fitriani',
    photo: '',
  },
  {
    id: 's-002',
    name: 'Bima Sakti',
    nia: '12323002',
    department: 'Teknik Informatika',
    generation: '2023',
    city: 'Malang',
    pesantren: 'PP. Sidogiri',
    instagram: '@bima.sakti',
    linkedin: 'in/bima-sakti',
    photo: '',
  },
  {
    id: 's-003',
    name: 'Citra Lestari',
    nia: '12322003',
    department: 'Arsitektur',
    generation: '2022',
    city: 'Gresik',
    pesantren: 'PP. Tebuireng',
    instagram: '@citra.lestari',
    linkedin: 'in/citra-lestari',
    photo: '',
  },
  {
    id: 's-004',
    name: 'Dimas Anggara',
    nia: '12322004',
    department: 'Manajemen Bisnis',
    generation: '2022',
    city: 'Sidoarjo',
    pesantren: 'PP. Lirboyo',
    instagram: '@dimas.anggara',
    linkedin: 'in/dimas-anggara',
    photo: '',
  },
  {
    id: 's-005',
    name: 'Elara Nadhira',
    nia: '12321005',
    department: 'Statistika',
    generation: '2021',
    city: 'Lamongan',
    pesantren: "PP. Matholi'ul Anwar",
    instagram: '@elara.nadhira',
    linkedin: 'in/elara-nadhira',
    photo: '',
  },
  {
    id: 's-006',
    name: 'Fauzi Rahman',
    nia: '12321006',
    department: 'Teknik Lingkungan',
    generation: '2021',
    city: 'Bojonegoro',
    pesantren: 'PP. Langitan',
    instagram: '@fauzi.rahman',
    linkedin: 'in/fauzi-rahman',
    photo: '',
  },
  {
    id: 's-007',
    name: 'Gita Permata',
    nia: '12320007',
    department: 'Teknik Kimia',
    generation: '2020',
    city: 'Kediri',
    pesantren: 'PP. Lirboyo',
    instagram: '@gita.permata',
    linkedin: 'in/gita-permata',
    photo: '',
  },
  {
    id: 's-008',
    name: 'Hafiz Ramadhan',
    nia: '12320008',
    department: 'Teknik Elektro',
    generation: '2020',
    city: 'Jombang',
    pesantren: 'PP. Tebuireng',
    instagram: '@hafiz.ramadhan',
    linkedin: 'in/hafiz-ramadhan',
    photo: '',
  },
  {
    id: 's-009',
    name: 'Intan Maharani',
    nia: '12323009',
    department: 'Desain Produk',
    generation: '2023',
    city: 'Mojokerto',
    pesantren: 'PP. Amanatul Ummah',
    instagram: '@intan.maharani',
    linkedin: 'in/intan-maharani',
    photo: '',
  },
  {
    id: 's-010',
    name: 'Jihan Salsabila',
    nia: '12322010',
    department: 'Teknik Industri',
    generation: '2022',
    city: 'Pasuruan',
    pesantren: 'PP. Sidogiri',
    instagram: '@jihan.salsabila',
    linkedin: 'in/jihan-salsabila',
    photo: '',
  },
  {
    id: 's-011',
    name: 'Kemal Pasha',
    nia: '12321011',
    department: 'Teknik Mesin',
    generation: '2021',
    city: 'Madiun',
    pesantren: 'PP. Al-Falah',
    instagram: '@kemal.pasha',
    linkedin: 'in/kemal-pasha',
    photo: '',
  },
  {
    id: 's-012',
    name: 'Laila Nur Aini',
    nia: '12323012',
    department: 'Matematika',
    generation: '2023',
    city: 'Tuban',
    pesantren: "PP. Matholi'ul Anwar",
    instagram: '@laila.nuraini',
    linkedin: 'in/laila-nur-aini',
    photo: '',
  },
  {
    id: 's-013',
    name: 'Miftah Farid',
    nia: '12320013',
    department: 'Teknik Sipil',
    generation: '2020',
    city: 'Banyuwangi',
    pesantren: 'PP. Blokagung',
    instagram: '@miftah.farid',
    linkedin: 'in/miftah-farid',
    photo: '',
  },
  {
    id: 's-014',
    name: 'Nadia Zahra',
    nia: '12322014',
    department: 'Biologi',
    generation: '2022',
    city: 'Probolinggo',
    pesantren: 'PP. Zainul Hasan',
    instagram: '@nadia.zahra',
    linkedin: 'in/nadia-zahra',
    photo: '',
  },
  {
    id: 's-015',
    name: 'Omar Faruq',
    nia: '12321015',
    department: 'Fisika',
    generation: '2021',
    city: 'Nganjuk',
    pesantren: 'PP. Lirboyo',
    instagram: '@omar.faruq',
    linkedin: 'in/omar-faruq',
    photo: '',
  },
  {
    id: 's-016',
    name: 'Putri Ayu Lestari',
    nia: '12323016',
    department: 'Teknik Geofisika',
    generation: '2023',
    city: 'Bangkalan',
    pesantren: 'PP. Syaichona Cholil',
    instagram: '@putri.ayu',
    linkedin: 'in/putri-ayu-lestari',
    photo: '',
  },
];

/**
 * Daftar opsi angkatan untuk dropdown filter — diturunkan otomatis dari data
 * scholars, diurutkan terbaru ke terlama. Tambah scholar baru → opsi ikut
 * bertambah tanpa perlu mengubah komponen.
 */
export const generationOptions: string[] = Array.from(
  new Set(scholars.map((s) => s.generation)),
).sort((a, b) => Number(b) - Number(a));

/** Total scholars yang ditampilkan pada badge hero. */
export const totalScholarsLabel = '200+';
