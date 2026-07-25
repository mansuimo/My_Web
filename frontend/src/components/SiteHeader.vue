<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const closeMenu = () => (menuOpen.value = false)
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="拾页首页">
      <span class="brand-seal">拾</span>
      <span>
        <strong>拾页</strong>
        <small>SHIYE JOURNAL</small>
      </span>
    </RouterLink>

    <button
      class="menu-button"
      type="button"
      :aria-expanded="menuOpen"
      aria-label="切换导航"
      @click="menuOpen = !menuOpen"
    >
      <span></span><span></span>
    </button>

    <nav :class="{ open: menuOpen }" aria-label="主导航">
      <RouterLink to="/" @click="closeMenu">首页</RouterLink>
      <RouterLink to="/articles" @click="closeMenu">文章</RouterLink>
      <RouterLink to="/about" @click="closeMenu">关于</RouterLink>
    </nav>
  </header>
</template>

