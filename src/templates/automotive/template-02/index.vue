<script setup>
import { openContactAction } from '../../../controllers/contactController'

defineOptions({
  name: 'AutomotiveTemplateTwo',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="mazda-inspired">
    <nav class="craft-nav">
      <strong>{{ template.companyName }}</strong>
      <div>
        <a href="#range">Range</a>
        <a href="#experience">Experience</a>
        <a href="#quote">Test Drive</a>
      </div>
    </nav>
    <section class="kodo-hero">
      <div class="kodo-hero__image">
        <img :src="template.heroImage" :alt="template.companyName" />
      </div>
      <div class="kodo-hero__copy">
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <div class="spec-line">
          <div v-for="metric in template.about.metrics.slice(0, 3)" :key="metric.label">
            <strong>{{ metric.value }}</strong>
            <small>{{ metric.label }}</small>
          </div>
        </div>
        <v-btn color="white" rounded="0" variant="outlined" @click="openContactAction('whatsapp', template.contact, template)">
          {{ template.cta?.primaryLabel }}
        </v-btn>
      </div>
    </section>

    <section id="range" class="range-editorial">
      <div class="page-shell">
        <div class="editorial-title">
          <span>Explore the range</span>
          <h2>Crafted mobility for refined journeys</h2>
        </div>
        <div class="editorial-grid">
          <article v-for="(project, index) in template.projects" :key="project.title" :class="`editorial-card editorial-card--${index + 1}`">
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

    <section id="experience" class="experience-band">
      <div class="page-shell experience-grid">
        <article v-for="service in template.services" :key="service.title">
          <v-icon :icon="service.icon" size="32" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>

    <section id="quote" class="quote-strip">
      <div class="page-shell quote-grid">
        <div>
          <blockquote>{{ template.testimonials[0]?.quote }}</blockquote>
          <span>{{ template.testimonials[0]?.name }} / {{ template.testimonials[0]?.role }}</span>
        </div>
        <v-btn color="white" rounded="0" size="large" variant="outlined" @click="openContactAction('whatsapp', template.contact, template)">
          {{ template.cta?.primaryLabel }}
        </v-btn>
      </div>
    </section>
  </article>
</template>

<style scoped>
.mazda-inspired {
  background: #08090b;
  color: #ffffff;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.craft-nav {
  position: sticky;
  top: 72px;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 66px;
  padding: 0 max(18px, calc((100vw - 1180px) / 2));
  background: rgba(8, 9, 11, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(16px);
}

.craft-nav strong {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
}

.craft-nav div {
  display: flex;
  gap: 28px;
  color: #b8b8b8;
}

.kodo-hero {
  min-height: 720px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: stretch;
}

.kodo-hero__image {
  min-height: 720px;
  overflow: hidden;
}

.kodo-hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.kodo-hero__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px;
  background: linear-gradient(180deg, #111318, #050607);
}

.kodo-hero__copy span,
.editorial-title span,
.editorial-card span {
  color: #a6a6a6;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1 {
  margin: 18px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.2rem, 7vw, 6.4rem);
  font-weight: 400;
  line-height: 0.98;
}

.kodo-hero__copy p {
  color: #c9c9c9;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 28px;
}

.spec-line {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin: 0 0 28px;
  background: rgba(255, 255, 255, 0.16);
}

.spec-line div {
  padding: 16px;
  background: #111318;
}

.spec-line strong,
.spec-line small {
  display: block;
}

.spec-line small {
  color: #9c9c9c;
}

.range-editorial {
  padding: 86px 0;
  background: #f7f5f2;
  color: #111318;
}

.editorial-title {
  max-width: 680px;
  margin-bottom: 42px;
}

.editorial-title h2 {
  margin: 12px 0 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.3rem, 5vw, 4.4rem);
  font-weight: 400;
}

.editorial-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.editorial-card {
  background: #ffffff;
  box-shadow: 0 24px 70px rgba(17, 19, 24, 0.08);
}

.editorial-card--1 {
  grid-row: span 2;
}

.editorial-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.editorial-card--1 img {
  height: 560px;
}

.editorial-card div {
  padding: 26px;
}

.editorial-card h3 {
  margin: 10px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.5rem;
  font-weight: 400;
}

.editorial-card p,
.experience-grid p {
  color: #667085;
  line-height: 1.7;
}

.experience-band {
  padding: 58px 0;
  background: #111318;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.18);
}

.experience-grid article {
  padding: 34px;
  background: #111318;
  min-height: 220px;
}

.quote-strip {
  padding: 72px 0;
  background: #050607;
}

.quote-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 34px;
}

blockquote {
  max-width: 860px;
  margin: 0 0 18px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.8rem, 4vw, 3.6rem);
  line-height: 1.15;
}

@media (max-width: 900px) {
  .kodo-hero,
  .editorial-grid,
  .experience-grid,
  .spec-line {
    grid-template-columns: 1fr;
  }

  .craft-nav div {
    display: none;
  }

  .kodo-hero__copy {
    padding: 36px 20px;
  }

  .editorial-card--1 {
    grid-row: auto;
  }

  .editorial-card--1 img,
  .editorial-card img {
    height: 300px;
  }

  .quote-grid {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
