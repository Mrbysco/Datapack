import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "Datapack Tutorials",
    description: "Resource for Minecraft datapack development ",
    lang: 'en-US',
    head: [
        [
          'script',
          {
              src: 'https://kit.fontawesome.com/81e725f0b7.js',
              crossorigin: 'anonymous',
          },
      ],
    ],
    themeConfig: {
      search: {
        provider: 'local'
      },

      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Creation', link: '/creation' },
        { text: 'Installation', link: '/installing' },
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