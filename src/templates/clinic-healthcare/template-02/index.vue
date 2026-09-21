<script setup>
import data from './data'
import DiagnosticHero from './sections/DiagnosticHero.vue'
import LabServiceGrid from './sections/LabServiceGrid.vue'
import ScreeningPackageSection from './sections/ScreeningPackageSection.vue'
import LabFlowCTA from './sections/LabFlowCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'ClinicHealthcareTemplateTwo',
})
</script>

<template>
  <main class="clinic-healthcare-template-02">
    <DiagnosticHero :template="data" />
    <LabServiceGrid :services="data.labServices" />
    <ScreeningPackageSection :packages="data.screeningPackages" />
    <LabFlowCTA :flow="data.labFlow" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
