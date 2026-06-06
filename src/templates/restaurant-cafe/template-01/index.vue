<script setup>
import { openContactAction } from '../../../controllers/contactController'

defineOptions({
  name: 'RestaurantCafeTemplateOne',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="burger-playground">
    <nav class="burger-nav">
      <strong>{{ template.logo }}</strong>
      <div>
        <a href="#menu">Burgers</a>
        <a href="#story">Story</a>
        <a href="#locations">Locations</a>
      </div>
      <v-btn color="orange-darken-3" rounded="pill" @click="openContactAction('whatsapp', template.contact, template)">
        Reserve
      </v-btn>
    </nav>

    <section class="burger-hero">
      <div class="marquee">BURGERS FOR PEOPLE • SEASON MENU • RESERVE NOW •</div>
      <div class="page-shell burger-hero__grid">
        <div class="burger-copy">
          <span>{{ template.design?.label }}</span>
          <h1>{{ template.companyName }}</h1>
          <p>{{ template.tagline }}</p>
          <div class="burger-actions">
            <v-btn color="orange-darken-3" rounded="pill" size="large" @click="openContactAction('whatsapp', template.contact, template)">
              {{ template.cta?.primaryLabel }}
            </v-btn>
            <v-btn color="brown-darken-4" rounded="pill" size="large" variant="outlined" @click="openContactAction('email', template.contact, template)">
              Order Gift Card
            </v-btn>
          </div>
        </div>
        <div class="burger-plate">
          <img :src="template.heroImage" :alt="template.companyName" />
          <div class="month-badge">
            <strong>BOTM</strong>
            <small>Burger of the month</small>
          </div>
        </div>
      </div>
    </section>

    <section id="menu" class="burger-menu">
      <div class="page-shell">
        <div class="burger-heading">
          <span>Menukaart</span>
          <h2>Seasonal burger cards with big appetite energy.</h2>
        </div>
        <div class="burger-card-grid">
          <article v-for="(project, index) in template.projects" :key="project.title" :class="`burger-card burger-card--${index + 1}`">
            <img :src="project.image" :alt="project.title" />
            <div>
              <span>{{ project.type }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <strong>Fresh grind • house sauce • fries ready</strong>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="story" class="burger-feed">
      <div class="page-shell feed-grid">
        <article v-for="service in template.services" :key="service.title">
          <v-icon :icon="service.icon" size="36" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>

    <section id="locations" class="location-panel">
      <div class="page-shell location-grid">
        <div>
          <span>Opening hours</span>
          <h2>{{ template.about.title }}</h2>
          <p>{{ template.about.description }}</p>
        </div>
        <div class="location-list">
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
.burger-playground {
  overflow: hidden;
  background: #ffefc7;
  color: #2b170f;
  font-family: "Arial Black", Impact, sans-serif;
}

.burger-nav {
  position: sticky;
  top: 72px;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  padding: 0 max(18px, calc((100vw - 1180px) / 2));
  background: rgba(255, 239, 199, 0.94);
  border-bottom: 3px solid #2b170f;
  backdrop-filter: blur(14px);
}

.burger-nav strong {
  font-size: 2rem;
}

.burger-nav div {
  display: flex;
  gap: 28px;
}

.burger-hero {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 78% 25%, rgba(154, 52, 18, 0.18), transparent 32%),
    #ffefc7;
}

.marquee {
  position: absolute;
  left: -5%;
  right: -5%;
  top: 24px;
  white-space: nowrap;
  color: rgba(43, 23, 15, 0.12);
  font-size: clamp(3rem, 8vw, 7rem);
  animation: marqueeMove 16s linear infinite;
}

.burger-hero__grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: center;
}

.burger-copy {
  position: relative;
  z-index: 1;
}

.burger-copy span,
.burger-heading span,
.location-panel span {
  color: #9a3412;
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h1 {
  margin: 18px 0;
  font-size: clamp(4rem, 10vw, 9rem);
  line-height: 0.82;
  text-transform: uppercase;
  text-shadow: 5px 5px 0 #d4a64f;
}

.burger-copy p {
  max-width: 620px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.25rem;
  line-height: 1.75;
}

.burger-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.burger-plate {
  position: relative;
  height: min(62vh, 540px);
  border: 4px solid #2b170f;
  border-radius: 42px;
  background: #fff7ed;
  box-shadow: 16px 16px 0 #9a3412;
  transform: rotate(2deg);
}

.burger-plate img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 38px;
}

.month-badge {
  position: absolute;
  right: -18px;
  bottom: 28px;
  display: grid;
  gap: 2px;
  width: 136px;
  height: 136px;
  place-items: center;
  border-radius: 999px;
  background: #2b170f;
  color: #ffefc7;
  text-align: center;
  animation: badgeWobble 2.6s ease-in-out infinite alternate;
}

.month-badge strong {
  font-size: 2rem;
}

.month-badge small {
  max-width: 86px;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.burger-menu,
.location-panel {
  padding: 86px 0;
  background: #fff7ed;
}

.burger-heading {
  max-width: 760px;
  margin-bottom: 38px;
}

.burger-heading h2,
.location-panel h2 {
  margin: 10px 0;
  font-size: clamp(2.4rem, 6vw, 5rem);
  line-height: 0.95;
  text-transform: uppercase;
}

.burger-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.burger-card {
  border: 3px solid #2b170f;
  background: #ffefc7;
  box-shadow: 10px 10px 0 #d4a64f;
}

.burger-card--2 {
  transform: rotate(-1.3deg);
}

.burger-card--3 {
  transform: rotate(1.3deg);
}

.burger-card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-bottom: 3px solid #2b170f;
}

.burger-card div {
  padding: 22px;
}

.burger-card h3 {
  margin: 8px 0;
  font-size: 1.45rem;
  text-transform: uppercase;
}

.burger-card p,
.burger-card strong,
.feed-grid p,
.location-panel p {
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #6b3b2a;
  line-height: 1.65;
}

.burger-feed {
  padding: 64px 0;
  background: #2b170f;
  color: #ffefc7;
}

.feed-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.feed-grid article {
  min-height: 230px;
  padding: 28px;
  border: 2px dashed #ffefc7;
}

.feed-grid h3 {
  font-size: 1.4rem;
  text-transform: uppercase;
}

.location-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 42px;
  align-items: center;
}

.location-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 2px solid #2b170f;
  border-left: 2px solid #2b170f;
}

.location-list div {
  padding: 24px;
  border-right: 2px solid #2b170f;
  border-bottom: 2px solid #2b170f;
}

.location-list strong,
.location-list span {
  display: block;
}

.location-list strong {
  font-size: 2rem;
}

@keyframes marqueeMove {
  to {
    transform: translateX(-22%);
  }
}

@keyframes badgeWobble {
  to {
    transform: rotate(7deg) scale(1.04);
  }
}

@media (max-width: 920px) {
  .burger-nav div {
    display: none;
  }

  .burger-hero {
    padding: 58px 0;
  }

  .burger-hero__grid,
  .burger-card-grid,
  .feed-grid,
  .location-grid,
  .location-list {
    grid-template-columns: 1fr;
  }
}
</style>
