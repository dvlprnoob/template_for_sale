<script setup>
import ContactButton from '@/components/common/ContactButton.vue'

defineOptions({
  name: 'BaseCTASection',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="base-cta">
    <div class="page-shell cta-box">
      <div>
        <span>Request</span>
        <h2>{{ template.cta?.title }}</h2>
        <p>{{ template.cta?.description }}</p>
      </div>
      <ContactButton :contact="template.contact" :template="template" rounded="pill" />
    </div>
  </section>
</template>

<style scoped>
.base-cta {
  padding: 76px 0;
  background: var(--template-primary, #172033);
  color: #ffffff;
}

.cta-box {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 28px;
  align-items: center;
}

span {
  color: var(--template-accent, #f59e0b);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h2 {
  margin: 10px 0;
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1.05;
}

p {
  max-width: 680px;
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.75;
}

@media (max-width: 760px) {
  .cta-box {
    grid-template-columns: 1fr;
  }
}
</style>
