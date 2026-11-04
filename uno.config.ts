import { defineConfig, presetIcons, presetWind3 } from 'unocss';

export default defineConfig({
    content: {
        pipeline: {
            include: [
                /\.(vue|svelte|[jt]sx|mdx?|astro|html)($|\?)/,
                // LP（/lp/tc7）のデータファイルに書いたクラス名も抽出する
                /components[\\/]tc7[\\/].*\.ts($|\?)/,
            ],
        },
    },
    presets: [
        presetWind3(),
        presetIcons({
            collections: {
                ph: () => import('@iconify-json/ph').then((m) => m.icons),
            },
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
                'flex-shrink': '0',
            },
        }),
    ],
    shortcuts: {
        // 名前付きテキストスタイル
        'heading-1': 'text-6xl leading-tight font-semibold',
        'heading-2': 'text-5xl leading-tight font-semibold',
        'heading-3': 'text-4xl font-semibold',
        'heading-4': 'text-3xl font-semibold',
        'heading-5': 'text-2xl font-semibold',
        'heading-6': 'text-xl font-semibold',
        'title-1': 'text-xl font-medium',
        'title-2': 'text-lg font-medium',
        'title-3': 'text-base font-medium',
        'title-4': 'text-sm font-medium',
        'title-5': 'text-xs font-medium',
        'body-1': 'text-base font-semibold',
        'body-2': 'text-base font-medium',
        'body-3': 'text-base font-normal',
        'body-4': 'text-sm font-semibold',
        'body-5': 'text-sm font-medium',
        'body-6': 'text-sm font-normal',
        'button-lg': 'text-lg font-semibold',
        'button-md': 'text-base font-semibold',
        'button-sm': 'text-sm font-semibold',
        'button-xsm': 'text-xs font-semibold',
        'caption-1': 'text-sm font-medium',
        'caption-2': 'text-sm font-normal',
        'caption-3': 'text-xs font-semibold',
        'caption-4': 'text-xs font-medium',
        'caption-5': 'text-xs font-normal',
    },
    theme: {
        colors: {
            bg: 'var(--vp-c-bg)',
            brand: {
                1: 'var(--vp-c-brand-1)',
                2: 'var(--vp-c-brand-2)',
                3: 'var(--vp-c-brand-3)',
                soft: 'var(--vp-c-brand-soft)',
            },
            default: {
                1: 'var(--vp-c-default-1)',
                2: 'var(--vp-c-default-2)',
                3: 'var(--vp-c-default-3)',
                soft: 'var(--vp-c-default-soft)',
            },
            // LP（/lp/tc7）用のパレット
            tc: {
                'paper': { DEFAULT: 'var(--tc-paper)', 2: 'var(--tc-paper-2)' },
                'card': 'var(--tc-card)',
                'ink': { DEFAULT: 'var(--tc-ink)', 2: 'var(--tc-ink-2)' },
                'line': 'var(--tc-line)',
                'terra': 'var(--tc-terra)',
                'terra-deep': 'var(--tc-terra-deep)',
                'mustard': 'var(--tc-mustard)',
                'sage': 'var(--tc-sage)',
                'sage-paper': 'var(--tc-sage-paper)',
                'blue': 'var(--tc-blue)',
                'blue-paper': 'var(--tc-blue-paper)',
                'pink': 'var(--tc-pink)',
                'pink-paper': 'var(--tc-pink-paper)',
                'mk': 'var(--tc-mk)',
                'mk-deep': 'var(--tc-mk-deep)',
                'mk-paper': 'var(--tc-mk-paper)',
            },
        },
    },
});
