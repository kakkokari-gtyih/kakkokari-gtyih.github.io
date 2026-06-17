<template>
    <div class="px-6 py-12">
        <div class="container mx-auto max-w-[calc(var(--vp-layout-max-width)-64px)]">
            <div class="vp-doc mb-6">
                <h1>つくったもの</h1>
                <p>ここに書いてあるもの以外にも、さまざまなオープンソースプロジェクト・非公開のプロジェクトに貢献しています。</p>
            </div>
            <WorksItems />
        </div>
    </div>
</template>

<script setup lang="ts">
import WorksItems from './WorksItems.vue';
</script>
