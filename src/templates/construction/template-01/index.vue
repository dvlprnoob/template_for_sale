<script setup>
import TemplateLayout from '../../../components/templates/TemplateLayout.vue'

defineOptions({
  name: 'ConstructionTemplateOne',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <TemplateLayout class="construction-template-01" :template="template" skin="construction-contractor" />
</template>
