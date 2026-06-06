# Company Profile Template Marketplace

Frontend Vue 3 + Vuetify static-only untuk menjual template company profile per kategori industri. Project memakai konsep MVC-inspired:

- `src/models` untuk registry kategori dan template.
- `src/controllers` untuk helper template, theme, component resolver, dan CTA WhatsApp/email.
- `src/views` dan `src/components` untuk halaman dan komponen tampilan.
- `src/templates` untuk template per kategori, masing-masing berisi `index.vue`, `data.js`, dan `style.css`.

## Progress

- Kategori awal tersedia: Real Estate, Automotive, Clinic / Healthcare, Construction, Restaurant / Cafe.
- Setiap kategori memiliki `template-01`, `template-02`, dan `template-03`.
- Automotive sudah dibuat bespoke:
  - `template-01`: corporate model range inspired by Hyundai-style catalog flow.
  - `template-02`: dark editorial premium inspired by Mazda-style craft storytelling.
  - `template-03`: friendly product and promo hub inspired by Wuling-style commercial flow.
- Real Estate update terbaru:
  - `template-01`: confidential luxury estate system inspired by Adara/Vaulk direction, dengan loader feel, sticky nav, hero reveal, property matrix, numbered estate system, deployment/sales flow, dan CTA confidential consultation.
  - `template-03`: cinematic resort residence inspired by award-style luxury real estate sites, dengan full-screen animated hero, scroll cue, living narrative, amenity orbit, asymmetric residence showcase, metrics ribbon, dan cinematic CTA.
- Restaurant / Cafe sudah dibuat bespoke:
  - `template-01`: burger house playground inspired by Burgerij direction, dengan sticky playful nav, moving marquee, oversized hero, tilted product plate, menu cards agresif, outlet metrics, dan reserve/order CTA.
  - `template-02`: Nordic fine dining inspired by Maaemo direction, dengan full-screen cinematic hero, minimal serif typography, quiet seasonal story, tasting course list, refined service line, dan reservation CTA.
  - `template-03`: French cafe editorial inspired by Gustave Cafe alimentation direction, dengan navbar editorial, magazine-cover hero, article feed, paper-card service columns, dan cafe reservation CTA.
- Semua template tetap static frontend only. Backend, CMS, database, login, payment gateway, booking, invoice, admin panel, saved contact form, dan API integration masuk kategori custom request.

## Project Setup

```sh
npm install
```

### Development

```sh
npm run dev -- --host 127.0.0.1
```

### Build

```sh
npm run build
```

### Lint

```sh
npm run lint
```
