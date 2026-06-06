import './style.css'

const heroImage = new URL('../../../assets/images/restaurant-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-03',
  companyName: 'Garam Cafe Journal',
  tagline: 'Template French cafe editorial untuk alimentation, menu notes, bakery, dan cafe culture.',
  description: 'Desain editorial hangat untuk cafe, boulangerie, brunch spot, dan food journal brand dengan layout artikel, cover visual, dan reservasi.',
  logo: 'GJ',
  design: {
    preset: 'french-cafe-editorial',
    label: 'French Cafe Editorial',
    sectionOrder: ['projects', 'gallery', 'about', 'services', 'testimonials', 'team', 'cta', 'contact'],
  },
  cta: {
    title: 'Reserve a table, publish a menu story, or launch a cafe event.',
    description: 'Reservasi brunch, bakery drop, cafe event, atau content-style menu campaign sebagai custom request.',
    primaryLabel: 'Reservasi Sekarang',
    secondaryLabel: 'Email Cafe',
  },
  heroImage,
  theme: {
    primary: '#7b3f2a',
    secondary: '#b86b4b',
    accent: '#e6c18a',
    surface: '#fff7ed',
    ink: '#2a1710',
    font: 'Georgia, Times New Roman, serif',
  },
  contact: {
    whatsapp: '+62 812 3456 5103',
    email: 'bonjour@garamjournal.test',
    address: 'Jl. Braga No. 23, Bandung',
  },
  about: {
    title: 'Cafe editorial dengan cerita menu, bakery counter, brunch ritual, dan ambience yang terasa curated.',
    description: 'Gunakan untuk menjual konsep cafe, artikel makanan, menu musiman, bakery drop, ambience gallery, dan reservasi kecil.',
    metrics: [
      { value: '18', label: 'Menu notes' },
      { value: '54', label: 'Cafe seats' },
      { value: '9', label: 'Bakery drops' },
      { value: '4.8', label: 'Guest rating' },
    ],
  },
  services: [
    { icon: 'mdi-newspaper-variant-outline', title: 'Alimentation Journal', description: 'Layout artikel untuk menu story, chef note, bakery drop, dan seasonal ingredient.' },
    { icon: 'mdi-coffee-outline', title: 'Cafe Ritual', description: 'Section brunch, coffee, pastry, dan ambience seperti food magazine.' },
    { icon: 'mdi-table-chair', title: 'Small Reservation', description: 'CTA reservasi kecil, private brunch, tasting, atau cafe event.' },
  ],
  projects: [
    { title: 'Le Brunch Notes', type: 'Article', description: 'Artikel unggulan untuk menu brunch, pastry pairing, dan cafe story.', image: heroImage },
    { title: 'Pain & Beurre', type: 'Bakery', description: 'Showcase bakery counter, product drop, dan menu musiman.', image: galleryImage },
    { title: 'Terrace Hour', type: 'Culture', description: 'Konten ambience, community table, dan event kecil cafe.', image: heroImage },
  ],
  testimonials: [
    { name: 'Lala Prameswari', role: 'Guest', quote: 'Desain menu dan reservasinya langsung terasa seperti restoran premium.', rating: 5 },
    { name: 'Reno Aditya', role: 'Event client', quote: 'Ambience gallery membuat calon tamu mudah membayangkan suasana tempat.', rating: 5 },
  ],
  team: [
    { initials: 'GM', name: 'Genta Mahardika', role: 'Executive Chef' },
    { initials: 'NA', name: 'Nadia Amalia', role: 'Restaurant Manager' },
    { initials: 'BI', name: 'Bagus Indra', role: 'Bar Lead' },
    { initials: 'LA', name: 'Laras Ayu', role: 'Reservation Host' },
  ],
  gallery: [
    { src: heroImage, alt: 'Food hero' },
    { src: galleryImage, alt: 'Menu highlight layout' },
    { src: heroImage, alt: 'Restaurant ambience' },
    { src: galleryImage, alt: 'Reservation section' },
  ],
}
