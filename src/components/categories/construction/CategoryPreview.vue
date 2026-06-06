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
  <div class="construction-preview">
    <HeroSection :template="template" />
    <SectionRenderer :template="template" />
  </div>
</template>

<style scoped>
.construction-preview {
  background: #f7f5ef;
}
</style>
