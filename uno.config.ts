import { defineConfig } from 'unocss';
import { presetWind3 } from 'unocss';

export default defineConfig({
    presets: [
        presetWind3(),
    ],
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
        },
    },
});
