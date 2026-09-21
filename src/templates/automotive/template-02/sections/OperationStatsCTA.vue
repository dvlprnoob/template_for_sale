<script setup>
import ContactButton from './ContactButton.vue'

defineProps({
  stats: { type: Array, default: () => [] },
  template: { type: Object, required: true },
})
</script>

<template>
  <section class="operation-cta">
    <div class="page-shell operation-grid">
      <div class="operation-stats">
        <div v-for="stat in stats" :key="stat.label">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
      <div>
        <span>Fleet Consultation</span>
        <h2>{{ template.cta?.title }}</h2>
        <p>{{ template.cta?.description }}</p>
        <ContactButton color="white" :contact="template.contact" :template="template" rounded="0" />
      </div>
    </div>
  </section>
</template>
