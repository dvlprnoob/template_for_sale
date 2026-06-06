<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getCategories } from '../../controllers/templateController'

defineOptions({
  name: 'AppNavbar',
})

const drawer = ref(false)
const route = useRoute()
const categories = getCategories()
</script>

<template>
  <v-app-bar class="subtle-border" color="white" height="72" flat>
    <div class="page-shell d-flex align-center ga-4">
      <RouterLink class="brand-lockup" to="/">
        <v-avatar color="primary" rounded="lg" size="38">
          <v-icon icon="mdi-view-dashboard-outline" />
        </v-avatar>
        <span>ProfileKit</span>
      </RouterLink>

      <v-spacer />

      <div class="desktop-nav">
        <v-btn
          v-for="category in categories"
          :key="category.slug"
          :to="{ name: 'gallery', params: { categorySlug: category.slug } }"
          :variant="route.params.categorySlug === category.slug ? 'tonal' : 'text'"
          color="primary"
          rounded="lg"
        >
          {{ category.name }}
        </v-btn>
      </div>

      <v-btn class="mobile-nav-button" icon="mdi-menu" variant="text" @click="drawer = true" />
    </div>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="right" width="310">
    <v-list nav density="comfortable">
      <v-list-item
        v-for="category in categories"
        :key="category.slug"
        :prepend-icon="category.icon"
        :title="category.name"
        :to="{ name: 'gallery', params: { categorySlug: category.slug } }"
        @click="drawer = false"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.brand-lockup {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  color: #172033;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mobile-nav-button {
  display: none;
}

@media (max-width: 960px) {
  .desktop-nav {
    display: none;
  }

  .mobile-nav-button {
    display: inline-grid;
  }
}
</style>
