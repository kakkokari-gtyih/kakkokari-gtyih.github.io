<template>
    <svg
        viewBox="0 0 480 420"
        role="img"
        aria-label="スケッチブック、音符、マイク、リアクションの吹き出しが、紙でつくったブラウザの画面と糸でつながっているイラスト"
        class="w-full h-auto"
    >
        <!-- 背景の丸い色紙 -->
        <circle cx="245" cy="215" r="176" class="f-sage-paper" />
        <circle cx="420" cy="62" r="34" class="f-blue-paper" />
        <circle cx="54" cy="236" r="22" class="f-pink-paper" />

        <!-- 糸 -->
        <g class="f-none">
            <path d="M150 122 Q190 142 202 172" class="s-stitch" />
            <path d="M362 128 Q332 150 314 170" class="s-stitch" />
            <path d="M372 318 Q348 304 324 292" class="s-stitch" />
            <path d="M160 312 Q178 302 190 292" class="s-stitch" />
            <path d="M110 400 C150 392 182 396 200 384" class="s-stitch" />
        </g>

        <!-- きらめき -->
        <path :d="sparklePath(226, 66, 12)" class="f-mustard" />
        <path :d="sparklePath(452, 206, 10)" class="f-terra" />
        <path :d="sparklePath(318, 384, 9)" class="f-sage" />

        <!-- 中央：紙のブラウザ画面 -->
        <g>
            <rect x="173" y="168" width="170" height="130" rx="14" class="f-cut" />
            <rect x="165" y="160" width="170" height="130" rx="14" class="f-card" />
            <path d="M165 184 V174 A14 14 0 0 1 179 160 H321 A14 14 0 0 1 335 174 V184 Z" class="f-terra" />
            <rect x="165" y="160" width="170" height="130" rx="14" class="f-none s-ink" />
            <path d="M165 184 H335" class="s-ink-thin" />
            <circle cx="181" cy="172" r="3.5" class="f-card" />
            <circle cx="193" cy="172" r="3.5" class="f-card" />
            <circle cx="205" cy="172" r="3.5" class="f-card" />

            <rect x="180" y="198" width="70" height="52" rx="6" class="f-blue" />
            <circle cx="236" cy="210" r="6" class="f-mustard" />
            <path d="M184 246 L203 222 L216 236 L226 227 L246 246 Z" class="f-blue-paper" />

            <rect x="262" y="200" width="58" height="8" rx="4" class="f-line" />
            <rect x="262" y="216" width="44" height="8" rx="4" class="f-line" />
            <rect x="262" y="232" width="52" height="8" rx="4" class="f-line" />

            <rect x="180" y="262" width="34" height="16" rx="8" class="f-pink-paper" />
            <path :d="heartPath(191, 265.5, 0.75)" class="f-terra" />
            <rect x="220" y="262" width="34" height="16" rx="8" class="f-sage-paper" />
            <polygon :points="starPoints(237, 270, 6)" class="f-mustard" />
            <rect x="270" y="262" width="50" height="16" rx="8" class="f-mustard" />

            <rect x="150" y="150" width="46" height="16" class="f-tape" transform="rotate(-24 173 158)" />
            <rect x="304" y="148" width="46" height="16" class="f-tape-pink" transform="rotate(20 327 156)" />
        </g>

        <!-- 左上：スケッチブックとえんぴつ（イラスト・漫画） -->
        <g>
            <rect x="58" y="58" width="104" height="84" rx="6" class="f-cut" />
            <rect x="52" y="52" width="104" height="84" rx="6" class="f-card s-ink" />
            <circle v-for="i in 6" :key="i" :cx="62 + i * 14" cy="52" r="4" class="f-paper s-ink-thin" />
            <path d="M66 112 C78 82 94 122 106 94 S128 100 140 84" class="f-none s-terra" />
            <circle cx="126" cy="116" r="8" class="f-mustard" />
            <g transform="rotate(32 150 120)">
                <rect x="144" y="84" width="12" height="8" rx="2" class="f-pink s-ink-thin" />
                <rect x="144" y="92" width="12" height="52" class="f-mustard s-ink-thin" />
                <polygon points="144,144 156,144 150,158" class="f-card s-ink-thin" />
                <polygon points="148,153 152,153 150,158" class="f-ink" />
            </g>
        </g>

        <!-- 右上：音符（音楽） -->
        <g>
            <rect x="376" y="58" width="6" height="62" class="f-terra-deep" />
            <rect x="420" y="46" width="6" height="62" class="f-terra-deep" />
            <polygon points="376,58 426,46 426,62 376,74" class="f-terra-deep" />
            <ellipse cx="368" cy="120" rx="15" ry="11" transform="rotate(-20 368 120)" class="f-terra-deep" />
            <ellipse cx="412" cy="108" rx="15" ry="11" transform="rotate(-20 412 108)" class="f-terra-deep" />
        </g>

        <!-- 右下：マイク（声・配信） -->
        <g>
            <rect x="384" y="284" width="40" height="60" rx="20" class="f-cut" />
            <rect x="378" y="278" width="40" height="60" rx="20" class="f-mustard s-ink" />
            <path d="M386 296 H410 M386 308 H410 M386 320 H410" class="s-ink-thin" />
            <path d="M366 318 A32 32 0 0 0 430 318" class="f-none s-ink" />
            <path d="M398 350 V380 M380 382 H416" class="s-ink" />
        </g>

        <!-- 左下：リアクションの吹き出し（ファン・コミュニティ） -->
        <g>
            <rect x="46" y="292" width="128" height="66" rx="24" class="f-cut" />
            <polygon points="76,354 66,380 102,356" class="f-cut" />
            <rect x="40" y="286" width="128" height="66" rx="24" class="f-pink" />
            <polygon points="70,348 60,374 96,350" class="f-pink" />
            <circle cx="72" cy="319" r="13" class="f-card" />
            <path :d="heartPath(65, 313, 0.9)" class="f-terra" />
            <circle cx="104" cy="319" r="13" class="f-card" />
            <polygon :points="starPoints(104, 320, 8)" class="f-mustard" />
            <circle cx="136" cy="319" r="13" class="f-card" />
            <circle cx="132" cy="316" r="1.8" class="f-ink" />
            <circle cx="140" cy="316" r="1.8" class="f-ink" />
            <path d="M130.5 321 Q136 327 141.5 321" class="f-none s-ink-thin" />
        </g>

        <!-- 下：はさみ -->
        <g transform="translate(236 372) rotate(-22)">
            <circle cx="-28" cy="-10" r="10" class="f-none s-terra" />
            <circle cx="-28" cy="10" r="10" class="f-none s-terra" />
            <polygon points="-19,-6 40,1 -16,-11" class="f-ink2" />
            <polygon points="-19,6 40,-1 -16,11" class="f-ink2" />
            <circle cx="6" cy="0" r="2.5" class="f-card" />
        </g>
    </svg>
</template>

<script setup lang="ts">
import { heartPath, sparklePath, starPoints } from '../shapes';
</script>
