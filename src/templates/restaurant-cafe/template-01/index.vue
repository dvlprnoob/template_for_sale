<script setup>
import data from './data'
import RestaurantHero from './sections/RestaurantHero.vue'
import MenuHighlightSection from './sections/MenuHighlightSection.vue'
import AmbienceGallery from './sections/AmbienceGallery.vue'
import ChefRecommendation from './sections/ChefRecommendation.vue'
import ReservationCTA from './sections/ReservationCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'RestaurantCafeTemplateOne',
})
</script>

<template>
  <main class="restaurant-cafe-template-01">
    <RestaurantHero :template="data" />
    <MenuHighlightSection :menus="data.menus" />
    <AmbienceGallery :gallery="data.gallery" />
    <ChefRecommendation :recommendations="data.chefRecommendations" />
    <ReservationCTA :reservation="data.reservation" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
