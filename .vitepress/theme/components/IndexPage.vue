<template>
    <div :class="$style.indexRoot" class="p-6 md:pt-12 pb-24 space-y-12">
        <div class="relative -mx-6 -mt-6 md:-mt-12 px-6 pt-6 md:pt-12">
            <div class="absolute inset-0" :class="$style.heroGradient"></div>
            <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-transparent to-bg"></div>
            <div class="relative max-w-screen-sm mx-auto">
                <img src="/img/avatar.png" class="w-32 h-32 mx-auto mb-4" />
                <h1 class="text-3xl text-center font-bold mb-4">かっこかり</h1>
                <p class="text-center mb-4">
                    学生<br>
                    フロントエンドエンジニア<br>
                </p>
                <div class="w-full flex items-center justify-center space-x-4">
                    <a href="/works/" class="text-sm px-5 leading-10 bg-brand-3 hover:bg-brand-2 rounded-full font-bold text-white transition-colors">つくったもの</a>
                    <a href="/blog/" class="text-sm px-5 leading-10 bg-default-3 hover:bg-default-2 rounded-full font-bold transition-colors">ブログ</a>
                </div>
            </div>
        </div>
        <div class="max-w-screen-sm mx-auto">
            <h2 class="text-2xl font-bold mb-4">経歴</h2>
            <ul class="list-revert ml-6 space-y-4">
                <li v-for="(item, index) in career" :key="index">
                    <p class="text-lg font-bold">{{ item.title }}</p>
                    <div class="flex flex-col sm:flex-row gap-y-1 gap-x-2">
                        <div class="flex items-center gap-x-2">
                            <div v-if="item.to == null" class="h-5 leading-5 px-2 bg-brand-3 text-white rounded-full font-bold text-xs">
                                現在
                            </div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">{{ item.from }} - {{ item.to }}</div>
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-400"><span class="hidden sm:inline">/ </span>{{ item.position }}</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="max-w-screen-sm mx-auto">
            <h2 class="text-2xl font-bold mb-4">スキル</h2>
            <ul class="list-revert ml-6 space-y-6">
                <li>
                    Webフロントエンド技術全般（HTML / CSS / JavaScript / TypeScript / PHP・PaaS）
                    <ul class="list-revert mt-1 mb-4 ml-6 space-y-1">
                        <li><a href="https://vuejs.org/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Vue.js</a></li>
                        <li><a href="https://nuxt.com/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Nuxt</a></li>
                        <li><a href="https://vitepress.dev/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">VitePress</a></li>
                        <li><a href="https://astro.build/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Astro</a></li>
                        <li><a href="https://vite.dev/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Vite</a></li>
                    </ul>
                    <ul class="list-revert mb-4 ml-6 space-y-1">
                        <li><a href="https://tailwindcss.com/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Tailwind CSS</a></li>
                        <li><a href="https://unocss.dev/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">UnoCSS</a></li>
                        <li><a href="https://getbootstrap.com/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Bootstrap</a></li>
                    </ul>
                    <ul class="list-revert mb-4 ml-6 space-y-1">
                        <li><a href="https://nodejs.org/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Node.js</a></li>
                        <li><a href="https://bun.sh/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Bun</a></li>
                    </ul>
                    <ul class="list-revert mb-4 ml-6 space-y-1">
                        <li><a href="https://elysiajs.com/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Elysia</a></li>
                        <li><a href="https://wordpress.org/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">WordPress</a></li>
                    </ul>
                    <ul class="list-revert ml-6 space-y-1">
                        <li><a href="https://www.cloudflare.com/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Cloudflare</a></li>
                        <li><a href="https://vercel.com/" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Vercel</a></li>
                    </ul>
                </li>
                <li>
                    CI/CD・サービス間インテグレーション
                    <ul class="list-revert mt-1 ml-6 space-y-1">
                        <li><a href="https://github.com/features/actions" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">GitHub Actions</a></li>
                        <li><a href="https://developers.google.com/apps-script" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Google Apps Script</a></li>
                    </ul>
                </li>
                <li>
                    UIデザイン・グラフィックデザイン・紙面デザイン
                    <ul class="list-revert mt-1 mb-4 ml-6 space-y-1">
                        <li>PowerPoint</li>
                        <li>Inkscape</li>
                    </ul>
                </li>
                <li>
                    動画編集・配信コンテンツ制作
                    <ul class="list-revert mt-1 mb-4 ml-6 space-y-1">
                        <li>OBS</li>
                        <li>Aviutl</li>
                        <li>Google Earth Studio</li>
                    </ul>
                </li>
                <li>
                    英語
                    <ul class="list-revert mt-1 mb-4 ml-6 space-y-1">
                        <li>実用英語技能検定 準1級</li>
                        <li>TOEIC Listening & Reading IPテスト（オンライン） 935点</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="max-w-screen-sm mx-auto">
            <h2 class="text-2xl font-bold mb-4">SNS・連絡手段</h2>
            <ul class="list-revert ml-6 space-y-2">
                <li><a href="https://twitter.com/kakkokari_gtyih" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">X (Twitter)</a></li>
                <li><a href="https://misskey.io/@kakkokari_gtyih" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Misskey.io</a></li>
                <li><a href="https://misskey.flowers/@kakkokari_test1" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">はなみすきー</a></li>
                <li><a href="https://zenn.dev/kakkokari_gtyih" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">Zenn</a></li>
                <li><a href="https://github.com/kakkokari-gtyih" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">GitHub</a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSerbQkdTWvmxHTBlzMcohw0BgsyATniR4ZIO-ve00xUZSkUFA/viewform" target="_blank" class="text-brand-1 hover:text-brand-2 underline underline-offset-2 transition-colors font-500">お問い合わせフォーム</a></li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
type Career = {
    from: string;
    to?: string;
    title: string;
    position?: string;
};

const career = [{
    from: '2024年11月',
    title: 'とある研究機関',
    position: '情シス補佐',
}, {
    from: '2024年6月',
    title: 'Misskey.flowers （はなみすきー）',
    position: '開発協力',
}, {
    from: '2023年10月',
    title: 'AiScript Project',
    position: 'ドキュメンテーションサイト・VSCode拡張の作成',
}, {
    from: '2023年9月',
    title: 'Misskey Project',
    position: 'コアメンバー',
}, {
    from: '2021年11月',
    to: '2023年1月',
    title: 'エンタメ系企業',
    position: '補佐',
}, {
    from: '2021年5月',
    to: '2022年7月',
    title: '情報系ベンチャー企業',
    position: '開発補佐',
}];
</script>

<style module>
.indexRoot {
    min-height: calc(100svh - 64px);
}

.heroGradient {
    background: radial-gradient(circle at top, var(--vp-c-brand-soft) 0%, rgba(16, 102, 254, 0) 50%, rgba(16, 102, 254, 0) 100%);
}
</style>
