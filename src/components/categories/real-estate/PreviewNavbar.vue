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
  <section class="estate-nav">
    <div class="page-shell estate-nav__inner">
      <v-btn color="primary" prepend-icon="mdi-arrow-left" rounded="0" variant="text" :to="{ name: 'gallery', params: { categorySlug } }">
        Gallery
      </v-btn>
      <strong>{{ template.companyName }}</strong>
      <span>{{ template.design?.label }}</span>
    </div>
  </section>
</template>

<style scoped>
.estate-nav {
  position: sticky;
  top: 72px;
  z-index: 5;
  border-bottom: 1px solid rgba(196, 154, 74, 0.32);
  background: rgba(255, 250, 240, 0.94);
  backdrop-filter: blur(14px);
}

.estate-nav__inner {
  min-height: 64px;
  display: flex;
  align-items: center;
  gap: 16px;
}

strong {
  font-family: Georgia, "Times New Roman", serif;
}

span {
  color: #6d7480;
}
</style>
