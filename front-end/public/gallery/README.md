# Foto Gallery (Proker)

Taruh semua foto proker halaman **/gallery** di folder ini.

## Cara pakai
1. Simpan foto di sini, contoh: `public/gallery/musker-cover.png`, `public/gallery/musker-1.png`
2. Buka `data/gallery/proker.json`, cari proker-nya, lalu isi:

```json
{
  "id": 1,
  "nama_proker": "Musker",
  "thumbnail": "/gallery/musker-cover.png",
  "images": ["/gallery/musker-1.png", "/gallery/musker-2.png"]
}
```

- `thumbnail` → 1 foto sampul yang tampil di kartu.
- `images` → daftar foto untuk slideshow di modal detail (boleh lebih dari satu).
- Path diawali `/gallery/...` = relatif ke folder `public`.
- Kalau `thumbnail` `""` dan `images` `[]`, dipakai placeholder otomatis.

> Tips: nama file tanpa spasi (pakai `-`), huruf kecil.
