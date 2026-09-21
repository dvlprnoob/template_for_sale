<script setup>
import data from './data'
import ResortHero from './sections/ResortHero.vue'
import ResortStory from './sections/ResortStory.vue'
import AmenityOrbit from './sections/AmenityOrbit.vue'
import ResidenceShowcase from './sections/ResidenceShowcase.vue'
import PrivateViewingCTA from './sections/PrivateViewingCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'RealEstateTemplateThree',
})
</script>

<template>
  <main class="real-estate-template-03">
    <ResortHero :template="data" />
    <ResortStory :about="data.about" />
    <AmenityOrbit :amenities="data.amenities" :image="data.gallery[0]" />
    <ResidenceShowcase :residences="data.residences" />
    <PrivateViewingCTA :viewing="data.privateViewing" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
