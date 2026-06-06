<script setup>
import { openContactAction } from '../../../controllers/contactController'

defineOptions({
  name: 'RestaurantCafeTemplateThree',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="gustave-editorial">
    <nav class="gustave-nav">
      <strong>{{ template.companyName }}</strong>
      <div>
        <a href="#alimentation">Alimentation</a>
        <a href="#cafe">Cafe</a>
        <a href="#reserve">Reserve</a>
      </div>
    </nav>

    <header class="magazine-hero">
      <div class="page-shell magazine-grid">
        <div class="magazine-copy">
          <span>{{ template.design?.label }}</span>
          <h1>{{ template.companyName }}</h1>
          <p>{{ template.tagline }}</p>
          <v-btn color="deep-orange-darken-3" rounded="0" @click="openContactAction('whatsapp', template.contact, template)">
            {{ template.cta?.primaryLabel }}
          </v-btn>
        </div>
        <div class="magazine-cover">
          <img :src="template.heroImage" :alt="template.companyName" />
          <div class="cover-label">Alimentation / Cafe / Culture</div>
        </div>
      </div>
    </header>

    <section id="alimentation" class="article-feed">
      <div class="page-shell">
        <div class="feed-heading">
          <span>Derniers articles</span>
          <h2>Food stories, menu notes, and cafe rituals.</h2>
        </div>
        <div class="article-grid">
          <article v-for="(project, index) in template.projects" :key="project.title" :class="`article-card article-card--${index + 1}`">
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

    <section id="cafe" class="cafe-columns">
      <div class="page-shell columns-grid">
        <article v-for="service in template.services" :key="service.title">
          <span>Guide</span>
          <v-icon :icon="service.icon" size="32" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>

    <section id="reserve" class="gustave-cta">
      <div class="page-shell gustave-box">
        <div>
          <span>Reservation</span>
          <h2>{{ template.cta?.title }}</h2>
          <p>{{ template.cta?.description }}</p>
        </div>
        <v-btn color="deep-orange-darken-3" rounded="0" size="large" @click="openContactAction('whatsapp', template.contact, template)">
          {{ template.cta?.primaryLabel }}
        </v-btn>
      </div>
    </section>
  </article>
</template>

<style scoped>
.gustave-editorial {
  background: #fff7ed;
  color: #2a1710;
  font-family: "Courier New", Courier, monospace;
}

.gustave-nav {
  position: sticky;
  top: 72px;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  padding: 0 max(18px, calc((100vw - 1180px) / 2));
  border-bottom: 1px solid #2a1710;
  background: rgba(255, 247, 237, 0.94);
  backdrop-filter: blur(14px);
}

.gustave-nav div {
  display: flex;
  gap: 26px;
}

.magazine-hero {
  min-height: 720px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(90deg, rgba(42, 23, 16, 0.08) 0 1px, transparent 1px 90px),
    #fff7ed;
}

.magazine-grid {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 52px;
  align-items: center;
}

.magazine-copy span,
.feed-heading span,
.cafe-columns span,
.gustave-box span {
  color: #b86b4b;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 18px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.4rem, 8vw, 7.8rem);
  font-weight: 400;
  line-height: 0.9;
}

.magazine-copy p,
.article-card p,
.cafe-columns p,
.gustave-box p {
  color: #6b3b2a;
  line-height: 1.75;
}

.magazine-cover {
  position: relative;
  height: min(68vh, 560px);
  padding: 18px;
  border: 1px solid #2a1710;
  background: #ffffff;
  box-shadow: 12px 12px 0 rgba(107, 59, 42, 0.18);
  transform: rotate(1deg);
}

.magazine-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover-label {
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: 32px;
  padding: 12px;
  background: #fff7ed;
  border: 1px solid #2a1710;
}

.article-feed {
  padding: 86px 0;
  background: #ffffff;
}

.feed-heading {
  max-width: 760px;
  margin-bottom: 40px;
}

.feed-heading h2,
.gustave-box h2 {
  margin: 12px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 400;
  line-height: 1;
}

.article-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
}

.article-card {
  border: 1px solid #2a1710;
  background: #fff7ed;
}

.article-card--1 {
  grid-row: span 2;
}

.article-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-bottom: 1px solid #2a1710;
}

.article-card--1 img {
  height: 560px;
}

.article-card div {
  padding: 24px;
}

.article-card h3,
.cafe-columns h3 {
  margin: 8px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.7rem;
  font-weight: 400;
}

.cafe-columns {
  padding: 64px 0;
  background: #f3dcc8;
}

.columns-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.columns-grid article {
  min-height: 260px;
  padding: 28px;
  border: 1px solid #2a1710;
  background: #fff7ed;
  box-shadow: 6px 6px 0 rgba(107, 59, 42, 0.18);
}

.gustave-cta {
  padding: 78px 0;
  background: #2a1710;
}

.gustave-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  padding: 38px;
  background: #fff7ed;
}

@media (max-width: 920px) {
  .gustave-nav div {
    display: none;
  }

  .magazine-hero {
    padding: 54px 0;
  }

  .magazine-grid,
  .article-grid,
  .columns-grid {
    grid-template-columns: 1fr;
  }

  .article-card--1 {
    grid-row: auto;
  }

  .article-card--1 img,
  .article-card img {
    height: 300px;
  }

  .gustave-box {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
