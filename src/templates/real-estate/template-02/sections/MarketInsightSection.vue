<script setup>
defineProps({ insights: { type: Array, default: () => [] } })
</script>

<template>
  <section class="urban-insights">
    <div class="page-shell insight-grid">
      <div v-for="item in insights" :key="item.label">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>
