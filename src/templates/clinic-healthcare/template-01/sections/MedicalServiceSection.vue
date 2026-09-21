<script setup>
import SectionLabel from './SectionLabel.vue'

defineProps({
  services: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="clinic-services">
    <div class="page-shell">
      <SectionLabel text="Medical Services" />
      <h2>Soft service cards for patient clarity.</h2>
      <v-row class="mt-5">
        <v-col v-for="service in services" :key="service.title" cols="12" sm="6" lg="3">
          <v-card class="clinic-service-card" variant="outlined">
            <v-icon :icon="service.icon" size="34" />
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
