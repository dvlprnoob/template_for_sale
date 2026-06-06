<script setup>
defineProps({
  services: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="section-band services-band">
    <div class="page-shell">
      <div class="section-title mb-8">
        <span class="eyebrow">What We Do</span>
        <h2>Layanan Utama</h2>
        <p>Paket konten section dapat diubah dari file data template tanpa backend.</p>
      </div>

      <v-row>
        <v-col v-for="(service, index) in services" :key="service.title" cols="12" md="4">
          <v-card
            :class="['service-card elevated-panel', `service-card--${index + 1}`]"
            rounded="lg"
            variant="flat"
          >
            <v-card-text>
              <v-avatar class="service-icon mb-5" rounded="lg">
                <v-icon :icon="service.icon" />
              </v-avatar>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style scoped>
.services-band {
  background:
    linear-gradient(180deg, #ffffff 0%, color-mix(in srgb, var(--template-primary), #ffffff 96%) 100%);
}

.service-card {
  height: 100%;
  background: #ffffff;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--market-shadow);
}

.service-icon {
  background: color-mix(in srgb, var(--template-primary), #ffffff 88%);
  color: var(--template-primary);
}

h3 {
  margin: 0 0 10px;
  font-size: 1.18rem;
}

p {
  color: var(--market-muted);
  line-height: 1.65;
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
