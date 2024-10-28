import {defineConfig} from 'vitepress'

// 导入主题的配置
import {blogTheme} from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
    // 忽略死链
    ignoreDeadLinks: true,
    // 继承博客主题(@sugarat/theme)
    extends: blogTheme,
    // 仓库名
    // base: '/sliverflow.github.io/',
    lang: 'zh-cn',
    title: 'sliverflow',
    description: 'xxxxx',
    lastUpdated: true,
    // 详见：https://vitepress.dev/zh/reference/site-config#head
    head: [
        // 配置网站的图标（显示在浏览器的 tab 上）
        // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
        // ['link', {rel: 'icon', href: 'img/favicon.svg'}],
        [
            'link',
            {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-web/style.css'}
        ]
    ],
    themeConfig: {
        // 展示 2,3 级标题在目录中
        outline: {
            level: [2, 3],
            label: '目录'
        },
        // 默认文案修改
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '相关文章',
        // 设置logo
        // logo: '/img/favicon.svg',
        // editLink: {
        //   pattern:
        //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
        //   text: '去 GitHub 上编辑内容'
        // },
        // 导航栏
        nav: [
            {text: 'Golang', link: '/Golang/'},
        ],
        // github
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/sliverflow'
            }
        ],
        // 侧边栏
        sidebar: {
            "/Golang/": [
                {
                    text: 'Golang',
                    items: [
                        {text: "使用 wire 轻松进行依赖注入",link: '/Golang/使用 wire 轻松进行依赖注入'}
                    ]
                }
            ],
        },
    }
})
