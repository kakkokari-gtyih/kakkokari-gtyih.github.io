<template>
    <div>
        <div role="group" aria-label="あなたの活動を選ぶ" class="flex flex-wrap gap-2">
            <button
                v-for="c in creators"
                :key="c.id"
                type="button"
                :aria-pressed="selected === c.id"
                class="tc7-chip inline-flex items-center gap-2 rounded-full border-2 border-tc-ink px-3 py-2 button-sm"
                :class="selected === c.id ? 'is-on' : ''"
                @click="selected = c.id"
            >
                <span :class="c.icon" class="text-lg" aria-hidden="true"></span>
                {{ c.label }}
            </button>
        </div>

        <div class="mt-8" aria-live="polite">
            <ul :key="selected" class="grid gap-4 md:grid-cols-3">
                <li
                    v-for="(idea, i) in current.ideas"
                    :key="idea.title"
                    class="tc7-pop stitch cut relative rounded-2xl border-2 border-tc-ink bg-tc-card p-6 flex flex-col"
                    :class="highlight === idea.title ? 'is-picked' : ''"
                    :style="{ animationDelay: `${i * 80}ms` }"
                >
                    <span class="tape" :class="tapeClass[i]" :style="{ top: '-12px', left: '24px', transform: `rotate(${[-4, 3, -2][i]}deg)` }" aria-hidden="true"></span>
                    <p class="caption-3 text-tc-ink-2 flex items-center gap-1">
                        <span class="i-ph-lightbulb text-sm text-tc-terra" aria-hidden="true"></span>
                        {{ current.label }} × テクノロジー
                    </p>
                    <h3 class="heading-6 mt-2">{{ idea.title }}</h3>
                    <p class="body-6 text-tc-ink-2 mt-2">{{ idea.body }}</p>
                    <div class="mt-auto pt-4">
                        <a
                            v-if="idea.tag.href"
                            :href="idea.tag.href"
                            class="relative z-10 inline-flex items-center gap-1 rounded-full px-2 py-1 caption-3 transition-opacity duration-300 hover:opacity-70"
                            :class="tagClass[idea.tag.kind]"
                        >
                            {{ tagLabel[idea.tag.kind] }}：{{ idea.tag.label }}
                            <span class="i-ph-arrow-right text-xs" aria-hidden="true"></span>
                        </a>
                        <span v-else class="inline-flex items-center rounded-full px-2 py-1 caption-3" :class="tagClass[idea.tag.kind]">
                            {{ tagLabel[idea.tag.kind] }}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { creators, type TagKind } from './ideas';

/** 選択中の活動の id */
const selected = defineModel<string>({ required: true });

defineProps<{
    /** 強調表示するアイデアのタイトル */
    highlight?: string | null;
}>();

const tagLabel: Record<TagKind, string> = {
    made: 'つくったことがある',
    plan: '開発中',
    idea: 'アイデアのタネ',
};

const tagClass: Record<TagKind, string> = {
    made: 'bg-tc-sage-paper text-tc-ink',
    plan: 'bg-tc-pink-paper text-tc-ink',
    idea: 'bg-tc-paper-2 text-tc-ink-2',
};

const tapeClass = ['', 'tape-pink', 'tape-blue'];

const current = computed(() => creators.find((c) => c.id === selected.value) ?? creators[0]);
</script>

<style>
.tc7 .tc7-chip {
    background: var(--tc-card);
    color: var(--tc-ink);
    transition: transform 300ms var(--tc-ease), background-color 300ms var(--tc-ease), color 300ms var(--tc-ease);
}

.tc7 .tc7-chip:hover {
    background: var(--tc-paper-2);
}

.tc7 .tc7-chip:active {
    transform: translateY(1px);
}

.tc7 .tc7-chip.is-on,
.tc7 .tc7-chip.is-on:hover {
    background: var(--tc-ink);
    color: var(--tc-card);
}

.tc7 .tc7-pop {
    animation: tc7-rise 500ms var(--tc-ease) both;
}

/* 帯から選ばれたアイデア */
.tc7 .tc7-pop.is-picked {
    outline: 3px solid var(--tc-terra-deep);
    outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
    .tc7 .tc7-pop { animation-name: tc7-fade; }
    .tc7 .tc7-chip:hover,
    .tc7 .tc7-chip:active { transform: none; }
}
</style>
