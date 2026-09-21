<script setup>
defineProps({
  process: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="build-process">
    <div class="page-shell process-grid">
      <article v-for="item in process" :key="item.step">
        <strong>{{ item.step }}</strong>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>
