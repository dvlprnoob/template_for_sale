<script setup>
defineProps({ articles: { type: Array, default: () => [] } })
</script>

<template>
  <section class="article-feed">
    <div class="page-shell">
      <div class="feed-heading">
        <span>Derniers articles</span>
        <h2>Food stories, menu notes, and cafe rituals.</h2>
      </div>
      <div class="article-grid">
        <article v-for="(article, index) in articles" :key="article.title" :class="`article-card article-card--${index + 1}`">
          <img :src="article.image" :alt="article.title" />
          <div>
            <small>{{ article.type }}</small>
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
