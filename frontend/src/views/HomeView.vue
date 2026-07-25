<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'
import { articles } from '../data/articles'
import heroImage from '../assets/images/hero-workspace.jpg'

const featuredArticles = articles.filter((article) => article.featured).slice(0, 3)
const curtainStage = ref(null)
const scrollProgress = ref(0)
let ticking = false

const curtainStyle = computed(() => ({
  '--hero-scale': (1 + scrollProgress.value * 0.08).toFixed(3),
  '--hero-shift': `${Math.round(scrollProgress.value * -28)}px`,
  '--hero-brightness': (0.78 - scrollProgress.value * 0.18).toFixed(2),
  '--copy-shift': `${Math.round(scrollProgress.value * -42)}px`,
  '--copy-opacity': Math.max(0.18, 1 - scrollProgress.value * 1.05).toFixed(2),
}))

function updateScrollProgress() {
  if (!curtainStage.value) return

  const stageTop = curtainStage.value.getBoundingClientRect().top
  const distance = Math.max(window.innerHeight * 0.85, 1)
  scrollProgress.value = Math.min(1, Math.max(0, -stageTop / distance))
  ticking = false
}

function handleScroll() {
  if (ticking) return
  ticking = true
  window.requestAnimationFrame(updateScrollProgress)
}

onMounted(() => {
  updateScrollProgress()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<template>
  <div class="home-page page-wrap">
    <div ref="curtainStage" class="curtain-stage" :style="curtainStyle">
      <section class="hero">
        <div class="hero-copy">
          <div class="hero-kicker reveal reveal-1">个人数字花园 · 持续生长中</div>
          <h1 class="reveal reveal-2">
            在代码与日常之间，<br />
            <em>拾起</em>值得留下的片刻。
          </h1>
          <div class="hero-bottom reveal reveal-3">
            <p>
              这里记录开发、设计与生活。<br />
              不追逐即时答案，只整理真实的思考过程。
            </p>
            <RouterLink class="round-link" to="/articles" aria-label="阅读文章">
              <span>开始阅读</span>
              <b>↓</b>
            </RouterLink>
          </div>
        </div>
        <figure class="hero-photo reveal reveal-2">
          <img
            :src="heroImage"
            alt="放着笔记本电脑和显示器的明亮工作台"
            width="1600"
            height="1067"
            fetchpriority="high"
          />
          <figcaption>
            <span>01 / WORKSPACE</span>
            <span>日常工作台</span>
          </figcaption>
        </figure>
      </section>

      <div class="curtain-panel">
        <section class="curtain-intro">
          <span class="eyebrow">PHILOSOPHY</span>
          <div class="curtain-intro-copy">
            <h2>触碰内心<br />留在记忆<br />创造真实</h2>
            <p>
              让文字触碰感受，<br />
              让思考在时间里留下痕迹。
            </p>
          </div>
          <RouterLink to="/about">了解更多 ↗</RouterLink>
        </section>

        <div class="curtain-inner">
          <section class="featured-section">
            <div class="section-heading">
              <div>
                <span class="eyebrow">SELECTED NOTES</span>
                <h2>近期拾录</h2>
              </div>
              <RouterLink to="/articles">查看全部 <span>→</span></RouterLink>
            </div>
            <div class="article-grid">
              <ArticleCard
                v-for="(article, index) in featuredArticles"
                :key="article.slug"
                :article="article"
                :large="index === 0"
              />
            </div>
          </section>

          <section class="manifesto">
            <span class="eyebrow">A SMALL MANIFESTO</span>
            <blockquote>“记录不是为了证明走了多远，<br />而是为了看清自己如何抵达这里。”</blockquote>
            <RouterLink to="/about">认识我和这个网站 ↗</RouterLink>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
