<script setup>
import { openContactAction } from '../../../controllers/contactController'

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="estate-hero">
    <div class="page-shell estate-hero__grid">
      <div class="estate-hero__copy">
        <span class="estate-hero__eyebrow">{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p class="estate-hero__tagline">{{ template.tagline }}</p>
        <p class="estate-hero__description">{{ template.description }}</p>
        <div class="estate-hero__actions">
          <v-btn color="primary" prepend-icon="mdi-phone-outline" rounded="0" size="large" @click="openContactAction('whatsapp', template.contact, template)">
            {{ template.cta?.primaryLabel || 'Hubungi Sales' }}
          </v-btn>
          <v-btn color="primary" prepend-icon="mdi-email-outline" rounded="0" size="large" variant="outlined" @click="openContactAction('email', template.contact, template)">
            {{ template.cta?.secondaryLabel || 'Email Sales' }}
          </v-btn>
        </div>
      </div>
      <div class="estate-hero__image">
        <img :src="template.heroImage" :alt="template.companyName" />
        <div class="estate-hero__badge">
          <strong>{{ template.logo }}</strong>
          <span>Premium Property</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.estate-hero {
  min-height: 700px;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #fffaf0 0%, #fffaf0 42%, #1f3a5f 42%, #1f3a5f 100%);
}

.estate-hero__grid {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 56px;
  align-items: center;
}

.estate-hero__eyebrow {
  color: var(--template-accent);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  max-width: 620px;
  margin: 18px 0;
  color: var(--template-primary);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.2rem, 7vw, 6.8rem);
  font-weight: 500;
  line-height: 0.95;
}

.estate-hero__tagline,
.estate-hero__description {
  color: #5b6470;
  line-height: 1.8;
}

.estate-hero__tagline {
  font-size: 1.24rem;
}

.estate-hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.estate-hero__image {
  position: relative;
  height: min(70vh, 560px);
  overflow: hidden;
  border: 12px solid #fffaf0;
  box-shadow: 0 28px 90px rgba(18, 31, 51, 0.28);
}

.estate-hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.estate-hero__badge {
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: grid;
  gap: 2px;
  min-width: 180px;
  padding: 18px;
  background: rgba(255, 250, 240, 0.94);
}

.estate-hero__badge strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2rem;
}

.estate-hero__badge span {
  color: #6d7480;
}

@media (max-width: 920px) {
  .estate-hero {
    padding: 52px 0;
    background: #fffaf0;
  }

  .estate-hero__grid {
    grid-template-columns: 1fr;
  }
}
</style>
