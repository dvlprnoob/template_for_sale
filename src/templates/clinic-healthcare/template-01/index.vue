<script setup>
import TemplateLayout from '../../../components/templates/TemplateLayout.vue'

defineOptions({
  name: 'ClinicHealthcareTemplateOne',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <TemplateLayout class="clinic-template-01" :template="template" skin="clinic-calm" />
</template>
