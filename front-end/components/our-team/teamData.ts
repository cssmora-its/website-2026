// components/our-team/teamData.ts
//
// Data "Our Team" — tim pengembang website CSSMoRA ITS.
// Sumber data ADA DI FILE JSON (lihat /data/our-team/team.json), bukan di file
// ini. Untuk menambah / mengubah anggota atau divisi — termasuk nama, peran,
// dan urutannya — cukup edit JSON-nya, tanpa menyentuh kode TS.
//
// Foto: taruh file gambar di /public/our-team/ lalu isi field `photo` di JSON
// dengan path-nya, mis. "/our-team/budi.png" (atau URL penuh). Bila dikosongkan
// (""), kartu otomatis menampilkan placeholder inisial nama — jadi tidak akan
// ada gambar rusak.
//
// Media sosial: isi `instagram` / `linkedin` dengan username atau URL penuh.
// Bila kosong, ikon sosialnya tidak ditampilkan.
//
// File TS ini hanya menyimpan TIPE data lalu memetakan isi JSON ke tipe
// tersebut. Saat backend / API siap, cukup ganti sumber `teams` di bawah dengan
// hasil fetch — komponen UI tidak berubah.

import teamJson from '@/data/our-team/team.json';

export interface TeamMember {
  id: string;
  name: string;
  /** Peran spesifik anggota, mis. "Frontend Developer". */
  role: string;
  /** Path foto di /public/our-team atau URL. Kosongkan untuk placeholder inisial. */
  photo: string;
  /** Username atau URL Instagram — opsional. */
  instagram: string;
  /** Username atau URL LinkedIn — opsional. */
  linkedin: string;
}

export interface Team {
  /** Slug unik divisi, dipakai juga sebagai id anchor section. */
  id: string;
  /** Nama divisi yang tampil sebagai heading, mis. "Frontend". */
  name: string;
  /** Kalimat pendukung singkat di bawah nama divisi. */
  tagline: string;
  members: TeamMember[];
}

/* =========================================================
   SUMBER DATA (dari JSON)
   ========================================================= */
/** Seluruh entri tim beserta anggotanya — sumber: /data/our-team/team.json */
export const teams: Team[] = teamJson.teams;

/** Id entri Project Manager — PM bukan divisi, jadi dipisah dari grid divisi. */
export const PM_ID = 'project-manager';

/** Entri Project Manager — ditampilkan tersendiri, bukan sebagai divisi. */
export const projectManager: Team | undefined = teams.find((t) => t.id === PM_ID);

/** Divisi sebenarnya (tanpa Project Manager). */
export const divisions: Team[] = teams.filter((t) => t.id !== PM_ID);

/** Total anggota lintas seluruh tim (termasuk PM) — diturunkan otomatis. */
export const totalMembers: number = teams.reduce(
  (sum, team) => sum + team.members.length,
  0,
);
