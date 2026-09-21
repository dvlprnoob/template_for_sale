<script setup>
import ContactButton from './ContactButton.vue'

defineProps({
  reservation: {
    type: Object,
    required: true,
  },
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="food-reserve">
    <div class="page-shell reserve-box">
      <div>
        <span>Reservation</span>
        <h2>{{ reservation.title }}</h2>
        <p>{{ reservation.description }}</p>
      </div>
      <ContactButton color="orange-darken-3" :contact="template.contact" :template="template" rounded="pill" />
    </div>
  </section>
</template>
