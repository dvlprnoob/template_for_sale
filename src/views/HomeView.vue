<script setup>
import { getCategories, getFeaturedTemplates } from '../controllers/templateController'
import TemplateGallery from '../components/common/TemplateGallery.vue'

const categories = getCategories()
const featuredTemplates = getFeaturedTemplates()
</script>

<template>
  <section class="home-hero">
    <div class="page-shell home-grid">
      <div>
        <v-chip class="mb-4" color="primary" variant="tonal">Static frontend only</v-chip>
        <h1>Template company profile digital per kategori industri.</h1>
        <p>
          Pilih kategori, preview desain, lalu request custom untuk fitur di luar paket static seperti
          backend, CMS, login, payment, booking, invoice, atau API.
        </p>
        <div class="home-actions">
          <v-btn color="primary" prepend-icon="mdi-view-grid-outline" rounded="lg" size="large" href="#kategori">
            Lihat Kategori
          </v-btn>
          <v-btn color="primary" prepend-icon="mdi-eye-outline" rounded="lg" size="large" variant="outlined" href="#featured">
            Featured
          </v-btn>
        </div>
      </div>

      <div class="home-preview subtle-border">
        <v-row dense>
          <v-col v-for="template in featuredTemplates.slice(0, 4)" :key="template.slug + template.categorySlug" cols="6">
            <div class="mini-preview">
              <img :src="template.heroImage" :alt="template.companyName" />
              <span>{{ template.categoryName }}</span>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>

  <section id="kategori" class="section-band">
    <div class="page-shell">
      <div class="section-title mb-8">
        <h2>Kategori Template</h2>
        <p>Setiap kategori punya data template sendiri di folder `src/templates`.</p>
      </div>

      <v-row>
        <v-col v-for="category in categories" :key="category.slug" cols="12" md="6" lg="4">
          <v-card class="category-card" rounded="lg" variant="outlined">
            <v-card-text>
              <v-avatar class="mb-5" color="primary" rounded="lg" size="52">
                <v-icon :icon="category.icon" size="28" />
              </v-avatar>
              <h3>{{ category.name }}</h3>
              <p>{{ category.description }}</p>
              <v-chip class="mt-5" color="secondary" variant="tonal">
                {{ category.templateCount }} template awal
              </v-chip>
            </v-card-text>
            <v-card-actions class="px-4 pb-4">
              <v-btn
                block
                color="primary"
                prepend-icon="mdi-folder-eye-outline"
                rounded="lg"
                :to="{ name: 'gallery', params: { categorySlug: category.slug } }"
              >
                Buka Gallery
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>

  <section id="featured" class="section-band featured-band">
    <div class="page-shell">
      <div class="section-title mb-8">
        <h2>Featured Preview</h2>
        <p>Preview cepat lintas kategori untuk melihat variasi layout dan visual.</p>
      </div>
      <TemplateGallery :templates="featuredTemplates" />
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  padding: 72px 0 52px;
  background: #ffffff;
}

.home-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
  gap: 44px;
  align-items: center;
}

h1 {
  max-width: 760px;
  font-size: clamp(2.65rem, 6vw, 5.6rem);
  line-height: 0.98;
  margin: 0 0 20px;
  letter-spacing: 0;
}

.home-hero p {
  color: var(--market-muted);
  font-size: 1.12rem;
  line-height: 1.75;
  margin: 0;
}

.home-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.home-preview {
  padding: 12px;
  border-radius: 8px;
  background: #f7f8fb;
}

.mini-preview {
  position: relative;
  height: 190px;
  overflow: hidden;
  border-radius: 8px;
}

.mini-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mini-preview span {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  font-size: 0.9rem;
}

.category-card {
  height: 100%;
  background: #ffffff;
}

.category-card h3 {
  margin: 0 0 10px;
  font-size: 1.35rem;
}

.category-card p {
  color: var(--market-muted);
  line-height: 1.7;
  margin: 0;
}

.featured-band {
  background: #f3f6fb;
}

@media (max-width: 920px) {
  .home-grid {
    grid-template-columns: 1fr;
  }
}
</style>
