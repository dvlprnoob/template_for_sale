<script setup>
import { openContactAction } from '../../../controllers/contactController'

defineOptions({
  name: 'AutomotiveTemplateThree',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="wuling-inspired">
    <section class="friendly-hero">
      <div class="page-shell friendly-hero__grid">
        <div>
          <v-chip color="red-darken-2" variant="flat">{{ template.design?.label }}</v-chip>
          <h1>{{ template.companyName }}</h1>
          <p>{{ template.tagline }}</p>
          <div class="promo-pills">
            <span>EV Ready</span>
            <span>Family Deals</span>
            <span>Dealer Support</span>
          </div>
          <div class="friendly-actions">
            <v-btn color="red-darken-2" rounded="xl" @click="openContactAction('whatsapp', template.contact, template)">
              {{ template.cta?.primaryLabel }}
            </v-btn>
            <v-btn color="blue-darken-3" rounded="xl" variant="outlined" @click="openContactAction('email', template.contact, template)">
              Download Brosur
            </v-btn>
          </div>
        </div>
        <div class="friendly-hero__car">
          <img :src="template.heroImage" :alt="template.companyName" />
          <div class="hero-badge">
            <strong>2026</strong>
            <small>Promo Hub</small>
          </div>
        </div>
      </div>
    </section>

    <section class="benefit-strip">
      <div class="page-shell benefit-grid">
        <div v-for="metric in template.about.metrics" :key="metric.label">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </div>
      </div>
    </section>

    <section class="product-board">
      <div class="page-shell">
        <div class="board-heading">
          <h2>EV, MPV, SUV & Service Deals</h2>
          <p>{{ template.description }}</p>
        </div>
        <div class="product-grid">
          <article v-for="project in template.projects" :key="project.title">
            <img :src="project.image" :alt="project.title" />
            <v-chip color="blue-darken-3" size="small" variant="tonal">{{ project.type }}</v-chip>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <strong class="deal-tag">Mulai dari paket promo</strong>
            <v-btn color="red-darken-2" rounded="xl" size="small">Lihat Promo</v-btn>
          </article>
        </div>
      </div>
    </section>

    <section class="quick-actions">
      <div class="page-shell quick-grid">
        <article v-for="service in template.services" :key="service.title">
          <v-avatar color="red-darken-2" size="56">
            <v-icon :icon="service.icon" />
          </v-avatar>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>

    <section class="dealer-cta">
      <div class="page-shell dealer-box">
        <div>
          <span>Dealer & Promo</span>
          <h2>{{ template.cta?.title }}</h2>
          <p>{{ template.cta?.description }}</p>
        </div>
        <v-btn color="red-darken-2" rounded="xl" size="large" @click="openContactAction('whatsapp', template.contact, template)">
          {{ template.cta?.primaryLabel }}
        </v-btn>
      </div>
    </section>
  </article>
</template>

<style scoped>
.wuling-inspired {
  background: #f4f8ff;
  color: #15233a;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.friendly-hero {
  min-height: 680px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 78% 20%, rgba(221, 30, 46, 0.14), transparent 30%),
    linear-gradient(135deg, #ffffff, #e8f1ff);
}

.friendly-hero__grid {
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 42px;
  align-items: center;
}

h1 {
  margin: 18px 0;
  color: #1f4f9a;
  font-size: clamp(3.2rem, 7vw, 6.6rem);
  line-height: 0.98;
}

.friendly-hero p,
.board-heading p,
.product-grid p,
.quick-grid p,
.dealer-box p {
  color: #627084;
  line-height: 1.75;
}

.friendly-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.promo-pills {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 22px;
}

.promo-pills span {
  padding: 8px 12px;
  border-radius: 999px;
  background: #ffffff;
  color: #1f4f9a;
  font-size: 0.86rem;
  font-weight: 800;
  box-shadow: 0 10px 30px rgba(31, 79, 154, 0.1);
}

.friendly-hero__car {
  position: relative;
  height: min(58vh, 500px);
  overflow: hidden;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 22px 70px rgba(31, 79, 154, 0.14);
}

.friendly-hero__car img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-badge {
  position: absolute;
  right: 18px;
  bottom: 18px;
  display: grid;
  gap: 2px;
  padding: 16px 18px;
  border-radius: 18px;
  background: #dd1e2e;
  color: #ffffff;
}

.hero-badge strong {
  font-size: 1.8rem;
}

.benefit-strip {
  background: #1f4f9a;
  color: #ffffff;
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.benefit-grid div {
  padding: 24px;
  border-left: 1px solid rgba(255, 255, 255, 0.18);
}

.benefit-grid strong,
.benefit-grid span {
  display: block;
}

.benefit-grid strong {
  font-size: 1.8rem;
}

.product-board {
  padding: 76px 0;
  background: #ffffff;
}

.board-heading {
  max-width: 720px;
  margin-bottom: 34px;
}

.board-heading h2,
.dealer-box h2 {
  margin: 0 0 12px;
  font-size: clamp(2.2rem, 4vw, 4rem);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.product-grid article {
  padding: 14px;
  border: 1px solid #dbe6f5;
  border-radius: 24px;
  background: #f9fbff;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.product-grid article:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 48px rgba(31, 79, 154, 0.12);
}

.product-grid img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 18px;
  margin-bottom: 16px;
}

.quick-actions {
  padding: 54px 0;
  background: #e8f1ff;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.quick-grid article {
  padding: 28px;
  border-radius: 24px;
  background: #ffffff;
}

.deal-tag {
  display: block;
  margin: 0 0 14px;
  color: #dd1e2e;
}

.dealer-cta {
  padding: 64px 0;
  background: #1f4f9a;
}

.dealer-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 34px;
  border-radius: 28px;
  background: #ffffff;
}

.dealer-box span {
  color: #dd1e2e;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .friendly-hero {
    padding: 54px 0;
  }

  .friendly-hero__grid,
  .product-grid,
  .quick-grid,
  .benefit-grid {
    grid-template-columns: 1fr;
  }

  .dealer-box {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
