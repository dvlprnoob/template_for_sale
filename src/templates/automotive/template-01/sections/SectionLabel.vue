<script setup>
defineOptions({
  name: 'LocalSectionLabel',
})

defineProps({
  text: { type: String, required: true },
  tone: { type: String, default: 'default' },
})
</script>

<template>
  <span class="local-section-label" :class="`local-section-label--${tone}`">
    <span class="local-section-label__dot"></span>
    {{ text }}
  </span>
</template>

<style scoped>
.local-section-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 9px 13px;
  border: 1px solid color-mix(in srgb, var(--tpl-primary, #dc2626), transparent 78%);
  border-radius: 999px;
  background: color-mix(in srgb, var(--tpl-primary, #dc2626), transparent 92%);
  color: var(--tpl-primary, #dc2626);
  font-size: 0.72rem;
  font-weight: 950;
  letter-spacing: 0.14em;
  line-height: 1;
  text-transform: uppercase;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.16);
}

.local-section-label__dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: currentColor;
  box-shadow:
    0 0 0 5px color-mix(in srgb, currentColor, transparent 84%),
    0 0 18px currentColor;
  animation: labelPulse 1.8s ease-in-out infinite;
}

.local-section-label--light {
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  backdrop-filter: blur(14px);
}

@keyframes labelPulse {
  0%, 100% { transform: scale(1); opacity: 0.85; }
  50% { transform: scale(1.22); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .local-section-label__dot {
    animation: none;
  }
}
</style>
