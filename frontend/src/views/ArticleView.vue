<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getArticle } from '../data/articles'

const route = useRoute()
const article = computed(() => getArticle(route.params.slug))
</script>

<template>
  <div v-if="article" class="page-wrap article-page">
    <RouterLink class="back-link" to="/articles">← 返回文章列表</RouterLink>
    <article>
      <header class="article-header">
        <div class="article-meta">
          <span>{{ article.category }}</span>
          <span>{{ article.date }}</span>
          <span>{{ article.readTime }}</span>
        </div>
        <h1>{{ article.title }}</h1>
        <p>{{ article.excerpt }}</p>
      </header>
      <div class="article-content">
        <p v-for="paragraph in article.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </div>
    </article>
  </div>
  <div v-else class="page-wrap not-found-page">
    <span>404</span>
    <h1>这篇文章还没有写下。</h1>
    <RouterLink to="/articles">返回文章列表</RouterLink>
  </div>
</template>

