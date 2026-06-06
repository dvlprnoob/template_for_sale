import './style.css'

const heroImage = new URL('../../../assets/images/automotive-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-03',
  companyName: 'Torque Garage',
  tagline: 'Template bengkel performa dengan layout agresif, promo, dan sparepart showcase.',
  description: 'Cocok untuk bengkel spesialis, detailing, sparepart, dan performance upgrade dengan desain gelap, tegas, dan dinamis.',
  logo: 'TG',
  design: {
    preset: 'auto-garage',
    label: 'EV MPV SUV Promo Hub',
    sectionOrder: ['services', 'projects', 'about', 'gallery', 'testimonials', 'team', 'cta', 'contact'],
  },
  cta: {
    title: 'Siapkan kendaraan untuk performa berikutnya.',
    description: 'Booking test drive, konsultasi sparepart, atau jadwalkan inspeksi bengkel.',
    primaryLabel: 'Booking Test Drive',
    secondaryLabel: 'Email Garage',
  },
  heroImage,
  theme: {
    primary: '#1f4f9a',
    secondary: '#dd1e2e',
    accent: '#e8f1ff',
    surface: '#f7f7f5',
    ink: '#111827',
    font: 'Arial Narrow, Arial, sans-serif',
  },
  contact: {
    whatsapp: '+62 812 3456 2103',
    email: 'garage@torque.test',
    address: 'Jl. Panjang Arteri No. 88, Jakarta Barat',
  },
  about: {
    title: 'Garage performa untuk mobil harian, track day, dan detailing premium.',
    description: 'Tampilkan spesialisasi bengkel, standar inspeksi, paket sparepart, promo servis, dan workflow teknisi.',
    metrics: [
      { value: '900+', label: 'Service job' },
      { value: '35', label: 'Brand part' },
      { value: '6 bay', label: 'Workshop' },
      { value: '48 jam', label: 'Fast service' },
    ],
  },
  services: [
    { icon: 'mdi-engine-outline', title: 'Performance Tune', description: 'Konten upgrade mesin, rem, suspensi, dan diagnostic.' },
    { icon: 'mdi-car-cog', title: 'Workshop Service', description: 'Paket servis berkala, inspeksi, dan perbaikan cepat.' },
    { icon: 'mdi-sale-outline', title: 'Sparepart Promo', description: 'Area promo ban, oli, part performance, dan accessories.' },
  ],
  projects: [
    { title: 'Street Performance Kit', type: 'Upgrade', description: 'Showcase paket upgrade harian dengan visual agresif.', image: heroImage },
    { title: 'Detailing Promo', type: 'Promo', description: 'Highlight campaign coating dan interior care.', image: galleryImage },
    { title: 'Track Prep', type: 'Service', description: 'Portfolio persiapan kendaraan untuk event otomotif.', image: heroImage },
  ],
  testimonials: [
    { name: 'Reza Firmansyah', role: 'Car enthusiast', quote: 'Tampilan template terasa cocok untuk garage yang serius dan sporty.', rating: 5 },
    { name: 'Della Monica', role: 'Workshop owner', quote: 'Promo sparepart dan booking CTA jadi terlihat lebih menjual.', rating: 5 },
  ],
  team: [
    { initials: 'AR', name: 'Ari Reksana', role: 'Lead Mechanic' },
    { initials: 'BN', name: 'Beno Nugroho', role: 'Performance Advisor' },
    { initials: 'YS', name: 'Yulia Sari', role: 'Parts Specialist' },
    { initials: 'RD', name: 'Raka Dimas', role: 'Detailing Lead' },
  ],
  gallery: [
    { src: heroImage, alt: 'Garage hero' },
    { src: galleryImage, alt: 'Sparepart promo' },
    { src: heroImage, alt: 'Automotive service' },
    { src: galleryImage, alt: 'Workshop layout' },
  ],
}
