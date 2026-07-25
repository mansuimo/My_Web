export const articles = [
  {
    slug: 'build-a-digital-garden',
    title: '从零搭建一座数字花园',
    excerpt: '比起追逐流量，我更想要一块能够持续生长、彼此连接的网络自留地。',
    category: '开发手记',
    date: '2026-07-26',
    readTime: '6 分钟',
    number: '001',
    featured: true,
    paragraphs: [
      '数字花园与传统博客最大的不同，不是技术，而是心态。文章可以是不完整的，可以随着认识变化不断修订。',
      '这个站点采用 Vue 构建静态页面，让内容在没有后端服务时仍然可以被访问。Spring Boot 则作为未来的扩展接口，承载文章管理、评论与搜索等功能。',
      '好的个人网站不需要塞满模块。明确的阅读节奏、稳定的内容结构，以及愿意持续写下去的动力，远比复杂的功能重要。',
    ],
  },
  {
    slug: 'quiet-interface',
    title: '让界面安静下来',
    excerpt: '克制不是减少一切，而是让真正重要的内容获得足够的呼吸。',
    category: '设计观察',
    date: '2026-07-20',
    readTime: '4 分钟',
    number: '002',
    featured: true,
    paragraphs: [
      '当每个元素都在争夺注意力，读者便很难真正看到任何东西。设计的任务，是建立秩序而非制造噪音。',
      '在这套界面里，纸张色、墨色与一抹朱红构成主要视觉语言。装饰存在，但始终退后半步。',
    ],
  },
  {
    slug: 'spring-vue-boundary',
    title: 'Vue 与 Spring 的边界',
    excerpt: '先让静态内容独立成立，再为真正需要动态能力的部分接入 API。',
    category: '工程实践',
    date: '2026-07-12',
    readTime: '8 分钟',
    number: '003',
    featured: true,
    paragraphs: [
      '前后端分离不意味着所有页面都必须依赖服务器。对于个人博客，静态数据能够换来更简单的部署、更快的加载速度和更少的维护成本。',
      '当需要登录、评论或在线编辑时，再让 Spring Boot 接管这些动态能力。清晰的边界会让系统更容易演进。',
    ],
  },
  {
    slug: 'weekend-walk',
    title: '周末散步时收集的五种颜色',
    excerpt: '从旧墙、树影和傍晚的玻璃窗里，重新认识日常配色。',
    category: '生活切片',
    date: '2026-07-03',
    readTime: '3 分钟',
    number: '004',
    featured: false,
    paragraphs: ['生活并不会自动成为素材。只有停下来观察，它才显露出纹理。'],
  },
]

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug)
}

