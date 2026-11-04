<template>
    <div class="flex flex-col sm:flex-row gap-3" :class="center ? 'sm:justify-center' : ''">
        <a :href="LINKS.xProfile" target="_blank" rel="noopener" class="tc-btn tc-btn-primary button-md">
            <span class="i-ph-x-logo text-xl" aria-hidden="true"></span>
            XのDMで話しかける
        </a>
        <a :href="LINKS.form" target="_blank" rel="noopener" class="tc-btn tc-btn-secondary button-md">
            <span class="i-ph-envelope-simple text-xl" aria-hidden="true"></span>
            フォームで相談する
        </a>
    </div>
    <p class="caption-2 text-tc-ink-2 mt-4 flex items-center gap-2" :class="center ? 'justify-center' : ''">
        <span class="i-ph-chat-circle-dots text-base text-tc-terra" aria-hidden="true"></span>
        雑談やアイデアの壁打ちだけでも大歓迎です
    </p>
</template>

<script setup lang="ts">
import { LINKS } from './config';

defineProps<{ center?: boolean }>();
</script>
