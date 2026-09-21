<script setup>
defineProps({ about: { type: Object, required: true } })
</script>

<template>
  <section class="resort-story">
    <div class="page-shell story-grid">
      <div>
        <span>Living Narrative</span>
        <h2>{{ about.title }}</h2>
      </div>
      <p>{{ about.description }}</p>
    </div>
  </section>
</template>
