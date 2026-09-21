<script setup>
defineProps({ promos: { type: Array, default: () => [] } })
</script>

<template>
  <section class="sparepart-board">
    <div class="page-shell">
      <div class="garage-heading">
        <h2>Promo board for parts, tune, and detailing.</h2>
      </div>
      <div class="promo-board-grid">
        <article v-for="promo in promos" :key="promo.title">
          <img :src="promo.image" :alt="promo.title" />
          <v-chip color="blue-darken-3" size="small" variant="tonal">{{ promo.tag }}</v-chip>
          <h3>{{ promo.title }}</h3>
          <p>{{ promo.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
