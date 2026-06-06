import AutomotivePreview from '../components/categories/automotive/CategoryPreview.vue'
import AutomotivePreviewNavbar from '../components/categories/automotive/PreviewNavbar.vue'
import AutomotiveTemplateCard from '../components/categories/automotive/TemplateCard.vue'
import ClinicPreview from '../components/categories/clinic-healthcare/CategoryPreview.vue'
import ClinicPreviewNavbar from '../components/categories/clinic-healthcare/PreviewNavbar.vue'
import ClinicTemplateCard from '../components/categories/clinic-healthcare/TemplateCard.vue'
import ConstructionPreview from '../components/categories/construction/CategoryPreview.vue'
import ConstructionPreviewNavbar from '../components/categories/construction/PreviewNavbar.vue'
import ConstructionTemplateCard from '../components/categories/construction/TemplateCard.vue'
import RealEstatePreview from '../components/categories/real-estate/CategoryPreview.vue'
import RealEstatePreviewNavbar from '../components/categories/real-estate/PreviewNavbar.vue'
import RealEstateTemplateCard from '../components/categories/real-estate/TemplateCard.vue'
import RestaurantPreview from '../components/categories/restaurant-cafe/CategoryPreview.vue'
import RestaurantPreviewNavbar from '../components/categories/restaurant-cafe/PreviewNavbar.vue'
import RestaurantTemplateCard from '../components/categories/restaurant-cafe/TemplateCard.vue'

const categoryComponents = {
  'real-estate': {
    preview: RealEstatePreview,
    previewNavbar: RealEstatePreviewNavbar,
    templateCard: RealEstateTemplateCard,
  },
  automotive: {
    preview: AutomotivePreview,
    previewNavbar: AutomotivePreviewNavbar,
    templateCard: AutomotiveTemplateCard,
  },
  'clinic-healthcare': {
    preview: ClinicPreview,
    previewNavbar: ClinicPreviewNavbar,
    templateCard: ClinicTemplateCard,
  },
  construction: {
    preview: ConstructionPreview,
    previewNavbar: ConstructionPreviewNavbar,
    templateCard: ConstructionTemplateCard,
  },
  'restaurant-cafe': {
    preview: RestaurantPreview,
    previewNavbar: RestaurantPreviewNavbar,
    templateCard: RestaurantTemplateCard,
  },
}

export function getCategoryPreviewComponent(categorySlug) {
  return categoryComponents[categorySlug]?.preview || RealEstatePreview
}

export function getCategoryPreviewNavbarComponent(categorySlug) {
  return categoryComponents[categorySlug]?.previewNavbar || RealEstatePreviewNavbar
}

export function getCategoryTemplateCardComponent(categorySlug) {
  return categoryComponents[categorySlug]?.templateCard || RealEstateTemplateCard
}
