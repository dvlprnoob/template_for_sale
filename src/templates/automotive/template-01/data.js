import './style.css'

const heroImage = new URL('../../../assets/images/automotive-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-01',
  companyName: 'Velocity Autohaus',
  tagline: 'Showroom premium dengan profile digital yang terasa cepat dan percaya diri.',
  description: 'Template untuk dealer, showroom, detailing, dan rental kendaraan dengan section layanan, unit unggulan, testimonial, dan CTA langsung.',
  logo: 'VA',
  design: {
    preset: 'auto-performance',
    label: 'Corporate Model Range',
    sectionOrder: ['projects', 'services', 'about', 'gallery', 'testimonials', 'team', 'cta', 'contact'],
  },
  cta: {
    title: 'Rasakan unit pilihan lewat jadwal test drive.',
    description: 'Booking test drive, konsultasi trade-in, atau tanyakan promo kendaraan terbaru.',
    primaryLabel: 'Booking Test Drive',
    secondaryLabel: 'Email Showroom',
  },
  heroImage,
  theme: {
    primary: '#002c5f',
    secondary: '#101820',
    accent: '#d7dfe8',
    surface: '#ffffff',
    ink: '#111827',
    font: 'Arial Narrow, Arial, sans-serif',
  },
  contact: {
    whatsapp: '+62 812 3456 2101',
    email: 'hello@velocityautohaus.test',
    address: 'Jl. Arteri Pondok Indah No. 22, Jakarta',
  },
  about: {
    title: 'Automotive partner untuk kendaraan pilihan.',
    description: 'Ceritakan standar inspeksi, garansi, layanan after-sales, dan diferensiasi showroom dalam satu alur yang mudah dipindai.',
    metrics: [
      { value: '250+', label: 'Unit delivered' },
      { value: '48 jam', label: 'Approval cepat' },
      { value: '30+', label: 'Brand partner' },
      { value: '4.8', label: 'Rating layanan' },
    ],
  },
  services: [
    { icon: 'mdi-car-key', title: 'Vehicle Sales', description: 'Section unit baru, bekas berkualitas, dan paket trade-in.' },
    { icon: 'mdi-spray-bottle', title: 'Detailing Care', description: 'Profil layanan coating, interior care, dan inspeksi visual.' },
    { icon: 'mdi-credit-card-check-outline', title: 'Financing', description: 'Area untuk simulasi pembiayaan sebagai custom request.' },
  ],
  projects: [
    { title: 'Executive Sedan Line', type: 'Showroom', description: 'Highlight kendaraan eksekutif untuk fleet dan personal.', image: heroImage },
    { title: 'Weekend SUV Series', type: 'Collection', description: 'Showcase SUV keluarga dan kendaraan adventure.', image: galleryImage },
    { title: 'Detailing Bay', type: 'Service', description: 'Portfolio layanan perawatan premium.', image: heroImage },
  ],
  testimonials: [
    { name: 'Andre Wijaya', role: 'Fleet buyer', quote: 'Profile digitalnya membuat pilihan unit dan layanan terlihat jelas.', rating: 5 },
    { name: 'Maya Kirana', role: 'Private client', quote: 'CTA cepat ke WhatsApp memudahkan jadwal test drive.', rating: 5 },
  ],
  team: [
    { initials: 'RW', name: 'Rama Wicaksono', role: 'Sales Lead' },
    { initials: 'IA', name: 'Intan Amelia', role: 'Finance Advisor' },
    { initials: 'HP', name: 'Hendra Putra', role: 'Inspection Lead' },
    { initials: 'DN', name: 'Dewi Nabila', role: 'Customer Care' },
  ],
  gallery: [
    { src: heroImage, alt: 'Automotive showroom' },
    { src: galleryImage, alt: 'Vehicle layout preview' },
    { src: heroImage, alt: 'Premium car showcase' },
    { src: galleryImage, alt: 'Auto service profile' },
  ],
}
