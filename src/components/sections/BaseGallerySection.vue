<script setup>
import SectionLabel from '@/components/common/SectionLabel.vue'

defineOptions({
  name: 'BaseGallerySection',
})

defineProps({
  gallery: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: 'Visual Gallery',
  },
})
</script>

<template>
  <section v-if="gallery.length" class="base-gallery">
    <div class="page-shell">
      <SectionLabel text="Gallery" />
      <h2>{{ title }}</h2>
      <v-row class="mt-4">
        <v-col v-for="(item, index) in gallery" :key="`${item.alt}-${index}`" cols="12" sm="6" md="3">
          <v-card class="gallery-tile" variant="outlined">
            <img :src="item.src" :alt="item.alt" />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style scoped>
.base-gallery {
  padding: 72px 0;
  background: #ffffff;
}

h2 {
  margin: 12px 0 0;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.05;
}

.gallery-tile {
  height: 230px;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
