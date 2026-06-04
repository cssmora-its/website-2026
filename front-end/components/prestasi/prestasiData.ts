// components/prestasi/prestasiData.ts
//
// Sumber data prestasi ada di /data/prestasi/prestasi.json — bukan di file ini.
// Untuk menambah / mengubah prestasi cukup edit JSON-nya.
//
// Foto: taruh file di /public/prestasi/ lalu isi field berikut di JSON:
//   - "thumbnail": "/prestasi/freshmen-talent-thumb.png"  → foto di kartu
//   - "image":     "/prestasi/freshmen-talent.png"        → foto besar di modal detail
// Kosongkan ("") agar pakai placeholder; layout tidak akan rusak.
//
// File TS ini hanya menyimpan TIPE + helper, lalu memetakan isi JSON ke tipe Prestasi.

import prestasiJson from '@/data/prestasi/prestasi.json';

export interface Prestasi {
  id: number;
  title: string;
  /** Tanggal ISO (YYYY-MM-DD) — diformat ke dd-mm-yy di UI. */
  date: string;
  thumbnail?: string;
  image?: string;
  description: string;
}

export const prestasiData: Prestasi[] = prestasiJson as Prestasi[];

/** Format ISO date → dd-mm-yy sesuai mockup. Fallback ke string asli kalau invalid. */
export function formatPrestasiDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}-${mm}-${yy}`;
}
