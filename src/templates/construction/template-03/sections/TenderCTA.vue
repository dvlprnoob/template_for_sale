<script setup>
import ContactButton from './ContactButton.vue'

defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <section class="tender-cta">
    <div class="page-shell tender-box">
      <div>
        <span>Tender Ready</span>
        <h2>{{ template.cta?.title }}</h2>
        <p>{{ template.cta?.description }}</p>
      </div>
      <ContactButton color="amber-darken-2" :contact="template.contact" :template="template" rounded="0" />
    </div>
  </section>
</template>
