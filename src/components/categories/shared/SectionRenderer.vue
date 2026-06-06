<script setup>
import { computed } from 'vue'
import AboutSection from '../../sections/AboutSection.vue'
import CTASection from '../../sections/CTASection.vue'
import ContactSection from '../../sections/ContactSection.vue'
import GallerySection from '../../sections/GallerySection.vue'
import ProjectSection from '../../sections/ProjectSection.vue'
import ServiceSection from '../../sections/ServiceSection.vue'
import TeamSection from '../../sections/TeamSection.vue'
import TestimonialSection from '../../sections/TestimonialSection.vue'

const props = defineProps({
  template: {
    type: Object,
    required: true,
  },
})

const sectionMap = {
  about: AboutSection,
  services: ServiceSection,
  projects: ProjectSection,
  testimonials: TestimonialSection,
  team: TeamSection,
  gallery: GallerySection,
  cta: CTASection,
  contact: ContactSection,
}

const defaultSectionOrder = [
  'about',
  'services',
  'projects',
  'testimonials',
  'team',
  'gallery',
  'cta',
  'contact',
]

const orderedSections = computed(() =>
  (props.template.design?.sectionOrder || defaultSectionOrder)
    .filter((section) => sectionMap[section])
    .map((section) => ({
      key: section,
      component: sectionMap[section],
      props: getSectionProps(section),
    })),
)

function getSectionProps(section) {
  const sectionProps = {
    about: { about: props.template.about },
    services: { services: props.template.services },
    projects: { projects: props.template.projects },
    testimonials: { testimonials: props.template.testimonials },
    team: { team: props.template.team },
    gallery: { gallery: props.template.gallery },
    cta: { template: props.template },
    contact: { contact: props.template.contact, template: props.template },
  }

  return sectionProps[section]
}
</script>

<template>
  <component
    :is="section.component"
    v-for="section in orderedSections"
    :key="section.key"
    v-bind="section.props"
  />
</template>
