import './style.css'

const heroImage = new URL('../../../assets/images/clinic-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-01',
  companyName: 'Calma Clinic',
  tagline: 'Profil klinik yang bersih, hangat, dan mudah dipercaya.',
  description: 'Template untuk klinik umum, dental care, aesthetic clinic, dan layanan kesehatan dengan informasi dokter, layanan, testimonial, dan kontak.',
  logo: 'CC',
  design: {
    preset: 'clinic-calm',
    label: 'Calm Patient Care',
    sectionOrder: ['services', 'about', 'team', 'testimonials', 'projects', 'gallery', 'cta', 'contact'],
  },
  cta: {
    title: 'Mulai konsultasi dengan tim klinik kami.',
    description: 'Buat appointment untuk checkup, dental care, wellness program, atau konsultasi dokter.',
    primaryLabel: 'Buat Appointment',
    secondaryLabel: 'Email Klinik',
  },
  heroImage,
  theme: {
    primary: '#14716a',
    secondary: '#385f8f',
    accent: '#8dd8c8',
    surface: '#ffffff',
    ink: '#173033',
    font: 'Avenir Next, Segoe UI, sans-serif',
  },
  contact: {
    whatsapp: '+62 812 3456 3101',
    email: 'care@calmaclinic.test',
    address: 'Jl. Diponegoro No. 14, Bandung',
  },
  about: {
    title: 'Pelayanan kesehatan yang dekat dan transparan.',
    description: 'Section about dapat menjelaskan pendekatan klinik, standar layanan, fasilitas, dan credential tenaga medis.',
    metrics: [
      { value: '18', label: 'Dokter partner' },
      { value: '6', label: 'Layanan utama' },
      { value: '25K+', label: 'Pasien terbantu' },
      { value: '4.9', label: 'Rating pasien' },
    ],
  },
  services: [
    { icon: 'mdi-stethoscope', title: 'General Checkup', description: 'Profil pemeriksaan umum, konsultasi, dan skrining berkala.' },
    { icon: 'mdi-tooth-outline', title: 'Dental Care', description: 'Section untuk tindakan gigi, perawatan, dan edukasi pasien.' },
    { icon: 'mdi-heart-pulse', title: 'Wellness Program', description: 'Area layanan preventif dan paket kesehatan keluarga.' },
  ],
  medicalServices: [
    { icon: 'mdi-stethoscope', title: 'General Practice', description: 'Konsultasi dokter umum, checkup, dan skrining berkala.' },
    { icon: 'mdi-tooth-outline', title: 'Dental Care', description: 'Perawatan gigi, scaling, dan edukasi pasien.' },
    { icon: 'mdi-heart-pulse', title: 'Preventive Care', description: 'Program kesehatan keluarga dan wellness.' },
    { icon: 'mdi-test-tube', title: 'Basic Lab', description: 'Pemeriksaan lab dasar sebagai custom request.' },
  ],
  doctors: [
    { initials: 'DR', name: 'dr. Rania Putri', specialty: 'General Practitioner', schedule: 'Mon - Thu' },
    { initials: 'DA', name: 'drg. Aditya Noor', specialty: 'Dental Lead', schedule: 'Tue - Sat' },
    { initials: 'NS', name: 'Nadia Sari', specialty: 'Nurse Coordinator', schedule: 'Daily' },
  ],
  schedules: [
    { day: 'Monday - Friday', time: '08.00 - 20.00', service: 'General Clinic' },
    { day: 'Tuesday - Saturday', time: '10.00 - 18.00', service: 'Dental Care' },
    { day: 'Weekend', time: '09.00 - 15.00', service: 'Appointment Only' },
  ],
  appointment: {
    title: 'Buat appointment tanpa membuat pasien bingung.',
    description: 'CTA untuk konsultasi, jadwal dokter, dan request layanan tambahan.',
  },
  projects: [
    { title: 'Family Checkup', type: 'Program', description: 'Showcase paket kesehatan keluarga.', image: heroImage },
    { title: 'Dental Studio', type: 'Facility', description: 'Highlight fasilitas dental modern.', image: galleryImage },
    { title: 'Preventive Care', type: 'Campaign', description: 'Portfolio edukasi kesehatan berkala.', image: heroImage },
  ],
  testimonials: [
    { name: 'Ayu Larasati', role: 'Patient', quote: 'Informasi klinik tersusun tenang dan membuat saya cepat menemukan kontak.', rating: 5 },
    { name: 'Dimas Arya', role: 'Family patient', quote: 'Section layanan dan dokter membuat profil klinik terlihat kredibel.', rating: 5 },
  ],
  team: [
    { initials: 'DR', name: 'dr. Rania Putri', role: 'Medical Director' },
    { initials: 'DA', name: 'drg. Aditya Noor', role: 'Dental Lead' },
    { initials: 'NS', name: 'Nadia Sari', role: 'Nurse Coordinator' },
    { initials: 'AL', name: 'Aldi Laksana', role: 'Patient Relation' },
  ],
  gallery: [
    { src: heroImage, alt: 'Clinic profile hero' },
    { src: galleryImage, alt: 'Healthcare layout preview' },
    { src: heroImage, alt: 'Medical service section' },
    { src: galleryImage, alt: 'Clinic gallery' },
  ],
}
