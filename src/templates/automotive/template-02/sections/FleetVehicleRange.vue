<script setup>
defineProps({
  template: { type: Object, required: true },
  vehicles: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="fleet-range">
    <div class="page-shell">
      <div class="fleet-heading">
        <div>
          <span>Fleet Range</span>
          <h2>Polished mobility cards for corporate operations.</h2>
        </div>
        <p>{{ template.description }}</p>
      </div>
      <div class="fleet-card-grid">
        <article v-for="(vehicle, index) in vehicles" :key="vehicle.name">
          <img :src="vehicle.image" :alt="vehicle.name" />
          <div>
            <span>{{ String(index + 1).padStart(2, '0') }} / {{ vehicle.category }}</span>
            <h3>{{ vehicle.name }}</h3>
            <p>{{ vehicle.spec }}</p>
            <small>Available for booking</small>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
