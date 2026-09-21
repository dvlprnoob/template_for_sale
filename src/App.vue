<script setup>
import { RouterView } from 'vue-router'
import TemplateNavbar from './components/common/TemplateNavbar.vue'
import TemplateFooter from './components/common/TemplateFooter.vue'
</script>

<template>
  <v-app>
    <TemplateNavbar />
    <v-main>
      <RouterView />
    </v-main>
    <TemplateFooter />
  </v-app>
</template>
