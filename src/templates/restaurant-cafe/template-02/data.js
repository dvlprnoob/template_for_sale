import './style.css'

const heroImage = new URL('../../../assets/images/restaurant-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-02',
  companyName: 'Murni Dining Room',
  tagline: 'Template fine dining Nordic minimal untuk tasting menu, seasonal produce, dan reservation inquiry.',
  description: 'Template restaurant premium dengan hero cinematic, typography tenang, course list, service line, dan CTA reservasi private dining.',
  logo: 'MD',
  design: {
    preset: 'nordic-tasting-menu',
    label: 'Nordic Tasting Menu',
    sectionOrder: ['projects', 'about', 'services', 'team', 'gallery', 'testimonials', 'cta', 'contact'],
  },
  cta: {
    title: 'Reserve a quiet table for a seasonal tasting experience.',
    description: 'Reservasi tasting menu, chef table, wine pairing, atau private dinner sebagai custom request.',
    primaryLabel: 'Reservasi Sekarang',
    secondaryLabel: 'Email Reservation',
  },
  heroImage,
  theme: {
    primary: '#070808',
    secondary: '#c9c2b4',
    accent: '#f2f0ea',
    surface: '#f8f6ef',
    ink: '#171717',
    font: 'Georgia, Times New Roman, serif',
  },
  contact: {
    whatsapp: '+62 812 3456 5102',
    email: 'reserve@murnidining.test',
    address: 'Jl. Cihampelas No. 71, Bandung',
  },
  about: {
    title: 'A quiet room built around season, soil, discipline, and intimate service.',
    description: 'Area ini menjelaskan konsep seasonal produce, jumlah meja terbatas, chef philosophy, dan pengalaman tasting menu.',
    metrics: [
      { value: '8', label: 'Tables nightly' },
      { value: '12', label: 'Courses' },
      { value: '24', label: 'Seasonal farms' },
      { value: '4.9', label: 'Guest rating' },
    ],
  },
  services: [
    { icon: 'mdi-sprout-outline', title: 'Seasonal Produce', description: 'Narasi bahan lokal, farm partner, dan filosofi menu musiman.' },
    { icon: 'mdi-silverware-fork-knife', title: 'Tasting Course', description: 'Daftar course elegan untuk degustation, pairing, atau chef table.' },
    { icon: 'mdi-glass-wine', title: 'Private Pairing', description: 'CTA untuk private dinner, wine pairing, dan intimate event.' },
  ],
  projects: [
    { title: 'Forest Broth', type: 'Course I', description: 'Course list editorial untuk pembuka, origin story, dan pairing note.', image: galleryImage },
    { title: 'Charred Root', type: 'Course VI', description: 'Showcase course utama dengan visual tenang dan detail bahan.', image: heroImage },
    { title: 'Cloud Dessert', type: 'Course XII', description: 'Penutup tasting menu dengan caption singkat dan mood premium.', image: galleryImage },
  ],
  testimonials: [
    { name: 'Niko Prasetya', role: 'Coffee enthusiast', quote: 'Profile cafe terasa craft-oriented dan mudah dibagikan.', rating: 5 },
    { name: 'Irene Wulandari', role: 'Community host', quote: 'Section event cocok untuk jadwal komunitas sebagai custom request.', rating: 5 },
  ],
  team: [
    { initials: 'BT', name: 'Banyu Tirta', role: 'Roaster' },
    { initials: 'EL', name: 'Elena Laksmi', role: 'Head Barista' },
    { initials: 'RR', name: 'Reno Raharja', role: 'Kitchen Lead' },
    { initials: 'SA', name: 'Sasha Amira', role: 'Community Lead' },
  ],
  gallery: [
    { src: galleryImage, alt: 'Cafe layout preview' },
    { src: heroImage, alt: 'Coffee shop hero' },
    { src: galleryImage, alt: 'Coffee profile section' },
    { src: heroImage, alt: 'Restaurant cafe showcase' },
  ],
}
