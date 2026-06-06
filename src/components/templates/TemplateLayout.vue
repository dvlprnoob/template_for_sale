<script setup>
import SectionRenderer from '../categories/shared/SectionRenderer.vue'
import { openContactAction } from '../../controllers/contactController'

defineProps({
  template: {
    type: Object,
    required: true,
  },
  skin: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div :class="['template-skin', `skin-${skin}`]">
    <section class="skin-hero">
      <div class="page-shell skin-hero__grid">
        <div class="skin-hero__copy">
          <span class="skin-kicker">{{ template.design?.label }}</span>
          <h1>{{ template.companyName }}</h1>
          <p class="skin-tagline">{{ template.tagline }}</p>
          <p class="skin-description">{{ template.description }}</p>
          <div class="skin-actions">
            <v-btn
              class="skin-primary"
              prepend-icon="mdi-arrow-right"
              size="large"
              @click="openContactAction('whatsapp', template.contact, template)"
            >
              {{ template.cta?.primaryLabel }}
            </v-btn>
            <v-btn
              class="skin-secondary"
              prepend-icon="mdi-email-outline"
              size="large"
              variant="outlined"
              @click="openContactAction('email', template.contact, template)"
            >
              {{ template.cta?.secondaryLabel }}
            </v-btn>
          </div>
        </div>
        <div class="skin-hero__media">
          <img :src="template.heroImage" :alt="template.companyName" />
          <strong>{{ template.logo }}</strong>
        </div>
      </div>
    </section>

    <SectionRenderer :template="template" />
  </div>
</template>

<style scoped>
.template-skin {
  --skin-font: var(--template-font);
  --skin-heading: var(--template-font);
  --skin-radius: 8px;
  --skin-card-bg: #ffffff;
  --skin-card-border: rgba(16, 24, 40, 0.12);
  --skin-shadow: 0 22px 70px rgba(16, 24, 40, 0.12);
  background: var(--template-surface);
  color: var(--template-ink);
  font-family: var(--skin-font);
}

.template-skin :deep(h1),
.template-skin :deep(h2),
.template-skin :deep(h3),
.template-skin :deep(strong) {
  font-family: var(--skin-heading);
}

.skin-hero {
  min-height: 680px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--template-primary), var(--template-secondary));
  color: #ffffff;
}

.skin-hero__grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 48px;
  align-items: center;
}

.skin-kicker {
  display: inline-block;
  color: var(--template-accent);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 18px 0;
  font-size: clamp(3rem, 7vw, 6.6rem);
  line-height: 0.96;
}

.skin-tagline {
  font-size: 1.25rem;
}

.skin-description,
.skin-tagline {
  max-width: 650px;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.8;
}

.skin-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.skin-primary {
  background: var(--template-accent);
  color: #111827;
}

.skin-secondary {
  color: currentColor;
}

.skin-hero__media {
  position: relative;
  height: min(64vh, 540px);
  overflow: hidden;
  border-radius: var(--skin-radius);
  box-shadow: var(--skin-shadow);
}

.skin-hero__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.skin-hero__media strong {
  position: absolute;
  left: 18px;
  bottom: 18px;
  display: inline-grid;
  place-items: center;
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--template-primary);
  font-size: 1.7rem;
}

.template-skin :deep(.service-card),
.template-skin :deep(.project-card),
.template-skin :deep(.testimonial-card),
.template-skin :deep(.team-card),
.template-skin :deep(.contact-card),
.template-skin :deep(.metric) {
  border-radius: var(--skin-radius);
  border: 1px solid var(--skin-card-border);
  background: var(--skin-card-bg);
  box-shadow: var(--skin-shadow);
}

.skin-estate-gallery {
  --skin-heading: Georgia, "Times New Roman", serif;
  --skin-radius: 0;
  --skin-shadow: none;
  background: #fffaf0;
}

.skin-estate-gallery .skin-hero {
  background: linear-gradient(90deg, #fffaf0 0 44%, #1f3a5f 44% 100%);
  color: #1f2933;
}

.skin-estate-gallery .skin-description,
.skin-estate-gallery .skin-tagline {
  color: #5b6470;
}

.skin-estate-gallery :deep(.project-card--2) {
  margin-top: 36px;
}

.skin-estate-editorial {
  --skin-heading: "Trebuchet MS", Arial, sans-serif;
  --skin-radius: 0;
  --skin-shadow: none;
  background: #172033;
}

.skin-estate-editorial .skin-hero__grid {
  grid-template-columns: 1fr;
  text-align: center;
}

.skin-estate-editorial .skin-hero__copy,
.skin-estate-editorial .skin-description {
  margin-inline: auto;
}

.skin-estate-editorial :deep(.section-title) {
  margin-inline: auto;
  text-align: center;
}

.skin-estate-resort {
  --skin-heading: Georgia, "Times New Roman", serif;
  --skin-radius: 160px 160px 12px 12px;
  --skin-shadow: 0 28px 80px rgba(141, 123, 88, 0.22);
  background: #fffaf0;
}

.skin-estate-resort .skin-hero {
  background: #fffaf0;
  color: #1f2933;
}

.skin-estate-resort .skin-description,
.skin-estate-resort .skin-tagline {
  color: #5b6470;
}

.skin-auto-showroom,
.skin-auto-garage {
  --skin-heading: Impact, "Arial Black", sans-serif;
  --skin-radius: 0;
  --skin-shadow: 10px 10px 0 #a51f2d;
  --skin-card-bg: #161b24;
  --skin-card-border: rgba(255, 255, 255, 0.18);
  background: #111827;
}

.skin-auto-showroom .skin-hero,
.skin-auto-garage .skin-hero {
  background:
    repeating-linear-gradient(-12deg, rgba(255, 255, 255, 0.08) 0 2px, transparent 2px 22px),
    linear-gradient(125deg, #111318, #a51f2d);
}

.skin-auto-showroom .skin-hero__media,
.skin-auto-garage .skin-hero__media {
  transform: skewX(-4deg);
}

.skin-auto-showroom .skin-hero__media > *,
.skin-auto-garage .skin-hero__media > * {
  transform: skewX(4deg);
}

.skin-auto-fleet {
  --skin-heading: "Arial Narrow", Arial, sans-serif;
  --skin-radius: 4px;
  --skin-shadow: 0 16px 50px rgba(22, 78, 99, 0.14);
  background: #f7f7f5;
}

.skin-clinic-calm,
.skin-clinic-lab,
.skin-clinic-appointment {
  --skin-heading: "Avenir Next", "Segoe UI", sans-serif;
  --skin-radius: 32px;
  --skin-shadow: 0 20px 55px rgba(74, 144, 164, 0.12);
  background: #fbfffe;
}

.skin-clinic-calm .skin-hero,
.skin-clinic-lab .skin-hero,
.skin-clinic-appointment .skin-hero {
  background:
    radial-gradient(circle at 80% 18%, rgba(189, 235, 220, 0.72), transparent 32%),
    linear-gradient(135deg, #ffffff, #effbf8);
  color: #173033;
}

.skin-clinic-calm .skin-description,
.skin-clinic-calm .skin-tagline,
.skin-clinic-lab .skin-description,
.skin-clinic-lab .skin-tagline,
.skin-clinic-appointment .skin-description,
.skin-clinic-appointment .skin-tagline {
  color: #42656a;
}

.skin-clinic-lab {
  --skin-radius: 14px;
  --skin-shadow: none;
}

.skin-clinic-lab :deep(.service-card),
.skin-clinic-lab :deep(.project-card) {
  border-style: dashed;
}

.skin-construction-contractor,
.skin-construction-infra {
  --skin-heading: "Arial Black", Impact, sans-serif;
  --skin-radius: 0;
  --skin-shadow: 10px 10px 0 #f5c542;
  --skin-card-border: #252525;
  background: #f7f5ef;
}

.skin-construction-contractor .skin-hero,
.skin-construction-infra .skin-hero {
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.22) 0 1px, transparent 1px 88px),
    linear-gradient(135deg, #202020, #d68a22);
}

.skin-construction-studio {
  --skin-heading: Georgia, "Times New Roman", serif;
  --skin-radius: 0;
  --skin-shadow: none;
  --skin-card-bg: transparent;
  background: #faf8f3;
}

.skin-restaurant-dining,
.skin-restaurant-menu {
  --skin-heading: Georgia, "Times New Roman", serif;
  --skin-radius: 999px 999px 24px 24px;
  --skin-shadow: 0 22px 60px rgba(123, 63, 42, 0.14);
  --skin-card-bg: #fff8ed;
  background: #fff7ed;
}

.skin-restaurant-dining .skin-hero,
.skin-restaurant-menu .skin-hero {
  background:
    radial-gradient(circle at 72% 22%, rgba(230, 193, 138, 0.4), transparent 32%),
    linear-gradient(135deg, #fff7ed, #f3dcc8);
  color: #2a1710;
}

.skin-restaurant-dining .skin-description,
.skin-restaurant-dining .skin-tagline,
.skin-restaurant-menu .skin-description,
.skin-restaurant-menu .skin-tagline {
  color: #6b3b2a;
}

.skin-cafe-craft {
  --skin-heading: "Courier New", Courier, monospace;
  --skin-radius: 6px;
  --skin-shadow: 6px 6px 0 rgba(107, 59, 42, 0.18);
  --skin-card-border: #6b3b2a;
  background: #fffaf2;
}

@media (max-width: 920px) {
  .skin-hero {
    padding: 54px 0;
  }

  .skin-hero__grid {
    grid-template-columns: 1fr;
  }
}
</style>
