<template>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <a
            v-for="work in data"
            :key="work.url"
            :href="work.url"
            class="block group"
        >
            <div class="relative rounded-xl bg-brand-soft w-full h-auto min-h-0 aspect-[1.91] px-7 pt-7 overflow-clip mb-3">
                <img
                    v-if="work.thumbnail != null"
                    :src="work.thumbnail"
                    :alt="work.title"
                    loading="lazy"
                    class="rounded-t-xl w-full h-[105%] mb-[-5%] object-cover object-center-top transform-origin-bc transition-transform group-hover:scale-[1.025] group-hover:-translate-y-[2.5%]"
                />
            </div>
            <h3 class="text-lg font-semibold tracking-wide text-brand-1 group-hover:text-brand-2 transition-colors underline underline-offset-4">
                {{ work.title }}
            </h3>
        </a>
    </div>
</template>

<script lang="ts" setup>
import { data } from '../../data/works.data.js';
</script>