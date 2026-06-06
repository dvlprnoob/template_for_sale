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
  <section class="auto-nav">
    <div class="page-shell auto-nav__inner">
      <v-btn color="white" prepend-icon="mdi-arrow-left" rounded="0" variant="text" :to="{ name: 'gallery', params: { categorySlug } }">
        Gallery
      </v-btn>
      <strong>{{ template.companyName }}</strong>
      <v-chip color="red-darken-3" size="small" variant="flat">{{ template.design?.label }}</v-chip>
    </div>
  </section>
</template>

<style scoped>
.auto-nav {
  position: sticky;
  top: 72px;
  z-index: 5;
  border-bottom: 2px solid #a51f2d;
  background: rgba(17, 24, 39, 0.96);
  color: #ffffff;
  backdrop-filter: blur(14px);
}

.auto-nav__inner {
  min-height: 64px;
  display: flex;
  align-items: center;
  gap: 16px;
}

strong {
  font-family: Impact, "Arial Black", sans-serif;
  text-transform: uppercase;
}
</style>
