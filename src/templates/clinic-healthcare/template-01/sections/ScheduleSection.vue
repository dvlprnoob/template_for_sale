<script setup>
defineProps({
  schedules: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="clinic-schedule">
    <div class="page-shell">
      <v-card class="schedule-panel">
        <div>
          <span>Schedule</span>
          <h2>Clear clinic hours for mobile users.</h2>
        </div>
        <div class="schedule-list">
          <article v-for="schedule in schedules" :key="schedule.day">
            <strong>{{ schedule.day }}</strong>
            <span>{{ schedule.time }}</span>
            <p>{{ schedule.service }}</p>
          </article>
        </div>
      </v-card>
    </div>
  </section>
</template>
