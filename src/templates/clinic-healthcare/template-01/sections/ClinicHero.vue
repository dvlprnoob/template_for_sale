<script setup>
import ContactButton from './ContactButton.vue'

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
      <div>
        <v-chip color="teal-lighten-4" text-color="teal-darken-4">{{ template.design?.label }}</v-chip>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <ContactButton color="teal-darken-2" :contact="template.contact" :template="template" rounded="pill" />
      </div>
      <v-card class="clinic-hero__card">
        <img :src="template.heroImage" :alt="template.companyName" />
        <div>
          <strong>{{ template.about.metrics[2]?.value }}</strong>
          <span>{{ template.about.metrics[2]?.label }}</span>
        </div>
      </v-card>
    </div>
  </section>
</template>
