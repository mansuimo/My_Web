<script setup>
defineProps({
  article: { type: Object, required: true },
  large: { type: Boolean, default: false },
})
</script>

<template>
  <article class="article-card" :class="{ large }">
    <RouterLink :to="`/articles/${article.slug}`" class="article-link">
      <div class="article-meta">
        <span class="article-number">NO.{{ article.number }}</span>
        <span>{{ article.date.replaceAll('-', ' / ') }}</span>
      </div>
      <div class="article-body">
        <span class="article-category">{{ article.category }}</span>
        <div>
          <h3>{{ article.title }}</h3>
          <p>{{ article.excerpt }}</p>
        </div>
      </div>
      <div class="article-foot">
        <span>READING · {{ article.readTime }}</span>
        <span class="read-arrow" aria-hidden="true">↗</span>
      </div>
    </RouterLink>
  </article>
</template>
