<script setup>
import ContactButton from './ContactButton.vue'
import SectionLabel from './SectionLabel.vue'

defineProps({
  location: {
    type: Object,
    required: true,
  },
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="re-location">
    <div class="page-shell re-location__grid">
      <div>
        <SectionLabel text="Location" />
        <h2>{{ location.title }}</h2>
        <p>{{ location.description }}</p>
        <ContactButton color="secondary" :contact="template.contact" :template="template" rounded="0" />
      </div>
      <v-card class="re-map-card" variant="outlined">
        <v-icon icon="mdi-map-marker-radius-outline" size="46" />
        <ul>
          <li v-for="point in location.points" :key="point">{{ point }}</li>
        </ul>
      </v-card>
    </div>
  </section>
</template>
