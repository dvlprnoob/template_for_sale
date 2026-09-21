<script setup>
import SectionLabel from '@/components/common/SectionLabel.vue'

defineOptions({
  name: 'BaseTestimonialSection',
})

defineProps({
  testimonials: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section v-if="testimonials.length" class="base-testimonial">
    <div class="page-shell">
      <SectionLabel text="Client Words" />
      <v-row class="mt-5">
        <v-col v-for="item in testimonials" :key="item.name" cols="12" md="6">
          <v-card class="quote-card" variant="outlined">
            <v-rating :model-value="item.rating" color="amber" density="compact" readonly size="18" />
            <p>"{{ item.quote }}"</p>
            <strong>{{ item.name }}</strong>
            <span>{{ item.role }}</span>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style scoped>
.base-testimonial {
  padding: 72px 0;
}

.quote-card {
  height: 100%;
  padding: 28px;
  border-radius: 8px;
}

p {
  margin: 18px 0;
  color: var(--market-muted);
  line-height: 1.75;
}

span {
  display: block;
  color: var(--market-muted);
}
</style>
