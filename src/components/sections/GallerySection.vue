<script setup>
defineProps({
  gallery: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="section-band gallery-band">
    <div class="page-shell">
      <div class="section-title mb-8">
        <span class="eyebrow">Visual Gallery</span>
        <h2>Brand Moments</h2>
        <p>Area visual untuk memperkuat kesan industri, portfolio, tempat, produk, atau aktivitas bisnis.</p>
      </div>
      <div class="gallery-strip">
        <div
          v-for="(image, index) in gallery"
          :key="image.alt"
          :class="['gallery-item', `gallery-item--${index + 1}`]"
        >
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-band {
  background: #ffffff;
}

.gallery-strip {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr;
  gap: 14px;
}

.gallery-item {
  height: 260px;
  overflow: hidden;
  border-radius: 8px;
  background: #e7edf5;
  box-shadow: var(--market-shadow-soft);
}

.gallery-item:first-child {
  grid-row: span 2;
  height: 534px;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.eyebrow {
  display: inline-block;
  color: var(--template-primary);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
  text-transform: uppercase;
}

@media (max-width: 850px) {
  .gallery-strip {
    grid-template-columns: 1fr;
  }

  .gallery-item,
  .gallery-item:first-child {
    grid-row: auto;
    height: 260px;
  }
}
</style>
