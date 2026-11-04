<template>
    <svg
        viewBox="0 0 320 240"
        role="img"
        aria-label="ガーランドで飾られたスマートフォンの中で、投稿にハートや星のリアクションが付いているイラスト"
        class="w-full h-auto"
    >
        <!-- ガーランド -->
        <path d="M14 34 Q160 92 306 34" class="f-none s-ink-thin" />
        <polygon v-for="f in flags" :key="f.x" :points="`${f.x - 10},${f.y} ${f.x + 10},${f.y} ${f.x},${f.y + 20}`" :class="f.color" />

        <!-- 大きな絵文字の切り絵 -->
        <g>
            <path :d="heartPath(26, 128, 3.2)" class="f-cut" transform="translate(5 5)" />
            <path :d="heartPath(26, 128, 3.2)" class="f-terra" />
        </g>
        <g>
            <polygon :points="starPoints(276, 150, 30)" class="f-cut" transform="translate(5 5)" />
            <polygon :points="starPoints(276, 150, 30)" class="f-mustard" />
        </g>

        <!-- スマートフォン -->
        <rect x="114" y="22" width="104" height="204" rx="20" class="f-cut" />
        <rect x="108" y="16" width="104" height="204" rx="20" class="f-card s-ink" />
        <rect x="144" y="25" width="32" height="6" rx="3" class="f-ink" />

        <g v-for="(note, i) in notes" :key="i">
            <circle cx="128" :cy="note.y + 12" r="9" :class="note.avatar" />
            <rect x="142" :y="note.y + 4" width="56" height="6" rx="3" class="f-line" />
            <rect x="142" :y="note.y + 16" width="40" height="6" rx="3" class="f-line" />
            <rect x="142" :y="note.y + 28" width="26" height="14" rx="7" class="f-pink-paper" />
            <path :d="heartPath(149, note.y + 31.5, 0.75)" class="f-terra" />
            <rect x="172" :y="note.y + 28" width="26" height="14" rx="7" class="f-sage-paper" />
            <polygon :points="starPoints(185, note.y + 35.5, 5.5)" class="f-mustard" />
        </g>
    </svg>
</template>

<script setup lang="ts">
import { heartPath, starPoints } from '../shapes';

const flags = [
    { x: 42, y: 45, color: 'f-terra' },
    { x: 78, y: 54, color: 'f-mustard' },
    { x: 242, y: 54, color: 'f-sage' },
    { x: 278, y: 45, color: 'f-blue' },
];

const notes = [
    { y: 42, avatar: 'f-terra' },
    { y: 100, avatar: 'f-sage' },
    { y: 158, avatar: 'f-blue' },
];
</script>
