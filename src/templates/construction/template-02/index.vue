<script setup>
import data from './data'
import ArchitectureStudioHero from './sections/ArchitectureStudioHero.vue'
import FeaturedSpacesSection from './sections/FeaturedSpacesSection.vue'
import StudioServiceScope from './sections/StudioServiceScope.vue'
import DesignPhaseCTA from './sections/DesignPhaseCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'ConstructionTemplateTwo',
})
</script>

<template>
  <main class="construction-template-02">
    <ArchitectureStudioHero :template="data" />
    <FeaturedSpacesSection :spaces="data.featuredSpaces" />
    <StudioServiceScope :services="data.studioServices" />
    <DesignPhaseCTA :phases="data.designPhases" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
