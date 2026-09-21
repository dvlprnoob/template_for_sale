<script setup>
import data from './data'
import CraftDriveHero from './sections/CraftDriveHero.vue'
import FleetVehicleRange from './sections/FleetVehicleRange.vue'
import MobilityProgramSection from './sections/MobilityProgramSection.vue'
import OperationStatsCTA from './sections/OperationStatsCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'AutomotiveTemplateTwo',
})
</script>

<template>
  <main class="automotive-template-02">
    <CraftDriveHero :template="data" />
    <FleetVehicleRange :template="data" :vehicles="data.vehicles" />
    <MobilityProgramSection :template="data" :programs="data.fleetPrograms" />
    <OperationStatsCTA :stats="data.operationStats" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
