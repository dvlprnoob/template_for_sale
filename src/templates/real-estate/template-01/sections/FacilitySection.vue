<script setup>
import SectionLabel from './SectionLabel.vue'

defineProps({
  facilities: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="re-facilities">
    <div class="page-shell re-facility-grid">
      <div>
        <SectionLabel text="Facilities" />
        <h2>Quiet luxury details for daily living.</h2>
      </div>
      <v-row>
        <v-col v-for="facility in facilities" :key="facility.title" cols="12" sm="6">
          <v-card class="re-facility-card" variant="outlined">
            <v-icon :icon="facility.icon" size="34" />
            <h3>{{ facility.title }}</h3>
            <p>{{ facility.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
