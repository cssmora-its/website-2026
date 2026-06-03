# Foto Awardee

Taruh semua foto scholar & captain halaman **/awardee** di folder ini.

## Cara pakai
1. Simpan file foto di sini, contoh: `public/awardee/aisyah-fitriani.png`
2. Buka `data/awardee/scholars.json` (atau `captains.json`)
3. Isi field `photo` dengan path-nya **diawali `/awardee/`**:

```json
{ "id": "s-001", "name": "Aisyah Fitriani", "photo": "/awardee/aisyah-fitriani.png" }
```

- Path diawali `/` = relatif ke folder `public`, jadi `/awardee/aisyah-fitriani.png`
  menunjuk ke `public/awardee/aisyah-fitriani.png`.
- Boleh juga URL penuh: `"photo": "https://.../foto.jpg"`.
- Kalau `photo` dibiarkan `""`, kartu otomatis menampilkan inisial nama
  (tidak ada gambar rusak).

> Tips: pakai nama file tanpa spasi (gunakan `-`), huruf kecil, agar path konsisten.
