<script setup>
defineProps({
  doctors: { type: Array, default: () => [] },
  schedules: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="dental-schedule">
    <div class="page-shell dental-schedule__grid">
      <article v-for="doctor in doctors" :key="doctor.name" class="doctor-bubble">
        <v-avatar color="teal-lighten-4" size="56">{{ doctor.initials }}</v-avatar>
        <h3>{{ doctor.name }}</h3>
        <p>{{ doctor.specialty }}</p>
        <span>{{ doctor.schedule }}</span>
      </article>
      <div class="schedule-board">
        <div v-for="schedule in schedules" :key="schedule.day">
          <strong>{{ schedule.day }}</strong>
          <span>{{ schedule.time }}</span>
          <p>{{ schedule.doctor }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
