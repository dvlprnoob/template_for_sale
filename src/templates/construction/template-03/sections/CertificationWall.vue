<script setup>
defineProps({ certifications: { type: Array, default: () => [] } })
</script>

<template>
  <section class="cert-wall">
    <div class="page-shell cert-wall-grid">
      <article v-for="cert in certifications" :key="cert.title">
        <v-icon icon="mdi-certificate-outline" size="34" />
        <h3>{{ cert.title }}</h3>
        <p>{{ cert.description }}</p>
      </article>
    </div>
  </section>
</template>
