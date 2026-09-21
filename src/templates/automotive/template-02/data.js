import './style.css'

const heroImage = new URL('../../../assets/images/automotive-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-02',
  companyName: 'Nexa Mobility',
  tagline: 'Profil digital untuk rental, fleet, dan mobility service.',
  description: 'Template automotive dengan tone operasional, cocok untuk rental mobil, fleet management, dan layanan kendaraan corporate.',
  logo: 'NM',
  design: {
    preset: 'auto-fleet',
    label: 'Craft Editorial Drive',
    sectionOrder: ['about', 'services', 'projects', 'team', 'testimonials', 'gallery', 'cta', 'contact'],
  },
  cta: {
    title: 'Atur kebutuhan armada dan jadwal test drive.',
    description: 'Konsultasi paket fleet, rental, transfer, atau kendaraan corporate.',
    primaryLabel: 'Booking Test Drive',
    secondaryLabel: 'Email Fleet',
  },
  heroImage,
  theme: {
    primary: '#111318',
    secondary: '#7a1f2a',
    accent: '#d8d1c8',
    surface: '#ffffff',
    ink: '#172033',
    font: 'Helvetica Neue, Arial, sans-serif',
  },
  contact: {
    whatsapp: '+62 812 3456 2102',
    email: 'fleet@nexamobility.test',
    address: 'Jl. Sunset Road No. 51, Bali',
  },
  about: {
    title: 'Armada rapi untuk kebutuhan harian dan corporate.',
    description: 'Gunakan section ini untuk menampilkan keandalan armada, coverage kota, SLA, dan paket layanan.',
    metrics: [
      { value: '120+', label: 'Fleet aktif' },
      { value: '9 kota', label: 'Coverage' },
      { value: '24/7', label: 'Support' },
      { value: '15K+', label: 'Trip selesai' },
    ],
  },
  services: [
    { icon: 'mdi-car-clock', title: 'Daily Rental', description: 'Konten paket sewa harian, mingguan, dan bulanan.' },
    { icon: 'mdi-briefcase-outline', title: 'Corporate Fleet', description: 'Narasi layanan kontrak perusahaan dan driver management.' },
    { icon: 'mdi-map-marker-distance', title: 'Airport Transfer', description: 'Section layanan transfer dan itinerary custom.' },
  ],
  fleetPrograms: [
    { icon: 'mdi-car-clock', title: 'Daily Rental', description: 'Sewa harian, mingguan, dan bulanan untuk personal atau bisnis.' },
    { icon: 'mdi-briefcase-outline', title: 'Corporate Fleet', description: 'Kontrak perusahaan, driver management, dan SLA operasional.' },
    { icon: 'mdi-map-marker-distance', title: 'Airport Transfer', description: 'Transfer bandara, itinerary, dan mobility concierge.' },
  ],
  vehicles: [
    { name: 'Executive Transfer', category: 'Premium', spec: 'Driver included', image: galleryImage },
    { name: 'Tour Mobility', category: 'Travel', spec: 'SUV/MPV ready', image: heroImage },
    { name: 'Corporate Shuttle', category: 'Fleet', spec: 'Monthly plan', image: galleryImage },
  ],
  operationStats: [
    { value: '120+', label: 'Fleet aktif' },
    { value: '9 kota', label: 'Coverage' },
    { value: '24/7', label: 'Support' },
  ],
  projects: [
    { title: 'Corporate Shuttle', type: 'Fleet', description: 'Showcase armada untuk kantor dan event.', image: galleryImage },
    { title: 'Tour Mobility', type: 'Travel', description: 'Highlight rental untuk itinerary wisata.', image: heroImage },
    { title: 'Executive Transfer', type: 'Premium', description: 'Portfolio layanan VIP dan business trip.', image: galleryImage },
  ],
  testimonials: [
    { name: 'Bima Pratama', role: 'Operations Manager', quote: 'Informasi paket dan coverage tampil padat tanpa terasa rumit.', rating: 5 },
    { name: 'Eka Saraswati', role: 'Travel planner', quote: 'Layout gallery cocok untuk menjelaskan jenis armada ke klien.', rating: 5 },
  ],
  team: [
    { initials: 'FR', name: 'Fajar Ramadhan', role: 'Fleet Manager' },
    { initials: 'ML', name: 'Mira Laksmi', role: 'Reservation Lead' },
    { initials: 'YG', name: 'Yoga Gemilang', role: 'Driver Coordinator' },
    { initials: 'SP', name: 'Sari Puspita', role: 'Account Manager' },
  ],
  gallery: [
    { src: galleryImage, alt: 'Fleet layout preview' },
    { src: heroImage, alt: 'Automotive fleet hero' },
    { src: galleryImage, alt: 'Rental profile section' },
    { src: heroImage, alt: 'Mobility service' },
  ],
}
