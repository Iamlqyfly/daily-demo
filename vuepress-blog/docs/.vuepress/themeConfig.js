const helper = require('./../helper/')

module.exports = {
  repo: 'Iamlqyfly/vuepress-blog',
  editLinks: false,
  docsDir: './dist',
  locales: {
    '/': {
      label: '简体中文',
      selectText: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
        {
          text: '博文',
          link: '/zh/article/'
        },
        {
          text: '涂鸦',
          link: '/zh/doodle/'
        },
        {
          text: '摄影',
          link: '/zh/photography/'
        },
        {
          text: '简历',
          link: '/zh/resume/'
        }
        
      ],
    },
    '/en/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      nav: [
        {
          text: 'doodle',
          link: '/en/doodle/'
        },
        {
          text: 'photography',
          link: '/en/photography/'
        },
        {
          text: 'resume',
          link: '/en/resume/'
        },
      ]
    }
  }
}