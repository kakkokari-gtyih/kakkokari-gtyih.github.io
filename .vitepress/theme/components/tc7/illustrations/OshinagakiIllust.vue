<template>
    <svg
        viewBox="0 0 560 320"
        role="img"
        aria-label="画像1枚のおしながきが、検索・会場マップ・欲しいものリストのデータに変わっていく図"
        class="w-full h-auto"
    >
        <!-- 左：紙のおしながき -->
        <rect x="28" y="28" width="184" height="268" rx="10" class="f-cut" />
        <rect x="20" y="20" width="184" height="268" rx="10" class="f-card s-ink" />
        <rect x="86" y="8" width="52" height="18" class="f-tape" transform="rotate(-5 112 17)" />
        <rect x="36" y="38" width="152" height="30" rx="6" class="f-terra" />
        <text x="112" y="58" text-anchor="middle" font-size="15" font-weight="700" class="f-card">おしながき</text>

        <g v-for="item in sheetItems" :key="item.x + '-' + item.y">
            <rect :x="item.x" :y="item.y" width="68" height="58" rx="6" :class="item.color" />
            <rect :x="item.x + 10" :y="item.y + 10" width="48" height="10" rx="3" class="f-card" opacity="0.6" />
            <rect :x="item.x" :y="item.y + 66" width="52" height="6" rx="3" class="f-line" />
            <text :x="item.x" :y="item.y + 88" font-size="12" font-weight="700" class="f-ink">{{ item.label }}</text>
        </g>

        <!-- 中央：変換の矢印 -->
        <path d="M220 154 C248 128 278 128 300 148" class="f-none s-stitch" />
        <polygon points="293,139 306,152 290,155" class="f-ink2" />
        <text x="262" y="184" text-anchor="middle" font-size="12" font-weight="700" class="f-ink2">さがせるデータに</text>

        <!-- 右上：横断検索 -->
        <rect x="316" y="20" width="228" height="58" rx="14" class="f-card s-ink" />
        <rect x="330" y="35" width="200" height="28" rx="14" class="f-paper2" />
        <circle cx="348" cy="48" r="6" class="f-none s-ink-thin" />
        <path d="M352.5 52.5 L357 57" class="s-ink-thin" />
        <text x="366" y="53" font-size="12" class="f-ink2">作品名・ジャンルで検索</text>

        <!-- 右中：会場マップ -->
        <rect x="316" y="94" width="228" height="116" rx="14" class="f-card s-ink" />
        <text x="332" y="118" font-size="12" font-weight="700" class="f-ink2">会場マップ</text>
        <template v-for="row in 3" :key="row">
            <rect
                v-for="col in 8"
                :key="col"
                :x="332 + (col - 1) * 25"
                :y="104 + row * 24"
                width="20"
                height="16"
                rx="3"
                :class="row === 2 && col === 6 ? 'f-terra' : 'f-paper2'"
            />
        </template>
        <path d="M467 148 L461 137 A7 7 0 1 1 473 137 Z" class="f-terra-deep" />
        <circle cx="467" cy="133" r="2.5" class="f-card" />

        <!-- 右下：欲しいものリスト -->
        <rect x="316" y="226" width="228" height="74" rx="14" class="f-card s-ink" />
        <rect x="330" y="240" width="20" height="20" rx="3" class="f-blue" />
        <rect x="360" y="246" width="110" height="8" rx="4" class="f-line" />
        <path :d="heartPath(512, 243)" class="f-terra" />
        <rect x="330" y="268" width="20" height="20" rx="3" class="f-mustard" />
        <rect x="360" y="274" width="84" height="8" rx="4" class="f-line" />
        <path :d="heartPath(512, 271)" class="f-terra" />
    </svg>
</template>

<script setup lang="ts">
import { heartPath } from '../shapes';

const sheetItems = [
    { x: 36, y: 84, color: 'f-blue', label: '新刊 ¥700' },
    { x: 120, y: 84, color: 'f-mustard', label: '既刊 ¥500' },
    { x: 36, y: 184, color: 'f-sage', label: 'CD ¥1,000' },
    { x: 120, y: 184, color: 'f-pink', label: 'ステッカー' },
];
</script>
