<script setup>
import ContactButton from './ContactButton.vue'

defineProps({
  viewing: { type: Object, required: true },
  template: { type: Object, required: true },
})
</script>

<template>
  <section class="resort-cta">
    <div class="page-shell resort-cta__inner">
      <div>
        <span>Private Viewing</span>
        <h2>{{ viewing.title }}</h2>
        <p>{{ viewing.description }}</p>
      </div>
      <ContactButton color="white" :contact="template.contact" :template="template" rounded="0" />
    </div>
  </section>
</template>
