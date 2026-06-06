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
  <section class="clinic-nav">
    <div class="page-shell clinic-nav__inner">
      <v-btn color="primary" prepend-icon="mdi-arrow-left" rounded="xl" variant="tonal" :to="{ name: 'gallery', params: { categorySlug } }">
        Gallery
      </v-btn>
      <div>
        <strong>{{ template.companyName }}</strong>
        <span>{{ template.design?.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clinic-nav {
  position: sticky;
  top: 72px;
  z-index: 5;
  border-bottom: 1px solid rgba(120, 185, 168, 0.3);
  background: rgba(251, 255, 254, 0.94);
  backdrop-filter: blur(14px);
}

.clinic-nav__inner {
  min-height: 68px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.clinic-nav__inner div {
  display: grid;
  gap: 2px;
}

span {
  color: #5c7376;
}
</style>
