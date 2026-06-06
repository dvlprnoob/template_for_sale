<script setup>
import TemplateLayout from '../../../components/templates/TemplateLayout.vue'

defineOptions({
  name: 'ClinicHealthcareTemplateThree',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <TemplateLayout class="clinic-template-03" :template="template" skin="clinic-appointment" />
</template>
