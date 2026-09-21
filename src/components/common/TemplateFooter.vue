<script setup>
import { getCustomRequestItems } from '@/controllers/templateController'

defineOptions({
  name: 'TemplateFooter',
})

defineProps({
  template: {
    type: Object,
    default: null,
  },
})

const customItems = getCustomRequestItems()
</script>

<template>
  <footer class="template-footer">
    <div class="page-shell footer-grid">
      <div>
        <div class="footer-brand">
          <v-icon color="primary" icon="mdi-view-dashboard-outline" size="28" />
          <strong>{{ template?.companyName || 'ProfileKit' }}</strong>
        </div>
        <p>
          Static frontend template marketplace berbasis Vue 3 dan Vuetify. Fitur backend,
          database, CMS, booking, invoice, dan payment gateway tersedia sebagai custom request.
        </p>
      </div>

      <div>
        <h3>Layanan custom request</h3>
        <v-chip-group column>
          <v-chip v-for="item in customItems" :key="item" color="primary" variant="tonal">
            {{ item }}
          </v-chip>
        </v-chip-group>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.template-footer {
  border-top: 1px solid var(--market-line);
  background: #ffffff;
  padding: 32px 0;
  color: var(--market-ink);
}

.footer-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 24px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

p {
  color: var(--market-muted);
  line-height: 1.7;
  margin: 0;
}

h3 {
  margin: 0 0 12px;
  font-size: 1rem;
}

@media (max-width: 760px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
