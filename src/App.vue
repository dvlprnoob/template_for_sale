<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>
