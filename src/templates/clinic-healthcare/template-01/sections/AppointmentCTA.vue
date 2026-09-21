<script setup>
import ContactButton from './ContactButton.vue'

defineProps({
  appointment: {
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
  <section class="clinic-appointment">
    <div class="page-shell appointment-box">
      <div>
        <span>Appointment</span>
        <h2>{{ appointment.title }}</h2>
        <p>{{ appointment.description }}</p>
      </div>
      <ContactButton color="teal-darken-2" :contact="template.contact" :template="template" rounded="pill" />
    </div>
  </section>
</template>
