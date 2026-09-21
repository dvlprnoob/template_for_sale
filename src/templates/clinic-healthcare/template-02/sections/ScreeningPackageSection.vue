<script setup>
defineProps({ packages: { type: Array, default: () => [] } })
</script>

<template>
  <section class="screening-packages">
    <div class="page-shell">
      <div class="lab-heading">
        <span>Screening Package</span>
        <h2>Clinical cards built for fast package comparison.</h2>
      </div>
      <div class="screening-grid">
        <article v-for="item in packages" :key="item.title">
          <img :src="item.image" :alt="item.title" />
          <div>
            <span>{{ item.type }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.turnaround }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
