<script setup>
defineProps({ template: { type: Object, required: true } })
</script>

<template>
  <section class="resort-hero">
    <img :src="template.heroImage" :alt="template.companyName" />
    <div class="resort-nav">
      <strong>{{ template.logo }}</strong>
      <span>{{ template.design?.label }}</span>
    </div>
    <div class="resort-copy">
      <span>Private Resort Estate</span>
      <h1>{{ template.companyName }}</h1>
      <p>{{ template.tagline }}</p>
    </div>
  </section>
</template>
