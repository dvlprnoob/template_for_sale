<script setup>
defineProps({ services: { type: Array, default: () => [] } })
</script>

<template>
  <section class="studio-scope">
    <div class="page-shell scope-grid">
      <article v-for="service in services" :key="service.title">
        <v-icon :icon="service.icon" size="32" />
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </article>
    </div>
  </section>
</template>
