<script setup>
import ContactButton from './ContactButton.vue'

defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <section class="craft-drive-hero">
    <img :src="template.heroImage" :alt="template.companyName" />
    <div class="craft-drive-hero__chrome page-shell">
      <strong>{{ template.logo }}</strong>
      <span>{{ template.contact.address }}</span>
    </div>

    <div class="craft-drive-copy page-shell">
      <div class="craft-drive-copy__content">
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <div class="craft-drive-copy__actions">
          <ContactButton color="white" :contact="template.contact" :template="template" rounded="0" />
          <ContactButton
            action="email"
            color="white"
            icon="mdi-email-outline"
            :label="template.cta?.secondaryLabel"
            :contact="template.contact"
            :template="template"
            rounded="0"
            variant="outlined"
          />
        </div>
      </div>

      <div class="craft-drive-panel">
        <span>Operational proof</span>
        <div v-for="metric in template.about.metrics.slice(0, 3)" :key="metric.label">
          <strong>{{ metric.value }}</strong>
          <small>{{ metric.label }}</small>
        </div>
      </div>
    </div>
  </section>
</template>
