<script setup>
import data from './data'
import ConstructionHero from './sections/ConstructionHero.vue'
import ProjectShowcase from './sections/ProjectShowcase.vue'
import WorkProcessSection from './sections/WorkProcessSection.vue'
import CertificationSection from './sections/CertificationSection.vue'
import ConsultationCTA from './sections/ConsultationCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'ConstructionTemplateOne',
})
</script>

<template>
  <main class="construction-template-01">
    <ConstructionHero :template="data" />
    <ProjectShowcase :projects="data.projects" />
    <WorkProcessSection :process="data.workProcess" />
    <CertificationSection :certifications="data.certifications" />
    <ConsultationCTA :consultation="data.consultation" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
