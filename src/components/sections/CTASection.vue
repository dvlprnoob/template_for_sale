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
  <section class="cta-band">
    <div class="page-shell cta-inner">
      <div>
        <span class="cta-label">{{ template.logo }} / {{ template.categoryName }}</span>
        <h2>{{ template.cta?.title || 'Siap pakai untuk company profile digital.' }}</h2>
        <p>{{ template.cta?.description || 'Static frontend only, cocok untuk demo cepat, landing profile, dan request kustom.' }}</p>
      </div>
      <v-btn
        color="white"
        prepend-icon="mdi-whatsapp"
        rounded="lg"
        size="large"
        @click="openContactAction('whatsapp', template.contact, template)"
      >
        {{ template.cta?.primaryLabel || 'Request Custom' }}
      </v-btn>
    </div>
  </section>
</template>

<style scoped>
.cta-band {
  background:
    radial-gradient(circle at 92% 18%, color-mix(in srgb, var(--template-accent), transparent 70%), transparent 30%),
    linear-gradient(135deg, var(--template-primary), color-mix(in srgb, var(--template-secondary), #111827 18%));
  color: #ffffff;
  padding: 62px 0;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

h2 {
  margin: 0 0 8px;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.06;
  max-width: 720px;
}

p {
  margin: 0;
  color: rgba(255, 255, 255, 0.84);
}

.cta-label {
  display: inline-block;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 760px) {
  .cta-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
