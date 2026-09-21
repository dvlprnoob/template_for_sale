<script setup>
import ContactButton from './ContactButton.vue'

defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <section class="dental-hero">
    <div class="page-shell dental-hero__grid">
      <div>
        <v-chip color="teal-lighten-4">{{ template.design?.label }}</v-chip>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <ContactButton color="teal-darken-2" :contact="template.contact" :template="template" rounded="pill" />
      </div>
      <img :src="template.heroImage" :alt="template.companyName" />
    </div>
  </section>
</template>
