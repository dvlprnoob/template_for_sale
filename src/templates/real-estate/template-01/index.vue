<script setup>
import { openContactAction } from '../../../controllers/contactController'

defineOptions({
  name: 'RealEstateTemplateOne',
})

defineProps({
  template: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="adara-vaulk-estate">
    <div class="estate-loader" aria-hidden="true">
      <span>0 / 100</span>
      <div />
    </div>

    <nav class="estate-nav">
      <strong>{{ template.logo }}</strong>
      <div>
        <a href="#property">Property</a>
        <a href="#system">Estate System</a>
        <a href="#deployment">Sales Flow</a>
      </div>
      <v-btn color="white" rounded="0" variant="outlined" @click="openContactAction('whatsapp', template.contact, template)">
        Contact Sales
      </v-btn>
    </nav>

    <section class="estate-hero">
      <div class="page-shell estate-hero__grid">
        <div class="estate-hero__copy">
          <span class="kicker">{{ template.design?.label }}</span>
          <h1>{{ template.companyName }}</h1>
          <p>{{ template.tagline }}</p>
          <div class="estate-actions">
            <v-btn color="white" rounded="0" size="large" @click="openContactAction('whatsapp', template.contact, template)">
              {{ template.cta?.primaryLabel }}
            </v-btn>
            <v-btn color="white" rounded="0" size="large" variant="outlined" @click="openContactAction('email', template.contact, template)">
              Request Brochure
            </v-btn>
          </div>
        </div>
        <div class="estate-hero__media">
          <img :src="template.heroImage" :alt="template.companyName" />
          <div class="media-tags">
            <span>UHPC-grade presentation</span>
            <span>Private estate consultation</span>
          </div>
        </div>
      </div>
    </section>

    <section id="property" class="property-matrix">
      <div class="page-shell">
        <div class="matrix-heading">
          <span>Property Specification</span>
          <h2>{{ template.about.title }}</h2>
          <p>{{ template.about.description }}</p>
        </div>
        <div class="matrix-grid">
          <article v-for="metric in template.about.metrics" :key="metric.label">
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </article>
        </div>
      </div>
    </section>

    <section id="system" class="estate-system">
      <div class="page-shell system-grid">
        <article v-for="(service, index) in template.services" :key="service.title">
          <span>{{ String(index + 1).padStart(3, '0') }}</span>
          <v-icon :icon="service.icon" size="32" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>

    <section id="deployment" class="deployment-flow">
      <div class="page-shell">
        <div class="flow-heading">
          <span>Featured Estates</span>
          <h2>Curated properties, presented with confidential sales flow.</h2>
        </div>
        <div class="flow-list">
          <article v-for="(project, index) in template.projects" :key="project.title">
            <div class="flow-number">{{ String(index + 1).padStart(3, '0') }}</div>
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

    <section class="confidential-cta">
      <div class="page-shell cta-box">
        <div>
          <span>Private Consultation</span>
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
.adara-vaulk-estate {
  background: #0b0f12;
  color: #f5efe3;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.estate-loader {
  position: fixed;
  inset: auto 24px 24px auto;
  z-index: 12;
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(245, 239, 227, 0.7);
  font-size: 0.78rem;
  animation: loaderFade 4.2s ease forwards;
}

.estate-loader div {
  width: 92px;
  height: 1px;
  background: linear-gradient(90deg, #c49a4a 0 70%, rgba(255, 255, 255, 0.2) 70%);
}

.estate-nav {
  position: sticky;
  top: 72px;
  z-index: 8;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 28px;
  min-height: 72px;
  padding: 0 max(18px, calc((100vw - 1180px) / 2));
  border-bottom: 1px solid rgba(245, 239, 227, 0.14);
  background: rgba(11, 15, 18, 0.86);
  backdrop-filter: blur(18px);
}

.estate-nav strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.5rem;
}

.estate-nav div {
  display: flex;
  gap: 30px;
  justify-content: center;
  color: rgba(245, 239, 227, 0.66);
}

.estate-hero {
  min-height: 760px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 78% 28%, rgba(196, 154, 74, 0.18), transparent 34%),
    linear-gradient(135deg, #0b0f12, #1d2426 58%, #6a593d);
}

.estate-hero__grid {
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 58px;
  align-items: center;
}

.kicker,
.matrix-heading span,
.estate-system article > span,
.flow-heading span,
.flow-list article span,
.cta-box span {
  color: #c49a4a;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1 {
  margin: 20px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.4rem, 7vw, 7rem);
  font-weight: 400;
  line-height: 0.95;
  animation: titleRise 900ms ease both;
}

.estate-hero__copy p {
  max-width: 620px;
  color: rgba(245, 239, 227, 0.76);
  font-size: 1.22rem;
  line-height: 1.8;
  animation: titleRise 900ms 120ms ease both;
}

.estate-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
  animation: titleRise 900ms 240ms ease both;
}

.estate-hero__media {
  position: relative;
  height: min(68vh, 590px);
  overflow: hidden;
  border: 1px solid rgba(245, 239, 227, 0.2);
  animation: imageReveal 1100ms ease both;
}

.estate-hero__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
  animation: slowZoom 12s ease-in-out infinite alternate;
}

.media-tags {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(245, 239, 227, 0.22);
}

.media-tags span {
  padding: 14px;
  background: rgba(11, 15, 18, 0.78);
  color: rgba(245, 239, 227, 0.78);
  font-size: 0.86rem;
}

.property-matrix,
.deployment-flow {
  padding: 86px 0;
  background: #f7f2e8;
  color: #162024;
}

.matrix-heading,
.flow-heading {
  max-width: 780px;
  margin-bottom: 36px;
}

.matrix-heading h2,
.flow-heading h2,
.cta-box h2 {
  margin: 10px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  font-weight: 400;
  line-height: 1;
}

.matrix-heading p,
.flow-list p,
.cta-box p {
  color: #667084;
  line-height: 1.75;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(22, 32, 36, 0.18);
  border-left: 1px solid rgba(22, 32, 36, 0.18);
}

.matrix-grid article {
  min-height: 170px;
  padding: 26px;
  border-right: 1px solid rgba(22, 32, 36, 0.18);
  border-bottom: 1px solid rgba(22, 32, 36, 0.18);
}

.matrix-grid strong {
  display: block;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.6rem;
  font-weight: 400;
}

.estate-system {
  padding: 70px 0;
  background: #111719;
}

.system-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(245, 239, 227, 0.16);
}

.estate-system article {
  min-height: 280px;
  padding: 32px;
  background: #111719;
}

.estate-system h3 {
  margin: 22px 0 10px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.55rem;
  font-weight: 400;
}

.estate-system p {
  color: rgba(245, 239, 227, 0.66);
  line-height: 1.7;
}

.flow-list {
  display: grid;
  gap: 18px;
}

.flow-list article {
  display: grid;
  grid-template-columns: 90px 290px 1fr;
  gap: 28px;
  align-items: center;
  padding: 18px;
  border: 1px solid rgba(22, 32, 36, 0.14);
  background: #fffaf0;
  animation: cardFloat 700ms ease both;
}

.flow-number {
  color: #c49a4a;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2rem;
}

.flow-list img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.flow-list h3 {
  margin: 8px 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.7rem;
  font-weight: 400;
}

.confidential-cta {
  padding: 70px 0;
  background: #0b0f12;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 38px;
  padding: 42px;
  border: 1px solid rgba(245, 239, 227, 0.18);
}

@keyframes titleRise {
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes imageReveal {
  from {
    clip-path: inset(0 0 100% 0);
  }

  to {
    clip-path: inset(0);
  }
}

@keyframes slowZoom {
  to {
    transform: scale(1.1);
  }
}

@keyframes loaderFade {
  0%,
  72% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    pointer-events: none;
  }
}

@keyframes cardFloat {
  from {
    opacity: 0;
    transform: translateY(22px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 920px) {
  .estate-nav {
    grid-template-columns: 1fr auto;
  }

  .estate-nav div {
    display: none;
  }

  .estate-hero {
    padding: 54px 0;
  }

  .estate-hero__grid,
  .matrix-grid,
  .system-grid,
  .flow-list article {
    grid-template-columns: 1fr;
  }

  .media-tags {
    grid-template-columns: 1fr;
  }

  .cta-box {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
