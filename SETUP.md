# Setup (sekali saja)

1. Upload isi zip ini ke repo GitHub (folder `Main` + `api` di dalamnya, timpa file lama).
2. Vercel → project → **Storage** → **Create Database** → pilih **Upstash (Redis)** → Connect ke project ini.
   (Env var `KV_REST_API_URL` & `KV_REST_API_TOKEN` otomatis terisi.)
3. Pastikan **Root Directory** project Vercel = `Main` (folder `api` harus ada di dalamnya).
4. (Disarankan) Settings → Environment Variables → tambah `ADMIN_CODE` = kode admin kamu. Kalau kosong, dipakai `Skibidi123XD.Admin`.
5. Redeploy.

Admin: di layar password, ketik kode admin → panel admin terbuka.
- `GETKEY_CODE` : kode untuk membuka panel pembuat kode masuk (default: sudah diisi di kode)
