<script setup>
import SectionLabel from './SectionLabel.vue'
import { useTemplateTheme } from '../useTemplateTheme.js'

const props = defineProps({
  template: { type: Object, required: true },
  services: {
    type: Array,
    default: () => [],
  },
})

const themeVars = useTemplateTheme(props.template)
</script>

<template>
  <section class="auto-garage" :style="themeVars">
    <div class="page-shell">
      <div class="auto-section-heading">
        <SectionLabel :text="template.design?.servicesLabel || 'Garage Service'" tone="light" />
        <h2>{{ template.design?.servicesTitle || 'After-sales lane with aggressive rhythm.' }}</h2>
        <p>{{ template.design?.servicesSubtitle || 'Keep every ride sharp, safe, and ready for the next road.' }}</p>
      </div>

      <div class="auto-garage__grid">
        <article v-for="service in services" :key="service.title" class="auto-garage-card">
          <div class="auto-garage-card__icon">
            <v-icon :icon="service.icon" size="34" />
          </div>

          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.auto-garage {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 9vw, 116px) 0;
  background:
    radial-gradient(circle at 16% 16%, color-mix(in srgb, var(--tpl-primary), transparent 82%), transparent 30%),
    linear-gradient(135deg, var(--tpl-dark-soft), #141a22);
  color: #ffffff;
  font-family: var(--tpl-body-font);
}

.auto-garage::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.22;
  background: repeating-linear-gradient(-16deg, rgba(255,255,255,0.13) 0 1px, transparent 1px 34px);
  pointer-events: none;
}

.page-shell {
  position: relative;
  z-index: 1;
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.auto-section-heading {
  width: min(760px, 100%);
  margin-bottom: 42px;
}

.auto-section-heading h2 {
  margin: 16px 0 14px;
  font-family: var(--tpl-heading-font);
  font-size: clamp(2.35rem, 6vw, 5rem);
  line-height: 0.94;
  letter-spacing: -0.045em;
  text-transform: uppercase;
  text-wrap: balance;
}

.auto-section-heading p {
  width: min(620px, 100%);
  margin: 0;
  color: rgba(255, 255, 255, 0.66);
  line-height: 1.75;
}

.auto-garage__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.auto-garage-card {
  position: relative;
  min-height: 270px;
  padding: 30px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--tpl-radius);
  background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.035));
  backdrop-filter: blur(20px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
}

.auto-garage-card::after {
  content: '';
  position: absolute;
  right: -54px;
  bottom: -54px;
  width: 150px;
  height: 150px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tpl-primary), transparent 74%);
  filter: blur(6px);
  transition: transform .3s ease;
}

.auto-garage-card:hover {
  transform: translateY(-8px);
  border-color: color-mix(in srgb, var(--tpl-primary), transparent 58%);
  background: linear-gradient(145deg, rgba(255,255,255,0.11), rgba(255,255,255,0.05));
}

.auto-garage-card:hover::after {
  transform: scale(1.18);
}

.auto-garage-card__icon {
  position: relative;
  z-index: 1;
  display: grid;
  width: 66px;
  height: 66px;
  margin-bottom: 26px;
  place-items: center;
  border-radius: 21px;
  background: linear-gradient(135deg, var(--tpl-primary), var(--tpl-secondary));
  color: #ffffff;
  box-shadow: var(--tpl-shadow-primary);
}

.auto-garage-card h3 {
  position: relative;
  z-index: 1;
  margin: 0 0 12px;
  font-size: 1.4rem;
  font-weight: 950;
  letter-spacing: -0.03em;
}

.auto-garage-card p {
  position: relative;
  z-index: 1;
  margin: 0;
  color: rgba(255,255,255,0.68);
  line-height: 1.75;
}

@media (max-width: 1000px) {
  .auto-garage__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .auto-garage {
    padding: 64px 0;
  }

  .auto-garage__grid {
    grid-template-columns: 1fr;
  }
}
</style>
