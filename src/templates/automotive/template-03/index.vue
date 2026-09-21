<script setup>
import data from './data'
import GaragePromoHero from './sections/GaragePromoHero.vue'
import SparepartPromoBoard from './sections/SparepartPromoBoard.vue'
import GarageServiceLane from './sections/GarageServiceLane.vue'
import WorkshopCTA from './sections/WorkshopCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'AutomotiveTemplateThree',
})
</script>

<template>
  <main class="automotive-template-03">
    <GaragePromoHero :template="data" />
    <SparepartPromoBoard :promos="data.promos" />
    <GarageServiceLane :services="data.garageServices" :stats="data.sparepartHighlights" />
    <WorkshopCTA :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
