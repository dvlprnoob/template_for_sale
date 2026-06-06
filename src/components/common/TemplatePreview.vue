<script setup>
import { computed } from 'vue'
import { getCategoryPreviewComponent } from '../../controllers/componentController'
import { applyTemplateTheme } from '../../controllers/themeController'

const props = defineProps({
  template: {
    type: Object,
    required: true,
  },
})

const themeStyle = computed(() => applyTemplateTheme(props.template))
const designPreset = computed(() => props.template.design?.preset || 'classic-profile')
const previewComponent = computed(
  () => props.template.component || getCategoryPreviewComponent(props.template.categorySlug),
)
const previewClass = computed(() => [
  'preview-root',
  `preset-${designPreset.value}`,
  `category-${props.template.categorySlug}`,
])
</script>

<template>
  <article :class="previewClass" :style="themeStyle">
    <component :is="previewComponent" :template="template" />
  </article>
</template>

<style scoped>
.preview-root {
  --template-primary: #175cd3;
  --template-secondary: #0f766e;
  --template-accent: #f59e0b;
  --template-surface: #ffffff;
  --template-ink: #172033;
  --template-font: Inter, ui-sans-serif, system-ui, sans-serif;
  --template-heading-font: var(--template-font);
  background: var(--template-surface);
  color: var(--template-ink);
  font-family: var(--template-font);
}

.preview-root :deep(h1),
.preview-root :deep(h2),
.preview-root :deep(h3),
.preview-root :deep(strong) {
  font-family: var(--template-heading-font);
}

.preview-root :deep(.v-card),
.preview-root :deep(.service-card),
.preview-root :deep(.project-card),
.preview-root :deep(.testimonial-card),
.preview-root :deep(.team-card),
.preview-root :deep(.contact-card),
.preview-root :deep(.metric),
.preview-root :deep(.gallery-item),
.preview-root :deep(.hero-media),
.preview-root :deep(.media-caption) {
  transition:
    border-radius 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;
}

.preset-estate-luxe,
.preset-estate-resort,
.preset-construction-studio,
.preset-restaurant-warm,
.preset-restaurant-menu {
  --template-heading-font: Georgia, "Times New Roman", serif;
}

.preset-estate-editorial,
.preset-clinic-appointment {
  --template-heading-font: "Trebuchet MS", Arial, sans-serif;
}

.preset-auto-performance,
.preset-auto-garage,
.preset-construction-bold,
.preset-construction-infra {
  --template-heading-font: Impact, "Arial Black", sans-serif;
}

.preset-auto-fleet,
.preset-clinic-lab {
  --template-heading-font: "Helvetica Neue", Arial, sans-serif;
}

.preset-clinic-calm {
  --template-heading-font: "Avenir Next", "Segoe UI", sans-serif;
}

.preset-cafe-craft {
  --template-heading-font: "Courier New", Courier, monospace;
}

.category-real-estate :deep(.service-card),
.category-real-estate :deep(.project-card),
.category-real-estate :deep(.testimonial-card),
.category-real-estate :deep(.team-card),
.category-real-estate :deep(.contact-card),
.category-real-estate :deep(.metric) {
  border-radius: 2px;
  border-color: rgba(196, 154, 74, 0.36);
  box-shadow: none;
}

.category-automotive :deep(.service-card),
.category-automotive :deep(.project-card),
.category-automotive :deep(.testimonial-card),
.category-automotive :deep(.team-card),
.category-automotive :deep(.contact-card),
.category-automotive :deep(.metric) {
  border-radius: 0;
  border-color: rgba(211, 163, 95, 0.42);
  clip-path: polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%);
}

.category-clinic-healthcare :deep(.service-card),
.category-clinic-healthcare :deep(.project-card),
.category-clinic-healthcare :deep(.testimonial-card),
.category-clinic-healthcare :deep(.team-card),
.category-clinic-healthcare :deep(.contact-card),
.category-clinic-healthcare :deep(.metric) {
  border-radius: 30px;
  border-color: rgba(141, 216, 200, 0.44);
  box-shadow: 0 20px 50px rgba(20, 113, 106, 0.08);
}

.category-construction :deep(.service-card),
.category-construction :deep(.project-card),
.category-construction :deep(.testimonial-card),
.category-construction :deep(.team-card),
.category-construction :deep(.contact-card),
.category-construction :deep(.metric) {
  border-radius: 0;
  border: 2px solid #252525;
  box-shadow: 10px 10px 0 var(--template-accent);
}

.category-restaurant-cafe :deep(.service-card),
.category-restaurant-cafe :deep(.project-card),
.category-restaurant-cafe :deep(.testimonial-card),
.category-restaurant-cafe :deep(.team-card),
.category-restaurant-cafe :deep(.contact-card),
.category-restaurant-cafe :deep(.metric) {
  border-radius: 32px 6px 32px 6px;
  background: #fff8ed;
}

.preset-estate-resort :deep(.gallery-item),
.preset-estate-resort :deep(.service-card),
.preset-estate-resort :deep(.project-card) {
  border-radius: 42px 42px 8px 8px;
}

.preset-auto-garage :deep(.service-card),
.preset-auto-garage :deep(.project-card) {
  background: #f2f2ef;
  border: 2px solid #1b1f27;
  box-shadow: 8px 8px 0 #a51f2d;
}

.preset-clinic-lab :deep(.service-card),
.preset-clinic-lab :deep(.project-card),
.preset-clinic-lab :deep(.testimonial-card),
.preset-clinic-lab :deep(.team-card),
.preset-clinic-lab :deep(.contact-card),
.preset-clinic-lab :deep(.metric) {
  border-radius: 14px;
  border-style: dashed;
  box-shadow: none;
}

.preset-construction-studio :deep(.service-card),
.preset-construction-studio :deep(.project-card),
.preset-construction-studio :deep(.testimonial-card),
.preset-construction-studio :deep(.team-card),
.preset-construction-studio :deep(.contact-card),
.preset-construction-studio :deep(.metric) {
  background: transparent;
  box-shadow: none;
}

.preset-cafe-craft :deep(.service-card),
.preset-cafe-craft :deep(.project-card),
.preset-cafe-craft :deep(.testimonial-card),
.preset-cafe-craft :deep(.team-card),
.preset-cafe-craft :deep(.contact-card),
.preset-cafe-craft :deep(.metric) {
  border-radius: 6px;
  border: 1px solid #6b3b2a;
  box-shadow: 6px 6px 0 rgba(107, 59, 42, 0.18);
}

.preset-restaurant-menu :deep(.service-card),
.preset-restaurant-menu :deep(.project-card),
.preset-restaurant-menu :deep(.testimonial-card),
.preset-restaurant-menu :deep(.team-card),
.preset-restaurant-menu :deep(.contact-card),
.preset-restaurant-menu :deep(.metric) {
  border-radius: 999px 999px 20px 20px;
}
</style>
