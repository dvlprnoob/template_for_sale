<script setup>
defineProps({
  gallery: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="food-ambience">
    <div class="page-shell ambience-grid">
      <div>
        <span>Ambience</span>
        <h2>Warm visual rhythm for dine-in and campaign pages.</h2>
      </div>
      <img v-for="(item, index) in gallery.slice(0, 3)" :key="`${item.alt}-${index}`" :src="item.src" :alt="item.alt" />
    </div>
  </section>
</template>
