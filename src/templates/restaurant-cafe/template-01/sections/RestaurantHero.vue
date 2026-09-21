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
  <section class="food-hero">
    <div class="food-marquee">BURGERS FOR PEOPLE - SEASON MENU - RESERVE NOW -</div>
    <div class="page-shell food-hero__grid">
      <div>
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <div class="food-actions">
          <ContactButton color="orange-darken-3" :contact="template.contact" :template="template" rounded="pill" />
          <ContactButton action="email" color="brown-darken-4" icon="mdi-gift-outline" label="Order Gift Card" :contact="template.contact" :template="template" rounded="pill" variant="outlined" />
        </div>
      </div>
      <div class="food-plate">
        <img :src="template.heroImage" :alt="template.companyName" />
        <div class="food-badge">BOTM</div>
      </div>
    </div>
  </section>
</template>
