import './style.css'

const heroImage = new URL('../../../assets/images/construction-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-02',
  companyName: 'Forma Studio',
  tagline: 'Profil arsitektur dan interior yang minimal, presisi, dan portfolio-first.',
  description: 'Template construction untuk studio arsitektur, interior contractor, dan design consultant dengan section project visual dan service scope.',
  logo: 'FS',
  design: {
    preset: 'construction-studio',
    label: 'Minimal Architecture Studio',
    sectionOrder: ['gallery', 'about', 'projects', 'services', 'team', 'testimonials', 'cta', 'contact'],
  },
  cta: {
    title: 'Mulai konsultasi desain dan pembangunan ruang.',
    description: 'Bahas konsep, gambar kerja, interior, timeline, dan scope design-build.',
    primaryLabel: 'Konsultasi Proyek',
    secondaryLabel: 'Email Studio',
  },
  heroImage,
  theme: {
    primary: '#3d4752',
    secondary: '#6f7668',
    accent: '#b56f45',
    surface: '#ffffff',
    ink: '#172033',
    font: 'Georgia, Times New Roman, serif',
  },
  contact: {
    whatsapp: '+62 812 3456 4102',
    email: 'studio@formastudio.test',
    address: 'Jl. Gejayan No. 40, Yogyakarta',
  },
  about: {
    title: 'Merancang ruang yang bekerja untuk manusia dan bisnis.',
    description: 'Area narasi untuk menjelaskan filosofi desain, workflow, kolaborasi klien, dan hasil proyek.',
    metrics: [
      { value: '42', label: 'Design project' },
      { value: '16', label: 'City coverage' },
      { value: '9', label: 'Studio team' },
      { value: '2020', label: 'Established' },
    ],
  },
  services: [
    { icon: 'mdi-floor-plan', title: 'Architecture Plan', description: 'Konten perencanaan ruang, layout, dan konsep fasad.' },
    { icon: 'mdi-sofa-outline', title: 'Interior Build', description: 'Section interior, material board, dan execution partner.' },
    { icon: 'mdi-cube-scan', title: '3D Visualization', description: 'Area render, moodboard, dan visual concept.' },
  ],
  projects: [
    { title: 'Nara House', type: 'Residential', description: 'Portfolio hunian tropis kontemporer.', image: galleryImage },
    { title: 'Atlas Office', type: 'Workspace', description: 'Highlight kantor produktif dan fleksibel.', image: heroImage },
    { title: 'Koma Retail', type: 'Retail', description: 'Showcase interior retail compact.', image: galleryImage },
  ],
  testimonials: [
    { name: 'Johan Pradipta', role: 'Founder', quote: 'Portfolio project mudah dipindai dan terlihat seperti studio serius.', rating: 5 },
    { name: 'Melly Anggraini', role: 'Home owner', quote: 'Section layanan membantu menjelaskan scope desain dengan singkat.', rating: 5 },
  ],
  team: [
    { initials: 'KL', name: 'Kirana Lazuardi', role: 'Principal Architect' },
    { initials: 'NO', name: 'Naufal Oktavian', role: 'Interior Lead' },
    { initials: 'MA', name: 'Mira Amalia', role: 'Visualization Artist' },
    { initials: 'RP', name: 'Rangga Purnama', role: 'Site Coordinator' },
  ],
  gallery: [
    { src: galleryImage, alt: 'Architecture profile preview' },
    { src: heroImage, alt: 'Construction hero image' },
    { src: galleryImage, alt: 'Interior layout preview' },
    { src: heroImage, alt: 'Studio project showcase' },
  ],
}
