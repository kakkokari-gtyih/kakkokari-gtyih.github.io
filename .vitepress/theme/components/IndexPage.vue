<template>
    <div :class="$style.indexRoot" class="p-6 lg:py-12 space-y-12">
        <div class="max-w-screen-sm mx-auto">
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
        <div class="max-w-screen-sm mx-auto">
            <h2 class="text-2xl font-bold mb-4">経歴</h2>
            <ul class="list-revert ml-6">
                <li v-for="(item, index) in career" :key="index" class="mb-4">
                    <p class="text-lg font-bold">{{ item.title }}</p>
                    <div class="flex flex-col sm:flex-row gap-y-1 gap-x-2">
                        <div class="flex items-center gap-x-2">
                            <div v-if="item.to == null" class="h-5 leading-5 px-2 bg-brand-3 text-white rounded-full font-bold text-xs">
                                現在
                            </div>
                            <div class="text-sm text-gray-500">{{ item.from }} - {{ item.to }}</div>
                        </div>
                        <div class="text-sm text-gray-500">/ {{ item.position }}</div>
                    </div>
                </li>
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
</style>
