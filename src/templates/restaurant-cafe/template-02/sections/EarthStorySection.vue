<script setup>
defineProps({ about: { type: Object, required: true } })
</script>

<template>
  <section class="earth-story">
    <div class="page-shell earth-grid">
      <div>
        <span>Mother earth</span>
        <h2>{{ about.title }}</h2>
      </div>
      <p>{{ about.description }}</p>
    </div>
  </section>
</template>
