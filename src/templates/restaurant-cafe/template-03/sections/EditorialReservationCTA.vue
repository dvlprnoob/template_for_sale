<script setup>
import ContactButton from './ContactButton.vue'

defineProps({
  reservation: { type: Object, required: true },
  template: { type: Object, required: true },
})
</script>

<template>
  <section class="gustave-cta">
    <div class="page-shell gustave-box">
      <div>
        <span>Reservation</span>
        <h2>{{ reservation.title }}</h2>
        <p>{{ reservation.description }}</p>
      </div>
      <ContactButton color="deep-orange-darken-3" :contact="template.contact" :template="template" rounded="0" />
    </div>
  </section>
</template>
