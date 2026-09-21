<script setup>
import ContactButton from './ContactButton.vue'

defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <section class="infra-hero">
    <div class="page-shell infra-hero__grid">
      <div>
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <ContactButton color="amber-darken-2" :contact="template.contact" :template="template" rounded="0" />
      </div>
      <img :src="template.heroImage" :alt="template.companyName" />
    </div>
  </section>
</template>
