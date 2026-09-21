<script setup>
import ContactButton from './ContactButton.vue'

defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <header class="magazine-hero">
    <div class="page-shell magazine-grid">
      <div class="magazine-copy">
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <ContactButton color="deep-orange-darken-3" :contact="template.contact" :template="template" rounded="0" />
      </div>
      <div class="magazine-cover">
        <img :src="template.heroImage" :alt="template.companyName" />
        <div class="cover-label">Alimentation / Cafe / Culture</div>
      </div>
    </div>
  </header>
</template>
