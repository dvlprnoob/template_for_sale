<script setup>
import { computed } from 'vue'
import { useTemplateTheme } from '../useTemplateTheme'

defineOptions({
  name: 'FooterSection',
})

const props = defineProps({
  template: {
    type: Object,
    required: true,
  },
})

const themeVars = useTemplateTheme(props.template)

const customItems = computed(() => props.template.design?.footerChips || [
  'Backend / CMS / database',
  'Login / booking / invoice',
  'Payment gateway / API integration',
])
</script>

<template>
  <footer class="local-footer-section" :style="themeVars">
    <div class="page-shell local-footer-section__grid">
      <div class="local-footer-section__brand">
        <strong>{{ template.logo }} / {{ template.companyName }}</strong>
        <p>{{ template.description }}</p>
      </div>

      <div class="local-footer-section__stack">
        <span>{{ template.design?.footerLabel || 'Custom-ready modules' }}</span>

        <div class="local-footer-section__chips">
          <v-chip v-for="item in customItems" :key="item" size="small" variant="tonal">
            {{ item }}
          </v-chip>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.local-footer-section {
  padding: 34px 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  background: linear-gradient(135deg, var(--tpl-dark), var(--tpl-dark-soft));
  color: #ffffff;
  font-family: var(--tpl-body-font);
}

.page-shell {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.local-footer-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(280px, 1.1fr);
  gap: 24px;
  align-items: center;
}

.local-footer-section__brand strong {
  display: block;
  font-size: 1.08rem;
  font-weight: 950;
  letter-spacing: -0.02em;
}

.local-footer-section p {
  width: min(560px, 100%);
  margin: 10px 0 0;
  color: rgba(255,255,255,0.62);
  line-height: 1.7;
}

.local-footer-section__stack {
  display: grid;
  justify-items: end;
  gap: 12px;
}

.local-footer-section__stack > span {
  color: rgba(255,255,255,0.48);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.local-footer-section__chips {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
}

.local-footer-section :deep(.v-chip) {
  color: #ffffff;
  border-color: rgba(255,255,255,0.14);
}

@media (max-width: 760px) {
  .local-footer-section__grid {
    grid-template-columns: 1fr;
  }

  .local-footer-section__stack {
    justify-items: start;
  }

  .local-footer-section__chips {
    justify-content: flex-start;
  }
}
</style>
