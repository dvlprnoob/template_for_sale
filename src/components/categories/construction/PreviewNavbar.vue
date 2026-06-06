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
  <section class="construction-nav">
    <div class="page-shell construction-nav__inner">
      <v-btn color="amber-darken-2" prepend-icon="mdi-arrow-left" rounded="0" variant="flat" :to="{ name: 'gallery', params: { categorySlug } }">
        Gallery
      </v-btn>
      <strong>{{ template.companyName }}</strong>
      <span>{{ template.design?.label }}</span>
    </div>
  </section>
</template>

<style scoped>
.construction-nav {
  position: sticky;
  top: 72px;
  z-index: 5;
  border-bottom: 3px solid #f5c542;
  background: #252525;
  color: #ffffff;
}

.construction-nav__inner {
  min-height: 64px;
  display: flex;
  align-items: center;
  gap: 16px;
}

strong {
  font-family: "Arial Black", Impact, sans-serif;
  text-transform: uppercase;
}

span {
  color: #f5c542;
}
</style>
