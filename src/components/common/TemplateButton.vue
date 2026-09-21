<script setup>
defineOptions({
  name: 'TemplateButton',
})

defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'mdi-arrow-right',
  },
  tone: {
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
</script>

<template>
  <v-btn :color="tone" :prepend-icon="icon" :rounded="rounded" :variant="variant">
    {{ label }}
  </v-btn>
</template>
