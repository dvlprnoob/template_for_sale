<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import TemplateGallery from '../components/common/TemplateGallery.vue'
import { getCategoryBySlug, getTemplatesByCategory } from '../controllers/templateController'

const props = defineProps({
  categorySlug: {
    type: String,
    required: true,
  },
})

const router = useRouter()
const category = computed(() => getCategoryBySlug(props.categorySlug))
const templates = computed(() => getTemplatesByCategory(props.categorySlug))

if (!category.value) {
  router.replace({ name: 'home' })
}
</script>

<template>
  <section v-if="category" class="section-band">
    <div class="page-shell">
      <v-btn class="mb-6" color="primary" prepend-icon="mdi-arrow-left" rounded="lg" to="/" variant="text">
        Kembali
      </v-btn>
      <div class="gallery-heading">
        <v-avatar color="primary" rounded="lg" size="64">
          <v-icon :icon="category.icon" size="34" />
        </v-avatar>
        <div class="section-title">
          <h2>{{ category.name }}</h2>
          <p>{{ category.description }}</p>
        </div>
      </div>

      <TemplateGallery class="mt-8" :templates="templates" />
    </div>
  </section>
</template>

<style scoped>
.gallery-heading {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

@media (max-width: 620px) {
  .gallery-heading {
    flex-direction: column;
  }
}
</style>
