<template>
    <svg
        class="block w-full h-4"
        :class="flip ? 'rotate-180' : ''"
        viewBox="0 0 1200 16"
        preserveAspectRatio="none"
        aria-hidden="true"
    >
        <path :d="d" :style="{ fill: color }" />
    </svg>
</template>

<script setup lang="ts">
// ちぎった紙のふちを描く区切り線。SSR とクライアントで一致させるため固定シードで生成する
const props = withDefaults(defineProps<{
    color: string;
    flip?: boolean;
    seed?: number;
}>(), {
    flip: false,
    seed: 7,
});

function makePath(seed: number) {
    let s = seed;
    const rand = () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
    let path = 'M0 16 L0 9';
    for (let x = 0; x <= 1200; x += 14 + Math.floor(rand() * 18)) {
        path += ` L${x} ${(2 + rand() * 10).toFixed(1)}`;
    }
    path += ' L1200 8 L1200 16 Z';
    return path;
}

const d = makePath(props.seed);
</script>
