<script setup>
defineProps({
  recommendations: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="food-chef">
    <div class="page-shell chef-grid">
      <article v-for="item in recommendations" :key="item.title">
        <v-chip color="brown-darken-4" size="small">{{ item.tag }}</v-chip>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>
