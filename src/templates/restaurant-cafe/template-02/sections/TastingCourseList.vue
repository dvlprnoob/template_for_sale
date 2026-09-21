<script setup>
defineProps({ courses: { type: Array, default: () => [] } })
</script>

<template>
  <section class="tasting-menu">
    <div class="page-shell">
      <div class="tasting-heading">
        <span>Tasting menu</span>
        <h2>Quiet courses, local produce, precise service.</h2>
      </div>
      <div class="course-list">
        <article v-for="(course, index) in courses" :key="course.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <img :src="course.image" :alt="course.title" />
          <div>
            <small>{{ course.course }}</small>
            <h3>{{ course.title }}</h3>
            <p>{{ course.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
