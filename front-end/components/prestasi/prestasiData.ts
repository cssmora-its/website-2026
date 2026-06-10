// components/prestasi/prestasiData.ts
//
// Sumber data prestasi ada di /data/prestasi/prestasi.json — bukan di file ini.
// Untuk menambah / mengubah prestasi cukup edit JSON-nya.
//
// Field per prestasi:
//   - title         → nama lomba/kompetisi (judul kartu & modal)
//   - nama, nrp, departemen, angkatan → identitas peraih
//   - juara         → capaian, mis. "Juara 2", "Putra Favorite", "Harapan", "-"
//   - tingkat       → "Nasional", "Internasional", "Institut", dst
//   - penyelenggara → penyelenggara lomba (boleh kosong)
//   - description   → deskripsi singkat
//
// Foto: taruh file di /public/prestasi/ lalu isi field berikut di JSON:
//   - "thumbnail": "/prestasi/foo-thumb.png"  → foto di kartu
//   - "image":     "/prestasi/foo.png"        → foto besar di modal detail
// Kosongkan ("") agar pakai placeholder; layout tidak akan rusak.
//
// File TS ini hanya menyimpan TIPE + helper, lalu memetakan isi JSON ke tipe Prestasi.

import prestasiJson from '@/data/prestasi/prestasi.json';

export interface Prestasi {
  id: number;
  /** Prioritas bobot (Tinggi/Sedang/Rendah) untuk urutan dan badge. */
  bobot?: string;
  /** Nama lomba/kompetisi. */
  title: string;
  /** Nama peraih prestasi. */
  nama: string;
  nrp: string;
  departemen: string;
  angkatan: string;
  /** Capaian, mis. "Juara 2", "Putra Favorite", "Harapan", "-". */
  juara: string;
  /** Tingkat lomba, mis. "Nasional", "Internasional", "Institut". */
  tingkat: string;
  /** Penyelenggara lomba — boleh kosong. */
  penyelenggara: string;
  description: string;
  thumbnail?: string;
  image?: string;
}

const bobotWeight: Record<string, number> = {
  Tinggi: 1,
  Sedang: 2,
  Rendah: 3,
};

export const prestasiData: Prestasi[] = (prestasiJson as Prestasi[]).sort((a, b) => {
  const weightA = a.bobot ? bobotWeight[a.bobot] ?? 4 : 4;
  const weightB = b.bobot ? bobotWeight[b.bobot] ?? 4 : 4;
  return weightA - weightB;
});
