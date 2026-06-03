# Foto Renjana Cita (Pengurus)

Taruh semua foto pengurus halaman **/renjana-cita** di folder ini.

## Cara pakai
1. Simpan foto di sini, contoh: `public/renjana-cita/nabiel.png`
2. Buka `data/renjana-cita/executive-board.json` atau `data/renjana-cita/departments.json`
3. Cari member-nya, lalu isi field `foto` dengan path-nya **diawali `/renjana-cita/`**:

```json
{ "id": 1, "nama": "Nabiel Nizar Anwari", "jabatan": "Chairman", "foto": "/renjana-cita/nabiel.png" }
```

- Path diawali `/` = relatif ke folder `public`.
- Boleh juga URL penuh: `"foto": "https://.../foto.jpg"`.
- Kalau `foto` `""`, kartu menampilkan inisial nama (tidak ada gambar rusak).

> Tips: nama file tanpa spasi (pakai `-`), huruf kecil.
