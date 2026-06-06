// components/renjana-cita/renjanaData.ts
//
// Data Kabinet Renjana Cita CSSMoRA ITS.
// Sumber data ADA DI FILE JSON:
//   - /data/renjana-cita/executive-board.json  → visi, misi, ketua, direksi
//   - /data/renjana-cita/departments.json       → seluruh departemen & biro
// Untuk menambah / mengubah anggota (id, nama, jabatan, nia) cukup edit JSON-nya.
//
// Foto: taruh file di /public/renjana-cita/ lalu isi field `foto` di JSON dengan
// path-nya, mis. "/renjana-cita/nabiel.png". Bila kosong (""), kartu menampilkan
// placeholder inisial — tidak akan ada gambar rusak.
//
// File TS ini hanya menyimpan TIPE + helper tab, lalu memetakan isi JSON ke tipe.

import executiveBoardJson from '@/data/renjana-cita/executive-board.json';
import departmentsJson from '@/data/renjana-cita/departments.json';

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
   EXECUTIVE BOARD — sumber: /data/renjana-cita/executive-board.json
   ========================================================= */
export const executiveBoard: ExecutiveBoard = executiveBoardJson;

/* =========================================================
   DEPARTMENTS & BUREAUS — sumber: /data/renjana-cita/departments.json
   Urutan & penamaan diselaraskan dengan galleryData (kategori proker).
   ========================================================= */
export const departments: Department[] = departmentsJson;

/** Daftar tab: Executive Board lebih dulu, lalu seluruh departemen/biro. */
export const EXECUTIVE_SLUG = 'executive-board';

export interface TabItem {
  slug: string;
  label: string;
}

export const TAB_ITEMS: TabItem[] = [
  { slug: EXECUTIVE_SLUG, label: 'Badan Pengurus Harian' },
  ...departments.map((d) => ({ slug: d.slug, label: d.nama })),
];
