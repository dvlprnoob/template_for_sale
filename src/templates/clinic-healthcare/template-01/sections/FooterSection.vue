<script setup>
defineOptions({
  name: 'FooterSection',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})

const customItems = [
  'Backend / CMS / database',
  'Login / booking / invoice',
  'Payment gateway / API integration',
]
</script>

<template>
  <footer class="local-footer-section">
    <div class="page-shell local-footer-section__grid">
      <div>
        <strong>{{ template.logo }} / {{ template.companyName }}</strong>
        <p>{{ template.description }}</p>
      </div>
      <v-chip-group column>
        <v-chip v-for="item in customItems" :key="item" size="small" variant="tonal">
          {{ item }}
        </v-chip>
      </v-chip-group>
    </div>
  </footer>
</template>

<style scoped>
.local-footer-section {
  padding: 30px 0;
  border-top: 1px solid color-mix(in srgb, var(--template-primary, #172033), #ffffff 82%);
  background: var(--template-surface, #ffffff);
  color: var(--template-ink, #172033);
}

.local-footer-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(280px, 1.15fr);
  gap: 24px;
  align-items: start;
}

.local-footer-section p {
  color: #667085;
  line-height: 1.7;
}

@media (max-width: 760px) {
  .local-footer-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
