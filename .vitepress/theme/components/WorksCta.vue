<template>
    <div class="tip custom-block p-4 mb-4">
        <div class="font-semibold text-center mb-2">この制作物を見る</div>
        <a :href="url" target="_blank" rel="noopener" class="block bg-bg hover:opacity-100! rounded-lg px-4 py-3 text-center truncate">
            <span class="text-lg font-semibold">
                {{ url }}
            </span>
        </a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    url: string;
}>();
</script>
