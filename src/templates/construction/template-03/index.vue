<script setup>
import TemplateLayout from '../../../components/templates/TemplateLayout.vue'

defineOptions({
  name: 'ConstructionTemplateThree',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <TemplateLayout class="construction-template-03" :template="template" skin="construction-infra" />
</template>
