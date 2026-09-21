<script setup>
import data from './data'
import ClinicHero from './sections/ClinicHero.vue'
import MedicalServiceSection from './sections/MedicalServiceSection.vue'
import DoctorSection from './sections/DoctorSection.vue'
import ScheduleSection from './sections/ScheduleSection.vue'
import AppointmentCTA from './sections/AppointmentCTA.vue'
import PatientStorySection from './sections/PatientStorySection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

defineOptions({
  name: 'ClinicHealthcareTemplateOne',
})
</script>

<template>
  <main class="clinic-healthcare-template-01">
    <ClinicHero :template="data" />
    <MedicalServiceSection :services="data.medicalServices" />
    <DoctorSection :doctors="data.doctors" />
    <ScheduleSection :schedules="data.schedules" />
    <PatientStorySection :testimonials="data.testimonials" />
    <AppointmentCTA :appointment="data.appointment" :template="data" />
    <ContactSection :template="data" />
    <FooterSection :template="data" />
  </main>
</template>

<style src="./style.css"></style>
