<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const closeMenu = () => (menuOpen.value = false)
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="拾页首页">
      <span class="brand-glyph" aria-hidden="true">拾</span>
      <span class="brand-copy">
        <strong>拾页<span class="brand-cursor">_</span></strong>
        <small>PERSONAL LAB / 2026</small>
      </span>
    </RouterLink>

    <span class="site-status" aria-label="网站在线">
      <i aria-hidden="true"></i>
      ONLINE
    </span>

    <button
      class="menu-button"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="site-navigation"
      aria-label="切换导航"
      @click="menuOpen = !menuOpen"
    >
      <span></span><span></span><span></span>
    </button>

    <nav id="site-navigation" :class="{ open: menuOpen }" aria-label="主导航">
      <RouterLink to="/" @click="closeMenu"><small>00</small> 首页</RouterLink>
      <RouterLink to="/articles" @click="closeMenu"><small>01</small> 文章</RouterLink>
      <RouterLink to="/about" @click="closeMenu"><small>02</small> 关于</RouterLink>
    </nav>
  </header>
</template>
