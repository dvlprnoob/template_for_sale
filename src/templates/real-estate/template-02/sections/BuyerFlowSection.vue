<script setup>
import ContactButton from './ContactButton.vue'

defineProps({
  flow: { type: Array, default: () => [] },
  template: { type: Object, required: true },
})
</script>

<template>
  <section class="urban-flow">
    <div class="page-shell flow-grid">
      <article v-for="item in flow" :key="item.step">
        <span>{{ item.step }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
      <div class="urban-flow__cta">
        <h2>{{ template.cta?.title }}</h2>
        <ContactButton color="secondary" :contact="template.contact" :template="template" rounded="0" />
      </div>
    </div>
  </section>
</template>
