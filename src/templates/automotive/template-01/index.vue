<script setup>
import { openContactAction } from '../../../controllers/contactController'

defineOptions({
  name: 'AutomotiveTemplateOne',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="hyundai-inspired">
    <nav class="auto-topbar">
      <strong>{{ template.companyName }}</strong>
      <div>
        <a href="#models">Models</a>
        <a href="#tools">Shopping Tools</a>
        <a href="#service">Care</a>
      </div>
    </nav>

    <section class="campaign-hero">
      <img :src="template.heroImage" :alt="template.companyName" />
      <div class="campaign-hero__copy">
        <span>{{ template.design?.label }}</span>
        <h1>{{ template.companyName }}</h1>
        <p>{{ template.tagline }}</p>
        <div class="campaign-hero__actions">
          <v-btn color="white" rounded="0" @click="openContactAction('whatsapp', template.contact, template)">
            {{ template.cta?.primaryLabel }}
          </v-btn>
          <v-btn color="white" rounded="0" variant="outlined" @click="openContactAction('email', template.contact, template)">
            Get Quote
          </v-btn>
        </div>
      </div>
      <div class="hero-control">
        <span>01</span>
        <div />
        <span>03</span>
      </div>
    </section>

    <section id="models" class="model-range">
      <div class="page-shell">
        <div class="range-heading">
          <span>Model</span>
          <h2>Explore the lineup</h2>
          <p>{{ template.description }}</p>
        </div>
        <div class="model-tabs">
          <button>All</button>
          <button>New Favorite</button>
          <button>Luxury Choice</button>
          <button>Family</button>
        </div>
        <div class="model-grid">
          <article v-for="project in template.projects" :key="project.title" class="model-card">
            <img :src="project.image" :alt="project.title" />
            <div>
              <span>{{ project.type }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <v-btn color="primary" rounded="0" size="small">Detail</v-btn>
              <v-btn color="primary" rounded="0" size="small" variant="outlined">Get Quote</v-btn>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="tools" class="shopping-tools">
      <div class="page-shell tools-grid">
        <article v-for="service in template.services" :key="service.title" class="tool-card">
          <v-icon :icon="service.icon" size="34" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>

    <section id="service" class="aftercare">
      <div class="page-shell aftercare-grid">
        <div>
          <span>Care Program</span>
          <h2>{{ template.about.title }}</h2>
          <p>{{ template.about.description }}</p>
        </div>
        <div class="metric-row">
          <div v-for="metric in template.about.metrics" :key="metric.label">
            <strong>{{ metric.value }}</strong>
            <small>{{ metric.label }}</small>
          </div>
        </div>
      </div>
    </section>

    <section class="dealer-strip">
      <div class="page-shell dealer-strip__inner">
        <div>
          <span>Find dealer</span>
          <h2>{{ template.cta?.title }}</h2>
        </div>
        <v-btn color="primary" rounded="0" size="large" @click="openContactAction('whatsapp', template.contact, template)">
          {{ template.cta?.primaryLabel }}
        </v-btn>
      </div>
    </section>
  </article>
</template>

<style scoped>
.hyundai-inspired {
  background: #f4f6f8;
  color: #101820;
  font-family: "Hyundai Sans Text", "Helvetica Neue", Arial, sans-serif;
}

.auto-topbar {
  position: sticky;
  top: 72px;
  z-index: 6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  padding: 0 max(18px, calc((100vw - 1180px) / 2));
  background: rgba(255, 255, 255, 0.94);
  border-bottom: 1px solid #d8dde3;
  backdrop-filter: blur(14px);
}

.auto-topbar div {
  display: flex;
  gap: 28px;
  color: #52606d;
}

.campaign-hero {
  position: relative;
  min-height: 680px;
  display: grid;
  place-items: center;
  overflow: hidden;
  color: #ffffff;
}

.campaign-hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.campaign-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 20, 35, 0.2), rgba(10, 20, 35, 0.74));
}

.campaign-hero__copy {
  position: relative;
  z-index: 1;
  width: min(900px, calc(100% - 32px));
  text-align: center;
}

.campaign-hero span,
.range-heading span,
.aftercare span {
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 16px 0;
  font-size: clamp(3.4rem, 8vw, 7.2rem);
  line-height: 0.95;
}

.campaign-hero p {
  font-size: 1.28rem;
}

.campaign-hero__actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.hero-control {
  position: absolute;
  z-index: 1;
  right: max(24px, calc((100vw - 1180px) / 2));
  bottom: 28px;
  display: grid;
  grid-template-columns: auto 120px auto;
  gap: 12px;
  align-items: center;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 800;
}

.hero-control div {
  height: 2px;
  background: rgba(255, 255, 255, 0.72);
}

.model-range,
.aftercare {
  padding: 76px 0;
  background: #ffffff;
}

.range-heading {
  max-width: 720px;
  margin: 0 auto 34px;
  text-align: center;
}

.model-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.model-tabs button {
  min-height: 40px;
  padding: 0 18px;
  border: 1px solid #cfd6df;
  background: #ffffff;
  color: #344054;
  font-weight: 800;
}

.model-tabs button:first-child {
  background: #101820;
  color: #ffffff;
}

.range-heading h2,
.aftercare h2 {
  margin: 10px 0;
  font-size: clamp(2.2rem, 4vw, 4rem);
}

.range-heading p,
.aftercare p,
.model-card p,
.tool-card p {
  color: #667085;
  line-height: 1.7;
}

.model-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.model-card {
  background: #f4f6f8;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.model-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 60px rgba(16, 24, 40, 0.14);
}

.model-card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
}

.model-card div {
  padding: 22px;
}

.model-card h3 {
  margin: 8px 0;
  font-size: 1.35rem;
}

.model-card .v-btn {
  margin-right: 8px;
}

.shopping-tools {
  padding: 52px 0;
  background: #101820;
  color: #ffffff;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.tool-card {
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
}

.aftercare-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 40px;
  align-items: center;
}

.metric-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid #d8dde3;
  border-left: 1px solid #d8dde3;
}

.metric-row div {
  padding: 24px;
  border-right: 1px solid #d8dde3;
  border-bottom: 1px solid #d8dde3;
}

.metric-row strong {
  display: block;
  font-size: 2rem;
}

.dealer-strip {
  padding: 48px 0;
  background: #eef2f6;
}

.dealer-strip__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 34px;
  background: #ffffff;
}

.dealer-strip h2 {
  margin: 6px 0 0;
  font-size: clamp(1.8rem, 3vw, 3rem);
}

@media (max-width: 900px) {
  .auto-topbar div {
    display: none;
  }

  .model-grid,
  .tools-grid,
  .aftercare-grid,
  .metric-row {
    grid-template-columns: 1fr;
  }

  .hero-control {
    display: none;
  }

  .dealer-strip__inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
