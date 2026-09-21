<script setup>
import ContactButton from './ContactButton.vue'

defineProps({
  consultation: {
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
  <section class="build-cta">
    <div class="page-shell build-cta__box">
      <div>
        <span>Consultation</span>
        <h2>{{ consultation.title }}</h2>
        <p>{{ consultation.description }}</p>
      </div>
      <ContactButton color="amber-darken-2" :contact="template.contact" :template="template" rounded="0" />
    </div>
  </section>
</template>
