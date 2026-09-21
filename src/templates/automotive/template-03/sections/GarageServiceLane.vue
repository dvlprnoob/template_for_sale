<script setup>
defineProps({
  services: { type: Array, default: () => [] },
  stats: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="garage-service-lane">
    <div class="page-shell lane-grid">
      <article v-for="service in services" :key="service.title">
        <v-icon :icon="service.icon" size="34" />
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </article>
      <div class="lane-stats">
        <div v-for="stat in stats" :key="stat.label">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
