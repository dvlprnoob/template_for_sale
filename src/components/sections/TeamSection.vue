<script setup>
defineProps({
  team: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="section-band">
    <div class="page-shell">
      <div class="section-title mb-8">
        <span class="eyebrow">People Behind It</span>
        <h2>Team</h2>
        <p>Profil singkat founder, advisor, chef, dokter, engineer, atau sales consultant.</p>
      </div>
      <v-row>
        <v-col v-for="(member, index) in team" :key="member.name" cols="12" sm="6" md="3">
          <v-card :class="['team-card', `team-card--${index + 1}`]" rounded="lg" variant="flat">
            <v-card-text class="text-center">
              <v-avatar class="team-avatar mb-4" size="76">
                <span>{{ member.initials }}</span>
              </v-avatar>
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style scoped>
.team-card {
  height: 100%;
  border: 1px solid color-mix(in srgb, var(--template-primary), #ffffff 86%);
  background: #ffffff;
  box-shadow: var(--market-shadow-soft);
}

.team-avatar {
  background:
    linear-gradient(135deg, var(--template-primary), var(--template-secondary));
  color: #ffffff;
  font-weight: 900;
}

h3 {
  font-size: 1.05rem;
  margin: 0 0 6px;
}

p {
  color: var(--market-muted);
  margin: 0;
}

.eyebrow {
  display: inline-block;
  color: var(--template-primary);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
  text-transform: uppercase;
}
</style>
