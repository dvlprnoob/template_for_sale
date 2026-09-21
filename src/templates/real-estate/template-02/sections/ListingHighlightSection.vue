<script setup>
defineProps({ listings: { type: Array, default: () => [] } })
</script>

<template>
  <section class="urban-listings">
    <div class="page-shell">
      <div class="urban-heading">
        <span>Urban Listing</span>
        <h2>Editorial cards for high-value property decisions.</h2>
      </div>
      <div class="urban-listing-grid">
        <article v-for="listing in listings" :key="listing.title">
          <img :src="listing.image" :alt="listing.title" />
          <div>
            <small>{{ listing.category }}</small>
            <h3>{{ listing.title }}</h3>
            <p>{{ listing.description }}</p>
            <strong>{{ listing.value }}</strong>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
