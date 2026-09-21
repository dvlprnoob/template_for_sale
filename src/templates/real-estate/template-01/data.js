import './style.css'

const heroImage = new URL('../../../assets/images/real-estate-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-01',
  companyName: 'Avara Estate',
  tagline: 'Hunian premium dengan strategi pemasaran properti yang rapi.',
  description: 'Template untuk agency properti dan developer yang butuh profil elegan, listing unggulan, portfolio proyek, testimonial pembeli, dan CTA WhatsApp.',
  logo: 'AE',
  design: {
    preset: 'estate-luxe',
    label: 'Confidential Estate System',
    sectionOrder: ['about', 'projects', 'services', 'testimonials', 'gallery', 'team', 'cta', 'contact'],
  },
  cta: {
    title: 'Pilih unit properti dan bicara langsung dengan sales.',
    description: 'Minta brochure, price list, lokasi, fasilitas, dan jadwal survey properti.',
    primaryLabel: 'Hubungi Sales',
    secondaryLabel: 'Email Sales',
  },
  heroImage,
  theme: {
    primary: '#0b0f12',
    secondary: '#1d2426',
    accent: '#c49a4a',
    surface: '#ffffff',
    ink: '#172033',
    font: 'Georgia, Times New Roman, serif',
  },
  contact: {
    whatsapp: '+62 812 3456 1101',
    email: 'hello@avaraestate.test',
    address: 'Jl. Senopati No. 18, Jakarta Selatan',
  },
  about: {
    title: 'Property advisor untuk pembeli modern.',
    description: 'Section about dapat menjelaskan positioning bisnis, area layanan, value proposition, dan rekam jejak perusahaan secara ringkas.',
    metrics: [
      { value: '180+', label: 'Unit terjual' },
      { value: '24', label: 'Area listing' },
      { value: '12 th', label: 'Pengalaman' },
      { value: '4.9', label: 'Rating klien' },
    ],
  },
  services: [
    { icon: 'mdi-home-search-outline', title: 'Property Listing', description: 'Showcase rumah, apartemen, ruko, dan villa dengan konten siap edit.' },
    { icon: 'mdi-chart-line', title: 'Market Advisory', description: 'Narasi layanan konsultasi harga, area, dan potensi investasi.' },
    { icon: 'mdi-file-sign', title: 'Closing Support', description: 'Section untuk legalitas, KPR, dan pendampingan transaksi.' },
  ],
  facilities: [
    { icon: 'mdi-pool', title: 'Sky Pool', description: 'Fasilitas premium untuk lifestyle penghuni.' },
    { icon: 'mdi-tree-outline', title: 'Private Garden', description: 'Area hijau dan walking path untuk keluarga.' },
    { icon: 'mdi-shield-home-outline', title: '24/7 Security', description: 'Cluster access, CCTV, dan concierge gate.' },
    { icon: 'mdi-car', title: 'Smart Parking', description: 'Dedicated parking dan visitor management.' },
  ],
  units: [
    { name: 'Type Aster', size: '96 m2', rooms: '3 BR', price: 'Mulai 1.8M' },
    { name: 'Type Canna', size: '128 m2', rooms: '4 BR', price: 'Mulai 2.6M' },
    { name: 'Type Magnolia', size: '180 m2', rooms: '5 BR', price: 'By Request' },
  ],
  location: {
    title: 'Lokasi premium dengan akses kota yang tenang.',
    description: 'Dekat sekolah internasional, transportasi publik, retail premium, rumah sakit, dan area bisnis utama.',
    points: ['8 menit ke CBD', '12 menit ke sekolah internasional', '15 menit ke airport connector'],
  },
  projects: [
    { title: 'Serene Residence', type: 'Cluster', description: 'Highlight cluster keluarga dengan akses sekolah dan transportasi.', image: heroImage },
    { title: 'Nordic Loft', type: 'Apartment', description: 'Area portfolio untuk unit compact premium di pusat kota.', image: galleryImage },
    { title: 'Green Villa', type: 'Villa', description: 'Showcase villa liburan dengan visual hero besar.', image: heroImage },
  ],
  testimonials: [
    { name: 'Nadia Putri', role: 'Home buyer', quote: 'Profilnya membuat pilihan properti lebih mudah dipahami dan terasa kredibel.', rating: 5 },
    { name: 'Rafi Mahendra', role: 'Investor', quote: 'Layout portfolio dan CTA WhatsApp membantu proses inquiry jadi cepat.', rating: 5 },
  ],
  team: [
    { initials: 'AS', name: 'Arman Satria', role: 'Principal Advisor' },
    { initials: 'LP', name: 'Laras Prameswari', role: 'Listing Manager' },
    { initials: 'DM', name: 'Dika Mahesa', role: 'Mortgage Partner' },
    { initials: 'RV', name: 'Rina Valeska', role: 'Client Relation' },
  ],
  gallery: [
    { src: heroImage, alt: 'Modern property exterior' },
    { src: galleryImage, alt: 'Profile layout preview' },
    { src: heroImage, alt: 'Residential showcase' },
    { src: galleryImage, alt: 'Listing card preview' },
  ],
}
