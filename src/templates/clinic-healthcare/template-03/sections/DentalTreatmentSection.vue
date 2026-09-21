<script setup>
defineProps({ treatments: { type: Array, default: () => [] } })
</script>

<template>
  <section class="dental-treatment">
    <div class="page-shell treatment-grid">
      <article v-for="treatment in treatments" :key="treatment.title">
        <v-icon :icon="treatment.icon" size="32" />
        <h3>{{ treatment.title }}</h3>
        <p>{{ treatment.description }}</p>
      </article>
    </div>
  </section>
</template>
