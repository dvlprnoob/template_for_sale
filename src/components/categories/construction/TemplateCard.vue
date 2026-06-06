<script setup>
defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <v-card class="construction-card" variant="flat">
    <div class="construction-card__media">
      <img :src="template.heroImage" :alt="template.companyName" />
    </div>
    <v-card-text>
      <span>{{ template.design?.label }}</span>
      <h3>{{ template.companyName }}</h3>
      <p>{{ template.description }}</p>
    </v-card-text>
    <v-card-actions class="px-4 pb-4">
      <v-btn block color="amber-darken-2" rounded="0" :to="{ name: 'preview', params: { categorySlug: template.categorySlug, templateSlug: template.slug } }">
        Preview Project
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.construction-card {
  height: 100%;
  border: 2px solid #252525;
  border-radius: 0;
  background: #f7f5ef;
  box-shadow: 10px 10px 0 #f5c542;
}

.construction-card__media {
  height: 230px;
  overflow: hidden;
  border-bottom: 2px solid #252525;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

span {
  color: #9a5f22;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h3 {
  margin: 10px 0;
  font-family: "Arial Black", Impact, sans-serif;
  text-transform: uppercase;
}

p {
  color: #475467;
  line-height: 1.6;
}
</style>
