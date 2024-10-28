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
    base: '/sliverflow.github.io/',
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
        lastUpdated: {
            Text: '上次更新于'
        },
        // 设置logo
        // logo: '/img/favicon.svg',
        // editLink: {
        //   pattern:
        //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
        //   text: '去 GitHub 上编辑内容'
        // },
        // 导航栏
        nav: [
            {text: 'Java', link: '/Java/'},
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
            "/Java/": [
                {
                    text: 'Java',
                    items: [
                        {text: 'Java BufferedReader流', link: '/Java/Java BufferedReader流'},
                        {text: 'Java IO', link: '/Java/Java IO'},
                        {text: 'Java Optional类', link: '/Java/Java Optional类'},
                        {text: 'Java Stream', link: '/Java/Java Stream'},
                        {text: 'Java 双端队列 Deque', link: '/Java/Java 双端队列 Deque'},
                        {text: 'Java 正则表达式', link: '/Java/Java 正则表达式'},
                        {text: 'Java 泛型', link: '/Java/Java 泛型'},
                        {
                            text: 'Java中为什么使用向上转型而不直接创建子类对象',
                            link: '/Java/Java中为什么使用向上转型而不直接创建子类对象'
                        },
                        {text: 'Java中实现POJO类的序列化', link: '/Java/Java中实现POJO类的序列化'},
                        {text: 'Java的注解与反射机制', link: '/Java/Java的注解与反射机制'},
                        {text: 'Java集合框架综述', link: '/Java/Java集合框架综述'},
                        {text: 'JDBC各个类的详解', link: '/Java/JDBC各个类的详解'},
                        {text: '初识多线程', link: '/Java/初识多线程'}
                    ]
                }
            ],
        },
    }
})
