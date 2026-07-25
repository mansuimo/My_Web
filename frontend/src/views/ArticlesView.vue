<script setup>
import { computed, ref } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'
import { articles } from '../data/articles'

const categories = ['全部', ...new Set(articles.map((article) => article.category))]
const activeCategory = ref('全部')
const filteredArticles = computed(() =>
  activeCategory.value === '全部'
    ? articles
    : articles.filter((article) => article.category === activeCategory.value),
)
</script>

<template>
  <div class="page-wrap listing-page">
    <header class="page-intro">
      <span class="eyebrow">THE ARCHIVE</span>
      <h1>文章与笔记</h1>
      <p>按时间排列的思考切片，关于技术、设计，也关于普通生活。</p>
    </header>
    <div class="filter-bar" aria-label="文章分类">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        :class="{ active: category === activeCategory }"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>
    <div class="archive-list">
      <ArticleCard v-for="article in filteredArticles" :key="article.slug" :article="article" />
    </div>
  </div>
</template>

