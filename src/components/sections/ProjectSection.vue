<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="section-band">
    <div class="page-shell">
      <div class="section-title mb-8">
        <span class="eyebrow">Selected Works</span>
        <h2>Project Highlight</h2>
        <p>Area showcase untuk portfolio, case study, listing, menu favorit, atau proyek unggulan.</p>
      </div>

      <v-row>
        <v-col v-for="(project, index) in projects" :key="project.title" cols="12" md="4">
          <v-card :class="['project-card', `project-card--${index + 1}`]" rounded="lg" variant="flat">
            <div class="project-media">
              <img :src="project.image" :alt="project.title" class="template-image" />
            </div>
            <v-card-text>
              <v-chip class="mb-3 project-chip" size="small" variant="flat">
                {{ project.type }}
              </v-chip>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  overflow: hidden;
  height: 100%;
  border: 1px solid color-mix(in srgb, var(--template-secondary), #ffffff 84%);
  background: #ffffff;
  box-shadow: var(--market-shadow-soft);
}

.project-media {
  height: 235px;
  background: #e7edf5;
}

h3 {
  margin: 0 0 8px;
  font-size: 1.2rem;
}

p {
  color: var(--market-muted);
  line-height: 1.65;
  margin: 0;
}

.project-chip {
  background: color-mix(in srgb, var(--template-secondary), #ffffff 88%);
  color: var(--template-secondary);
}

.eyebrow {
  display: inline-block;
  color: var(--template-primary);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
  text-transform: uppercase;
}
</style>
