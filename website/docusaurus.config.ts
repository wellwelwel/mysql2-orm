import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { navbarLocalePlugin, getLocaleURL } from './plugins/locale.js';

const config: Config = {
  title: 'MySQL2 ORM',
  url: 'https://wellwelwel.github.io/',
  baseUrl: '/mysql2-orm/',
  organizationName: 'wellwelwel',
  projectName: 'mysql2-orm',
  trailingSlash: false,
  favicon: 'img/favicon.svg',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/wellwelwel/mysql2-orm/tree/main/website/',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // image: 'img/mysql2-social-card.jpg',
    navbar: {
      logo: {
        alt: 'MySQL2 Logo',
        src: 'img/favicon.svg',
      },
      items: [
        {
          to: getLocaleURL(),
          label: 'MySQL2 ORM',
          position: 'left',
          className: 'navbar__brand navbar__manual--title text--truncate',
          activeBaseRegex: `^/$`,
        },
        {
          to: '/docs/category/documentation',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/wellwelwel/mysql2-orm',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub Repository',
        },
        { type: 'search', position: 'right' },
      ],
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'sql'],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    'docusaurus-plugin-sass',
    '@easyops-cn/docusaurus-search-local',
    navbarLocalePlugin,
  ],
};

export default config;
