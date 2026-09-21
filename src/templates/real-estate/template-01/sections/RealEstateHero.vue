<script setup>
import ContactButton from './ContactButton.vue'
import SectionLabel from './SectionLabel.vue'

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="re-hero">
    <div class="page-shell re-hero__grid">
      <div class="re-hero__copy">
        <SectionLabel :text="template.design?.label" />
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <div class="re-actions">
          <ContactButton color="white" :contact="template.contact" :template="template" rounded="0" />
          <ContactButton
            action="email"
            color="white"
            icon="mdi-email-outline"
            label="Request Brochure"
            :contact="template.contact"
            :template="template"
            rounded="0"
            variant="outlined"
          />
        </div>
      </div>
      <div class="re-hero__media">
        <img :src="template.heroImage" :alt="template.companyName" />
        <div class="re-hero__badge">
          <strong>{{ template.logo }}</strong>
          <span>Private estate consultation</span>
        </div>
      </div>
    </div>
  </section>
</template>
