<script setup>
import { openContactAction } from '../../../controllers/contactController'

defineOptions({
  name: 'RealEstateTemplateThree',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="cinematic-residence">
    <section class="cinema-hero">
      <div class="cinema-nav">
        <strong>{{ template.logo }}</strong>
        <span>{{ template.design?.label }}</span>
      </div>
      <img :src="template.heroImage" :alt="template.companyName" />
      <div class="cinema-copy">
        <span>Private Resort Estate</span>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
      </div>
      <div class="scroll-cue">Scroll to explore</div>
    </section>

    <section class="story-panel">
      <div class="page-shell story-grid">
        <div>
          <span>Living Narrative</span>
          <h2>{{ template.about.title }}</h2>
        </div>
        <p>{{ template.about.description }}</p>
      </div>
    </section>

    <section class="amenity-orbit">
      <div class="page-shell orbit-grid">
        <div class="orbit-visual">
          <img :src="template.gallery[0]?.src" :alt="template.gallery[0]?.alt" />
          <div v-for="(service, index) in template.services" :key="service.title" :class="`orbit-pill orbit-pill--${index + 1}`">
            <v-icon :icon="service.icon" />
            <span>{{ service.title }}</span>
          </div>
        </div>
        <div class="orbit-copy">
          <span>Amenities</span>
          <h2>Curated comfort, composed for quiet luxury.</h2>
          <p v-for="service in template.services" :key="service.title">
            <strong>{{ service.title }}</strong> {{ service.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="residence-showcase">
      <div class="page-shell">
        <div class="showcase-heading">
          <span>Selected Residences</span>
          <h2>Three ways to experience the estate.</h2>
        </div>
        <div class="showcase-grid">
          <article v-for="(project, index) in template.projects" :key="project.title" :class="`showcase-card showcase-card--${index + 1}`">
            <img :src="project.image" :alt="project.title" />
            <div>
              <span>{{ project.type }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="metrics-ribbon">
      <div class="page-shell ribbon-grid">
        <div v-for="metric in template.about.metrics" :key="metric.label">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </div>
      </div>
    </section>

    <section class="cinema-cta">
      <div class="page-shell cinema-cta__inner">
        <div>
          <span>Private Viewing</span>
          <h2>{{ template.cta?.title }}</h2>
          <p>{{ template.cta?.description }}</p>
        </div>
        <v-btn color="white" rounded="0" size="large" @click="openContactAction('whatsapp', template.contact, template)">
          {{ template.cta?.primaryLabel }}
        </v-btn>
      </div>
    </section>
  </article>
</template>

<style scoped>
.cinematic-residence {
  background: #fffaf0;
  color: #1f2933;
  font-family: Georgia, "Times New Roman", serif;
}

.cinema-hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  color: #ffffff;
}

.cinema-hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: luxuryZoom 14s ease-in-out infinite alternate;
}

.cinema-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 48%, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.68)),
    linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.7));
}

.cinema-nav {
  position: absolute;
  z-index: 2;
  top: 30px;
  left: max(24px, calc((100vw - 1180px) / 2));
  right: max(24px, calc((100vw - 1180px) / 2));
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.82);
}

.cinema-nav strong {
  font-size: 1.8rem;
}

.cinema-nav span,
.cinema-copy span,
.story-grid span,
.orbit-copy span,
.showcase-heading span,
.showcase-card span,
.cinema-cta span {
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.cinema-copy {
  position: relative;
  z-index: 1;
  width: min(980px, calc(100% - 32px));
  text-align: center;
  animation: cinemaIntro 1100ms ease both;
}

.cinema-copy h1 {
  margin: 20px 0;
  font-size: clamp(4rem, 10vw, 10rem);
  font-weight: 400;
  line-height: 0.86;
}

.cinema-copy p {
  max-width: 700px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.25rem;
  line-height: 1.8;
}

.scroll-cue {
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 28px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.82rem;
  transform: translateX(-50%);
}

.scroll-cue::after {
  content: "";
  display: block;
  width: 1px;
  height: 56px;
  margin: 12px auto 0;
  background: rgba(255, 255, 255, 0.58);
  animation: cueDrop 1.8s ease-in-out infinite;
}

.story-panel,
.residence-showcase {
  padding: 96px 0;
}

.story-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: start;
}

.story-grid h2,
.orbit-copy h2,
.showcase-heading h2,
.cinema-cta h2 {
  margin: 12px 0;
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 400;
  line-height: 1;
}

.story-grid p,
.orbit-copy p,
.showcase-card p,
.cinema-cta p {
  color: #687182;
  line-height: 1.85;
}

.amenity-orbit {
  padding: 96px 0;
  background: #182422;
  color: #fffaf0;
}

.orbit-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 64px;
  align-items: center;
}

.orbit-visual {
  position: relative;
  height: min(70vh, 620px);
}

.orbit-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 999px 999px 20px 20px;
}

.orbit-pill {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border: 1px solid rgba(255, 250, 240, 0.24);
  border-radius: 999px;
  background: rgba(24, 36, 34, 0.78);
  backdrop-filter: blur(12px);
  animation: orbitFloat 3.2s ease-in-out infinite alternate;
}

.orbit-pill--1 {
  top: 12%;
  right: 4%;
}

.orbit-pill--2 {
  left: 5%;
  top: 44%;
  animation-delay: 400ms;
}

.orbit-pill--3 {
  right: 12%;
  bottom: 10%;
  animation-delay: 800ms;
}

.orbit-copy p {
  color: rgba(255, 250, 240, 0.72);
}

.showcase-heading {
  max-width: 760px;
  margin-bottom: 40px;
}

.showcase-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
}

.showcase-card {
  background: #ffffff;
  box-shadow: 0 26px 80px rgba(24, 36, 34, 0.08);
  animation: cardRise 900ms ease both;
}

.showcase-card--1 {
  grid-row: span 2;
}

.showcase-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.showcase-card--1 img {
  height: 620px;
}

.showcase-card div {
  padding: 28px;
}

.showcase-card h3 {
  margin: 10px 0;
  font-size: 1.8rem;
  font-weight: 400;
}

.metrics-ribbon {
  background: #182422;
  color: #fffaf0;
}

.ribbon-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.ribbon-grid div {
  padding: 30px;
  border-left: 1px solid rgba(255, 250, 240, 0.16);
}

.ribbon-grid strong,
.ribbon-grid span {
  display: block;
}

.ribbon-grid strong {
  font-size: 2.3rem;
  font-weight: 400;
}

.cinema-cta {
  padding: 86px 0;
  background:
    linear-gradient(rgba(24, 36, 34, 0.82), rgba(24, 36, 34, 0.82)),
    url('../../../assets/images/real-estate-hero.svg');
  color: #fffaf0;
}

.cinema-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 42px;
}

@keyframes luxuryZoom {
  to {
    transform: scale(1.08);
  }
}

@keyframes cinemaIntro {
  from {
    opacity: 0;
    transform: translateY(36px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes cueDrop {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }

  55% {
    transform: scaleY(1);
    transform-origin: top;
  }

  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

@keyframes orbitFloat {
  to {
    transform: translateY(-12px);
  }
}

@keyframes cardRise {
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 920px) {
  .cinema-nav {
    top: 18px;
  }

  .story-grid,
  .orbit-grid,
  .showcase-grid,
  .ribbon-grid {
    grid-template-columns: 1fr;
  }

  .showcase-card--1 {
    grid-row: auto;
  }

  .showcase-card--1 img,
  .showcase-card img {
    height: 320px;
  }

  .cinema-cta__inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
