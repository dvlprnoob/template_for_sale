<script setup>
defineProps({ guides: { type: Array, default: () => [] } })
</script>

<template>
  <section class="cafe-columns">
    <div class="page-shell columns-grid">
      <article v-for="guide in guides" :key="guide.title">
        <span>Guide</span>
        <v-icon :icon="guide.icon" size="32" />
        <h3>{{ guide.title }}</h3>
        <p>{{ guide.description }}</p>
      </article>
    </div>
  </section>
</template>
