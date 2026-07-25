<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'
import { articles } from '../data/articles'
import heroImage from '../assets/images/hero-workspace.jpg'

const featuredArticles = articles.filter((article) => article.featured).slice(0, 3)
const now = ref(new Date())
let clockTimer

const timeLabel = computed(() =>
  new Intl.DateTimeFormat('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Shanghai',
  }).format(now.value),
)

function trackPointer(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`)
  event.currentTarget.style.setProperty('--tilt-x', `${((event.clientY - rect.top) / rect.height - 0.5) * -4}deg`)
  event.currentTarget.style.setProperty('--tilt-y', `${((event.clientX - rect.left) / rect.width - 0.5) * 4}deg`)
}

function resetPointer(event) {
  event.currentTarget.style.removeProperty('--tilt-x')
  event.currentTarget.style.removeProperty('--tilt-y')
}

onMounted(() => {
  clockTimer = window.setInterval(() => (now.value = new Date()), 30000)
})

onBeforeUnmount(() => window.clearInterval(clockTimer))
</script>

<template>
  <div class="home-page">
    <section class="home-hero page-wrap">
      <div class="hero-copy">
        <div class="hero-kicker reveal reveal-1">
          <span aria-hidden="true">●</span>
          一个正在生长的个人网站
        </div>
        <h1 class="reveal reveal-2">
          你好，<br />
          这里是<span>拾页。</span>
        </h1>
        <p class="hero-intro reveal reveal-3">
          我在代码、设计与日常之间捡拾片刻。这里没有标准答案，只有持续更新的思考、实验和生活切片。
        </p>
        <div class="hero-actions reveal reveal-3">
          <RouterLink class="primary-link" to="/articles">
            浏览文章 <span aria-hidden="true">↗</span>
          </RouterLink>
          <RouterLink class="text-link" to="/about">关于这个地方 →</RouterLink>
        </div>
        <div class="hero-coordinates reveal reveal-3" aria-label="本地时间与网站版本">
          <span>CN / {{ timeLabel }}</span>
          <span>VERSION 2.0.26</span>
        </div>
      </div>

      <div
        class="signal-window reveal reveal-2"
        @pointermove="trackPointer"
        @pointerleave="resetPointer"
      >
        <div class="window-bar">
          <span>FIELD_NOTE_001.JPG</span>
          <span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        </div>
        <figure class="workspace-frame">
          <img
            :src="heroImage"
            alt="放着笔记本电脑和显示器的明亮工作台"
            width="1600"
            height="1067"
            fetchpriority="high"
          />
          <div class="scan-line" aria-hidden="true"></div>
          <figcaption>WORKSPACE / 日常发生的地方</figcaption>
        </figure>
        <div class="signal-overlay" aria-hidden="true">
          <span class="signal-orbit orbit-one"></span>
          <span class="signal-orbit orbit-two"></span>
          <span class="signal-node node-a"></span>
          <span class="signal-node node-b"></span>
          <span class="signal-node node-c"></span>
          <svg viewBox="0 0 600 520" preserveAspectRatio="none">
            <path d="M-40 390 C100 190 180 460 310 260 S510 90 650 210" />
            <path d="M-30 130 C90 280 210 40 350 180 S520 430 640 310" />
          </svg>
        </div>
        <div class="window-note">
          <b>NOW</b>
          <span>正在整理关于界面、代码与观察的笔记。</span>
        </div>
      </div>
    </section>

    <div class="signal-ticker" aria-hidden="true">
      <div>
        <span>DESIGNING</span><i>✦</i><span>CODING</span><i>✦</i><span>OBSERVING</span><i>✦</i><span>WRITING</span><i>✦</i>
        <span>DESIGNING</span><i>✦</i><span>CODING</span><i>✦</i><span>OBSERVING</span><i>✦</i><span>WRITING</span><i>✦</i>
      </div>
    </div>

    <div class="home-content page-wrap">
      <section class="intro-grid">
        <div class="section-index">
          <span>01</span>
          <small>ABOUT THE LAB</small>
        </div>
        <div class="intro-copy">
          <h2>把想法做成<br /><em>可以触摸的东西。</em></h2>
          <p>
            拾页是一座小型数字实验室，也是一份公开笔记。它收集开发过程中的判断、设计里的细节，以及那些不该被快速信息流冲走的普通时刻。
          </p>
        </div>
        <RouterLink class="corner-link" to="/about">更多关于我 <span>↗</span></RouterLink>
      </section>

      <section class="lab-status" aria-label="当前关注方向">
        <article>
          <span>01 / BUILD</span>
          <strong>Vue × Spring</strong>
          <p>让内容与工程保持清晰边界。</p>
        </article>
        <article>
          <span>02 / STUDY</span>
          <strong>Interface & Motion</strong>
          <p>研究克制但有生命力的界面。</p>
        </article>
        <article>
          <span>03 / COLLECT</span>
          <strong>Daily Fragments</strong>
          <p>把日常观察变成长期素材。</p>
        </article>
      </section>

      <section class="featured-section">
        <div class="section-heading">
          <div>
            <span class="section-index-inline">02 / LATEST NOTES</span>
            <h2>近期拾录</h2>
          </div>
          <RouterLink to="/articles">完整档案 <span>↗</span></RouterLink>
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
        <div class="terminal-bar">
          <span>MANIFESTO.TXT</span>
          <span>UTF-8 / READ ONLY</span>
        </div>
        <blockquote>
          <span class="prompt">&gt;</span>
          记录不是为了证明走了多远，<br />而是为了看清自己<span>如何抵达这里。</span>
        </blockquote>
        <RouterLink to="/about">认识我和这个网站 ↗</RouterLink>
      </section>
    </div>
  </div>
</template>
