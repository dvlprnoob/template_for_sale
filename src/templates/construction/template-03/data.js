import './style.css'

const heroImage = new URL('../../../assets/images/construction-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-03',
  companyName: 'Titan Infra',
  tagline: 'Company profile konstruksi infrastruktur dengan grid kuat, proses kerja, dan sertifikasi.',
  description: 'Template industrial untuk kontraktor jalan, infrastruktur, EPC, dan engineering dengan visual tegas dan statistik pengalaman.',
  logo: 'TI',
  design: {
    preset: 'construction-infra',
    label: 'Infrastructure Grid Profile',
    sectionOrder: ['about', 'projects', 'services', 'team', 'gallery', 'testimonials', 'cta', 'contact'],
  },
  cta: {
    title: 'Diskusikan scope dan kebutuhan proyek Anda.',
    description: 'Konsultasi proyek untuk estimasi, metode kerja, sertifikasi, dan jadwal pelaksanaan.',
    primaryLabel: 'Konsultasi Proyek',
    secondaryLabel: 'Email Tender',
  },
  heroImage,
  theme: {
    primary: '#252525',
    secondary: '#d68a22',
    accent: '#f5c542',
    surface: '#f7f5ef',
    ink: '#1c1c1c',
    font: 'Arial, Helvetica, sans-serif',
  },
  contact: {
    whatsapp: '+62 812 3456 4103',
    email: 'tender@titaninfra.test',
    address: 'Jl. Raya Industri No. 33, Bekasi',
  },
  about: {
    title: 'Kontraktor infrastruktur dengan proses kerja, safety, dan sertifikasi jelas.',
    description: 'Cocok untuk menjual kredibilitas proyek melalui statistik pengalaman, alur kerja, sertifikat, dan portfolio lapangan.',
    metrics: [
      { value: '120+', label: 'Project infra' },
      { value: '18 th', label: 'Experience' },
      { value: 'ISO', label: 'Certified' },
      { value: '450', label: 'Crew aktif' },
    ],
  },
  services: [
    { icon: 'mdi-road-variant', title: 'Infrastructure Work', description: 'Proyek jalan, drainase, struktur, dan fasilitas kawasan.' },
    { icon: 'mdi-clipboard-check-outline', title: 'Work Process', description: 'Section tahapan survey, planning, execution, QC, dan handover.' },
    { icon: 'mdi-certificate-outline', title: 'Certification', description: 'Area sertifikasi, safety compliance, dan legal perusahaan.' },
  ],
  projects: [
    { title: 'North Access Road', type: 'Roadwork', description: 'Portfolio konstruksi jalan akses kawasan industri.', image: heroImage },
    { title: 'Utility Corridor', type: 'Infrastructure', description: 'Showcase pekerjaan utilitas dan drainase.', image: galleryImage },
    { title: 'Bridge Reinforce', type: 'Structure', description: 'Highlight proyek struktur dan perkuatan.', image: heroImage },
  ],
  testimonials: [
    { name: 'Agus Mulyono', role: 'Project Owner', quote: 'Grid dan statistiknya cocok untuk company profile tender konstruksi.', rating: 5 },
    { name: 'Nina Kartika', role: 'Procurement', quote: 'Bagian sertifikasi dan proses kerja terlihat tegas dan profesional.', rating: 5 },
  ],
  team: [
    { initials: 'HS', name: 'Haryo Saputra', role: 'Project Director' },
    { initials: 'NN', name: 'Nadia Nirmala', role: 'HSE Manager' },
    { initials: 'AP', name: 'Arga Prasetyo', role: 'Civil Engineer' },
    { initials: 'DK', name: 'Dian Kurnia', role: 'Tender Lead' },
  ],
  gallery: [
    { src: heroImage, alt: 'Infrastructure construction hero' },
    { src: galleryImage, alt: 'Certification section' },
    { src: heroImage, alt: 'Project grid' },
    { src: galleryImage, alt: 'Work process layout' },
  ],
}
