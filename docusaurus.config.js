require('dotenv-defaults').config()

import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: process.env.PSP_NAME,
  tagline: 'Dinosaurs are cool',
  favicon: 'img/' + process.env.FAVICON,
  url: 'https://' + process.env.PSP_DOCS_DOMAIN,
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: process.env.DEFAULT_LOCALE,
    locales: process.env.LOCALES.split(','),
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: process.env.THEME,
        },
      },
    ],
  ],

  themeConfig:
    {
      metadata: [
        {
          name: 'robots', 
          content: 'noindex, nofollow'
        }
      ],
      navbar: {
        title: process.env.PSP_NAME,
        items : [
            {
              type: 'localeDropdown',
              position: 'right',
            }
        ],
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },


    },
    plugins: [
      require.resolve('docusaurus-plugin-image-zoom'),
      [
        "docusaurus2-dotenv",
        {
          systemvars: false,
          defaults: true
        },
      ],
    ]
};

export default config;
