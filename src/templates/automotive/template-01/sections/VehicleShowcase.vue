<script setup>
import SectionLabel from './SectionLabel.vue'
import { useTemplateTheme } from '../useTemplateTheme.js'

const props = defineProps({
  template: { type: Object, required: true },
  vehicles: {
    type: Array,
    default: () => [],
  },
})

const themeVars = useTemplateTheme(props.template)
</script>

<template>
  <section id="vehicles" class="auto-vehicles" :style="themeVars">
    <div class="page-shell">
      <div class="auto-section-heading">
        <SectionLabel :text="template.design?.vehiclesLabel || 'Vehicle Showcase'" />
        <h2>{{ template.design?.vehiclesTitle || 'Sharp cards for fast decision making.' }}</h2>
        <p>{{ template.design?.vehiclesSubtitle || 'Compare performance, style, and price in one clean lane.' }}</p>
      </div>

      <v-row class="auto-vehicle-row">
        <v-col v-for="vehicle in vehicles" :key="vehicle.name" cols="12" sm="6" lg="4">
          <v-card class="auto-vehicle-card" elevation="0">
            <div class="auto-vehicle-card__media">
              <img :src="vehicle.image" :alt="vehicle.name" />
              <span>{{ vehicle.category }}</span>
            </div>

            <div class="auto-vehicle-card__body">
              <h3>{{ vehicle.name }}</h3>
              <p>{{ vehicle.power }}</p>

              <div class="auto-vehicle-card__footer">
                <strong>{{ vehicle.price }}</strong>
                <span class="auto-vehicle-card__arrow">
                  <v-icon icon="mdi-arrow-right" size="22" />
                </span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style scoped>
.auto-vehicles {
  padding: clamp(72px, 9vw, 116px) 0;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--tpl-primary), transparent 90%), transparent 34%),
    var(--tpl-surface);
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
  color: var(--tpl-muted);
  line-height: 1.75;
}

.auto-vehicle-row {
  row-gap: 18px;
}

.auto-vehicle-card {
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(16, 24, 32, 0.08);
  border-radius: var(--tpl-radius) !important;
  background: #ffffff;
  box-shadow: 0 22px 70px rgba(16, 24, 32, 0.1);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.auto-vehicle-card:hover {
  transform: translateY(-8px);
  border-color: color-mix(in srgb, var(--tpl-primary), transparent 62%);
  box-shadow: 0 30px 90px rgba(16, 24, 32, 0.18);
}

.auto-vehicle-card__media {
  position: relative;
  height: 265px;
  overflow: hidden;
  background: #dbe2ea;
}

.auto-vehicle-card__media::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 56%;
  background: linear-gradient(180deg, transparent, rgba(16, 24, 32, 0.78));
}

.auto-vehicle-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.auto-vehicle-card:hover .auto-vehicle-card__media img {
  transform: scale(1.06);
}

.auto-vehicle-card__media span {
  position: absolute;
  left: 18px;
  bottom: 18px;
  z-index: 1;
  padding: 8px 12px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tpl-primary), transparent 6%);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 950;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.auto-vehicle-card__body {
  padding: 26px;
}

.auto-vehicle-card__body h3 {
  margin: 0 0 8px;
  color: var(--tpl-text);
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 950;
  letter-spacing: -0.04em;
}

.auto-vehicle-card__body p {
  margin: 0;
  color: var(--tpl-muted);
  line-height: 1.65;
}

.auto-vehicle-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid rgba(16, 24, 32, 0.1);
}

.auto-vehicle-card__footer strong {
  color: var(--tpl-primary);
  font-size: 1.12rem;
  font-weight: 950;
}

.auto-vehicle-card__arrow {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 999px;
  background: var(--tpl-dark);
  color: #ffffff;
  transition: transform .22s ease, background .22s ease;
}

.auto-vehicle-card:hover .auto-vehicle-card__arrow {
  transform: translateX(4px);
  background: var(--tpl-primary);
}

@media (max-width: 760px) {
  .auto-vehicles {
    padding: 64px 0;
  }

  .auto-vehicle-card__media {
    height: 230px;
  }
}
</style>
