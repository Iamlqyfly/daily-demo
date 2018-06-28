const themeConfig = require('./themeConfig')
const buildConfig = require('./buildConfig')

module.exports = {
  base: "/vuepress-blog/",
  // 存放“生成静态的 HTML 文件”路径;
  dest: './docs/dist',
   head: [

  ],
  ga: 'UA-119945815-1',
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'iamlqy',
      description: 'hahahah'
    },
    '/en/': {
      lang: 'en-US',
      title: 'iamlqy',
      description: 'hahahah'
    }
  },
  configureWebpack: buildConfig.configureWebpack,
  themeConfig,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
    }
  }
}