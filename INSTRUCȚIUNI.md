# 🌍 TerraQuiz

Aplicație educațională de geografie cu peste 880 de întrebări.

## 🚀 Cum o publici online (PAS CU PAS)

### PASUL 1 — Cont GitHub
1. Mergi pe **github.com** și click **Sign up**
2. Folosește email + parolă (orice email)
3. Confirmă emailul

### PASUL 2 — Creează repository
1. După login, click pe **+** sus dreapta → **New repository**
2. Nume: `terraquiz`
3. Setează ca **Public**
4. NU bifa "Add README"
5. Click **Create repository**

### PASUL 3 — Încarcă codul
1. În pagina noului repo, click pe **"uploading an existing file"**
2. Trage TOATE fișierele și folderele din folderul `terraquiz/` aici
   (atenție: NU urca .env.local — îl vom adăuga separat în Vercel)
3. Click **Commit changes** (jos)

### PASUL 4 — Cont Vercel
1. Mergi pe **vercel.com**
2. Click **Sign Up** → alege **Continue with GitHub**
3. Acceptă conectarea

### PASUL 5 — Deploy
1. Click **Add New...** → **Project**
2. Selectează repo-ul `terraquiz`
3. Click **Import**
4. La **Environment Variables**, adaugă:
   - Name: `NEXT_PUBLIC_SUPABASE_URL` → Value: `https://iflnoyultzihxcwymuoh.supabase.co`
   - Name: `NEXT_PUBLIC_SUPABASE_KEY` → Value: `sb_publishable_OkaQIs0uM_ZOB5udZw9Xog_79MKLsD4`
5. Click **Deploy**
6. Așteaptă 2-3 minute → aplicația e ONLINE!

### PASUL 6 — Conectează terraquiz.ro
1. În proiectul Vercel, click pe **Settings** → **Domains**
2. Scrie `terraquiz.ro` → **Add**
3. Vercel îți va da niște setări DNS — copiază-le
4. Mergi la Namecheap (unde ai cumpărat domeniul)
5. Mergi la **Domain List** → **Manage** lângă terraquiz.ro
6. La secțiunea **Nameservers**, schimbă în "Custom DNS"
7. Lipește valorile date de Vercel
8. Așteaptă 5-30 min ca să se propage

## 🎉 GATA!
Aplicația ta este live la **terraquiz.ro**!
