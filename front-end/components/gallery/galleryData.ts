// components/gallery/galleryData.ts
//
// Sumber data proker ADA DI /data/gallery/proker.json — bukan di file ini.
// Untuk menambah / mengubah proker (id, nama, pelaksana, kategori, dll) cukup
// edit JSON-nya.
//
// Struktur penting:
//   - `pelaksana` → menentukan SECTION (judul hijau) di halaman gallery,
//     mis. "BPH", "Dagri", "Kesma", "PSDM", "P3M", "Medfo", "Personalia".
//   - `kategori`  → kategori proker yang DITAMPILKAN di kartu & modal,
//     yaitu "Tata Kelola" | "Internalisasi" | "Pengembangan" | "Pengabdian".
//
// Foto: taruh file di /public/gallery/ lalu isi field di JSON dengan path-nya:
//   - "thumbnail": "/gallery/musker-cover.png"   → foto sampul kartu
//   - "images": ["/gallery/musker-1.png", ...]    → foto slideshow di modal detail
// Kosongkan ("" atau []) untuk pakai placeholder, tidak akan ada gambar rusak.
//
// File TS ini hanya menyimpan TIPE + helper, lalu memetakan isi JSON ke tipe Proker.

import prokerJson from '@/data/gallery/proker.json';

/** Pelaksana proker — dipakai sebagai pengelompokan section (judul hijau). */
export type Pelaksana =
  | 'BPH'
  | 'Dagri'
  | 'Kesma'
  | 'PSDM'
  | 'P3M'
  | 'Medfo'
  | 'Personalia';

/** Kategori proker — ditampilkan pada kartu & modal detail. */
export type ProkerKategori =
  | 'Tata Kelola'
  | 'Internalisasi'
  | 'Pengembangan'
  | 'Pengabdian';

export interface Proker {
  id: number;
  nama_proker: string;
  /** Pelaksana — penentu section (judul hijau). */
  pelaksana: Pelaksana;
  /** Kategori proker yang ditampilkan di kartu & modal. */
  kategori: ProkerKategori;
  waktu_pelaksanaan: string;
  thumbnail?: string;
  images?: string[];
  deskripsi: string;
}

/** Urutan section (judul hijau) di halaman gallery. */
export const PELAKSANA_ORDER: Pelaksana[] = [
  'BPH',
  'Dagri',
  'Kesma',
  'PSDM',
  'P3M',
  'Medfo',
  'Personalia',
];

/** Seluruh proker — sumber: /data/gallery/proker.json */
export const galleryData: Proker[] = prokerJson as Proker[];

/** Kelompokkan proker per pelaksana untuk dirender per section. */
export function groupByPelaksana(items: Proker[]): Record<Pelaksana, Proker[]> {
  const grouped = {} as Record<Pelaksana, Proker[]>;
  for (const p of PELAKSANA_ORDER) {
    grouped[p] = [];
  }
  for (const item of items) {
    grouped[item.pelaksana].push(item);
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
