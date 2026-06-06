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
  <section class="auto-hero">
    <div class="auto-hero__stripe" />
    <div class="page-shell auto-hero__grid">
      <div class="auto-hero__copy">
        <v-chip color="red-darken-3" variant="flat">{{ template.design?.label }}</v-chip>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <div class="auto-hero__actions">
          <v-btn color="red-darken-3" prepend-icon="mdi-steering" rounded="0" size="large" @click="openContactAction('whatsapp', template.contact, template)">
            {{ template.cta?.primaryLabel || 'Booking Test Drive' }}
          </v-btn>
          <v-btn color="white" prepend-icon="mdi-email-outline" rounded="0" size="large" variant="outlined" @click="openContactAction('email', template.contact, template)">
            {{ template.cta?.secondaryLabel || 'Email' }}
          </v-btn>
        </div>
      </div>
      <div class="auto-hero__image">
        <img :src="template.heroImage" :alt="template.companyName" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.auto-hero {
  position: relative;
  min-height: 680px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background:
    repeating-linear-gradient(-12deg, rgba(255, 255, 255, 0.06) 0 2px, transparent 2px 24px),
    linear-gradient(125deg, #0f1117 0%, #1b1f27 56%, #8b1824 100%);
  color: #ffffff;
}

.auto-hero__stripe {
  position: absolute;
  inset: 0 0 auto;
  height: 14px;
  background: linear-gradient(90deg, #a51f2d, #c0c4cc, #a51f2d);
}

.auto-hero__grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 42px;
  align-items: center;
}

h1 {
  margin: 18px 0;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: clamp(3.4rem, 8vw, 7.4rem);
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
}

p {
  max-width: 620px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.2rem;
  line-height: 1.75;
}

.auto-hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.auto-hero__image {
  height: min(62vh, 520px);
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.22);
  transform: skewX(-4deg);
  box-shadow: 18px 18px 0 rgba(165, 31, 45, 0.88);
}

.auto-hero__image img {
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: skewX(4deg) translateX(-5%);
}

@media (max-width: 920px) {
  .auto-hero {
    padding: 56px 0;
  }

  .auto-hero__grid {
    grid-template-columns: 1fr;
  }
}
</style>
