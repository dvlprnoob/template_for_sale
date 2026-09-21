<script setup>
import SectionLabel from './SectionLabel.vue'
import { useTemplateTheme } from '../useTemplateTheme.js'

const props = defineProps({
  template: { type: Object, required: true },
  promos: {
    type: Array,
    default: () => [],
  },
})

const themeVars = useTemplateTheme(props.template)
</script>

<template>
  <section class="auto-promo" :style="themeVars">
    <div class="page-shell">
      <div class="auto-section-heading">
        <SectionLabel :text="template.design?.promoLabel || 'Special Offers'" />
        <h2>{{ template.design?.promoTitle || 'Promos built for serious drivers.' }}</h2>
      </div>

      <div class="promo-grid">
        <v-card v-for="promo in promos" :key="promo.title" class="promo-card" elevation="0">
          <div class="promo-card__top">
            <v-chip class="promo-chip" size="small" variant="flat">
              {{ promo.tag }}
            </v-chip>

            <span class="promo-card__icon">
              <v-icon :icon="promo.icon || 'mdi-lightning-bolt-outline'" size="28" />
            </span>
          </div>

          <h3>{{ promo.title }}</h3>
          <p>{{ promo.description }}</p>

          <div class="promo-card__line"></div>
        </v-card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.auto-promo {
  padding: clamp(72px, 9vw, 116px) 0;
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--tpl-primary), transparent 90%), transparent 34%),
    linear-gradient(135deg, rgba(215, 223, 232, 0.94), rgba(244, 246, 248, 1));
  color: var(--tpl-text);
  font-family: var(--tpl-body-font);
}

.page-shell {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.auto-section-heading {
  width: min(760px, 100%);
  margin-bottom: 42px;
}

.auto-section-heading h2 {
  margin: 16px 0 0;
  font-family: var(--tpl-heading-font);
  font-size: clamp(2.35rem, 6vw, 5rem);
  line-height: 0.94;
  letter-spacing: -0.045em;
  text-transform: uppercase;
  text-wrap: balance;
}

.promo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.promo-card {
  position: relative;
  min-height: 250px;
  padding: 32px;
  overflow: hidden;
  border: 1px solid rgba(16,24,32,0.08);
  border-radius: var(--tpl-radius) !important;
  background: rgba(255,255,255,0.84) !important;
  box-shadow: 0 24px 70px rgba(16,24,32,0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.promo-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 32px 90px rgba(16,24,32,0.18);
}

.promo-card::before {
  content: '';
  position: absolute;
  top: -76px;
  right: -76px;
  width: 190px;
  height: 190px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tpl-primary), transparent 88%);
}

.promo-card__top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.promo-chip {
  background: var(--tpl-primary) !important;
  color: #ffffff !important;
  font-weight: 900;
}

.promo-card__icon {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 16px;
  background: var(--tpl-dark);
  color: #ffffff;
}

.promo-card h3 {
  position: relative;
  z-index: 1;
  margin: 0 0 12px;
  color: var(--tpl-text);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 950;
  letter-spacing: -0.04em;
}

.promo-card p {
  position: relative;
  z-index: 1;
  margin: 0 0 36px;
  color: var(--tpl-muted);
  line-height: 1.75;
}

.promo-card__line {
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: 28px;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--tpl-primary), transparent);
}

@media (max-width: 760px) {
  .auto-promo {
    padding: 64px 0;
  }

  .promo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
