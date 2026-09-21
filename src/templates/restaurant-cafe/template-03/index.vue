<script setup>
import data from './data'
import FrenchEditorialHero from './sections/FrenchEditorialHero.vue'
import AlimentationArticleFeed from './sections/AlimentationArticleFeed.vue'
import CafeGuideColumns from './sections/CafeGuideColumns.vue'
import EditorialReservationCTA from './sections/EditorialReservationCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'RestaurantCafeTemplateThree',
})
</script>

<template>
  <main class="restaurant-cafe-template-03">
    <FrenchEditorialHero :template="data" />
    <AlimentationArticleFeed :articles="data.articles" />
    <CafeGuideColumns :guides="data.cafeGuides" />
    <EditorialReservationCTA :reservation="data.editorialReservation" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
