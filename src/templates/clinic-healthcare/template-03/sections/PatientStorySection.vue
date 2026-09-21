<script setup>
defineOptions({
  name: 'PatientStorySection',
})

defineProps({
  testimonials: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="patient-story-section">
    <div class="page-shell patient-story-grid">
      <div>
        <span>Patient Stories</span>
        <h2>Trust notes with a calm healthcare tone.</h2>
      </div>
      <article v-for="item in testimonials" :key="item.name">
        <v-rating :model-value="item.rating" color="amber" density="compact" readonly size="18" />
        <p>"{{ item.quote }}"</p>
        <strong>{{ item.name }}</strong>
        <span>{{ item.role }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.patient-story-section {
  padding: 76px 0;
  background: #ffffff;
}

.patient-story-grid {
  display: grid;
  grid-template-columns: 0.9fr 1fr 1fr;
  gap: 18px;
  align-items: stretch;
}

.patient-story-grid > div,
.patient-story-grid article {
  padding: 28px;
  border-radius: 30px;
  background: #f4fbfb;
}

.patient-story-grid span {
  color: var(--template-primary, #14716a);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.patient-story-grid h2 {
  margin: 12px 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.05;
}

.patient-story-grid p {
  color: #667085;
  line-height: 1.75;
}

@media (max-width: 900px) {
  .patient-story-grid {
    grid-template-columns: 1fr;
  }
}
</style>
