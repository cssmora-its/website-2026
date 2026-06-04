# /public/prestasi

Letakkan foto prestasi (thumbnail kartu & gambar besar modal) di folder ini.

Penamaan bebas. Path file akan direferensikan dari
`/data/prestasi/prestasi.json` melalui field:

- `"thumbnail"` — gambar yang tampil di kartu grid Prestasi
- `"image"` — gambar besar yang tampil di modal detail

Jika kedua field dikosongkan, UI akan otomatis menampilkan placeholder
pola checker (tidak akan ada gambar rusak / broken image).
