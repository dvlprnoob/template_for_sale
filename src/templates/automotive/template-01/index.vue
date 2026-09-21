<script setup>
import data from './data'
import AutomotiveHero from './sections/AutomotiveHero.vue'
import VehicleShowcase from './sections/VehicleShowcase.vue'
import GarageServiceSection from './sections/GarageServiceSection.vue'
import PromoSection from './sections/PromoSection.vue'
import TestDriveCTA from './sections/TestDriveCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'AutomotiveTemplateOne',
})
</script>

<template>
  <main class="automotive-template-01">
    <AutomotiveHero :template="data" />
    <VehicleShowcase :template="data" :vehicles="data.vehicles" />
    <GarageServiceSection :template="data" :services="data.garageServices" />
    <PromoSection :template="data" :promos="data.promos" />
    <TestDriveCTA :template="data" :test-drive="data.testDrive" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
