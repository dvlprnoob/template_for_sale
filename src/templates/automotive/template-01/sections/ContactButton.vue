<script setup>
import { computed } from 'vue'
import { openContactAction } from '@/controllers/contactController'
import { useTemplateTheme } from '../useTemplateTheme'

defineOptions({
  name: 'LocalContactButton',
})

const props = defineProps({
  action: { type: String, default: 'whatsapp' },
  contact: { type: Object, required: true },
  template: { type: Object, required: true },
  label: { type: String, default: '' },
  icon: { type: String, default: 'mdi-whatsapp' },
  variant: { type: String, default: 'flat' },
  rounded: { type: [String, Number, Boolean], default: 'xl' },
  block: { type: Boolean, default: false },
})

const themeVars = useTemplateTheme(props.template)
const buttonLabel = computed(() => props.label || props.template.cta?.primaryLabel || 'Hubungi Kami')

function handleClick() {
  openContactAction(props.action, props.contact, props.template)
}
</script>

<template>
  <v-btn
    class="local-contact-button"
    :class="{
      'local-contact-button--outline': variant === 'outlined',
      'local-contact-button--email': action === 'email',
      'local-contact-button--block': block,
    }"
    :style="themeVars"
    :prepend-icon="icon"
    :rounded="rounded"
    :variant="variant"
    height="52"
    @click="handleClick"
  >
    <span>{{ buttonLabel }}</span>
  </v-btn>
</template>

<style scoped>
.local-contact-button {
  min-width: 174px;
  padding-inline: 22px !important;
  background: linear-gradient(135deg, var(--tpl-primary), var(--tpl-secondary)) !important;
  color: #ffffff !important;
  font-weight: 950;
  letter-spacing: 0.01em;
  text-transform: none;
  box-shadow: var(--tpl-shadow-primary);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    filter 0.22s ease;
}

.local-contact-button:hover {
  transform: translateY(-3px);
  filter: brightness(1.06);
  box-shadow: 0 26px 62px color-mix(in srgb, var(--tpl-primary), transparent 62%);
}

.local-contact-button:active {
  transform: translateY(-1px) scale(0.98);
}

.local-contact-button--outline {
  border-color: rgba(255, 255, 255, 0.42) !important;
  background: rgba(255, 255, 255, 0.08) !important;
  color: #ffffff !important;
  box-shadow: none;
  backdrop-filter: blur(16px);
}

.local-contact-button--outline:hover {
  border-color: rgba(255, 255, 255, 0.78) !important;
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.22);
}

.local-contact-button--block {
  width: 100%;
}

@media (max-width: 560px) {
  .local-contact-button {
    width: 100%;
  }
}
</style>
