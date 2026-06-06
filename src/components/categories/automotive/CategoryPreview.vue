<script setup>
import HeroSection from './HeroSection.vue'
import SectionRenderer from '../shared/SectionRenderer.vue'

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="auto-preview">
    <HeroSection :template="template" />
    <SectionRenderer :template="template" />
  </div>
</template>

<style scoped>
.auto-preview {
  background: #111827;
}
</style>
