<script setup>
import data from './data'
import UrbanEditorialHero from './sections/UrbanEditorialHero.vue'
import ListingHighlightSection from './sections/ListingHighlightSection.vue'
import MarketInsightSection from './sections/MarketInsightSection.vue'
import BuyerFlowSection from './sections/BuyerFlowSection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'RealEstateTemplateTwo',
})
</script>

<template>
  <main class="real-estate-template-02">
    <UrbanEditorialHero :template="data" />
    <ListingHighlightSection :listings="data.listingHighlights" />
    <MarketInsightSection :insights="data.marketInsights" />
    <BuyerFlowSection :flow="data.buyerFlow" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
