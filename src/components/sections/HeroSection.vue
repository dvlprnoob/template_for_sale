<script setup>
import { openContactAction } from '../../controllers/contactController'

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="template-hero">
    <div class="page-shell hero-grid">
      <div class="hero-copy">
        <div class="hero-kicker">
          <span class="logo-mark">{{ template.logo }}</span>
          <span>{{ template.categoryName }}</span>
        </div>
        <h1>{{ template.companyName }}</h1>
        <p class="tagline">{{ template.tagline }}</p>
        <p class="description">{{ template.description }}</p>
        <div class="hero-actions">
          <v-btn
            color="white"
            prepend-icon="mdi-whatsapp"
            rounded="lg"
            size="large"
            @click="openContactAction('whatsapp', template.contact, template)"
          >
            {{ template.cta?.primaryLabel || 'WhatsApp' }}
          </v-btn>
          <v-btn
            color="white"
            prepend-icon="mdi-email-outline"
            rounded="lg"
            size="large"
            variant="outlined"
            @click="openContactAction('email', template.contact, template)"
          >
            {{ template.cta?.secondaryLabel || 'Email' }}
          </v-btn>
        </div>
      </div>
      <div class="hero-media">
        <img :src="template.heroImage" :alt="template.companyName" />
        <div class="media-caption">
          <span>{{ template.design?.label || 'Premium static profile' }}</span>
          <strong>{{ template.companyName }}</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.template-hero {
  background:
    radial-gradient(circle at 18% 20%, color-mix(in srgb, var(--template-accent), transparent 72%), transparent 34%),
    linear-gradient(135deg, color-mix(in srgb, var(--template-primary), #111827 34%), color-mix(in srgb, var(--template-secondary), #111827 18%));
  color: #ffffff;
  min-height: 680px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(360px, 1.05fr);
  align-items: center;
  gap: 52px;
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 14px 8px 8px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.86rem;
  font-weight: 700;
  margin-bottom: 24px;
}

.logo-mark {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: #ffffff;
  color: var(--template-primary);
  font-weight: 900;
  letter-spacing: 0;
}

.hero-copy h1 {
  font-size: clamp(3rem, 6vw, 6.1rem);
  line-height: 0.98;
  margin: 0 0 20px;
  letter-spacing: 0;
  max-width: 780px;
}

.tagline {
  font-size: clamp(1.2rem, 2vw, 1.7rem);
  margin: 0 0 14px;
  color: color-mix(in srgb, #ffffff, var(--template-accent) 18%);
}

.description {
  max-width: 640px;
  margin: 0;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.hero-media {
  position: relative;
  height: min(62vh, 520px);
  min-height: 380px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 32px 90px rgba(10, 20, 40, 0.34);
  background: rgba(255, 255, 255, 0.1);
}

.hero-media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.media-caption {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--template-ink);
  backdrop-filter: blur(16px);
}

.media-caption span {
  color: #667085;
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .template-hero {
    min-height: auto;
    padding: 56px 0 28px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .media-caption {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
