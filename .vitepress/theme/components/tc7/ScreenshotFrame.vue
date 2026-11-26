<template>
    <figure
        class="cut overflow-hidden border-2 border-tc-ink bg-tc-card"
        :class="variant === 'pc' ? 'rounded-2xl' : 'rounded-3xl'"
    >
        <div v-if="variant === 'pc'" class="flex items-center gap-2 px-3 py-2 border-b-2 border-tc-ink bg-tc-paper-2">
            <span class="w-3 h-3 rounded-full bg-tc-terra"></span>
            <span class="w-3 h-3 rounded-full bg-tc-mustard"></span>
            <span class="w-3 h-3 rounded-full bg-tc-sage"></span>
        </div>
        <!-- スクリーンショットの比率（PC 16:9 / スマートフォン 630×1366）に合わせる -->
        <div :class="variant === 'pc' ? 'aspect-video' : 'aspect-[630/1366]'">
            <img v-if="src" :src="src" :alt="alt" class="block w-full h-full object-cover object-top" loading="lazy" />
            <div
                v-else
                class="w-full h-full flex flex-col items-center justify-center gap-2 p-4 text-center bg-tc-paper"
                role="img"
                :aria-label="`${alt}（準備中）`"
            >
                <span class="i-ph-image text-3xl text-tc-ink-2" aria-hidden="true"></span>
                <span class="caption-4 text-tc-ink-2">スクリーンショット準備中</span>
                <code class="caption-5 text-tc-ink-2 break-all">{{ placeholder }}</code>
            </div>
        </div>
    </figure>
</template>

<script setup lang="ts">
defineProps<{
    variant: 'pc' | 'mobile';
    src: string | null;
    alt: string;
    placeholder: string;
}>();
</script>
