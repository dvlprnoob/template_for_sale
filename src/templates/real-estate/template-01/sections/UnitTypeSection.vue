<script setup>
import SectionLabel from './SectionLabel.vue'

defineProps({
  units: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="re-units">
    <div class="page-shell">
      <SectionLabel text="Unit Type" />
      <div class="re-unit-list">
        <article v-for="unit in units" :key="unit.name">
          <strong>{{ unit.name }}</strong>
          <span>{{ unit.size }}</span>
          <span>{{ unit.rooms }}</span>
          <v-chip color="primary" variant="outlined">{{ unit.price }}</v-chip>
        </article>
      </div>
    </div>
  </section>
</template>
