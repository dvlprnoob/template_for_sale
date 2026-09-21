<script setup>
import data from './data'
import InfraGridHero from './sections/InfraGridHero.vue'
import InfraProjectGrid from './sections/InfraProjectGrid.vue'
import InfraWorkProcess from './sections/InfraWorkProcess.vue'
import CertificationWall from './sections/CertificationWall.vue'
import TenderCTA from './sections/TenderCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'ConstructionTemplateThree',
})
</script>

<template>
  <main class="construction-template-03">
    <InfraGridHero :template="data" />
    <InfraProjectGrid :projects="data.infraProjects" />
    <InfraWorkProcess :process="data.workProcess" />
    <CertificationWall :certifications="data.certifications" />
    <TenderCTA :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
