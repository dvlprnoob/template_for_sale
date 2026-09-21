<script setup>
defineProps({
  amenities: { type: Array, default: () => [] },
  image: { type: Object, default: null },
})
</script>

<template>
  <section class="resort-amenities">
    <div class="page-shell amenity-grid">
      <div class="amenity-visual">
        <img :src="image?.src" :alt="image?.alt" />
      </div>
      <div>
        <span>Amenities</span>
        <h2>Curated comfort, composed for quiet luxury.</h2>
        <article v-for="amenity in amenities" :key="amenity.title">
          <v-icon :icon="amenity.icon" />
          <div>
            <h3>{{ amenity.title }}</h3>
            <p>{{ amenity.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
