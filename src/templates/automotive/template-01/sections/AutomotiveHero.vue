<script setup>
import { computed } from 'vue'
import ContactButton from './ContactButton.vue'
import SectionLabel from './SectionLabel.vue'
import { useTemplateTheme } from '../useTemplateTheme.js'

const props = defineProps({
  template: {
    type: Object,
    required: true,
  },
})

const themeVars = useTemplateTheme(props.template)

const heroStats = computed(() => {
  return props.template.design?.heroStats || [
    { value: '24/7', label: 'Support' },
    { value: 'Fast', label: 'Booking' },
    { value: 'Premium', label: 'Garage' },
  ]
})

const eyebrow = computed(() => props.template.design?.label || 'Automotive Template')
const heroBadge = computed(() => props.template.design?.heroBadge || 'Ready for your next drive')
</script>

<template>
  <section class="auto-hero" :style="themeVars">
    <img class="auto-hero__image" :src="template.heroImage" :alt="template.companyName" />

    <div class="auto-hero__overlay"></div>
    <div class="auto-hero__grid-pattern"></div>
    <div class="auto-hero__speed-line auto-hero__speed-line--one"></div>
    <div class="auto-hero__speed-line auto-hero__speed-line--two"></div>
    <div class="auto-hero__glow auto-hero__glow--left"></div>
    <div class="auto-hero__glow auto-hero__glow--right"></div>

    <div class="page-shell auto-hero__inner">
      <div class="auto-hero__copy reveal-up">
        <SectionLabel :text="eyebrow" tone="light" />

        <p class="auto-hero__badge">
          <v-icon icon="mdi-speedometer" size="18" />
          <span>{{ heroBadge }}</span>
        </p>

        <h1>{{ template.companyName }}</h1>
        <p class="auto-hero__tagline">{{ template.tagline }}</p>

        <div class="auto-actions">
          <ContactButton
            :contact="template.contact"
            :template="template"
            rounded="xl"
            class="auto-main-action"
          />

          <ContactButton
            action="email"
            icon="mdi-email-outline"
            :label="template.cta?.secondaryLabel || 'Get Quote'"
            :contact="template.contact"
            :template="template"
            rounded="xl"
            variant="outlined"
            class="auto-secondary-action"
          />
        </div>
      </div>

      <div class="auto-hero__stats" aria-label="Automotive highlights">
        <div v-for="stat in heroStats" :key="`${stat.value}-${stat.label}`" class="auto-hero__stat">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.auto-hero {
  position: relative;
  min-height: clamp(720px, 92vh, 880px);
  display: grid;
  place-items: center;
  overflow: hidden;
  color: var(--tpl-light);
  isolation: isolate;
  background: var(--tpl-dark);
  font-family: var(--tpl-body-font);
}

.page-shell {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.auto-hero__inner {
  position: relative;
  z-index: 2;
  display: grid;
  min-height: inherit;
  align-content: center;
  padding: 112px 0 150px;
}

.auto-hero__image {
  position: absolute;
  inset: 0;
  z-index: -6;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.07);
  filter: brightness(0.62) saturate(1.16) contrast(1.08);
  animation: heroZoom 14s ease-in-out infinite alternate;
}

.auto-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: -5;
  background:
    radial-gradient(circle at 50% 32%, color-mix(in srgb, var(--tpl-primary), transparent 70%), transparent 32%),
    linear-gradient(90deg, rgba(11, 17, 24, 0.94), rgba(11, 17, 24, 0.36), rgba(11, 17, 24, 0.92)),
    linear-gradient(180deg, rgba(11, 17, 24, 0.06), rgba(11, 17, 24, 0.96));
}

.auto-hero__grid-pattern {
  position: absolute;
  inset: 0;
  z-index: -4;
  opacity: 0.2;
  background:
    linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px);
  background-size: 58px 58px;
  mask-image: linear-gradient(to bottom, transparent, #000 18%, #000 72%, transparent);
}

.auto-hero__speed-line {
  position: absolute;
  z-index: -3;
  height: 2px;
  width: min(44vw, 620px);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--tpl-primary), white 10%), transparent);
  filter: drop-shadow(0 0 14px color-mix(in srgb, var(--tpl-primary), transparent 30%));
  opacity: 0.55;
  transform: skewX(-22deg);
  animation: speedLine 4.5s ease-in-out infinite;
}

.auto-hero__speed-line--one {
  top: 25%;
  left: -12%;
}

.auto-hero__speed-line--two {
  right: -16%;
  bottom: 30%;
  animation-delay: 1.4s;
}

.auto-hero__glow {
  position: absolute;
  z-index: -2;
  width: 420px;
  height: 420px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tpl-primary), transparent 66%);
  filter: blur(92px);
  pointer-events: none;
  animation: floatGlow 7s ease-in-out infinite alternate;
}

.auto-hero__glow--left {
  left: -120px;
  bottom: 80px;
}

.auto-hero__glow--right {
  top: 90px;
  right: -130px;
  animation-delay: 1.8s;
}

.auto-hero__copy {
  width: min(980px, 100%);
  margin: var(--tpl-hero-copy-margin);
  text-align: var(--tpl-hero-copy-align);
}

.auto-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 18px 0 0;
  padding: 10px 14px;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.78);
  backdrop-filter: blur(18px);
  font-size: 0.84rem;
  font-weight: 800;
}

.auto-hero h1 {
  max-width: 1050px;
  margin: 22px auto 18px;
  font-family: var(--tpl-heading-font);
  font-size: clamp(3.35rem, 10vw, 9.4rem);
  line-height: 0.84;
  letter-spacing: -0.065em;
  text-transform: uppercase;
  text-wrap: balance;
  text-shadow: 0 24px 70px rgba(0, 0, 0, 0.52);
}

.auto-hero__tagline {
  width: min(760px, 100%);
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(1rem, 2vw, 1.24rem);
  line-height: 1.78;
}

.auto-actions {
  display: flex;
  justify-content: var(--tpl-hero-align);
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 36px;
}

.auto-hero__stats {
  position: absolute;
  left: 50%;
  bottom: 28px;
  width: min(900px, 100%);
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--tpl-radius);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.045)),
    rgba(11, 17, 24, 0.68);
  backdrop-filter: blur(24px);
  box-shadow: var(--tpl-shadow-dark);
}

.auto-hero__stat {
  position: relative;
  padding: 24px 18px;
  text-align: center;
}

.auto-hero__stat:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.auto-hero__stat::before {
  content: '';
  position: absolute;
  inset: auto 24px 0;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, var(--tpl-primary), transparent);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.auto-hero__stat:hover::before {
  transform: scaleX(1);
}

.auto-hero__stat strong {
  display: block;
  font-size: clamp(1.32rem, 3vw, 2.04rem);
  line-height: 1;
  text-transform: uppercase;
}

.auto-hero__stat span {
  display: block;
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.66);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.reveal-up {
  animation: revealUp 0.72s cubic-bezier(.2,.75,.2,1) both;
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes heroZoom {
  from { transform: scale(1.07); }
  to { transform: scale(1.13); }
}

@keyframes speedLine {
  0%, 100% { opacity: 0; transform: translateX(-18px) skewX(-22deg); }
  35%, 65% { opacity: 0.68; }
  50% { transform: translateX(72px) skewX(-22deg); }
}

@keyframes floatGlow {
  from { transform: translate3d(0, 0, 0) scale(1); }
  to { transform: translate3d(18px, -18px, 0) scale(1.08); }
}

@media (max-width: 760px) {
  .auto-hero__inner {
    padding: 86px 0 214px;
  }

  .auto-actions {
    flex-direction: column;
    justify-content: stretch;
  }

  .auto-hero__stats {
    grid-template-columns: 1fr;
    bottom: 18px;
    border-radius: 24px;
  }

  .auto-hero__stat {
    padding: 14px 18px;
  }

  .auto-hero__stat:not(:last-child) {
    border-right: 0;
    border-bottom: 1px solid rgba(255,255,255,0.12);
  }
}

@media (prefers-reduced-motion: reduce) {
  .auto-hero__image,
  .auto-hero__speed-line,
  .auto-hero__glow,
  .reveal-up {
    animation: none;
  }
}
</style>
