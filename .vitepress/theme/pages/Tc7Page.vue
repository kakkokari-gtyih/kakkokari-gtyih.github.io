<template>
    <div class="tc7 tc7-grain-on">
        <a href="#main" class="tc7-skip button-sm">本文へスキップ</a>
        <Tc7Nav />

        <main id="main">
            <!-- ========== ヒーロー ========== -->
            <div class="tc7-hero-bg">
                <section aria-labelledby="tc7-hero-heading" class="px-4 md:px-8 pt-24 pb-16 md:pb-20">
                    <div class="max-w-6xl mx-auto md:pt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_500px] items-center">
                        <div>
                            <p class="rise inline-flex items-center gap-2 rounded-full rounded-bl-none bg-tc-card px-4 py-2 caption-3">
                                <span class="i-ph-sparkle text-sm text-tc-terra" aria-hidden="true"></span>
                                The CREATORS 7 でお会いした方へ
                            </p>
                            <h1
                                id="tc7-hero-heading"
                                class="rise hero-heading max-w-[680px] mt-6 heading-4 sm:heading-3 md:heading-2 lg:heading-3 xl:heading-1"
                                style="animation-delay: 80ms"
                            >
                                <span class="chunk">創作と</span><span class="chunk">技術。</span><br>
                                <span class="chunk">かけ合わせたら、</span><br>
                                <span class="chunk">なにが</span><span class="chunk">生まれる</span><span class="chunk">だろう。</span>
                            </h1>
                            <p class="rise max-w-[580px] mt-6 body-3 md:title-2 text-tc-ink-2" style="animation-delay: 160ms">
                                イラスト、マンガ、音楽、音声作品、配信。あなたの活動にWebやアプリの技術を足すと、作品の届け方も、ファンとの出会い方も変わるかも。そんなあたらしい化学反応を、一緒につくりませんか。
                            </p>
                            <div class="rise mt-6 flex items-center gap-3" style="animation-delay: 240ms">
                                <img src="/img/avatar.png" alt="かっこかりのアイコン" class="w-12 h-12 rounded-full bg-tc-card" />
                                <div>
                                    <p class="title-3">かっこかり</p>
                                    <p class="caption-5 text-tc-ink-2">フロントエンドエンジニア ・ Misskey Project コアメンバー</p>
                                </div>
                            </div>
                            <div class="rise mt-8" style="animation-delay: 320ms">
                                <ContactButtons />
                            </div>
                        </div>
                        <div class="rise w-full max-w-[600px] mx-auto" style="animation-delay: 200ms">
                            <img src="/img/tc7/kv.png" alt="Hero Illustration" class="w-full h-auto" />
                        </div>
                    </div>
                </section>
                <TornEdge color="var(--tc-paper-2)" :seed="3" />
            </div>

            <!-- ========== 課題：作品のまわりの余白 ========== -->
            <section aria-labelledby="tc7-gap-heading" class="bg-tc-paper-2 px-4 md:px-8 py-20 md:py-24">
                <div class="max-w-6xl mx-auto">
                    <div v-reveal class="max-w-[680px]">
                        <p class="tc7-eyebrow caption-3">いま、思っていること</p>
                        <h2 id="tc7-gap-heading" class="heading-4 md:heading-3 mt-3">
                            <span class="chunk">作品のまわりには、</span><br>
                            <span class="chunk">まだ余白がある。</span>
                        </h2>
                        <p class="body-3 text-tc-ink-2 mt-4">
                            あなたの作品は、あなたしか生み出せません。でも、作品がファンに見つけられ、語られ、思い出として残っていく──その過程には、技術で手伝えることがたくさんあるのではと考えています。
                        </p>
                    </div>
                    <ul class="grid gap-6 md:grid-cols-3 mt-12">
                        <li
                            v-for="(g, i) in gaps"
                            :key="g.title"
                            v-reveal="i * 100"
                            class="cut rounded-2xl border-2 border-tc-ink bg-tc-card p-6"
                        >
                            <span class="w-12 h-12 rounded-full border-2 border-tc-ink grid place-items-center" :class="g.bg">
                                <span :class="g.icon" class="text-2xl" aria-hidden="true"></span>
                            </span>
                            <p class="caption-3 text-tc-ink-2 mt-4">{{ g.verb }}</p>
                            <h3 class="heading-6 mt-1">{{ g.title }}</h3>
                            <p class="body-6 text-tc-ink-2 mt-2">{{ g.body }}</p>
                        </li>
                    </ul>
                </div>
            </section>
            <TornEdge color="var(--tc-paper-2)" flip :seed="5" />

            <section id="ideas" aria-labelledby="tc7-ideas-heading" class="bg-tc-paper py-20 md:py-24">
                <div class="px-4 md:px-8">
                    <div v-reveal class="max-w-6xl mx-auto">
                        <div class="max-w-[680px]">
                            <p class="tc7-eyebrow caption-3">かけ合わせてみる</p>
                            <h2 id="tc7-ideas-heading" class="heading-4 md:heading-3 mt-3">
                                <span class="chunk">あなたの活動なら、</span><span class="chunk">なにができそう？</span>
                            </h2>
                            <p class="body-3 text-tc-ink-2 mt-4">
                                とは言うものの、急に言われてすぐ思いつくものではないかもしれません。ということで、私でぱっと思いついたアイデアをいくつか挙げてみました（それぞれの業界のことをあまりよく知らずに考えているので見当違いだったらすみません…）。なにかピンとくるもの・面白そうなものはありますか？
                            </p>
                        </div>
                    </div>
                </div>

                <div class="px-4 md:px-8 mt-16">
                    <div class="max-w-6xl mx-auto">
                        <h3 v-reveal class="heading-6">活動からえらぶ</h3>
                        <IdeaMixer
                            id="idea-mixer"
                            v-model="selectedCreator"
                            v-reveal
                            :highlight="pickedIdea"
                            class="mt-6 scroll-mt-24"
                        />
                        <p class="body-5 mt-12 flex flex-wrap items-center gap-2">
                            <span class="i-ph-lightbulb text-xl text-tc-terra-deep" aria-hidden="true"></span>
                            ここにない組み合わせを思いついたら、
                            <a href="#contact" class="tc-link">ぜひ話しかけてください</a>
                        </p>
                    </div>
                </div>

                <div class="mt-16" role="region" aria-label="ぜんぶのアイデア">
                    <IdeaMarquee @pick="onPickIdea" />
                </div>
            </section>
            <TornEdge color="var(--tc-sage-paper)" :seed="11" />

            <!-- ========== アイデアのひとつを形にしている：おしながきシステム ========== -->
            <article id="projects" aria-labelledby="tc7-p1-heading" class="flow-root bg-tc-sage-paper px-4 md:px-8 pt-16 md:pt-20 scroll-mt-24">
                <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
                    <div v-reveal>
                        <p class="tc7-eyebrow caption-3">現在開発中！</p>
                        <h2 id="tc7-p1-heading" class="heading-4 md:heading-3 mt-3">
                            <span class="chunk">おしながきシステム</span><span class="chunk">（仮称）</span>
                        </h2>
                        <p class="title-2 mt-3">
                            <span class="chunk">同人誌即売会の頒布物を</span><span class="chunk">探せる、見つけられるアプリ</span>
                        </p>
                        <p class="body-3 text-tc-ink-2 mt-4">
                            同人誌即売会で、サークルが頒布物を紹介する「おしながき」。これをWeb上のページとして公開できるようにし、サークルや作品名をまたいだ検索・会場マップでの表示・欲しいものリストづくりなど、同人誌即売会をより便利に楽しめるアプリを開発中です。
                        </p>
                        <p class="body-3 text-tc-ink-2 mt-4">
                            こちらは現在開発中で、2027年3月ごろから限定公開でのベータ版テストを開始していく予定です。ご意見・ご感想や、試してみたい等ぜひお気軽にどうぞ！
                        </p>
                    </div>
                    <div v-reveal="120">
                        <OshinagakiIllust />
                    </div>
                </div>

                <ul class="max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                    <li
                        v-for="(f, i) in oshinagakiFeatures"
                        :key="f.title"
                        v-reveal="(i % 3) * 80"
                        class="rounded-2xl border-2 border-tc-ink bg-tc-card p-6"
                    >
                        <span :class="f.icon" class="text-3xl text-tc-terra-deep" aria-hidden="true"></span>
                        <h3 class="title-2 mt-3">{{ f.title }}</h3>
                        <p class="body-6 text-tc-ink-2 mt-2">{{ f.body }}</p>
                    </li>
                </ul>

                <!-- スクリーンショット（下のセクションにはみ出す） -->
                <div v-reveal class="relative z-10 max-w-5xl mx-auto mt-16 -mb-24">
                    <div class="relative">
                        <span class="tape" style="top: -12px; left: 32px; transform: rotate(-6deg)" aria-hidden="true"></span>
                        <ScreenshotFrame
                            variant="pc"
                            class="w-[86%]"
                            :src="OSHINAGAKI_SCREENSHOTS.pc"
                            alt="おしながきシステムのイベントトップ画面。検索窓と、イベント名・開催日・会場が載ったヘッダーが並ぶ"
                            placeholder="{{oshinagaki_screenshot_pc}}"
                        />
                        <div class="absolute right-0 -bottom-8 w-[28%] md:w-[22%] rotate-3">
                            <span class="tape tape-pink" style="top: -12px; left: 50%; transform: translateX(-50%) rotate(4deg)" aria-hidden="true"></span>
                            <ScreenshotFrame
                                variant="mobile"
                                :src="OSHINAGAKI_SCREENSHOTS.mobile"
                                alt="おしながきシステムのスマートフォン版の会場マップ画面"
                                placeholder="{{oshinagaki_screenshot_mobile}}"
                            />
                        </div>
                    </div>
                </div>
            </article>
            <TornEdge color="var(--tc-sage-paper)" flip :seed="29" />

            <!-- ========== これまで ========== -->
            <section id="works" aria-labelledby="tc7-works-heading" class="px-4 md:px-8 pt-24 pb-20 md:pb-24">
                <!-- 上のスクリーンショットがはみ出してくる分の余白（mt-16）を含む -->
                <div class="max-w-6xl mx-auto mt-16">
                    <div v-reveal class="max-w-[680px]">
                        <p class="tc7-eyebrow caption-3">これまでの実績</p>
                        <h2 id="tc7-works-heading" class="heading-4 md:heading-3 mt-3">
                            <span class="chunk">クリエイティブと技術を</span><span class="chunk">掛け合わせると…</span>
                        </h2>
                        <p class="body-3 text-tc-ink-2 mt-4">
                            イラストやVTuberの活動に根差したアプリなど、クリエイティブと技術の交わる部分でこれまで作ったものをピックアップしてご紹介します。
                        </p>
                    </div>
                    <ul class="grid gap-8 md:grid-cols-3 mt-12">
                        <li v-for="(w, i) in works" :key="w.href" v-reveal="i * 80">
                            <a
                                :href="w.href"
                                class="tc7-work cut relative block h-full rounded-2xl border-2 border-tc-ink bg-tc-card p-3"
                                :style="{ '--tilt': `${[-1.5, 1, -1, 1.5][i]}deg` }"
                            >
                                <span class="tape" :class="['', 'tape-pink', 'tape-blue', ''][i]" style="top: -12px; left: 50%; transform: translateX(-50%) rotate(-3deg)" aria-hidden="true"></span>
                                <img :src="w.img" :alt="w.alt" class="block w-full aspect-video object-cover rounded border-2 border-tc-ink" loading="lazy" />
                                <div class="p-3">
                                    <p class="caption-3 text-tc-terra-deep">{{ w.kind }}</p>
                                    <h3 class="title-2 mt-1">{{ w.title }}</h3>
                                    <p class="body-6 text-tc-ink-2 mt-2">{{ w.body }}</p>
                                    <p class="caption-3 mt-4 inline-flex items-center gap-1">
                                        詳しく見る
                                        <span class="i-ph-arrow-right text-sm" aria-hidden="true"></span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <a href="/works/" class="tc-link body-4 mt-12 inline-flex items-center gap-1">
                        「つくったもの」一覧はこちら（ポートフォリオへ）
                        <span class="i-ph-arrow-right text-base" aria-hidden="true"></span>
                    </a>
                </div>
            </section>

            <!-- ========== Misskey（本筋と性質が違うので Misskey の緑ベース） ========== -->
            <div class="bg-tc-mk-paper">
                <TornEdge color="var(--tc-paper)" flip :seed="37" />
            </div>
            <section id="misskey" aria-labelledby="tc7-misskey-heading" class="tc7-misskey bg-tc-mk-paper px-4 md:px-8 py-20 md:py-24">
                <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
                    <div v-reveal>
                        <p class="tc7-eyebrow caption-3">Misskeyが気になった方へ</p>
                        <h2 id="tc7-misskey-heading" class="heading-4 md:heading-3 mt-3">
                            <span class="chunk">リアクションで気軽につながる。</span><span class="chunk">リアルタイムで直接届く。</span>
                        </h2>
                        <p class="body-3 text-tc-ink-2 mt-4">
                            Misskeyは、日本で生まれたオープンソースのSNS構築ソフトです。カスタム絵文字のリアクションやリアルタイム性、Webアプリの高い拡張性などが特徴です。私は2023年から開発チームのコアメンバーとして開発に参加しています。
                        </p>
                        <dl class="grid grid-cols-2 gap-4 mt-8">
                            <div class="rounded-2xl border-2 border-tc-ink bg-tc-card p-4">
                                <dt class="caption-4 text-tc-ink">Misskey.io の利用者</dt>
                                <dd class="heading-5 md:heading-4 mt-1 ml-0">約75万人</dd>
                            </div>
                            <div class="rounded-2xl border-2 border-tc-ink bg-tc-card p-4">
                                <dt class="caption-4 text-tc-ink-2">Misskey 全体（推定）</dt>
                                <dd class="heading-5 md:heading-4 mt-1 ml-0">約120万人</dd>
                            </div>
                        </dl>
                    </div>

                    <div v-reveal="120" class="space-y-6">
                        <div class="cut rounded-3xl border-2 border-tc-ink bg-tc-card p-6 md:p-8">
                            <h3 class="heading-6 flex items-center gap-2">
                                <span class="i-ph-compass text-2xl text-tc-terra-deep" aria-hidden="true"></span>
                                はじめかた
                            </h3>
                            <ol class="mt-6 space-y-6">
                                <li v-for="(m, i) in misskeySteps" :key="m.title" class="flex gap-4">
                                    <span class="shrink-0 w-8 h-8 rounded-full border-2 border-tc-ink bg-tc-mk text-white grid place-items-center">{{ i + 1 }}</span>
                                    <div>
                                        <p class="title-3">{{ m.title }}</p>
                                        <p class="body-6 text-tc-ink-2 mt-1">
                                            {{ m.body }}
                                            <a v-if="m.link" :href="m.link.href" target="_blank" rel="noopener" class="tc-link">{{ m.link.label }}</a>
                                        </p>
                                    </div>
                                </li>
                            </ol>
                            <ul class="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                                <li>
                                    <a :href="LINKS.misskeyIo" target="_blank" rel="noopener" class="tc-link body-4 inline-flex items-center gap-1">
                                        Misskey.io を開く
                                        <span class="i-ph-arrow-up-right text-base" aria-hidden="true"></span>
                                    </a>
                                </li>
                                <li>
                                    <a :href="LINKS.misskeyHub" target="_blank" rel="noopener" class="tc-link body-4 inline-flex items-center gap-1">
                                        Misskey Hub（プロジェクト公式サイト）を見る
                                        <span class="i-ph-arrow-up-right text-base" aria-hidden="true"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <aside
                            v-if="SHOW_INVITE_NOTICE"
                            aria-labelledby="tc7-invite-heading"
                            class="relative rotate-1 rounded-2xl border-2 border-tc-ink bg-tc-paper p-6"
                        >
                            <span class="tape tape-blue" style="top: -12px; left: 50%; transform: translateX(-50%) rotate(-3deg)" aria-hidden="true"></span>
                            <h3 id="tc7-invite-heading" class="title-1 flex items-center gap-2">
                                <span class="i-ph-ticket text-2xl" aria-hidden="true"></span>
                                招待コード・特製はじめかたガイドを配布！
                            </h3>
                            <p class="body-6 mt-2">
                                The CREATORS 7 の会場で招待コード（台紙に特製Misskeyはじめかたガイド付き！）を発行できますので、気になる方はぜひ気軽にお声がけください。
                            </p>
                        </aside>
                    </div>
                </div>
            </section>
            <TornEdge color="var(--tc-mk-paper)" flip :seed="43" />

            <!-- ========== FAQ ========== -->
            <section id="faq" aria-labelledby="tc7-faq-heading" class="px-4 md:px-8 py-20 md:py-24">
                <div class="max-w-3xl mx-auto">
                    <div v-reveal>
                        <h2 id="tc7-faq-heading" class="heading-4 md:heading-3">よくある質問</h2>
                    </div>
                    <div class="mt-8 space-y-4">
                        <details
                            v-for="(f, i) in faqs"
                            :key="f.q"
                            v-reveal="Math.min(i, 3) * 60"
                            class="tc7-faq rounded-2xl border-2 border-tc-ink bg-tc-card"
                        >
                            <summary class="flex items-center justify-between gap-4 cursor-pointer p-6 title-2 rounded-2xl">
                                <span>{{ f.q }}</span>
                                <span class="tc7-faq-icon i-ph-plus text-xl text-tc-terra-deep" aria-hidden="true"></span>
                            </summary>
                            <p class="tc7-faq-body px-6 pb-6 body-3 text-tc-ink-2">{{ f.a }}</p>
                        </details>
                    </div>
                </div>
            </section>

            <!-- ========== 最後のCTA ========== -->
            <TornEdge color="var(--tc-sage-paper)" :seed="41" />
            <section id="contact" aria-labelledby="tc7-contact-heading" class="bg-tc-sage-paper px-4 md:px-8 py-20 md:py-24">
                <div v-reveal class="cut stitch-lg max-w-3xl mx-auto rounded-3xl border-2 border-tc-ink bg-tc-card px-6 py-12 md:p-16 text-center">
                    <h2 id="tc7-contact-heading" class="heading-4 md:heading-3">
                        <span class="chunk">ぜひ軽く</span><span class="chunk">お話しましょう🍵</span>
                    </h2>
                    <p class="body-3 text-tc-ink-2 mt-4 max-w-[680px] mx-auto">
                        「こんなことができそう！」といった軽い相談でもかまいません！あなたの活動のこともぜひ聞かせてください。
                    </p>
                    <div class="relative z-10 mt-8">
                        <ContactButtons center />
                    </div>
                </div>
            </section>
        </main>

        <!-- ========== フッター ========== -->
        <footer class="bg-tc-sage-paper px-4 md:px-8 pb-12">
            <div class="max-w-6xl mx-auto rounded-3xl bg-tc-card border-2 border-tc-ink p-6 md:p-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
                <div class="max-w-[480px]">
                    <a href="/" class="inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-70">
                        <img src="/img/avatar.png" alt="" class="w-10 h-10 rounded-full" />
                        <span class="title-2">かっこかり</span>
                    </a>
                    <p class="caption-5 text-tc-ink-2 mt-4">
                        こちらは<a :href="LINKS.event" target="_blank" rel="noopener" class="tc-link">The CREATORS 7</a>でお会いした方向けの特設ページです。株式会社トライデントワークス・株式会社MisskeyHQ・Misskey Projectの承認を得たものではなく、これら組織とは一切関係ありません。
                    </p>
                </div>
                <nav aria-label="フッター" class="grid grid-cols-2 gap-8">
                    <div>
                        <p class="caption-3 text-tc-ink-2">サイト</p>
                        <ul class="mt-3 space-y-2">
                            <li><a href="/" class="body-5 transition-opacity duration-300 hover:opacity-70">ポートフォリオのトップ</a></li>
                            <li><a href="/works/" class="body-5 transition-opacity duration-300 hover:opacity-70">つくったもの</a></li>
                            <li><a href="/blog/" class="body-5 transition-opacity duration-300 hover:opacity-70">ブログ</a></li>
                        </ul>
                    </div>
                    <div>
                        <p class="caption-3 text-tc-ink-2">つながる</p>
                        <ul class="mt-3 space-y-2">
                            <li v-for="s in socials" :key="s.href">
                                <a :href="s.href" target="_blank" rel="noopener" class="body-5 transition-opacity duration-300 hover:opacity-70">{{ s.label }}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <p class="max-w-6xl mx-auto caption-5 text-tc-ink-2 mt-6">&copy; 2026 かっこかり</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import '../components/tc7/tc7.css';
import { SHOW_INVITE_NOTICE, OSHINAGAKI_SCREENSHOTS, LINKS } from '../components/tc7/config';
import { vReveal } from '../components/tc7/reveal';
import Tc7Nav from '../components/tc7/Tc7Nav.vue';
import TornEdge from '../components/tc7/TornEdge.vue';
import ContactButtons from '../components/tc7/ContactButtons.vue';
import TaglineReveal from '../components/tc7/TaglineReveal.vue';
import IdeaMixer from '../components/tc7/IdeaMixer.vue';
import IdeaMarquee from '../components/tc7/IdeaMarquee.vue';
import { creators } from '../components/tc7/ideas';
import ScreenshotFrame from '../components/tc7/ScreenshotFrame.vue';
import HeroIllust from '../components/tc7/illustrations/HeroIllust.vue';
import OshinagakiIllust from '../components/tc7/illustrations/OshinagakiIllust.vue';

// 「ぜんぶのアイデア」の帯から選ばれたアイデアを、かけ合わせマシンで開く
const selectedCreator = ref(creators[0].id);
const pickedIdea = ref<string | null>(null);
let pickTimer: ReturnType<typeof setTimeout> | undefined;

function onPickIdea(creatorId: string, title: string) {
    selectedCreator.value = creatorId;
    pickedIdea.value = title;
    clearTimeout(pickTimer);
    pickTimer = setTimeout(() => { pickedIdea.value = null; }, 2400);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('idea-mixer')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

onBeforeUnmount(() => clearTimeout(pickTimer));

const gaps = [{
    verb: '見つける',
    icon: 'i-ph-magnifying-glass',
    bg: 'bg-tc-blue-paper',
    title: 'おしながきは、画像1枚で流れていく',
    body: '即売会の頒布物は、SNSに投稿された画像で知るのが一般的です。作品名で探したり、会場の配置と見比べたりするのは、まだ難しいままです。',
}, {
    verb: '集まる',
    icon: 'i-ph-users-three',
    bg: 'bg-tc-pink-paper',
    title: 'ファンの居場所は、大きなSNSまかせ',
    body: 'タイムラインの仕組みや流れの速さは選べません。自分たちのルールや絵文字で過ごせる場所は、意外と少ないものです。',
}, {
    verb: '残る',
    icon: 'i-ph-ticket',
    bg: 'bg-tc-sage-paper',
    title: 'イベントの熱は、終わると散らばる',
    body: 'ライブや即売会の「行った」「見た」を、手元に残して共有できる形にするには、ひと手間かかります。',
}];

const oshinagakiFeatures = [{
    icon: 'i-ph-magnifying-glass',
    title: 'サークルをまたいで探せる',
    body: '作品名・ジャンル・キーワードで横断検索。センシティブな作品や生成AIを使った作品の表示も切り替えられます。',
}, {
    icon: 'i-ph-map-trifold',
    title: '会場マップで場所がわかる',
    body: '配置図の上で、サークルの場所を確かめられます。',
}, {
    icon: 'i-ph-heart',
    title: 'イベントごとの欲しいものリスト',
    body: '気になった作品を、イベント単位でまとめておけます。',
}, {
    icon: 'i-ph-book-open',
    title: '試し読みとトラックリスト',
    body: '本は綴じ方向どおりにページをめくれて、音楽はディスクごとのトラックとクレジットを整理して載せられます。',
}, {
    icon: 'i-ph-sparkle',
    title: '人気のサークルにも、これからのサークルにも',
    body: 'よく見られている作品と、まだ反応の少ない作品。どちらにも出会えるおすすめを目指しています。',
}, {
    icon: 'i-ph-smiley',
    title: 'Misskeyと連携したリアクション',
    body: 'Misskeyでもらったリアクションも、作品ごとにまとめて見られます。',
}];

const works = [{
    href: '/works/misskey',
    img: '/img/works/e_misskey.png',
    alt: 'Misskeyの画面',
    kind: 'SNS ・ コミュニティ',
    title: 'Misskey',
    body: '日本人が中心となって開発されているSNS。延べ利用者は120万人を超えています。2023年からコアメンバーとして、主にフロントエンドの開発に参加しています。',
}, {
    href: '/works/omusp-arphoto',
    img: '/img/works/o_arphoto.webp',
    alt: 'ARフォトフレームの画面',
    kind: 'AR ・ イベント',
    title: 'ARフォトフレーム',
    body: '素材と設定ファイルを足すだけで簡単にARフォトフレームをつくれる仕組み。大学の入学式・卒業式などで、AR立て看板としての採用実績があります。立て看板の代わりにキャラクターを配置して、推しとの記念撮影アプリなどにも幅広く活用できます。',
}, {
    href: '/works/milpr-ticket',
    img: '/img/works/e_milprticket.webp',
    alt: 'チケット風カードジェネレーターの画面',
    kind: 'VTuber ・ 二次創作',
    title: 'ライブ記念のチケット風カード',
    body: 'VTuberプロダクション「ミリプロ」の1st ライブに合わせて共同開発した、非公式の二次創作サービス。タレントご本人にも遊んでいただきました。',
}];


const misskeySteps = [{
    title: 'サーバーを選ぶ',
    body: '世界最大のMisskeyサーバー「Misskey.io」から始めるのがおすすめです。',
}, {
    title: 'アカウントをつくる',
    body: 'ユーザー名を決めて登録すると、投稿やリアクションができるようになります。',
}, {
    title: 'まずは誰かをフォロー',
    body: 'よければわたしのアカウントからどうぞ。',
    link: { href: LINKS.misskeyIoMe, label: '@kakkokari_gtyih' },
}];

const faqs = [{
    q: 'エンジニアではないのですが、話しかけても大丈夫ですか？',
    a: '技術的な知識はまったく要りません。むしろ、創作をしている側から見た「こんなのがあったらいいのに」をお聞かせいただき、新たな気づきを得られると嬉しいなと思っています。',
}, {
    q: 'まだ具体的なアイデアがありません。',
    a: '雑談やアイデアの壁打ちだけでも大歓迎。話しているうちに形が見えてくることも多いので、お気軽にどうぞ。私自身もいろんな業界の方のお話を聞いて学びたいと思っているので、ぜひいろいろお話させてください！',
}, {
    q: 'どうやって連絡すればいいですか？',
    a: 'Xのチャット・The CREATORS 7 クリエイターズポータル・お問い合わせフォームのいずれかからご連絡ください。Discordやメールなど他の連絡手段をご希望の方は、上記いずれかでご連絡いただければそれ以降切り替え可能です。当日は、1日目日中イベント・懇親会、2日目日中イベントに参加予定です。2日目懇親会には参加できません…。',
}, {
    q: 'おしながきシステムは、いつ使えますか？',
    a: '現在開発中ですが、2027年夏のコミックマーケット110に間に合うように調整中です。2027年3月ごろからベータテストを開始する予定なので、C110にサークル参加予定で気になる方はぜひお声がけください！',
}, {
    q: 'Misskeyは、ほかのSNSと何が違うのですか？',
    a: '「いいね」の代わりに、豊富なリアクションが用意されているのが特徴。いいねだけでは伝わらない気持ちも、リアクションで手軽に表現できます。また、タイムラインや通知はリアルタイム更新。ユーザーの生の反応をダイレクトに受け取ることができます。',
}, ...(SHOW_INVITE_NOTICE ? [{
    q: 'Misskey.io に登録しようとしたら、招待コードが必要でした。',
    a: 'The CREATORS 7 の会場で招待コードをお渡しできるので、お気軽にお声がけください。',
}] : []), {
    q: 'どんな技術でつくっているのですか？',
    a: '主にWebの技術です。Vue.js・Nuxt・Astroといった仕組みを使ったサイトやアプリのほか、Canvasでの画像生成や、ブラウザだけで動くARなどをつくってきました。このポートフォリオも、Vue.jsやVitePressといった技術で作られています。アプリとは違いブラウザでアクセスするだけで別途何かをインストールする必要がないため、イベントやSNSで気軽に使ってもらいやすいのが強みです。',
}];

const socials = [
    { label: 'X (Twitter)', href: LINKS.xProfile },
    { label: 'Misskey.io', href: LINKS.misskeyIoMe },
    { label: 'はなみすきー', href: LINKS.hanamisskey },
    { label: 'GitHub', href: LINKS.github },
    { label: 'Zenn', href: LINKS.zenn },
    { label: 'お問い合わせ', href: LINKS.form },
];
</script>

<style>
.tc7 .tc7-work {
    transform: rotate(var(--tilt, 0deg));
    transition: transform 500ms var(--tc-ease);
}

.tc7 .tc7-work:hover {
    transform: rotate(0deg) translateY(-4px);
}

.tc7 .tc7-work:active {
    transform: rotate(0deg) scale(0.98);
}

.tc7 .tc7-faq summary {
    list-style: none;
}

.tc7 .tc7-faq summary::-webkit-details-marker {
    display: none;
}

.tc7 .tc7-faq summary:hover .tc7-faq-icon {
    opacity: 0.7;
}

.tc7 .tc7-faq-icon {
    transition: transform 500ms var(--tc-ease), opacity 300ms var(--tc-ease);
}

.tc7 .tc7-faq[open] .tc7-faq-icon {
    transform: rotate(45deg);
}

.tc7 .tc7-faq[open] .tc7-faq-body {
    animation: tc7-fade 400ms var(--tc-ease) both;
}

@media (prefers-reduced-motion: reduce) {
    .tc7 .tc7-work,
    .tc7 .tc7-work:hover,
    .tc7 .tc7-work:active {
        transform: rotate(var(--tilt, 0deg));
    }
}
</style>
