import './style.css'

const heroImage = new URL('../../../assets/images/real-estate-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-03',
  companyName: 'Maison Verde',
  tagline: 'Property profile bergaya resort living dengan whitespace dan detail fasilitas.',
  description: 'Template premium untuk developer hunian, villa, dan kawasan residensial yang ingin menonjolkan fasilitas, lokasi, dan pengalaman hidup.',
  logo: 'MV',
  design: {
    preset: 'estate-resort',
    label: 'Cinematic Resort Residence',
    sectionOrder: ['gallery', 'about', 'projects', 'services', 'testimonials', 'team', 'cta', 'contact'],
  },
  cta: {
    title: 'Temukan unit dan jadwalkan konsultasi properti.',
    description: 'Hubungi sales untuk brochure, price list, lokasi, dan jadwal survey.',
    primaryLabel: 'Hubungi Sales',
    secondaryLabel: 'Email Sales',
  },
  heroImage,
  theme: {
    primary: '#182422',
    secondary: '#8d7b58',
    accent: '#d6b56d',
    surface: '#fffaf0',
    ink: '#1f2933',
    font: 'Georgia, Times New Roman, serif',
  },
  contact: {
    whatsapp: '+62 812 3456 1103',
    email: 'sales@maisonverde.test',
    address: 'Jl. Umalas Resort No. 12, Bali',
  },
  about: {
    title: 'Hunian resort dengan lokasi, privasi, dan fasilitas terkurasi.',
    description: 'Cocok untuk menjelaskan konsep kawasan, akses lokasi, fasilitas premium, dan benefit investasi properti secara clean.',
    metrics: [
      { value: '42', label: 'Villa unit' },
      { value: '3 ha', label: 'Kawasan' },
      { value: '8', label: 'Fasilitas' },
      { value: '12%', label: 'Yield target' },
    ],
  },
  services: [
    { icon: 'mdi-pool', title: 'Fasilitas Premium', description: 'Section fasilitas seperti pool, clubhouse, garden, dan private access.' },
    { icon: 'mdi-map-marker-star', title: 'Lokasi Strategis', description: 'Highlight akses pantai, bisnis, sekolah, dan area wisata.' },
    { icon: 'mdi-home-heart', title: 'Unit Consultation', description: 'Alur konsultasi unit, tipe bangunan, dan schedule survey.' },
  ],
  projects: [
    { title: 'Lagoon Villa', type: 'Villa', description: 'Showcase unit utama dengan view dan area outdoor.', image: heroImage },
    { title: 'Garden Pavilion', type: 'Facility', description: 'Highlight fasilitas komunal dan green area.', image: galleryImage },
    { title: 'Sunset Residence', type: 'Residence', description: 'Portfolio tipe hunian keluarga premium.', image: heroImage },
  ],
  testimonials: [
    { name: 'Clara Santoso', role: 'Villa buyer', quote: 'Desainnya terasa seperti brochure properti premium yang siap dipresentasikan.', rating: 5 },
    { name: 'Made Wirawan', role: 'Property partner', quote: 'Section lokasi dan fasilitas membuat narasi proyek jauh lebih kuat.', rating: 5 },
  ],
  team: [
    { initials: 'VR', name: 'Vania Rahardja', role: 'Sales Director' },
    { initials: 'KA', name: 'Krisna Adiputra', role: 'Project Advisor' },
    { initials: 'MI', name: 'Mira Indrayani', role: 'Legal Partner' },
    { initials: 'FA', name: 'Fajar Arya', role: 'Site Consultant' },
  ],
  gallery: [
    { src: heroImage, alt: 'Resort property hero' },
    { src: galleryImage, alt: 'Facility layout' },
    { src: heroImage, alt: 'Villa exterior' },
    { src: galleryImage, alt: 'Location profile' },
  ],
}
