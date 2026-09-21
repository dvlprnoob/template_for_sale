<script setup>
defineProps({ projects: { type: Array, default: () => [] } })
</script>

<template>
  <section class="infra-projects">
    <div class="page-shell">
      <div class="infra-heading">
        <span>Infrastructure Work</span>
        <h2>Heavy project proof with strong industrial grid.</h2>
      </div>
      <div class="infra-project-grid">
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
