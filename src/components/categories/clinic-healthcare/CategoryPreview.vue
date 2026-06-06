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
  <div class="clinic-preview">
    <HeroSection :template="template" />
    <SectionRenderer :template="template" />
  </div>
</template>

<style scoped>
.clinic-preview {
  background: #fbfffe;
}
</style>
