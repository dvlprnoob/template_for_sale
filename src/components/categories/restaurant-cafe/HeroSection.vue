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
  <section class="restaurant-hero">
    <div class="page-shell restaurant-hero__grid">
      <div class="restaurant-hero__copy">
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p class="restaurant-hero__tagline">{{ template.tagline }}</p>
        <p class="restaurant-hero__description">{{ template.description }}</p>
        <div class="restaurant-hero__actions">
          <v-btn color="deep-orange-darken-3" prepend-icon="mdi-table-chair" rounded="lg" size="large" @click="openContactAction('whatsapp', template.contact, template)">
            {{ template.cta?.primaryLabel || 'Reservasi Sekarang' }}
          </v-btn>
          <v-btn color="deep-orange-darken-3" prepend-icon="mdi-email-outline" rounded="lg" size="large" variant="outlined" @click="openContactAction('email', template.contact, template)">
            {{ template.cta?.secondaryLabel || 'Email Restoran' }}
          </v-btn>
        </div>
      </div>
      <div class="restaurant-hero__image">
        <img :src="template.heroImage" :alt="template.companyName" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.restaurant-hero {
  min-height: 700px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 74% 18%, rgba(230, 193, 138, 0.4), transparent 32%),
    linear-gradient(135deg, #fff7ed, #f3dcc8);
}

.restaurant-hero__grid {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 50px;
  align-items: center;
}

span {
  color: var(--template-secondary);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 18px 0;
  color: #2a1710;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.2rem, 7vw, 6.8rem);
  font-weight: 500;
  line-height: 0.96;
}

.restaurant-hero__tagline,
.restaurant-hero__description {
  color: #6b3b2a;
  line-height: 1.8;
}

.restaurant-hero__tagline {
  font-size: 1.24rem;
}

.restaurant-hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.restaurant-hero__image {
  height: min(68vh, 560px);
  overflow: hidden;
  border-radius: 999px 999px 26px 26px;
  box-shadow: 0 28px 90px rgba(123, 63, 42, 0.22);
}

.restaurant-hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 920px) {
  .restaurant-hero {
    padding: 52px 0;
  }

  .restaurant-hero__grid {
    grid-template-columns: 1fr;
  }
}
</style>
