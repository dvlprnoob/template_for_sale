<script setup>
defineProps({
  template: { type: Object, required: true },
  programs: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="mobility-program">
    <div class="page-shell">
      <div class="program-heading">
        <span>Mobility Program</span>
        <h2>{{ template.about.title }}</h2>
        <p>{{ template.about.description }}</p>
      </div>

      <div class="program-grid">
        <article v-for="program in programs" :key="program.title">
          <v-icon :icon="program.icon" size="32" />
          <h3>{{ program.title }}</h3>
          <p>{{ program.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
