<script setup>
import ContactButton from './ContactButton.vue'

defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <section class="workshop-cta">
    <div class="page-shell workshop-box">
      <div>
        <span>Dealer & Promo</span>
        <h2>{{ template.cta?.title }}</h2>
        <p>{{ template.cta?.description }}</p>
      </div>
      <ContactButton color="red-darken-2" :contact="template.contact" :template="template" rounded="xl" />
    </div>
  </section>
</template>
