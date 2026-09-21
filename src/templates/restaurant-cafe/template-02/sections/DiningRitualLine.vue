<script setup>
defineProps({ rituals: { type: Array, default: () => [] } })
</script>

<template>
  <section class="nordic-service">
    <div class="page-shell service-line">
      <article v-for="ritual in rituals" :key="ritual.title">
        <v-icon :icon="ritual.icon" size="28" />
        <h3>{{ ritual.title }}</h3>
        <p>{{ ritual.description }}</p>
      </article>
    </div>
  </section>
</template>
