<script setup>
import { getCategoryTemplateCardComponent } from '../../controllers/componentController'

defineProps({
  templates: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <v-row>
    <v-col v-for="template in templates" :key="`${template.categorySlug}-${template.slug}`" cols="12" md="6" lg="4">
      <component :is="getCategoryTemplateCardComponent(template.categorySlug)" :template="template" />
    </v-col>
  </v-row>
</template>
