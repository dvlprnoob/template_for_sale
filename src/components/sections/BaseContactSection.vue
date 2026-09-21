<script setup>
defineOptions({
  name: 'BaseContactSection',
})

defineProps({
  contact: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="base-contact">
    <div class="page-shell">
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="contact-tile" variant="outlined">
            <v-icon icon="mdi-whatsapp" size="28" />
            <span>WhatsApp</span>
            <strong>{{ contact.whatsapp }}</strong>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="contact-tile" variant="outlined">
            <v-icon icon="mdi-email-outline" size="28" />
            <span>Email</span>
            <strong>{{ contact.email }}</strong>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="contact-tile" variant="outlined">
            <v-icon icon="mdi-map-marker-outline" size="28" />
            <span>Address</span>
            <strong>{{ contact.address }}</strong>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style scoped>
.base-contact {
  padding: 60px 0;
  background: color-mix(in srgb, var(--template-surface, #fff), #f6f8fb 72%);
}

.contact-tile {
  height: 100%;
  display: grid;
  gap: 10px;
  padding: 24px;
  border-radius: 8px;
}

.contact-tile span {
  color: var(--market-muted);
  font-size: 0.82rem;
  text-transform: uppercase;
}
</style>
