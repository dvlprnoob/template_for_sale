<script setup>
defineProps({ services: { type: Array, default: () => [] } })
</script>

<template>
  <section class="lab-services">
    <div class="page-shell lab-service-grid">
      <article v-for="service in services" :key="service.title">
        <v-icon :icon="service.icon" size="34" />
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </article>
    </div>
  </section>
</template>
