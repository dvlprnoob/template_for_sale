import './style.css'

const heroImage = new URL('../../../assets/images/restaurant-hero.svg', import.meta.url).href
const galleryImage = new URL('../../../assets/images/gallery-neutral.svg', import.meta.url).href

export default {
  slug: 'template-01',
  companyName: 'Bara Burger House',
  tagline: 'Template burger house playful untuk menu besar, cabang, promo seasonal, dan reservasi cepat.',
  description: 'Template casual restaurant bergaya burger brand modern dengan hero ekspresif, menu cards agresif, location panel, dan CTA reserve/order.',
  logo: 'BB',
  design: {
    preset: 'burger-playground',
    label: 'Burger House Playground',
    sectionOrder: ['about', 'projects', 'services', 'gallery', 'team', 'testimonials', 'cta', 'contact'],
  },
  cta: {
    title: 'Book a table, launch a promo, or sell the next burger drop.',
    description: 'Reservasi dine-in, campaign burger of the month, gift card, atau party package sebagai custom request.',
    primaryLabel: 'Reservasi Sekarang',
    secondaryLabel: 'Order Gift Card',
  },
  heroImage,
  theme: {
    primary: '#2b170f',
    secondary: '#9a3412',
    accent: '#ffefc7',
    surface: '#fff7ed',
    ink: '#2b170f',
    font: 'Arial Black, Impact, sans-serif',
  },
  contact: {
    whatsapp: '+62 812 3456 5101',
    email: 'hello@baraburger.test',
    address: 'Jl. Kemang Raya No. 28, Jakarta Selatan',
  },
  about: {
    title: 'Burger bar dengan menu tebal, cabang ramai, dan visual brand yang gampang diingat.',
    description: 'Gunakan section ini untuk memperkenalkan signature burger, branch highlight, opening hours, delivery channel, dan campaign musiman.',
    metrics: [
      { value: '18', label: 'Burger stacks' },
      { value: '4', label: 'City outlets' },
      { value: '92K', label: 'Monthly orders' },
      { value: '7 hari', label: 'Open weekly' },
    ],
  },
  services: [
    { icon: 'mdi-hamburger', title: 'Burger Menu', description: 'Showcase burger, sides, sauce, combo meal, dan limited drop.' },
    { icon: 'mdi-map-marker-radius-outline', title: 'Outlet Finder', description: 'Panel cabang, jam buka, dan CTA WhatsApp per area sebagai custom request.' },
    { icon: 'mdi-party-popper', title: 'Party Pack', description: 'Section paket acara, office lunch, birthday meal, dan catering burger.' },
  ],
  menus: [
    { name: 'Double Bara Stack', category: 'Signature', price: '89K', description: 'Beef patty, smoked cheese, house sauce, pickled onion.', image: heroImage },
    { name: 'Smoky Cheese Drop', category: 'Seasonal', price: '76K', description: 'Charred bun, cheddar melt, jalapeno relish, fries.', image: galleryImage },
    { name: 'Late Night Combo', category: 'Bundle', price: '118K', description: 'Burger, fries, signature drink, dan sauce flight.', image: heroImage },
  ],
  chefRecommendations: [
    { title: 'House Sauce Flight', description: 'Tiga sauce signature untuk upsell menu.', tag: 'Chef Pick' },
    { title: 'Loaded Fries', description: 'Menu side yang cocok untuk combo dan promo.', tag: 'Best Seller' },
  ],
  reservation: {
    title: 'Reserve a table or launch the next burger drop.',
    description: 'CTA untuk dine-in, party pack, campaign menu, atau delivery inquiry.',
  },
  projects: [
    { title: 'Double Bara Stack', type: 'Signature', description: 'Hero product dengan visual besar dan copy pendek untuk menu utama.', image: heroImage },
    { title: 'Smoky Cheese Drop', type: 'Seasonal', description: 'Layout promo untuk burger of the month, voucher, atau combo.', image: galleryImage },
    { title: 'Late Night Combo', type: 'Campaign', description: 'Card campaign untuk jam ramai, delivery, dan dine-in push.', image: heroImage },
  ],
  testimonials: [
    { name: 'Tasya Maharani', role: 'Guest', quote: 'Profilnya membuat vibe restoran terasa bahkan sebelum datang.', rating: 5 },
    { name: 'Ario Danendra', role: 'Event client', quote: 'Section catering dan gallery membantu presentasi ke tim acara.', rating: 5 },
  ],
  team: [
    { initials: 'RA', name: 'Raka Arya', role: 'Head Chef' },
    { initials: 'CL', name: 'Citra Laras', role: 'Pastry Lead' },
    { initials: 'WN', name: 'Wira Nanda', role: 'Bar Manager' },
    { initials: 'FP', name: 'Fani Pratiwi', role: 'Guest Relation' },
  ],
  gallery: [
    { src: heroImage, alt: 'Restaurant profile hero' },
    { src: galleryImage, alt: 'Restaurant layout preview' },
    { src: heroImage, alt: 'Food showcase' },
    { src: galleryImage, alt: 'Cafe profile preview' },
  ],
}
