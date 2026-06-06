<script setup>
defineProps({
  template: {
    type: Object,
    required: true,
  },
  categorySlug: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="restaurant-nav">
    <div class="page-shell restaurant-nav__inner">
      <v-btn color="deep-orange-darken-3" prepend-icon="mdi-arrow-left" rounded="lg" variant="tonal" :to="{ name: 'gallery', params: { categorySlug } }">
        Gallery
      </v-btn>
      <strong>{{ template.companyName }}</strong>
      <span>{{ template.design?.label }}</span>
    </div>
  </section>
</template>

<style scoped>
.restaurant-nav {
  position: sticky;
  top: 72px;
  z-index: 5;
  border-bottom: 1px solid rgba(123, 63, 42, 0.24);
  background: rgba(255, 247, 237, 0.94);
  backdrop-filter: blur(14px);
}

.restaurant-nav__inner {
  min-height: 64px;
  display: flex;
  align-items: center;
  gap: 16px;
}

strong {
  font-family: Georgia, "Times New Roman", serif;
}

span {
  color: #7b3f2a;
}
</style>
