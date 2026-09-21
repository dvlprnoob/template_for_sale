<script setup>
defineOptions({
  name: 'LocalSectionLabel',
})

defineProps({
  text: { type: String, required: true },
})
</script>

<template>
  <span class="local-section-label">{{ text }}</span>
</template>

<style scoped>
.local-section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--template-accent, currentColor);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.local-section-label::before {
  content: '';
  width: 30px;
  height: 1px;
  background: currentColor;
}
</style>
