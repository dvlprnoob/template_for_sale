<script setup>
import { openContactAction } from '@/controllers/contactController'

defineOptions({
  name: 'ContactButton',
})

const props = defineProps({
  action: {
    type: String,
    default: 'whatsapp',
  },
  contact: {
    type: Object,
    required: true,
  },
  template: {
    type: Object,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: 'mdi-whatsapp',
  },
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'flat',
  },
  rounded: {
    type: [String, Number, Boolean],
    default: 'lg',
  },
})

function handleClick() {
  openContactAction(props.action, props.contact, props.template)
}
</script>

<template>
  <v-btn :color="color" :prepend-icon="icon" :rounded="rounded" :variant="variant" @click="handleClick">
    {{ label || template.cta?.primaryLabel || 'Hubungi Kami' }}
  </v-btn>
</template>
