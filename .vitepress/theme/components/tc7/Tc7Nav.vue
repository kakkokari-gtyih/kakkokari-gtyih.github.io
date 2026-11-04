<template>
    <header class="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
            aria-label="ページ内メニュー"
            class="tc7-navbar pointer-events-auto inline-flex items-center gap-1 rounded-full border-2 border-tc-ink p-1"
        >
            <a href="/" class="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 transition-opacity duration-300 hover:opacity-70">
                <img src="/img/avatar.png" alt="" class="w-8 h-8 rounded-full" />
                <span class="title-4">かっこかり</span>
            </a>

            <ul class="hidden md:flex items-center gap-1">
                <li v-for="item in items" :key="item.id">
                    <a
                        :href="`#${item.id}`"
                        class="tc7-navlink block rounded-full px-3 leading-8 title-4"
                        :class="active === item.id ? 'is-current' : ''"
                        :aria-current="active === item.id ? 'location' : undefined"
                    >{{ item.label }}</a>
                </li>
            </ul>

            <a href="#contact" class="tc-btn tc-btn-primary tc-btn-flat button-sm !rounded-full ml-1 mr-0 md:mr-1">
                <span class="tc-btn-face !py-1">話しかける</span>
            </a>

            <button
                ref="toggleEl"
                type="button"
                class="md:hidden relative w-10 h-10 rounded-full transition-opacity duration-300 hover:opacity-70"
                :aria-expanded="open"
                aria-controls="tc7-mobile-menu"
                :aria-label="open ? 'メニューを閉じる' : 'メニューを開く'"
                @click="open = !open"
            >
                <span class="tc7-bar" :class="open ? 'is-open-1' : 'is-closed-1'"></span>
                <span class="tc7-bar" :class="open ? 'is-open-2' : 'is-closed-2'"></span>
            </button>
        </nav>
    </header>

    <Transition name="tc7-panel">
        <div
            v-if="open"
            id="tc7-mobile-menu"
            ref="panelEl"
            class="tc7-panel fixed inset-0 z-40 md:hidden flex flex-col px-6 pt-24 pb-10"
        >
            <ul class="flex flex-col gap-2">
                <li
                    v-for="(item, i) in [...items, { id: 'contact', label: '話しかける' }]"
                    :key="item.id"
                    class="tc7-menu-item"
                    :style="{ animationDelay: `${Math.min(i * 60, 400)}ms` }"
                >
                    <a
                        :href="`#${item.id}`"
                        class="flex items-center justify-between rounded-2xl px-4 py-3 heading-5 transition-opacity duration-300 hover:opacity-70"
                        :class="active === item.id ? 'bg-tc-card' : ''"
                        :aria-current="active === item.id ? 'location' : undefined"
                        @click="close"
                    >
                        {{ item.label }}
                        <span class="i-ph-arrow-right text-xl text-tc-terra" aria-hidden="true"></span>
                    </a>
                </li>
            </ul>
            <a href="/" class="mt-auto flex items-center gap-2 body-5 text-tc-ink-2 tc7-menu-item" :style="{ animationDelay: '400ms' }">
                <span class="i-ph-house text-lg" aria-hidden="true"></span>
                ポートフォリオのトップへ
            </a>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue';

const items = [
    { id: 'ideas', label: 'アイデア' },
    { id: 'projects', label: '開発中' },
    { id: 'works', label: 'これまで' },
    { id: 'misskey', label: 'Misskey' },
    { id: 'faq', label: 'よくある質問' },
];

const open = ref(false);
const active = ref<string | null>(null);
const toggleEl = useTemplateRef<HTMLButtonElement>('toggleEl');
const panelEl = useTemplateRef<HTMLDivElement>('panelEl');

function close() {
    open.value = false;
}

watch(open, async (v) => {
    document.documentElement.style.overflow = v ? 'hidden' : '';
    if (v) {
        await nextTick();
        panelEl.value?.querySelector<HTMLAnchorElement>('a')?.focus();
    } else {
        toggleEl.value?.focus({ preventScroll: true });
    }
});

function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open.value) close();
}

let io: IntersectionObserver | null = null;

onMounted(() => {
    window.addEventListener('keydown', onKeydown);
    io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) active.value = entry.target.id;
        }
    }, { rootMargin: '-45% 0px -50% 0px' });
    for (const id of [...items.map((i) => i.id), 'contact']) {
        const el = document.getElementById(id);
        if (el) io.observe(el);
    }
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown);
    io?.disconnect();
    document.documentElement.style.overflow = '';
});
</script>

<style>
.tc7 .tc7-navbar {
    background: color-mix(in srgb, var(--tc-card) 78%, transparent);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

.tc7 .tc7-navlink {
    color: var(--tc-ink-2);
    transition: opacity 300ms var(--tc-ease), background-color 300ms var(--tc-ease);
}

.tc7 .tc7-navlink:hover {
    background: var(--tc-paper-2);
}

.tc7 .tc7-navlink.is-current {
    background: var(--tc-ink);
    color: var(--tc-card);
}

/* ハンバーガー ⇄ × の変形 */
.tc7 .tc7-bar {
    position: absolute;
    left: 10px;
    top: 19px;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background: var(--tc-ink);
    transition: transform 500ms var(--tc-ease);
}

.tc7 .tc7-bar.is-closed-1 { transform: translateY(-4px); }
.tc7 .tc7-bar.is-closed-2 { transform: translateY(4px); }
.tc7 .tc7-bar.is-open-1 { transform: rotate(45deg); }
.tc7 .tc7-bar.is-open-2 { transform: rotate(-45deg); }

.tc7 .tc7-panel {
    background: color-mix(in srgb, var(--tc-paper) 94%, transparent);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
}

.tc7 .tc7-panel-enter-active,
.tc7 .tc7-panel-leave-active {
    transition: opacity 300ms var(--tc-ease);
}

.tc7 .tc7-panel-enter-from,
.tc7 .tc7-panel-leave-to {
    opacity: 0;
}

.tc7 .tc7-menu-item {
    animation: tc7-menu-in 500ms var(--tc-ease) both;
}

@keyframes tc7-menu-in {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
    .tc7 .tc7-menu-item { animation-name: tc7-fade; }
    .tc7 .tc7-bar { transition-duration: 0ms; }
}
</style>
