<template>
    <svg
        viewBox="0 0 320 240"
        role="img"
        aria-label="キャラクターたちの投稿カードが赤い糸でつながり、はてなマークの付箋が貼られている推理ボードのようなイラスト"
        class="w-full h-auto"
    >
        <!-- 投稿 1 -->
        <g transform="rotate(-6 95 66)">
            <rect x="36" y="36" width="130" height="72" rx="10" class="f-cut" />
            <rect x="30" y="30" width="130" height="72" rx="10" class="f-card s-ink" />
            <circle cx="50" cy="52" r="10" class="f-terra" />
            <rect x="66" y="47" width="50" height="6" rx="3" class="f-ink2" />
            <rect x="42" y="70" width="104" height="6" rx="3" class="f-line" />
            <rect x="42" y="84" width="76" height="6" rx="3" class="f-line" />
        </g>

        <!-- 投稿 2 -->
        <g transform="rotate(5 234 92)">
            <rect x="176" y="62" width="128" height="72" rx="10" class="f-cut" />
            <rect x="170" y="56" width="128" height="72" rx="10" class="f-card s-ink" />
            <rect x="182" y="68" width="20" height="20" rx="6" class="f-blue" />
            <rect x="210" y="74" width="46" height="6" rx="3" class="f-ink2" />
            <rect x="182" y="98" width="100" height="6" rx="3" class="f-line" />
            <rect x="182" y="112" width="64" height="6" rx="3" class="f-line" />
        </g>

        <!-- 投稿 3 -->
        <g transform="rotate(-3 138 184)">
            <rect x="76" y="154" width="136" height="72" rx="10" class="f-cut" />
            <rect x="70" y="148" width="136" height="72" rx="10" class="f-card s-ink" />
            <polygon points="90,160 101,180 79,180" class="f-sage" />
            <rect x="110" y="166" width="54" height="6" rx="3" class="f-ink2" />
            <rect x="82" y="190" width="110" height="6" rx="3" class="f-line" />
            <rect x="82" y="204" width="70" height="6" rx="3" class="f-line" />
        </g>

        <!-- はてなの付箋 -->
        <g>
            <g transform="rotate(8 256 180)">
                <rect x="228" y="152" width="56" height="56" rx="2" class="f-mustard" />
                <text x="256" y="194" text-anchor="middle" font-size="34" font-weight="700" class="f-ink">?</text>
            </g>
        </g>

        <!-- 赤い糸と押しピン -->
        <path d="M58 42 L252 66 L118 160 L246 160" class="f-none s-terra" />
        <circle v-for="p in pins" :key="p[0]" :cx="p[0]" :cy="p[1]" r="5.5" class="f-terra-deep" />
    </svg>
</template>

<script setup lang="ts">
const pins = [[58, 42], [252, 66], [118, 160], [246, 160]];
</script>
