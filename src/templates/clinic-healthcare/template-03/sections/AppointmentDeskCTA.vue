<script setup>
import ContactButton from './ContactButton.vue'

defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <section class="dental-cta">
    <div class="page-shell dental-cta__box">
      <div>
        <span>Appointment Desk</span>
        <h2>{{ template.cta?.title }}</h2>
        <p>{{ template.cta?.description }}</p>
      </div>
      <ContactButton color="teal-darken-2" :contact="template.contact" :template="template" rounded="pill" />
    </div>
  </section>
</template>
