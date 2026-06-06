<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import TemplatePreview from '../components/common/TemplatePreview.vue'
import { getCategoryPreviewNavbarComponent } from '../controllers/componentController'
import { getTemplateBySlug } from '../controllers/templateController'

const props = defineProps({
  categorySlug: {
    type: String,
    required: true,
  },
  templateSlug: {
    type: String,
    required: true,
  },
})

const router = useRouter()
const template = computed(() => getTemplateBySlug(props.categorySlug, props.templateSlug))
const previewNavbar = computed(() => getCategoryPreviewNavbarComponent(props.categorySlug))

if (!template.value) {
  router.replace({ name: 'home' })
}
</script>

<template>
  <div v-if="template">
    <component :is="previewNavbar" :category-slug="categorySlug" :template="template" />
    <TemplatePreview :template="template" />
  </div>
</template>
