<script setup>
defineProps({
  testimonials: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="section-band testimonial-band">
    <div class="page-shell">
      <div class="section-title mb-8">
        <span class="eyebrow">Client Notes</span>
        <h2>Testimonial</h2>
        <p>Social proof statis untuk membangun trust di preview template.</p>
      </div>

      <v-row>
        <v-col v-for="(testimonial, index) in testimonials" :key="testimonial.name" cols="12" md="6">
          <v-card
            :class="['testimonial-card', `testimonial-card--${index + 1}`]"
            rounded="lg"
            variant="flat"
          >
            <v-card-text>
              <v-rating
                :model-value="testimonial.rating"
                color="amber"
                density="compact"
                readonly
                size="small"
              />
              <blockquote>{{ testimonial.quote }}</blockquote>
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.role }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style scoped>
.testimonial-band {
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--template-secondary), #ffffff 95%), #ffffff);
}

.testimonial-card {
  height: 100%;
  border: 1px solid color-mix(in srgb, var(--template-accent), #ffffff 80%);
  box-shadow: var(--market-shadow-soft);
}

blockquote {
  margin: 16px 0 18px;
  color: var(--template-ink);
  font-size: 1.05rem;
  line-height: 1.75;
}

blockquote::before {
  content: "“";
  color: #344054;
  color: var(--template-primary);
  font-size: 2rem;
  line-height: 0;
}

strong,
span {
  display: block;
}

span {
  color: var(--market-muted);
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
