import './style.css'

const heroImage = new URL('../../../assets/images/construction-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-01',
  companyName: 'Arka Buildworks',
  tagline: 'Company profile solid untuk kontraktor dan engineering team.',
  description: 'Template untuk kontraktor, arsitektur, interior, dan engineering dengan portfolio proyek, layanan, team, dan CTA request tender.',
  logo: 'AB',
  design: {
    preset: 'construction-bold',
    label: 'Industrial Contractor',
    sectionOrder: ['projects', 'about', 'services', 'team', 'testimonials', 'gallery', 'cta', 'contact'],
  },
  cta: {
    title: 'Konsultasikan kebutuhan konstruksi dan tender Anda.',
    description: 'Diskusikan scope pekerjaan, timeline, metode kerja, dan estimasi proyek.',
    primaryLabel: 'Konsultasi Proyek',
    secondaryLabel: 'Email Tender',
  },
  heroImage,
  theme: {
    primary: '#9a5f22',
    secondary: '#2f3946',
    accent: '#687a52',
    surface: '#ffffff',
    ink: '#172033',
    font: 'Arial, Helvetica, sans-serif',
  },
  contact: {
    whatsapp: '+62 812 3456 4101',
    email: 'project@arkabuildworks.test',
    address: 'Jl. Industri Raya No. 9, Surabaya',
  },
  about: {
    title: 'Membangun proyek dengan proses yang terukur.',
    description: 'Tampilkan pengalaman perusahaan, standar keselamatan, tipe proyek, dan cara kerja tim dari pra-konstruksi sampai handover.',
    metrics: [
      { value: '85+', label: 'Project selesai' },
      { value: '0 LTI', label: 'Safety goal' },
      { value: '14 th', label: 'Pengalaman' },
      { value: '28', label: 'Engineer' },
    ],
  },
  services: [
    { icon: 'mdi-crane', title: 'General Contractor', description: 'Section jasa pembangunan gedung, ruko, rumah, dan fasilitas publik.' },
    { icon: 'mdi-ruler-square-compass', title: 'Design & Build', description: 'Konten layanan arsitektur, struktur, dan interior dalam satu paket.' },
    { icon: 'mdi-shield-check-outline', title: 'Site Management', description: 'Area untuk jadwal, quality control, dan standar keselamatan.' },
  ],
  workProcess: [
    { step: '01', title: 'Site Audit', description: 'Survey lokasi, scope awal, dan risk mapping.' },
    { step: '02', title: 'Design & Budget', description: 'RAB, timeline, material strategy, dan metode kerja.' },
    { step: '03', title: 'Build Control', description: 'Eksekusi lapangan, safety, QC, dan progress report.' },
    { step: '04', title: 'Handover', description: 'Final inspection, dokumen, dan maintenance guide.' },
  ],
  certifications: [
    { title: 'ISO 9001', description: 'Quality management workflow.' },
    { title: 'K3 Construction', description: 'Safety procedure and site compliance.' },
    { title: 'Green Build', description: 'Material efficiency and waste control.' },
  ],
  consultation: {
    title: 'Mulai dari scope, timeline, dan estimasi yang jelas.',
    description: 'CTA untuk tender, survey lokasi, atau konsultasi design-build.',
  },
  projects: [
    { title: 'Cendana Office Park', type: 'Commercial', description: 'Portfolio gedung perkantoran medium-rise.', image: heroImage },
    { title: 'Harbor Warehouse', type: 'Industrial', description: 'Showcase konstruksi gudang dan fasilitas logistik.', image: galleryImage },
    { title: 'Meru Residence', type: 'Residential', description: 'Highlight rumah tapak dan interior turnkey.', image: heroImage },
  ],
  testimonials: [
    { name: 'Hadi Santoso', role: 'Developer', quote: 'Company profile ini memberi ruang cukup untuk portfolio dan angka proyek.', rating: 5 },
    { name: 'Putri Amanda', role: 'Procurement Lead', quote: 'Struktur kontennya cocok untuk vendor introduction dan tender awal.', rating: 5 },
  ],
  team: [
    { initials: 'BP', name: 'Bagas Prakoso', role: 'Project Director' },
    { initials: 'SR', name: 'Sella Rinjani', role: 'Architect Lead' },
    { initials: 'MN', name: 'Miko Nugroho', role: 'Site Manager' },
    { initials: 'TA', name: 'Tirta Ananda', role: 'QS Engineer' },
  ],
  gallery: [
    { src: heroImage, alt: 'Construction project hero' },
    { src: galleryImage, alt: 'Contractor layout preview' },
    { src: heroImage, alt: 'Building showcase' },
    { src: galleryImage, alt: 'Engineering profile' },
  ],
}
