<script setup>
import data from './data'
import DentalAppointmentHero from './sections/DentalAppointmentHero.vue'
import DoctorScheduleCards from './sections/DoctorScheduleCards.vue'
import DentalTreatmentSection from './sections/DentalTreatmentSection.vue'
import AppointmentDeskCTA from './sections/AppointmentDeskCTA.vue'
import PatientStorySection from './sections/PatientStorySection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'ClinicHealthcareTemplateThree',
})
</script>

<template>
  <main class="clinic-healthcare-template-03">
    <DentalAppointmentHero :template="data" />
    <DoctorScheduleCards :doctors="data.doctors" :schedules="data.schedules" />
    <DentalTreatmentSection :treatments="data.dentalTreatments" />
    <PatientStorySection :testimonials="data.testimonials" />
    <AppointmentDeskCTA :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
