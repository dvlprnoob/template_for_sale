<script setup>
defineOptions({
  name: 'SectionLabel',
})

defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span class="section-label">{{ text }}</span>
</template>

<style scoped>
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--template-accent, #f59e0b);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-label::before {
  content: "";
  width: 30px;
  height: 1px;
  background: currentColor;
}
</style>
