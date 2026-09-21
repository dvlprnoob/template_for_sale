<script setup>
import ContactButton from './ContactButton.vue'

defineProps({
  flow: { type: Array, default: () => [] },
  template: { type: Object, required: true },
})
</script>

<template>
  <section class="lab-flow">
    <div class="page-shell lab-flow__grid">
      <article v-for="item in flow" :key="item.step">
        <strong>{{ item.step }}</strong>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
      <div>
        <h2>{{ template.cta?.title }}</h2>
        <ContactButton color="blue-darken-2" :contact="template.contact" :template="template" rounded="lg" />
      </div>
    </div>
  </section>
</template>
