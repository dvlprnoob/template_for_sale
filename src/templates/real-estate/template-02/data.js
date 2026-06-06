import './style.css'

const heroImage = new URL('../../../assets/images/real-estate-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-02',
  companyName: 'UrbanNest Realty',
  tagline: 'Company profile tajam untuk listing urban dan investasi properti.',
  description: 'Template real estate dengan nuansa corporate, cocok untuk broker premium, konsultan investasi, dan tim sales proyek baru.',
  logo: 'UN',
  design: {
    preset: 'estate-editorial',
    label: 'Urban Editorial Listing',
    sectionOrder: ['projects', 'about', 'services', 'gallery', 'testimonials', 'team', 'cta', 'contact'],
  },
  cta: {
    title: 'Diskusikan listing dan peluang investasi properti.',
    description: 'Hubungi sales untuk konsultasi area, unit tersedia, dan jadwal kunjungan.',
    primaryLabel: 'Hubungi Sales',
    secondaryLabel: 'Email Sales',
  },
  heroImage,
  theme: {
    primary: '#172033',
    secondary: '#7a8f99',
    accent: '#b88746',
    surface: '#ffffff',
    ink: '#111827',
    font: 'Trebuchet MS, Arial, sans-serif',
  },
  contact: {
    whatsapp: '+62 812 3456 1102',
    email: 'sales@urbannest.test',
    address: 'Jl. BSD Grand Boulevard, Tangerang Selatan',
  },
  about: {
    title: 'Membantu klien memilih aset properti yang tepat.',
    description: 'Gunakan area ini untuk menjelaskan proses kurasi listing, analisis lokasi, dan layanan pendampingan pembelian.',
    metrics: [
      { value: '95%', label: 'Repeat client' },
      { value: '320M', label: 'Nilai transaksi' },
      { value: '36', label: 'Project partner' },
      { value: '7 hari', label: 'Respon cepat' },
    ],
  },
  services: [
    { icon: 'mdi-office-building-outline', title: 'Project Sales', description: 'Konten untuk launching apartemen, cluster, dan mixed-use building.' },
    { icon: 'mdi-map-search-outline', title: 'Area Research', description: 'Section insight lokasi, akses, fasilitas, dan tren harga.' },
    { icon: 'mdi-account-tie-outline', title: 'Buyer Handling', description: 'Alur komunikasi calon pembeli sampai jadwal survey.' },
  ],
  projects: [
    { title: 'Metro Suites', type: 'High-rise', description: 'Portfolio untuk hunian vertikal dan unit investasi.', image: galleryImage },
    { title: 'Aster Park', type: 'Townhouse', description: 'Highlight rumah compact dengan fasilitas privat.', image: heroImage },
    { title: 'The Corner Hub', type: 'Commercial', description: 'Showcase ruko strategis untuk brand retail.', image: galleryImage },
  ],
  testimonials: [
    { name: 'Kevin Hartono', role: 'Business owner', quote: 'Informasi listing terasa profesional dan mudah saya kirim ke partner.', rating: 5 },
    { name: 'Sinta Lestari', role: 'Property buyer', quote: 'Preview ini langsung menjawab pertanyaan penting sebelum survey.', rating: 5 },
  ],
  team: [
    { initials: 'KM', name: 'Keenan Malik', role: 'Investment Lead' },
    { initials: 'TH', name: 'Tara Hapsari', role: 'Sales Director' },
    { initials: 'GA', name: 'Gilang Aditya', role: 'Area Specialist' },
    { initials: 'NS', name: 'Novi Safira', role: 'Client Success' },
  ],
  gallery: [
    { src: galleryImage, alt: 'Urban property profile' },
    { src: heroImage, alt: 'Modern development render' },
    { src: galleryImage, alt: 'Investment layout' },
    { src: heroImage, alt: 'Real estate hero' },
  ],
}
