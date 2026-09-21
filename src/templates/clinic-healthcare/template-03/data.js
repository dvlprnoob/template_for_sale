import './style.css'

const heroImage = new URL('../../../assets/images/clinic-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-03',
  companyName: 'MintCare Dental',
  tagline: 'Template dental dan healthcare dengan card rounded, jadwal dokter, dan trust flow.',
  description: 'Dirancang untuk klinik dental, pediatric clinic, dan layanan appointment dengan visual soft, bersih, dan terpercaya.',
  logo: 'MD',
  design: {
    preset: 'clinic-appointment',
    label: 'Appointment Care Flow',
    sectionOrder: ['team', 'services', 'about', 'testimonials', 'projects', 'gallery', 'cta', 'contact'],
  },
  cta: {
    title: 'Atur jadwal kunjungan dengan tim klinik.',
    description: 'Buat appointment untuk konsultasi dokter, dental checkup, atau paket kesehatan.',
    primaryLabel: 'Buat Appointment',
    secondaryLabel: 'Email Klinik',
  },
  heroImage,
  theme: {
    primary: '#4a90a4',
    secondary: '#78b9a8',
    accent: '#bdebdc',
    surface: '#fbfffe',
    ink: '#173033',
    font: 'Trebuchet MS, Arial, sans-serif',
  },
  contact: {
    whatsapp: '+62 812 3456 3103',
    email: 'appointment@mintcare.test',
    address: 'Jl. Pahlawan No. 17, Semarang',
  },
  about: {
    title: 'Perawatan klinik yang nyaman, terjadwal, dan mudah dipahami pasien.',
    description: 'Gunakan untuk menjelaskan pengalaman pasien, jadwal dokter, layanan appointment, dan standar kebersihan klinik.',
    metrics: [
      { value: '10', label: 'Dokter aktif' },
      { value: '5 hari', label: 'Jadwal praktik' },
      { value: '12K+', label: 'Pasien' },
      { value: '4.9', label: 'Rating' },
    ],
  },
  services: [
    { icon: 'mdi-calendar-clock', title: 'Doctor Schedule', description: 'Section jadwal dokter dan ketersediaan appointment.' },
    { icon: 'mdi-toothbrush-paste', title: 'Dental Treatment', description: 'Konten scaling, whitening, behel, dan konsultasi gigi.' },
    { icon: 'mdi-medical-bag', title: 'Patient Care', description: 'Alur layanan pasien baru, follow-up, dan edukasi kesehatan.' },
  ],
  doctors: [
    { initials: 'DI', name: 'drg. Indah Permata', specialty: 'Dental Director', schedule: 'Mon - Fri' },
    { initials: 'DN', name: 'dr. Nanda Putra', specialty: 'Family Care', schedule: 'Tue - Sat' },
    { initials: 'SW', name: 'Siska Wulandari', specialty: 'Patient Care', schedule: 'Daily' },
  ],
  schedules: [
    { day: 'Monday', time: '09.00 - 18.00', doctor: 'Dental Treatment' },
    { day: 'Wednesday', time: '10.00 - 20.00', doctor: 'Family Clinic' },
    { day: 'Saturday', time: '09.00 - 15.00', doctor: 'Kids Clinic Day' },
  ],
  dentalTreatments: [
    { icon: 'mdi-toothbrush-paste', title: 'Scaling', description: 'Treatment rutin dan preventive visit.' },
    { icon: 'mdi-tooth-outline', title: 'Whitening', description: 'Cosmetic dental treatment dan consultation.' },
    { icon: 'mdi-calendar-clock', title: 'Appointment Desk', description: 'Alur appointment dan follow-up pasien.' },
  ],
  projects: [
    { title: 'Smile Program', type: 'Dental', description: 'Highlight paket perawatan gigi keluarga.', image: heroImage },
    { title: 'Kids Clinic Day', type: 'Program', description: 'Showcase layanan anak dan ambience klinik.', image: galleryImage },
    { title: 'Preventive Visit', type: 'Care', description: 'Area edukasi checkup rutin dan follow-up.', image: heroImage },
  ],
  testimonials: [
    { name: 'Ranti Amelia', role: 'Patient', quote: 'Desain appointment dan jadwal dokter terasa jelas dan menenangkan.', rating: 5 },
    { name: 'Budi Hartanto', role: 'Parent', quote: 'Rounded card dan warna soft membuat klinik terasa ramah keluarga.', rating: 5 },
  ],
  team: [
    { initials: 'DI', name: 'drg. Indah Permata', role: 'Dental Director' },
    { initials: 'DN', name: 'dr. Nanda Putra', role: 'General Practitioner' },
    { initials: 'SW', name: 'Siska Wulandari', role: 'Nurse Lead' },
    { initials: 'TA', name: 'Tania Arum', role: 'Appointment Desk' },
  ],
  gallery: [
    { src: heroImage, alt: 'Clinic appointment hero' },
    { src: galleryImage, alt: 'Doctor schedule section' },
    { src: heroImage, alt: 'Dental care profile' },
    { src: galleryImage, alt: 'Patient testimonial layout' },
  ],
}
