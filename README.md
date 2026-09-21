# Company Profile Template Marketplace

Frontend Vue 3 + Vuetify static-only untuk menjual template company profile per kategori industri. Project memakai konsep MVC-inspired:

- `src/models` untuk registry kategori dan template.
- `src/controllers` untuk helper template, theme, component resolver, dan CTA WhatsApp/email.
- `src/views` dan `src/components` untuk halaman dan komponen tampilan.
- `src/templates` untuk template per kategori, masing-masing berisi `index.vue`, `data.js`, dan `style.css`.

## Progress

- Kategori awal tersedia: Real Estate, Automotive, Clinic / Healthcare, Construction, Restaurant / Cafe.
- Setiap kategori memiliki `template-01`, `template-02`, dan `template-03`.
- Struktur sudah direfactor ke hybrid component architecture untuk seluruh template:
  - `src/components/common` untuk elemen kecil dan umum seperti `TemplateButton`, `TemplateNavbar`, `TemplateFooter`, `ContactButton`, dan `SectionLabel`.
  - `src/components/sections` untuk section reusable ringan seperti contact, testimonial, gallery sederhana, dan CTA dasar.
  - Section besar yang membentuk karakter desain dibuat lokal di `src/templates/<category>/<template-slug>/sections`.
- Semua 15 template (`template-01`, `template-02`, `template-03` di 5 kategori) sudah memakai struktur scalable berbasis section lokal.
- Setiap `index.vue` template sekarang hanya meng-import `./data` dan file dari `./sections/...`.
- Contact dan footer sudah dipisah sebagai local section per template lewat `ContactSection.vue` dan `FooterSection.vue`; testimonial khusus clinic memakai local `PatientStorySection.vue`.
- Folder `src/templates/**` tidak lagi import `@/components/sections`, `@/components/common`, `@/components/templates`, `TemplateLayout`, atau section global marketplace.
- Komponen global dibatasi untuk marketplace shell dan helper kecil di luar isi utama template company profile.
- Contoh section lokal per kategori:
  - Real Estate: `RealEstateHero`, `PropertyShowcase`, `FacilitySection`, `UnitTypeSection`, `LocationSection`.
  - Automotive: `AutomotiveHero`, `VehicleShowcase`, `GarageServiceSection`, `PromoSection`, `TestDriveCTA`.
  - Clinic / Healthcare: `ClinicHero`, `MedicalServiceSection`, `DoctorSection`, `ScheduleSection`, `AppointmentCTA`.
  - Construction: `ConstructionHero`, `ProjectShowcase`, `WorkProcessSection`, `CertificationSection`, `ConsultationCTA`.
  - Restaurant / Cafe: `RestaurantHero`, `MenuHighlightSection`, `AmbienceGallery`, `ChefRecommendation`, `ReservationCTA`.
- Data template sudah mendukung field khas industri, bukan hanya field generic:
  - Real Estate: `projects`, `facilities`, `units`, `location`.
  - Automotive: `vehicles`, `fleetPrograms`, `garageServices`, `promos`, `testDrive`.
  - Clinic / Healthcare: `medicalServices`, `labServices`, `doctors`, `schedules`, `appointment`.
  - Construction: `projects`, `designPhases`, `workProcess`, `certifications`, `consultation`.
  - Restaurant / Cafe: `menus`, `tastingCourses`, `articles`, `chefRecommendations`, `reservation`.
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
