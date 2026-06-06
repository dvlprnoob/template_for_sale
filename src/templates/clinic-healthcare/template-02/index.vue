<script setup>
import TemplateLayout from '../../../components/templates/TemplateLayout.vue'

defineOptions({
  name: 'ClinicHealthcareTemplateTwo',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <TemplateLayout class="clinic-template-02" :template="template" skin="clinic-lab" />
</template>
