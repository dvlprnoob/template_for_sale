<script setup>
defineProps({
  menus: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="food-menu">
    <div class="page-shell">
      <div class="food-heading">
        <span>Menukaart</span>
        <h2>Big product cards with appetite energy.</h2>
      </div>
      <div class="food-menu-grid">
        <article v-for="(menu, index) in menus" :key="menu.name" :class="`food-menu-card food-menu-card--${index + 1}`">
          <img :src="menu.image" :alt="menu.name" />
          <div>
            <v-chip color="orange-darken-3" size="small">{{ menu.category }}</v-chip>
            <h3>{{ menu.name }}</h3>
            <p>{{ menu.description }}</p>
            <strong>{{ menu.price }}</strong>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
