<script setup>
defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="build-projects">
    <div class="page-shell">
      <div class="build-heading">
        <span>Project Showcase</span>
        <h2>Strong grid for built proof.</h2>
      </div>
      <div class="build-project-grid">
        <article v-for="project in projects" :key="project.title">
          <img :src="project.image" :alt="project.title" />
          <div>
            <span>{{ project.type }}</span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
