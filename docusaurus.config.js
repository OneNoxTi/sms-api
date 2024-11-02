require('dotenv-defaults').config()

const { themes } = require('prism-react-renderer');

const code_themes = {
  light: themes.nightOwlLight,
  dark: themes.nightOwl,
};

let navbarItems = [
  {
    to: '/',
    label: 'Documentation',
    position: 'left',
  },
  // {
  //   to: '/api_methods',
  //   label: 'API',
  //   position: 'left',
  // },
  {
    type: 'localeDropdown',
    position: 'right',
  }
]

if (process.env.PSP_DOCS_DOMAIN == 'docs.alphasms.net' || process.env.PSP_DOCS_DOMAIN == 'docs.blackbox.business' || process.env.PSP_DOCS_DOMAIN == 'sms-doc.pages.dev' || 
  process.env.PSP_DOCS_DOMAIN == 'docs.interconnect.solutions' || process.env.PSP_DOCS_DOMAIN == 'partner.interconnect.solutions') {
  navbarItems.push({
    to: '/api_methods',
    label: 'API',
    position: 'left',
  })
}

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
      items: navbarItems
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
