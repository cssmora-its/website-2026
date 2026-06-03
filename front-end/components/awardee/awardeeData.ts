// components/awardee/awardeeData.ts
//
// Data Awardee / Scholars CSSMoRA ITS.
// Sumber data sekarang ADA DI FILE JSON (lihat /data/awardee/*.json), bukan di
// file ini lagi. Untuk menambah / mengubah scholar atau captain — termasuk
// id, name, dan field lain — cukup edit JSON-nya, tanpa menyentuh kode TS.
//
// Foto: taruh file gambar di /public/awardee/ lalu isi field `photo` di JSON
// dengan path-nya, mis. "/awardee/aisyah.png" (atau URL penuh). Bila dikosongkan
// (""), kartu otomatis menampilkan placeholder inisial nama — jadi tidak akan
// ada gambar rusak.
//
// File TS ini hanya menyimpan TIPE data + helper turunan, lalu memetakan isi
// JSON ke tipe-tipe tersebut. Saat backend / API siap, cukup ganti sumber
// `captains` & `scholars` di bawah dengan hasil fetch — komponen UI tidak berubah.

import captainsJson from '@/data/awardee/captains.json';
import scholarsJson from '@/data/awardee/scholars.json';

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
  /** Path foto di /public/awardee atau URL. Kosongkan untuk pakai placeholder inisial. */
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
   SUMBER DATA (dari JSON)
   ========================================================= */
/** Ketua angkatan — sumber: /data/awardee/captains.json */
export const captains: Captain[] = captainsJson;

/** Seluruh scholars / directory — sumber: /data/awardee/scholars.json */
export const scholars: Scholar[] = scholarsJson;

/**
 * Daftar opsi angkatan untuk dropdown filter — diturunkan otomatis dari data
 * scholars, diurutkan terbaru ke terlama. Tambah scholar baru di JSON → opsi
 * ikut bertambah tanpa perlu mengubah komponen.
 */
export const generationOptions: string[] = Array.from(
  new Set(scholars.map((s) => s.generation)),
).sort((a, b) => Number(b) - Number(a));

/** Total scholars yang ditampilkan pada badge hero. */
export const totalScholarsLabel = '200+';
