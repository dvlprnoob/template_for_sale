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
  <section class="clinic-hero">
    <div class="page-shell clinic-hero__grid">
      <div class="clinic-hero__image">
        <img :src="template.heroImage" :alt="template.companyName" />
      </div>
      <div class="clinic-hero__copy">
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p class="clinic-hero__tagline">{{ template.tagline }}</p>
        <p class="clinic-hero__description">{{ template.description }}</p>
        <div class="clinic-hero__actions">
          <v-btn color="primary" prepend-icon="mdi-calendar-check-outline" rounded="xl" size="large" @click="openContactAction('whatsapp', template.contact, template)">
            {{ template.cta?.primaryLabel || 'Buat Appointment' }}
          </v-btn>
          <v-btn color="primary" prepend-icon="mdi-email-outline" rounded="xl" size="large" variant="outlined" @click="openContactAction('email', template.contact, template)">
            {{ template.cta?.secondaryLabel || 'Email Klinik' }}
          </v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clinic-hero {
  min-height: 680px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 78% 20%, rgba(189, 235, 220, 0.78), transparent 30%),
    linear-gradient(135deg, #ffffff, #effbf8);
}

.clinic-hero__grid {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 48px;
  align-items: center;
}

.clinic-hero__copy span {
  color: var(--template-primary);
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h1 {
  margin: 18px 0;
  color: var(--template-ink);
  font-family: "Avenir Next", "Segoe UI", sans-serif;
  font-size: clamp(3rem, 6vw, 6rem);
  line-height: 1;
}

.clinic-hero__tagline,
.clinic-hero__description {
  color: #42656a;
  line-height: 1.8;
}

.clinic-hero__tagline {
  font-size: 1.24rem;
}

.clinic-hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.clinic-hero__image {
  height: min(62vh, 520px);
  overflow: hidden;
  border-radius: 42px;
  box-shadow: 0 26px 80px rgba(74, 144, 164, 0.18);
}

.clinic-hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 920px) {
  .clinic-hero {
    padding: 52px 0;
  }

  .clinic-hero__grid {
    grid-template-columns: 1fr;
  }
}
</style>
