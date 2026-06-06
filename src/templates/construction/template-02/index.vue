<script setup>
import TemplateLayout from '../../../components/templates/TemplateLayout.vue'

defineOptions({
  name: 'ConstructionTemplateTwo',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <TemplateLayout class="construction-template-02" :template="template" skin="construction-studio" />
</template>
