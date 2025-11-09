import { defineConfig } from 'vitepress';
import footnote from 'markdown-it-footnote';
import unoCss from 'unocss/vite';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja-JP',
  title: 'かっこかり ポートフォリオ',
  description: 'フロントエンドエンジニアのポートフォリオサイト',
  srcDir: 'docs',
  vite: {
    plugins: [
      unoCss(),
    ],
  },
  markdown: {
    config(md) {
      md.use(footnote);
    },
  },
  head: [
    ['meta', { name: 'robots', content: 'noindex' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=BIZ+UDGothic:wght@400;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'トップ', link: '/' },
      { text: 'つくったもの', link: '/works' },
      { text: 'ブログ', link: '/blog' },
      { text: 'お問い合わせ', link: 'https://docs.google.com/forms/d/e/1FAIpQLSerbQkdTWvmxHTBlzMcohw0BgsyATniR4ZIO-ve00xUZSkUFA/viewform' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kakkokari-gtyih' },
      { icon: 'twitter', link: 'https://twitter.com/kakkokari_gtyih' },
      { icon: 'misskey', link: 'https://misskey.io/@kakkokari_gtyih' },
      { icon: 'zenn', link: 'https://zenn.dev/kakkokari_gtyih' },
    ],

    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },
    outline: {
      label: '目次',
    },
    darkModeSwitchLabel: 'ダークモード',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'ページの先頭に戻る',
  },
});
