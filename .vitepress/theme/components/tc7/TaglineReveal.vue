<template>
    <section ref="root" aria-labelledby="tc7-tagline" class="px-4 md:px-8 py-24">
        <div class="max-w-[680px] mx-auto">
            <h2 id="tc7-tagline" class="heading-4 sm:heading-3 md:heading-2">
                <span class="sr-only">{{ plain }}</span>
                <span aria-hidden="true">
                    <span v-for="(line, li) in lines" :key="li" class="block">
                        <span
                            v-for="(word, wi) in line"
                            :key="wi"
                            class="tc7-word chunk"
                            :class="{ 'is-on': offsets[li] + wi < active }"
                        >{{ word }}</span>
                    </span>
                </span>
            </h2>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue';

// 文節ごとに区切る（日本語は空白がないので手動で分割）
const lines = [
    ['作品は、', 'あなたにしか', 'つくれない。'],
    ['その作品が', '届く道は、'],
    ['一緒に', 'つくれる。'],
];

const plain = lines.map((l) => l.join('')).join('');
const offsets = lines.map((_, i) => lines.slice(0, i).reduce((n, l) => n + l.length, 0));
const total = lines.reduce((n, l) => n + l.length, 0);

const root = useTemplateRef<HTMLElement>('root');
const active = ref(0);

let ticking = false;
let io: IntersectionObserver | null = null;

function update() {
    ticking = false;
    const el = root.value;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    // セクション中央が画面の 85% 位置に来たら開始、35% 位置で全語が点灯
    const center = rect.top + rect.height / 2;
    const start = vh * 0.85;
    const end = vh * 0.35;
    const progress = Math.min(1, Math.max(0, (start - center) / (start - end)));
    const next = Math.round(progress * total);
    if (next > active.value) active.value = next;
    if (active.value >= total) detach();
}

function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
}

function attach() {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

function detach() {
    window.removeEventListener('scroll', onScroll);
}

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        active.value = total;
        return;
    }
    io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) attach();
            else detach();
        }
    });
    if (root.value) io.observe(root.value);
});

onBeforeUnmount(() => {
    detach();
    io?.disconnect();
});
</script>

<style>
.tc7 .tc7-word {
    opacity: 0.28;
    transition: opacity 500ms var(--tc-ease);
}

.tc7 .tc7-word.is-on {
    opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
    .tc7 .tc7-word {
        opacity: 1;
        transition: none;
    }
}
</style>
