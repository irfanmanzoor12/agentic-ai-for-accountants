import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// UPDATE THESE when GitHub repository is created:
// url: your GitHub Pages URL, e.g. https://your-username.github.io
// baseUrl: '/' for user/org pages, or '/repo-name/' for project pages
// organizationName: your GitHub username
// projectName: your GitHub repository name

const config: Config = {
  title: 'Agentic AI for Accounting Professionals',
  tagline: "From ChatGPT to AI Supervisors — A Non-Programmer's Guide",
  favicon: 'img/favicon.ico',

  url: 'https://example.com',          // TODO: update with GitHub Pages URL
  baseUrl: '/',

  organizationName: 'your-github-username', // TODO: update
  projectName: 'agentic-ai-for-accountants',

  onBrokenLinks: 'warn',

  // Treat .md files as CommonMark (not MDX) — prevents JSX parsing of < > in prose
  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',   // docs-only mode — serve book from root URL
        },
        blog: false,            // no blog for a book
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Agentic AI for Accountants',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'bookSidebar',
          position: 'left',
          label: 'Read the Book',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Part 1: Personal Skills',
          items: [
            {label: 'Ch1: Why AI Changes Accounting', to: '/part-1-personal-skills/ch01-why-ai-changes-accounting'},
            {label: 'Ch2: Prompt Engineering', to: '/part-1-personal-skills/ch02-prompt-engineering'},
            {label: 'Ch3: Context Engineering', to: '/part-1-personal-skills/ch03-context-engineering'},
            {label: 'Ch4: Spec-Driven Thinking', to: '/part-1-personal-skills/ch04-spec-driven-thinking'},
            {label: 'Ch5: Test-Driven Verification', to: '/part-1-personal-skills/ch05-test-driven-verification'},
          ],
        },
        {
          title: 'Part 2: AI Systems',
          items: [
            {label: 'Ch6: MCP', to: '/part-2-ai-systems/ch06-mcp-tool-connections'},
            {label: 'Ch7: AI Skills', to: '/part-2-ai-systems/ch07-ai-skills'},
            {label: 'Ch8: AI Agents', to: '/part-2-ai-systems/ch08-ai-agents'},
            {label: 'Ch9: Orchestration', to: '/part-2-ai-systems/ch09-orchestration'},
            {label: 'Ch10: Guardrails', to: '/part-2-ai-systems/ch10-guardrails-safety'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Agentic AI for Accounting Professionals. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
