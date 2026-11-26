<template>
    <div ref="root" class="tc7-marquee space-y-3" :class="{ 'is-static': reduced }">
        <div
            v-for="(row, ri) in rows"
            :key="ri"
            class="tc7-marquee-row"
            :style="reduced ? undefined : { transform: `translate3d(${offsets[ri]}px, 0, 0)` }"
        >
            <ul class="flex gap-3 w-max px-4 md:px-8">
                <li
                    v-for="(item, ii) in (reduced ? row : [...row, ...row, ...row])"
                    :key="ii"
                    :aria-hidden="ii >= row.length ? 'true' : undefined"
                >
                    <button
                        type="button"
                        :tabindex="ii >= row.length ? -1 : undefined"
                        class="tc7-idea-chip inline-flex items-center gap-3 rounded-full border-2 border-tc-ink bg-tc-card py-2 pl-2 pr-4"
                        @click="emit('pick', item.creator.id, item.idea.title)"
                    >
                        <span class="w-8 h-8 rounded-full grid place-items-center text-tc-card" :class="item.creator.color">
                            <span :class="item.creator.icon" class="text-base" aria-hidden="true"></span>
                        </span>
                        <span class="sr-only">{{ item.creator.label }}：</span>
                        <span class="title-3 whitespace-nowrap">{{ item.idea.title }}</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue';
import { creators } from './ideas';

const emit = defineEmits<{
    /** 帯のアイデアが押された（活動の id, アイデアのタイトル） */
    pick: [creatorId: string, title: string];
}>();

// 各活動の 1 番目・2 番目・3 番目のアイデアをそれぞれ 1 段にまとめる（段ごとに活動が混ざる）
const rows = [0, 1, 2].map((n) => creators.map((creator) => ({ creator, idea: creator.ideas[n] })));
// 段ごとに流れる向き（-1: 下にスクロールすると左へ / 1: 右へ）
const directions = [-1, 1, -1];

const root = useTemplateRef<HTMLElement>('root');
const reduced = ref(false);
const offsets = ref(rows.map((_, i) => initialOffset(i, 0, 480)));

function initialOffset(i: number, progress: number, travel: number) {
    // 常に 0 以下に収め、左端に隙間が出ないようにする
    const base = -i * 120;
    return directions[i] < 0 ? base - progress * travel : base - (1 - progress) * travel;
}

let ticking = false;
let io: IntersectionObserver | null = null;

function update() {
    ticking = false;
    const el = root.value;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
    const travel = Math.min(640, window.innerWidth * 0.5 + 120);
    offsets.value = rows.map((_, i) => initialOffset(i, progress, travel));
}

function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
}

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        reduced.value = true;
        return;
    }
    update();
    io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                window.addEventListener('scroll', onScroll, { passive: true });
                window.addEventListener('resize', onScroll, { passive: true });
                onScroll();
            } else {
                window.removeEventListener('scroll', onScroll);
                window.removeEventListener('resize', onScroll);
            }
        }
    });
    if (root.value) io.observe(root.value);
});

onBeforeUnmount(() => {
    io?.disconnect();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
});
</script>

<style>
.tc7 .tc7-marquee {
    overflow: hidden;
    padding-block: 8px;
}

.tc7 .tc7-marquee-row {
    transition: transform 500ms var(--tc-ease);
    will-change: transform;
}

/* ホバーは色の変化だけ、押すと少し沈む（ボタンと同じふるまい） */
.tc7 .tc7-idea-chip {
    transition: transform 200ms var(--tc-ease), background-color 300ms var(--tc-ease);
}

.tc7 .tc7-idea-chip:hover {
    background: var(--tc-paper-2);
}

.tc7 .tc7-idea-chip:active {
    transform: translateY(1px);
}

/* 動きを減らす設定のときは流さず、横スクロールで見られるようにする */
.tc7 .tc7-marquee.is-static .tc7-marquee-row {
    overflow-x: auto;
    transition: none;
    will-change: auto;
}

@media (prefers-reduced-motion: reduce) {
    .tc7 .tc7-idea-chip:hover,
    .tc7 .tc7-idea-chip:active {
        transform: none;
    }
}
</style>
