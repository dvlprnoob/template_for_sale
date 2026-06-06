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
  <section class="construction-hero">
    <div class="page-shell construction-hero__grid">
      <div class="construction-hero__copy">
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <div class="construction-hero__actions">
          <v-btn color="amber-darken-2" prepend-icon="mdi-hard-hat" rounded="0" size="large" @click="openContactAction('whatsapp', template.contact, template)">
            {{ template.cta?.primaryLabel || 'Konsultasi Proyek' }}
          </v-btn>
          <v-btn color="white" prepend-icon="mdi-email-outline" rounded="0" size="large" variant="outlined" @click="openContactAction('email', template.contact, template)">
            {{ template.cta?.secondaryLabel || 'Email Tender' }}
          </v-btn>
        </div>
      </div>
      <div class="construction-hero__image">
        <img :src="template.heroImage" :alt="template.companyName" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.construction-hero {
  min-height: 680px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.24) 0 1px, transparent 1px 88px),
    linear-gradient(0deg, rgba(0, 0, 0, 0.18) 0 1px, transparent 1px 88px),
    linear-gradient(135deg, #202020, #d68a22);
  color: #ffffff;
}

.construction-hero__grid {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 42px;
  align-items: center;
}

span {
  color: #f5c542;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 18px 0;
  font-family: "Arial Black", Impact, sans-serif;
  font-size: clamp(3rem, 7vw, 6.8rem);
  line-height: 0.92;
  text-transform: uppercase;
}

p {
  max-width: 620px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.2rem;
  line-height: 1.75;
}

.construction-hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.construction-hero__image {
  height: min(62vh, 520px);
  overflow: hidden;
  border: 4px solid #252525;
  box-shadow: 16px 16px 0 #f5c542;
}

.construction-hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 920px) {
  .construction-hero {
    padding: 56px 0;
  }

  .construction-hero__grid {
    grid-template-columns: 1fr;
  }
}
</style>
