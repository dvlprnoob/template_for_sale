<script setup>
import data from './data'
import NordicDiningHero from './sections/NordicDiningHero.vue'
import EarthStorySection from './sections/EarthStorySection.vue'
import TastingCourseList from './sections/TastingCourseList.vue'
import DiningRitualLine from './sections/DiningRitualLine.vue'
import NordicReservationCTA from './sections/NordicReservationCTA.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'RestaurantCafeTemplateTwo',
})
</script>

<template>
  <main class="restaurant-cafe-template-02">
    <NordicDiningHero :template="data" />
    <EarthStorySection :about="data.about" />
    <TastingCourseList :courses="data.tastingCourses" />
    <DiningRitualLine :rituals="data.diningRituals" />
    <NordicReservationCTA :reservation="data.reservation" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
