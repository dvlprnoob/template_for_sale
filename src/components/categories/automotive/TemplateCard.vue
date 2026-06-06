<script setup>
defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <v-card class="auto-card" variant="flat">
    <div class="auto-card__media">
      <img :src="template.heroImage" :alt="template.companyName" />
      <strong>{{ template.logo }}</strong>
    </div>
    <v-card-text>
      <v-chip color="red-darken-3" size="small" variant="flat">{{ template.design?.label }}</v-chip>
      <h3>{{ template.companyName }}</h3>
      <p>{{ template.description }}</p>
    </v-card-text>
    <v-card-actions class="px-4 pb-4">
      <v-btn block color="red-darken-3" rounded="0" :to="{ name: 'preview', params: { categorySlug: template.categorySlug, templateSlug: template.slug } }">
        Preview Drive
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.auto-card {
  height: 100%;
  overflow: hidden;
  border: 2px solid #1b1f27;
  background: #111827;
  color: #ffffff;
  box-shadow: 8px 8px 0 #a51f2d;
  clip-path: polygon(0 0, 100% 0, calc(100% - 18px) 100%, 0 100%);
}

.auto-card__media {
  position: relative;
  height: 230px;
  overflow: hidden;
}

img {
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: translateX(-5%);
}

.auto-card__media strong {
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 2.4rem;
}

h3 {
  margin: 14px 0 8px;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 1.55rem;
  text-transform: uppercase;
}

p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}
</style>
