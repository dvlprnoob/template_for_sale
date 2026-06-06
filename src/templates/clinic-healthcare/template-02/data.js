import './style.css'

const heroImage = new URL('../../../assets/images/clinic-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-02',
  companyName: 'VitaLab Health',
  tagline: 'Company profile untuk lab, screening, dan layanan kesehatan preventif.',
  description: 'Template healthcare dengan visual rapi untuk lab kesehatan, vaksinasi, home care, dan medical checkup corporate.',
  logo: 'VH',
  design: {
    preset: 'clinic-lab',
    label: 'Diagnostic Lab Profile',
    sectionOrder: ['about', 'services', 'projects', 'testimonials', 'team', 'gallery', 'cta', 'contact'],
  },
  cta: {
    title: 'Jadwalkan screening dan medical checkup.',
    description: 'Buat appointment lab, home service, atau paket corporate medical checkup.',
    primaryLabel: 'Buat Appointment',
    secondaryLabel: 'Email Lab',
  },
  heroImage,
  theme: {
    primary: '#214f7a',
    secondary: '#2f7d83',
    accent: '#88c8a4',
    surface: '#ffffff',
    ink: '#172033',
    font: 'Helvetica Neue, Arial, sans-serif',
  },
  contact: {
    whatsapp: '+62 812 3456 3102',
    email: 'hello@vitalab.test',
    address: 'Jl. HR Rasuna Said No. 8, Jakarta',
  },
  about: {
    title: 'Data kesehatan yang jelas untuk keputusan lebih baik.',
    description: 'Gunakan area ini untuk mengangkat akurasi, proses sampling, hasil digital, dan service level lab.',
    metrics: [
      { value: '40K+', label: 'Sample/tahun' },
      { value: '12 jam', label: 'Hasil cepat' },
      { value: '60+', label: 'Partner corporate' },
      { value: 'ISO', label: 'Standar proses' },
    ],
  },
  services: [
    { icon: 'mdi-test-tube', title: 'Lab Screening', description: 'Konten paket pemeriksaan lab dan hasil digital.' },
    { icon: 'mdi-domain', title: 'Corporate MCU', description: 'Narasi paket medical checkup perusahaan.' },
    { icon: 'mdi-home-heart', title: 'Home Service', description: 'Section pengambilan sample di rumah sebagai request custom.' },
  ],
  projects: [
    { title: 'Executive MCU', type: 'Corporate', description: 'Portfolio medical checkup untuk perusahaan.', image: galleryImage },
    { title: 'Wellness Screening', type: 'Preventive', description: 'Highlight paket kesehatan berkala.', image: heroImage },
    { title: 'Home Sampling', type: 'Service', description: 'Showcase layanan kunjungan rumah.', image: galleryImage },
  ],
  testimonials: [
    { name: 'Lina Hartati', role: 'HR Manager', quote: 'Profil lab terlihat profesional untuk dikirim ke manajemen.', rating: 5 },
    { name: 'Farhan Nugraha', role: 'Patient', quote: 'Informasi layanan ringkas dan CTA emailnya jelas.', rating: 5 },
  ],
  team: [
    { initials: 'RM', name: 'Rizky Mahendra', role: 'Lab Director' },
    { initials: 'VK', name: 'Vina Kartika', role: 'Clinical Pathology' },
    { initials: 'AH', name: 'Arif Hidayat', role: 'Corporate Account' },
    { initials: 'TS', name: 'Tika Safitri', role: 'Service Lead' },
  ],
  gallery: [
    { src: galleryImage, alt: 'Lab profile preview' },
    { src: heroImage, alt: 'Healthcare hero image' },
    { src: galleryImage, alt: 'Medical checkup layout' },
    { src: heroImage, alt: 'Clinic service preview' },
  ],
}
