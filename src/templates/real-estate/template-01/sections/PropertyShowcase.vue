<script setup>
import SectionLabel from './SectionLabel.vue'

defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section id="property" class="re-showcase">
    <div class="page-shell">
      <SectionLabel text="Featured Property" />
      <h2>Curated listings with premium whitespace.</h2>
      <v-row class="mt-6">
        <v-col v-for="(project, index) in projects" :key="project.title" cols="12" md="4">
          <v-card class="re-property-card" :class="`re-property-card--${index + 1}`" variant="outlined">
            <img :src="project.image" :alt="project.title" />
            <div>
              <v-chip color="secondary" size="small" variant="tonal">{{ project.type }}</v-chip>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
