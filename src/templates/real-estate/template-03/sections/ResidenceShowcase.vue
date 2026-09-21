<script setup>
defineProps({ residences: { type: Array, default: () => [] } })
</script>

<template>
  <section class="resort-residences">
    <div class="page-shell">
      <div class="residence-heading">
        <span>Selected Residences</span>
        <h2>Three ways to experience the estate.</h2>
      </div>
      <div class="residence-grid">
        <article v-for="item in residences" :key="item.title">
          <img :src="item.image" :alt="item.title" />
          <div>
            <span>{{ item.type }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
