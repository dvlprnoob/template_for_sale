<script setup>
import ContactButton from './ContactButton.vue'

defineProps({
  phases: { type: Array, default: () => [] },
  template: { type: Object, required: true },
})
</script>

<template>
  <section class="design-phase">
    <div class="page-shell phase-grid">
      <article v-for="phase in phases" :key="phase.step">
        <strong>{{ phase.step }}</strong>
        <h3>{{ phase.title }}</h3>
        <p>{{ phase.description }}</p>
      </article>
      <div>
        <h2>{{ template.cta?.title }}</h2>
        <ContactButton color="brown-darken-2" :contact="template.contact" :template="template" rounded="0" />
      </div>
    </div>
  </section>
</template>
