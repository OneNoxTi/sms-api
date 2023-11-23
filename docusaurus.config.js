require('dotenv-defaults').config()

import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: process.env.PSP_DOCS_DOMAIN,
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
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
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig:
    {
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
      require.resolve('docusaurus-plugin-image-zoom')
    ]
};

export default config;
