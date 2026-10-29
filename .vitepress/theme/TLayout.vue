<template>
    <div v-if="isBlank">
        <slot></slot>
    </div>
    <Layout v-else>
        <template v-if="route.path.startsWith('/works/') && !['/works/', '/works'].includes(route.path)" #doc-before>
            <div class="mb-2">
                <a href="/works/" class="text-sm text-brand-1 hover:text-brand-2 underline underline-offset-3 font-semibold">← つくったもの に戻る</a>
            </div>
        </template>
    </Layout>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme-without-fonts';

const { Layout } = DefaultTheme;

const route = useRoute();
const isBlank = computed(() => route.data.frontmatter?.layout === 'blank' || route.data.frontmatter?.redirectPath != null);
</script>

<style module>
.subtitle {
    font-weight: bold;
    margin-bottom: 0.5em;
    color: var(--vp-c-text-2);
}

@media (min-width: 768px) {
    .subtitle {
        font-size: 1.1em;
    }
}

.termsDiffCta {
    margin-top: -32px;
    margin-bottom: 32px;
}

.termsDiffLink::after {
    color: currentColor!important;
}
</style>
