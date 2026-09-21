<script setup>
import ContactButton from './ContactButton.vue'

defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <section class="nordic-hero">
    <img :src="template.heroImage" :alt="template.companyName" />
    <div class="nordic-copy">
      <span>{{ template.design?.label }}</span>
      <h1>{{ template.companyName }}</h1>
      <p>{{ template.tagline }}</p>
      <ContactButton color="white" :contact="template.contact" :template="template" rounded="0" variant="outlined" />
    </div>
  </section>
</template>
