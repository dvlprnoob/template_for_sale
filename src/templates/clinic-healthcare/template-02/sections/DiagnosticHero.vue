<script setup>
import ContactButton from './ContactButton.vue'

defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <section class="lab-hero">
    <div class="page-shell lab-hero__grid">
      <div>
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <ContactButton color="blue-darken-2" :contact="template.contact" :template="template" rounded="lg" />
      </div>
      <v-card class="lab-card">
        <img :src="template.heroImage" :alt="template.companyName" />
      </v-card>
    </div>
  </section>
</template>
