<script setup>
import ContactButton from './ContactButton.vue'

defineProps({
  reservation: { type: Object, required: true },
  template: { type: Object, required: true },
})
</script>

<template>
  <section class="reservation-panel">
    <div class="page-shell reservation-grid">
      <div>
        <span>Reservation requested</span>
        <h2>{{ reservation.title }}</h2>
        <p>{{ reservation.description }}</p>
      </div>
      <ContactButton color="white" :contact="template.contact" :template="template" rounded="0" variant="outlined" />
    </div>
  </section>
</template>
