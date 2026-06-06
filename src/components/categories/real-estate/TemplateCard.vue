<script setup>
defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <v-card class="estate-card" variant="flat">
    <div class="estate-card__media">
      <img :src="template.heroImage" :alt="template.companyName" />
    </div>
    <v-card-text>
      <span>{{ template.design?.label }}</span>
      <h3>{{ template.companyName }}</h3>
      <p>{{ template.description }}</p>
    </v-card-text>
    <v-card-actions class="px-4 pb-4">
      <v-btn block color="primary" rounded="0" :to="{ name: 'preview', params: { categorySlug: template.categorySlug, templateSlug: template.slug } }">
        Preview Property
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.estate-card {
  height: 100%;
  border: 1px solid rgba(196, 154, 74, 0.36);
  background: #fffdf7;
  box-shadow: none;
}

.estate-card__media {
  height: 250px;
  padding: 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

span {
  color: var(--template-accent, #c49a4a);
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
  color: var(--market-muted);
  line-height: 1.65;
}
</style>
