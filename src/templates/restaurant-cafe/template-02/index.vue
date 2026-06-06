<script setup>
import { openContactAction } from '../../../controllers/contactController'

defineOptions({
  name: 'RestaurantCafeTemplateTwo',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="nordic-dining">
    <section class="nordic-hero">
      <img :src="template.heroImage" :alt="template.companyName" />
      <div class="nordic-nav">
        <strong>{{ template.companyName }}</strong>
        <span>Oslo / Seasonal / Eight tables</span>
      </div>
      <div class="nordic-copy">
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <v-btn color="white" rounded="0" variant="outlined" @click="openContactAction('whatsapp', template.contact, template)">
          {{ template.cta?.primaryLabel }}
        </v-btn>
      </div>
    </section>

    <section class="earth-story">
      <div class="page-shell earth-grid">
        <div>
          <span>Mother earth</span>
          <h2>{{ template.about.title }}</h2>
        </div>
        <p>{{ template.about.description }}</p>
      </div>
    </section>

    <section class="tasting-menu">
      <div class="page-shell">
        <div class="tasting-heading">
          <span>Tasting menu</span>
          <h2>Quiet courses, local produce, precise service.</h2>
        </div>
        <div class="course-list">
          <article v-for="(project, index) in template.projects" :key="project.title">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <img :src="project.image" :alt="project.title" />
            <div>
              <small>{{ project.type }}</small>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="nordic-service">
      <div class="page-shell service-line">
        <article v-for="service in template.services" :key="service.title">
          <v-icon :icon="service.icon" size="28" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>

    <section class="reservation-panel">
      <div class="page-shell reservation-grid">
        <div>
          <span>Reservation requested</span>
          <h2>{{ template.cta?.title }}</h2>
          <p>{{ template.cta?.description }}</p>
        </div>
        <div class="table-metrics">
          <div v-for="metric in template.about.metrics" :key="metric.label">
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.nordic-dining {
  background: #070808;
  color: #f2f0ea;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.nordic-hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.nordic-hero > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.28) brightness(0.72);
  animation: nordicZoom 14s ease-in-out infinite alternate;
}

.nordic-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(7, 8, 8, 0.2), rgba(7, 8, 8, 0.82));
}

.nordic-nav {
  position: absolute;
  z-index: 2;
  top: 28px;
  left: max(24px, calc((100vw - 1180px) / 2));
  right: max(24px, calc((100vw - 1180px) / 2));
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(242, 240, 234, 0.78);
}

.nordic-copy {
  position: relative;
  z-index: 1;
  width: min(900px, calc(100% - 32px));
  text-align: center;
  animation: quietRise 1100ms ease both;
}

.nordic-copy span,
.earth-grid span,
.tasting-heading span,
.reservation-grid span {
  color: #c9c2b4;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

h1 {
  margin: 22px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(4rem, 10vw, 10rem);
  font-weight: 400;
  line-height: 0.86;
}

.nordic-copy p {
  max-width: 680px;
  margin: 0 auto 28px;
  color: rgba(242, 240, 234, 0.72);
  line-height: 1.8;
}

.earth-story,
.tasting-menu {
  padding: 96px 0;
  background: #f2f0ea;
  color: #171717;
}

.earth-grid,
.reservation-grid {
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 64px;
  align-items: start;
}

.earth-grid h2,
.tasting-heading h2,
.reservation-grid h2 {
  margin: 12px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 400;
  line-height: 1;
}

.earth-grid p,
.course-list p,
.service-line p,
.reservation-grid p {
  color: #667085;
  line-height: 1.85;
}

.tasting-heading {
  max-width: 760px;
  margin-bottom: 42px;
}

.course-list {
  display: grid;
  gap: 1px;
  background: rgba(23, 23, 23, 0.18);
}

.course-list article {
  display: grid;
  grid-template-columns: 70px 260px 1fr;
  gap: 28px;
  align-items: center;
  padding: 18px;
  background: #f8f6ef;
}

.course-list article > span {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2rem;
}

.course-list img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

.course-list h3 {
  margin: 8px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.6rem;
  font-weight: 400;
}

.nordic-service {
  padding: 70px 0;
  background: #111;
}

.service-line {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(242, 240, 234, 0.16);
}

.service-line article {
  padding: 34px;
  background: #111;
}

.service-line h3 {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
}

.reservation-panel {
  padding: 90px 0;
  background: #070808;
}

.table-metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid rgba(242, 240, 234, 0.18);
  border-left: 1px solid rgba(242, 240, 234, 0.18);
}

.table-metrics div {
  padding: 28px;
  border-right: 1px solid rgba(242, 240, 234, 0.18);
  border-bottom: 1px solid rgba(242, 240, 234, 0.18);
}

.table-metrics strong,
.table-metrics span {
  display: block;
}

.table-metrics strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2rem;
  font-weight: 400;
}

@keyframes nordicZoom {
  to {
    transform: scale(1.08);
  }
}

@keyframes quietRise {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 920px) {
  .nordic-nav {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .earth-grid,
  .reservation-grid,
  .service-line,
  .table-metrics,
  .course-list article {
    grid-template-columns: 1fr;
  }
}
</style>
