<script setup>
import ContactButton from './ContactButton.vue'

defineOptions({
  name: 'ContactSection',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="local-contact-section">
    <div class="page-shell local-contact-section__grid">
      <div>
        <span>Contact</span>
        <h2>{{ template.cta?.title }}</h2>
        <p>{{ template.cta?.description }}</p>
        <div class="local-contact-section__actions">
          <ContactButton :contact="template.contact" :template="template" rounded="lg" />
          <ContactButton
            action="email"
            color="secondary"
            icon="mdi-email-outline"
            :label="template.cta?.secondaryLabel"
            :contact="template.contact"
            :template="template"
            rounded="lg"
            variant="outlined"
          />
        </div>
      </div>
      <v-card class="local-contact-card" variant="outlined">
        <v-icon icon="mdi-map-marker-outline" size="30" />
        <strong>{{ template.contact.address }}</strong>
        <p>{{ template.contact.whatsapp }}</p>
        <p>{{ template.contact.email }}</p>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
.local-contact-section {
  padding: 78px 0;
  background: color-mix(in srgb, var(--template-primary, #172033), #111 18%);
  color: #ffffff;
}

.local-contact-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.72fr);
  gap: 32px;
  align-items: center;
}

.local-contact-section span {
  color: var(--template-accent, #f59e0b);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.local-contact-section h2 {
  margin: 12px 0;
  font-size: clamp(2rem, 4vw, 3.8rem);
  line-height: 1.04;
}

.local-contact-section p {
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.75;
}

.local-contact-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.local-contact-card {
  display: grid;
  gap: 10px;
  padding: 26px;
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

@media (max-width: 820px) {
  .local-contact-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
