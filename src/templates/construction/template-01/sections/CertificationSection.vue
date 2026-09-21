<script setup>
defineProps({
  certifications: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="build-cert">
    <div class="page-shell cert-grid">
      <div>
        <span>Certification</span>
        <h2>Compliance notes for tender credibility.</h2>
      </div>
      <v-card v-for="cert in certifications" :key="cert.title" class="cert-card">
        <v-icon icon="mdi-certificate-outline" size="34" />
        <h3>{{ cert.title }}</h3>
        <p>{{ cert.description }}</p>
      </v-card>
    </div>
  </section>
</template>
