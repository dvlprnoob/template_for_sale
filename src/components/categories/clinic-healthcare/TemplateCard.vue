<script setup>
defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <v-card class="clinic-card" variant="flat">
    <div class="clinic-card__media">
      <img :src="template.heroImage" :alt="template.companyName" />
    </div>
    <v-card-text>
      <v-chip color="primary" rounded="xl" size="small" variant="tonal">{{ template.design?.label }}</v-chip>
      <h3>{{ template.companyName }}</h3>
      <p>{{ template.description }}</p>
    </v-card-text>
    <v-card-actions class="px-4 pb-4">
      <v-btn block color="primary" rounded="xl" :to="{ name: 'preview', params: { categorySlug: template.categorySlug, templateSlug: template.slug } }">
        Preview Care
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.clinic-card {
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(120, 185, 168, 0.38);
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0 20px 50px rgba(74, 144, 164, 0.1);
}

.clinic-card__media {
  height: 220px;
  margin: 12px;
  overflow: hidden;
  border-radius: 24px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h3 {
  margin: 14px 0 8px;
  font-size: 1.35rem;
}

p {
  color: #5c7376;
  line-height: 1.65;
}
</style>
