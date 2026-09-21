<script setup>
import ContactButton from './ContactButton.vue'
import SectionLabel from './SectionLabel.vue'
import { useTemplateTheme } from '../useTemplateTheme.js'

defineOptions({
  name: 'ContactSection',
})

const props = defineProps({
  template: {
    type: Object,
    required: true,
  },
})

const themeVars = useTemplateTheme(props.template)
</script>

<template>
  <section class="local-contact-section" :style="themeVars">
    <div class="page-shell local-contact-section__grid">
      <div class="local-contact-section__copy">
        <SectionLabel :text="template.design?.contactLabel || 'Contact'" tone="light" />

        <h2>{{ template.cta?.title }}</h2>
        <p>{{ template.cta?.description }}</p>

        <div class="local-contact-section__actions">
          <ContactButton :contact="template.contact" :template="template" rounded="xl" />
          <ContactButton
            action="email"
            icon="mdi-email-outline"
            :label="template.cta?.secondaryLabel || 'Email Us'"
            :contact="template.contact"
            :template="template"
            rounded="xl"
            variant="outlined"
          />
        </div>
      </div>

      <v-card class="local-contact-card" elevation="0">
        <div class="local-contact-card__icon">
          <v-icon icon="mdi-map-marker-outline" size="32" />
        </div>

        <strong>{{ template.contact.address }}</strong>

        <div class="local-contact-card__list">
          <p>
            <v-icon icon="mdi-whatsapp" size="18" />
            <span>{{ template.contact.whatsapp }}</span>
          </p>
          <p>
            <v-icon icon="mdi-email-outline" size="18" />
            <span>{{ template.contact.email }}</span>
          </p>
        </div>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
.local-contact-section {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 9vw, 116px) 0;
  background:
    radial-gradient(circle at 14% 18%, color-mix(in srgb, var(--tpl-primary), transparent 82%), transparent 34%),
    linear-gradient(135deg, var(--tpl-dark-soft), #141a22);
  color: #ffffff;
  font-family: var(--tpl-body-font);
}

.local-contact-section::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background: repeating-linear-gradient(-18deg, rgba(255,255,255,0.15) 0 1px, transparent 1px 34px);
}

.page-shell {
  position: relative;
  z-index: 1;
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.local-contact-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.72fr);
  gap: 32px;
  align-items: center;
}

.local-contact-section h2 {
  margin: 16px 0 14px;
  font-family: var(--tpl-heading-font);
  font-size: clamp(2.35rem, 6vw, 5rem);
  line-height: 0.94;
  letter-spacing: -0.045em;
  text-transform: uppercase;
  text-wrap: balance;
}

.local-contact-section__copy > p {
  width: min(620px, 100%);
  margin: 0;
  color: rgba(255,255,255,0.68);
  line-height: 1.75;
}

.local-contact-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.local-contact-card {
  position: relative;
  display: grid;
  gap: 16px;
  padding: 32px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--tpl-radius) !important;
  background: rgba(255,255,255,0.075) !important;
  color: #ffffff;
  backdrop-filter: blur(20px);
  box-shadow: var(--tpl-shadow-dark);
}

.local-contact-card::after {
  content: '';
  position: absolute;
  right: -80px;
  bottom: -100px;
  width: 220px;
  height: 220px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tpl-primary), transparent 76%);
  filter: blur(20px);
}

.local-contact-card__icon {
  position: relative;
  z-index: 1;
  display: grid;
  width: 66px;
  height: 66px;
  place-items: center;
  border-radius: 22px;
  background: linear-gradient(135deg, var(--tpl-primary), var(--tpl-secondary));
  box-shadow: var(--tpl-shadow-primary);
}

.local-contact-card strong,
.local-contact-card__list {
  position: relative;
  z-index: 1;
}

.local-contact-card strong {
  font-size: 1.15rem;
  line-height: 1.5;
}

.local-contact-card__list {
  display: grid;
  gap: 10px;
}

.local-contact-card p {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  color: rgba(255,255,255,0.72);
  line-height: 1.6;
}

@media (max-width: 820px) {
  .local-contact-section__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .local-contact-section {
    padding: 64px 0;
  }

  .local-contact-section__actions {
    flex-direction: column;
  }
}
</style>
