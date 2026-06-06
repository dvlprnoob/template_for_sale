<script setup>
import { openContactAction } from '../../controllers/contactController'

defineProps({
  contact: {
    type: Object,
    required: true,
  },
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="section-band">
    <div class="page-shell contact-grid">
      <div class="section-title">
        <span class="eyebrow">Start The Conversation</span>
        <h2>Kontak</h2>
        <p>{{ contact.address }}</p>
      </div>
      <v-card class="contact-card" rounded="lg" variant="flat">
        <v-list lines="two">
          <v-list-item prepend-icon="mdi-whatsapp" :title="contact.whatsapp" subtitle="WhatsApp" />
          <v-list-item prepend-icon="mdi-email-outline" :title="contact.email" subtitle="Email" />
          <v-list-item prepend-icon="mdi-map-marker-outline" :title="contact.address" subtitle="Alamat" />
        </v-list>
        <v-card-actions class="px-4 pb-4">
          <v-btn
            color="primary"
            prepend-icon="mdi-whatsapp"
            rounded="lg"
            @click="openContactAction('whatsapp', contact, template)"
          >
            {{ template.cta?.primaryLabel || 'WhatsApp' }}
          </v-btn>
          <v-btn
            color="primary"
            prepend-icon="mdi-email-outline"
            rounded="lg"
            variant="outlined"
            @click="openContactAction('email', contact, template)"
          >
            {{ template.cta?.secondaryLabel || 'Email' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 430px;
  gap: 48px;
  align-items: start;
}

.contact-card {
  border: 1px solid color-mix(in srgb, var(--template-primary), #ffffff 82%);
  box-shadow: var(--market-shadow);
  overflow: hidden;
}

.eyebrow {
  display: inline-block;
  color: var(--template-primary);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
  text-transform: uppercase;
}

@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
