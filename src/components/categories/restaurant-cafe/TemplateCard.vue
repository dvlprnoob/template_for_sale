<script setup>
defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <v-card class="restaurant-card" variant="flat">
    <div class="restaurant-card__media">
      <img :src="template.heroImage" :alt="template.companyName" />
    </div>
    <v-card-text>
      <span>{{ template.design?.label }}</span>
      <h3>{{ template.companyName }}</h3>
      <p>{{ template.description }}</p>
    </v-card-text>
    <v-card-actions class="px-4 pb-4">
      <v-btn block color="deep-orange-darken-3" rounded="lg" :to="{ name: 'preview', params: { categorySlug: template.categorySlug, templateSlug: template.slug } }">
        Preview Menu
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.restaurant-card {
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(123, 63, 42, 0.22);
  border-radius: 999px 999px 22px 22px;
  background: #fff7ed;
  box-shadow: 0 22px 60px rgba(123, 63, 42, 0.14);
}

.restaurant-card__media {
  height: 260px;
  overflow: hidden;
  border-radius: 999px 999px 0 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

span {
  color: #b86b4b;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h3 {
  margin: 10px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.55rem;
}

p {
  color: #6b3b2a;
  line-height: 1.65;
}
</style>
