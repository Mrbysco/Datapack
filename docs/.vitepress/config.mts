import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "Datapack Tutorials",
    description: "Resource for Minecraft datapack development",
    lang: 'en-US',
    head: [
      ["link", { rel: "icon", href: "/assets/images/icon.png" }],
      [
        'script',
        {
            src: 'https://kit.fontawesome.com/81e725f0b7.js',
            crossorigin: 'anonymous',
        },
      ],
      ['meta', { name: 'author', content: "Mrbysco" }],
    ],
    cleanUrls: true,
    themeConfig: {
      // logo: "/assets/images/icon.png",
      search: {
        provider: 'local'
      },

      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Creation', link: '/creation' },
        {
          text: 'Installation',
          items: [
            {
              text: 'Vanilla',
              items: [
                { text: 'Datapacks Folder', link: '/installation/vanilla' },
              ]
            },
            {
              text: 'Modded',
              items: [
                { text: 'Open Loader', link: '/installation/open-loader' },
                { text: 'Global Packs', link: '/installation/global-packs' },
              ]
            },
            {
              text: 'Biome Modifiers',
              items: [
                { text: 'Disabling', link: '/biomemodifiers/disable' },
                { text: 'Generator', link: '/biomemodifiers/generator' },
              ]
            }
          ]
        },
        { text: 'Tools', link: '/tools' },
      ],
  
      // sidebar: [
      //   {
      //     text: 'Examples',
      //     items: [
      //       { text: 'Markdown Examples', link: '/markdown-examples' },
      //       { text: 'Runtime API Examples', link: '/api-examples' }
      //     ]
      //   }
      // ],
  
      socialLinks: [
        { icon: 'twitter', link: 'https://twitter.com/Mrbysco' },
        { icon: 'github', link: 'https://github.com/Mrbysco/datapack' }
      ],
  
      footer: {
        message: "This website is not associated with Mojang or Microsoft",
        copyright: "Copyright © 2024 Mrbysco",
      },
    },
  })
  
)