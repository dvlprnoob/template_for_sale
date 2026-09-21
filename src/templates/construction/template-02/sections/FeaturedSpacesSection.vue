<script setup>
defineProps({ spaces: { type: Array, default: () => [] } })
</script>

<template>
  <section class="studio-spaces">
    <div class="page-shell">
      <div class="studio-heading">
        <span>Selected Spaces</span>
        <h2>Portfolio-first composition for architecture studios.</h2>
      </div>
      <div class="space-grid">
        <article v-for="space in spaces" :key="space.title">
          <img :src="space.image" :alt="space.title" />
          <div>
            <span>{{ space.type }}</span>
            <h3>{{ space.title }}</h3>
            <p>{{ space.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
