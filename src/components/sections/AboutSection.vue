<script setup>
defineProps({
  about: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="section-band about-band">
    <div class="page-shell about-grid">
      <div class="section-title">
        <span class="eyebrow">Company Story</span>
        <h2>{{ about.title }}</h2>
        <p>{{ about.description }}</p>
      </div>
      <div class="metrics">
        <div v-for="metric in about.metrics" :key="metric.label" class="metric">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: 48px;
  align-items: start;
}

.eyebrow {
  display: inline-block;
  color: var(--template-primary);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.metric {
  border: 1px solid color-mix(in srgb, var(--template-primary), #ffffff 84%);
  border-radius: 8px;
  padding: 24px;
  background:
    linear-gradient(180deg, #ffffff, color-mix(in srgb, var(--template-primary), #ffffff 96%));
  box-shadow: var(--market-shadow-soft);
}

.metric strong {
  display: block;
  color: var(--template-primary);
  font-size: 2.25rem;
  line-height: 1;
  margin-bottom: 10px;
}

.metric span {
  color: var(--market-muted);
}

@media (max-width: 860px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
