<script setup>
import ContactButton from './ContactButton.vue'

defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <section class="garage-hero">
    <div class="page-shell garage-hero__grid">
      <div>
        <v-chip color="red-darken-2" variant="flat">{{ template.design?.label }}</v-chip>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <ContactButton color="red-darken-2" :contact="template.contact" :template="template" rounded="xl" />
      </div>
      <div class="garage-car">
        <img :src="template.heroImage" :alt="template.companyName" />
      </div>
    </div>
  </section>
</template>
