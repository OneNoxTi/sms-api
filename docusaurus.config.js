require('dotenv-defaults').config()

const { themes } = require('prism-react-renderer');

const code_themes = {
  light: themes.nightOwlLight,
  dark: themes.nightOwl,
};

module.exports = {
  title: process.env.PSP_NAME,
  tagline: 'SMS',
  favicon: 'img/' + process.env.FAVICON,
  url: 'https://' + process.env.PSP_DOCS_DOMAIN,
  baseUrl: '/',
  organizationName: 'sms',
  projectName: 'sms',
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

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
          customCss: [
            process.env.THEME,
            './src/css/api.css'
          ]          
        },        
        googleTagManager: {
          containerId: process.env.GOOGLE_TAG,
        }
      }
    ]
  ],


  themeConfig: {
    metadata: [
      {
        name: 'robots', 
        content: 'all'
      }
    ],
    navbar: {
      title: process.env.PSP_NAME,
      items : [
        {
          to: '/about_api',
          label: 'API',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ]
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      }
    },
    prism: {
      theme: code_themes.light,
      darkTheme: code_themes.dark,
      additionalLanguages: [
        'dart',
        'ruby',
        'groovy',
        'kotlin',
        'java',
        'swift',
        'objectivec',
        'json',
        'bash'
      ]
    }
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
          indexDocs: true,
          indexPages: true,
          language: ["en", "ru"],
          hashed: true,
          highlightSearchTermsOnTargetPage: true,
          removeDefaultStemmer: true,
          removeDefaultStopWordFilter: true,
          explicitSearchResultPath: true,
          forceIgnoreNoIndex: true
      }
    ]
  ],

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      "docusaurus2-dotenv",
      {
        systemvars: false,
        defaults: true
      }
    ]
  ]
}
