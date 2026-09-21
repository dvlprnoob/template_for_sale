<script setup>
defineProps({
  doctors: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="clinic-doctors">
    <div class="page-shell doctor-grid">
      <div>
        <span>Doctor Profile</span>
        <h2>Trusted faces before appointment.</h2>
      </div>
      <v-card v-for="doctor in doctors" :key="doctor.name" class="doctor-card">
        <v-avatar color="teal-lighten-4" size="58">{{ doctor.initials }}</v-avatar>
        <h3>{{ doctor.name }}</h3>
        <p>{{ doctor.specialty }}</p>
        <v-chip color="teal" size="small" variant="tonal">{{ doctor.schedule }}</v-chip>
      </v-card>
    </div>
  </section>
</template>
