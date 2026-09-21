<script setup>
import data from './data'
import RealEstateHero from './sections/RealEstateHero.vue'
import PropertyShowcase from './sections/PropertyShowcase.vue'
import FacilitySection from './sections/FacilitySection.vue'
import UnitTypeSection from './sections/UnitTypeSection.vue'
import LocationSection from './sections/LocationSection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'RealEstateTemplateOne',
})
</script>

<template>
  <main class="real-estate-template-01">
    <RealEstateHero :template="data" />
    <PropertyShowcase :projects="data.projects" />
    <FacilitySection :facilities="data.facilities" />
    <UnitTypeSection :units="data.units" />
    <LocationSection :location="data.location" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
