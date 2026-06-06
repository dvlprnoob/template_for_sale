import realEstate01 from '../templates/real-estate/template-01/data'
import RealEstate01Component from '../templates/real-estate/template-01/index.vue'
import realEstate02 from '../templates/real-estate/template-02/data'
import RealEstate02Component from '../templates/real-estate/template-02/index.vue'
import realEstate03 from '../templates/real-estate/template-03/data'
import RealEstate03Component from '../templates/real-estate/template-03/index.vue'
import automotive01 from '../templates/automotive/template-01/data'
import Automotive01Component from '../templates/automotive/template-01/index.vue'
import automotive02 from '../templates/automotive/template-02/data'
import Automotive02Component from '../templates/automotive/template-02/index.vue'
import automotive03 from '../templates/automotive/template-03/data'
import Automotive03Component from '../templates/automotive/template-03/index.vue'
import clinic01 from '../templates/clinic-healthcare/template-01/data'
import Clinic01Component from '../templates/clinic-healthcare/template-01/index.vue'
import clinic02 from '../templates/clinic-healthcare/template-02/data'
import Clinic02Component from '../templates/clinic-healthcare/template-02/index.vue'
import clinic03 from '../templates/clinic-healthcare/template-03/data'
import Clinic03Component from '../templates/clinic-healthcare/template-03/index.vue'
import construction01 from '../templates/construction/template-01/data'
import Construction01Component from '../templates/construction/template-01/index.vue'
import construction02 from '../templates/construction/template-02/data'
import Construction02Component from '../templates/construction/template-02/index.vue'
import construction03 from '../templates/construction/template-03/data'
import Construction03Component from '../templates/construction/template-03/index.vue'
import restaurant01 from '../templates/restaurant-cafe/template-01/data'
import Restaurant01Component from '../templates/restaurant-cafe/template-01/index.vue'
import restaurant02 from '../templates/restaurant-cafe/template-02/data'
import Restaurant02Component from '../templates/restaurant-cafe/template-02/index.vue'
import restaurant03 from '../templates/restaurant-cafe/template-03/data'
import Restaurant03Component from '../templates/restaurant-cafe/template-03/index.vue'

function withComponent(template, component) {
  return {
    ...template,
    component,
  }
}

export const categories = [
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description: 'Premium, clean, modern, elegan, whitespace luas, navy/gold/cream, property hero, project, fasilitas, lokasi, dan sales CTA.',
    icon: 'mdi-home-city-outline',
    templates: [
      withComponent(realEstate01, RealEstate01Component),
      withComponent(realEstate02, RealEstate02Component),
      withComponent(realEstate03, RealEstate03Component),
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    description: 'Bold, sporty, dinamis, warna gelap/merah/silver, showcase kendaraan, bengkel, sparepart, promo, dan test drive CTA.',
    icon: 'mdi-car-sports',
    templates: [
      withComponent(automotive01, Automotive01Component),
      withComponent(automotive02, Automotive02Component),
      withComponent(automotive03, Automotive03Component),
    ],
  },
  {
    slug: 'clinic-healthcare',
    name: 'Clinic & Healthcare',
    description: 'Soft, bersih, terpercaya, putih/biru muda/mint, rounded card, icon medis, jadwal dokter, pasien, dan appointment CTA.',
    icon: 'mdi-hospital-building',
    templates: [
      withComponent(clinic01, Clinic01Component),
      withComponent(clinic02, Clinic02Component),
      withComponent(clinic03, Clinic03Component),
    ],
  },
  {
    slug: 'construction',
    name: 'Construction',
    description: 'Industrial, tegas, profesional, hitam/kuning/oranye/abu, grid kuat, proyek, statistik, proses, sertifikasi, dan project CTA.',
    icon: 'mdi-crane',
    templates: [
      withComponent(construction01, Construction01Component),
      withComponent(construction02, Construction02Component),
      withComponent(construction03, Construction03Component),
    ],
  },
  {
    slug: 'restaurant-cafe',
    name: 'Restaurant & Cafe',
    description: 'Hangat, aesthetic, food-oriented, coklat/cream/terracotta, menu highlight, ambience gallery, reservasi, dan dining CTA.',
    icon: 'mdi-silverware-fork-knife',
    templates: [
      withComponent(restaurant01, Restaurant01Component),
      withComponent(restaurant02, Restaurant02Component),
      withComponent(restaurant03, Restaurant03Component),
    ],
  },
]

export const templates = categories.flatMap((category) =>
  category.templates.map((template) => ({
    ...template,
    categorySlug: category.slug,
    categoryName: category.name,
  })),
)
