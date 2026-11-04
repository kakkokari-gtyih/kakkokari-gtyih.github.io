<template>
    <div class="tc7 tc7-grain-on">
        <a href="#main" class="tc7-skip button-sm">本文へスキップ</a>
        <Tc7Nav />

        <main id="main">
            <!-- ========== ヒーロー ========== -->
            <div class="tc7-hero-bg">
                <section aria-labelledby="tc7-hero-heading" class="px-4 md:px-8 pt-24 pb-16 md:pb-20">
                    <div class="max-w-6xl mx-auto md:pt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_400px] items-center">
                        <div>
                            <p class="rise inline-flex items-center gap-2 rounded-full border-2 border-tc-ink bg-tc-card px-3 py-1 caption-3">
                                <span class="i-ph-sparkle text-sm text-tc-terra" aria-hidden="true"></span>
                                The CREATORS 7 でお会いした方へ
                            </p>
                            <h1
                                id="tc7-hero-heading"
                                class="rise hero-heading max-w-[680px] mt-6 heading-4 sm:heading-3 md:heading-2 lg:heading-3 xl:heading-1"
                                style="animation-delay: 80ms"
                            >
                                <span class="chunk">創作と、</span><span class="chunk">技術と。</span><br>
                                <span class="chunk">かけ合わせたら、</span><br>
                                <span class="chunk">なにが</span><span class="chunk">生まれるだろう。</span>
                            </h1>
                            <p class="rise max-w-[680px] mt-6 body-3 md:title-2 text-tc-ink-2" style="animation-delay: 160ms">
                                イラスト、漫画、音楽、声、配信。あなたの活動にWebの仕組みをひとつ足すと、作品の届け方も、ファンとの出会い方も変わるかもしれません。そんな「かけ合わせ」を、一緒に考える相手を探しています。
                            </p>
                            <div class="rise mt-6 flex items-center gap-3" style="animation-delay: 240ms">
                                <img src="/img/avatar.png" alt="かっこかりのアイコン" class="w-12 h-12 rounded-full border-2 border-tc-ink bg-tc-card" />
                                <div>
                                    <p class="title-3">かっこかり</p>
                                    <p class="caption-5 text-tc-ink-2">フロントエンドエンジニア ・ Misskey Project コアメンバー</p>
                                </div>
                            </div>
                            <div class="rise mt-8" style="animation-delay: 320ms">
                                <ContactButtons />
                            </div>
                        </div>
                        <div class="rise w-full max-w-[400px] mx-auto" style="animation-delay: 200ms">
                            <HeroIllust />
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
                            作品そのものは、つくる人にしか生み出せません。でも、作品がファンに見つけられ、語られ、思い出として残っていくまでの「まわり」には、技術で手伝えることがたくさんあると思っています。
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

            <!-- ========== タグライン ========== -->
            <TaglineReveal />

            <!-- ========== 開発中のプロジェクト：おしながきシステム ========== -->
            <TornEdge color="var(--tc-sage-paper)" :seed="11" />
            <article id="projects" aria-labelledby="tc7-p1-heading" class="flow-root bg-tc-sage-paper px-4 md:px-8 pt-16 md:pt-20 scroll-mt-24">
                <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
                    <div v-reveal>
                        <p class="tc7-eyebrow caption-3">いま、つくっているもの</p>
                        <h2 id="tc7-p1-heading" class="heading-4 md:heading-3 mt-3">
                            <span class="chunk">おしながきシステム</span><span class="chunk">（仮称）</span>
                        </h2>
                        <p class="title-2 mt-3">
                            <span class="chunk">画像1枚の「おしながき」を、</span><span class="chunk">さがせるデータに。</span>
                        </p>
                        <p class="body-3 text-tc-ink-2 mt-4">
                            同人誌即売会で、サークルが頒布物を紹介する「おしながき」。これをWeb上のページとしてつくれるようにして、サークルをまたいだ検索や会場マップでの表示、欲しいものリストづくりまでつなげる仕組みです。
                        </p>
                        <p class="body-3 text-tc-ink-2 mt-4">
                            まだ開発の途中です。だからこそ、サークル側・参加者側の目線で意見をもらえるととてもうれしいです。
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
                            alt="おしながきシステムのパソコン画面"
                            placeholder="{{oshinagaki_screenshot_pc}}"
                        />
                        <div class="absolute right-0 -bottom-8 w-[28%] md:w-[22%] rotate-3">
                            <span class="tape tape-pink" style="top: -12px; left: 50%; transform: translateX(-50%) rotate(4deg)" aria-hidden="true"></span>
                            <ScreenshotFrame
                                variant="mobile"
                                :src="OSHINAGAKI_SCREENSHOTS.mobile"
                                alt="おしながきシステムのスマートフォン画面"
                                placeholder="{{oshinagaki_screenshot_mobile}}"
                            />
                        </div>
                    </div>
                </div>
            </article>
            <div class="bg-tc-sage-paper">
                <TornEdge color="var(--tc-blue-paper)" :seed="23" />
            </div>

            <!-- ========== かけ合わせマシン ========== -->
            <section id="ideas" aria-labelledby="tc7-ideas-heading" class="bg-tc-blue-paper pt-24 pb-20 md:pb-24">
                <!-- 上のスクリーンショットがはみ出してくる分の余白（mt-16）を含む -->
                <div class="px-4 md:px-8 mt-16">
                    <div v-reveal class="max-w-6xl mx-auto">
                        <div class="max-w-[680px]">
                            <p class="tc7-eyebrow caption-3">かけ合わせてみる</p>
                            <h2 id="tc7-ideas-heading" class="heading-4 md:heading-3 mt-3">
                                <span class="chunk">あなたの活動なら、</span><span class="chunk">なにができそう？</span>
                            </h2>
                            <p class="body-3 text-tc-ink-2 mt-4">
                                思いつくままに書き出した、アイデアのタネたちです。気になったものを押すと、くわしく見られます。
                            </p>
                        </div>
                    </div>
                </div>

                <div class="mt-12" role="region" aria-label="ぜんぶのアイデア">
                    <IdeaMarquee @pick="onPickIdea" />
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
            </section>
            <TornEdge color="var(--tc-blue-paper)" flip :seed="29" />

            <!-- ========== これまで ========== -->
            <section id="works" aria-labelledby="tc7-works-heading" class="px-4 md:px-8 py-20 md:py-24">
                <div class="max-w-6xl mx-auto">
                    <div v-reveal class="max-w-[680px]">
                        <p class="tc7-eyebrow caption-3">これまで</p>
                        <h2 id="tc7-works-heading" class="heading-4 md:heading-3 mt-3">
                            <span class="chunk">かけ合わせて、</span><span class="chunk">つくってきたもの</span>
                        </h2>
                        <p class="body-3 text-tc-ink-2 mt-4">
                            エンタメのすぐそばで、技術を使ってつくってきたものです。
                        </p>
                    </div>
                    <ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
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
                        つくったものをすべて見る
                        <span class="i-ph-arrow-right text-base" aria-hidden="true"></span>
                    </a>
                </div>
            </section>

            <!-- ========== 進め方 ========== -->
            <TornEdge color="var(--tc-paper-2)" :seed="31" />
            <section aria-labelledby="tc7-steps-heading" class="bg-tc-paper-2 px-4 md:px-8 py-20 md:py-24">
                <div class="max-w-6xl mx-auto">
                    <div v-reveal class="max-w-[680px]">
                        <p class="tc7-eyebrow caption-3">一緒にやるなら</p>
                        <h2 id="tc7-steps-heading" class="heading-4 md:heading-3 mt-3">まずは、話すところから。</h2>
                    </div>
                    <ol class="grid gap-6 md:grid-cols-3 mt-12">
                        <li
                            v-for="(s, i) in steps"
                            :key="s.title"
                            v-reveal="i * 100"
                            class="rounded-2xl border-2 border-tc-ink bg-tc-card p-6"
                        >
                            <span class="inline-flex items-center gap-2">
                                <span class="w-10 h-10 rounded-full border-2 border-tc-ink grid place-items-center heading-6" :class="s.bg">{{ i + 1 }}</span>
                                <span :class="s.icon" class="text-2xl text-tc-ink-2" aria-hidden="true"></span>
                            </span>
                            <h3 class="heading-6 mt-4">{{ s.title }}</h3>
                            <p class="body-6 text-tc-ink-2 mt-2">{{ s.body }}</p>
                        </li>
                    </ol>
                    <div v-reveal class="relative max-w-[680px] mx-auto mt-16 -rotate-1 rounded-2xl border-2 border-tc-ink bg-tc-card p-6 text-center">
                        <span class="tape tape-pink" style="top: -12px; left: 24px; transform: rotate(-8deg)" aria-hidden="true"></span>
                        <span class="tape" style="top: -12px; right: 24px; transform: rotate(6deg)" aria-hidden="true"></span>
                        <p class="title-2">具体的な話になっていなくても、大丈夫です。</p>
                        <p class="body-3 text-tc-ink-2 mt-2">雑談やアイデアの壁打ちだけでも、大歓迎です。</p>
                    </div>
                </div>
            </section>
            <div class="bg-tc-mk-paper">
                <TornEdge color="var(--tc-paper-2)" flip :seed="37" />
            </div>

            <!-- ========== Misskey（本筋と性質が違うので Misskey の緑ベース） ========== -->
            <section id="misskey" aria-labelledby="tc7-misskey-heading" class="tc7-misskey bg-tc-mk-paper px-4 md:px-8 py-20 md:py-24">
                <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
                    <div v-reveal>
                        <p class="tc7-eyebrow caption-3">Misskeyが気になった方へ</p>
                        <h2 id="tc7-misskey-heading" class="heading-4 md:heading-3 mt-3">
                            <span class="chunk">絵文字で遊べるSNS、</span><span class="chunk">Misskey。</span>
                        </h2>
                        <p class="body-3 text-tc-ink-2 mt-4">
                            Misskeyは、誰でも自分のサーバーを建てられるオープンソースのSNSです。投稿にカスタム絵文字でリアクションしたり、ゲームやツールを自作して共有したりと、遊べる機能がたくさんあります。わたしは2023年から、開発チームのコアメンバーとして関わっています。
                        </p>
                        <dl class="grid grid-cols-2 gap-4 mt-8">
                            <div class="rounded-2xl border-2 border-tc-ink bg-tc-mk p-4">
                                <dt class="caption-4 text-tc-ink">Misskey.io の利用者</dt>
                                <dd class="heading-5 md:heading-4 mt-1 ml-0">約75万人</dd>
                            </div>
                            <div class="rounded-2xl border-2 border-tc-ink bg-tc-card p-4">
                                <dt class="caption-4 text-tc-ink-2">Misskey 全体（のべ）</dt>
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
                                    <span class="shrink-0 w-8 h-8 rounded-full border-2 border-tc-ink bg-tc-mk text-tc-ink grid place-items-center caption-3">{{ i + 1 }}</span>
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
                                        Misskey Hub（公式サイト）
                                        <span class="i-ph-arrow-up-right text-base" aria-hidden="true"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <aside
                            v-if="SHOW_INVITE_NOTICE"
                            aria-labelledby="tc7-invite-heading"
                            class="relative rotate-1 rounded-2xl border-2 border-tc-ink bg-tc-mustard p-6"
                        >
                            <span class="tape tape-blue" style="top: -12px; left: 50%; transform: translateX(-50%) rotate(-3deg)" aria-hidden="true"></span>
                            <h3 id="tc7-invite-heading" class="title-1 flex items-center gap-2">
                                <span class="i-ph-ticket text-2xl" aria-hidden="true"></span>
                                招待コード、持っていきます
                            </h3>
                            <p class="body-6 mt-2">
                                現在、Misskey.io は新規登録を制限しています。The CREATORS 7 の会場で招待コードをお渡しできるので、欲しい方は気軽に声をかけてください。
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
                        <p class="tc7-eyebrow caption-3">よくある質問</p>
                        <h2 id="tc7-faq-heading" class="heading-4 md:heading-3 mt-3">気になること</h2>
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
                    <span class="tape" style="top: -12px; left: 40px; transform: rotate(-10deg)" aria-hidden="true"></span>
                    <span class="tape tape-pink" style="top: -12px; right: 40px; transform: rotate(8deg)" aria-hidden="true"></span>
                    <h2 id="tc7-contact-heading" class="heading-4 md:heading-3">
                        <span class="chunk">ちょっと、</span><span class="chunk">話してみませんか。</span>
                    </h2>
                    <p class="body-3 text-tc-ink-2 mt-4 max-w-[680px] mx-auto">
                        「これとこれを混ぜたら面白そう」の一言からで大丈夫です。あなたの活動のこと、ぜひ聞かせてください。
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
                        このページは、<a :href="LINKS.event" target="_blank" rel="noopener" class="tc-link">The CREATORS 7</a> で出会った方に向けた個人の特設ページです。イベントの主催者とは関係ありません。
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
import { ENABLE_GRAIN, SHOW_INVITE_NOTICE, OSHINAGAKI_SCREENSHOTS, LINKS } from '../components/tc7/config';
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
    body: 'ライブや即売会の「行った」「見た」を、手元に残して共有できる形にするのは、意外と手間がかかります。',
}];

const oshinagakiFeatures = [{
    icon: 'i-ph-magnifying-glass',
    title: 'サークルをまたいで探せる',
    body: '作品名やジャンル、キーワードで横断検索。センシティブな作品や生成AIを使った作品の表示も切り替えられます。',
}, {
    icon: 'i-ph-map-trifold',
    title: '会場マップで場所がわかる',
    body: 'スペース番号をもとに、配置図の上でサークルの位置を確かめられます。',
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
    body: 'Misskeyに投稿されたおしながきへのリアクションも取り込んで、作品への反応が見えるようにします。',
}];

const works = [{
    href: '/works/misskey',
    img: '/img/works/e_misskey.png',
    alt: 'Misskeyの画面',
    kind: 'SNS ・ オープンソース',
    title: 'Misskey',
    body: '誰でも自分たちのサーバーを建てられるSNS。2023年からコアメンバーとして、主にフロントエンドの開発に参加しています。',
}, {
    href: '/works/omusp-arphoto',
    img: '/img/works/o_arphoto.webp',
    alt: 'ARフォトフレームの画面',
    kind: 'AR ・ イベント',
    title: 'ARフォトフレーム',
    body: '素材と設定ファイルを足すだけで、2Dと3DのARフォトフレームをつくれる仕組み。大学の卒業式で、AR立て看板として使われました。',
}, {
    href: '/works/milpr-ticket',
    img: '/img/works/e_milprticket.webp',
    alt: 'チケット風カードジェネレーターの画面',
    kind: 'VTuber ・ 二次創作',
    title: 'ライブ記念のチケット風カード',
    body: 'VTuberプロダクション「ミリプロ」の1st Liveに合わせて共同開発した、非公式の二次創作サービス。タレントご本人にも遊んでいただきました。',
}, {
    href: '/works/aiscript-docs',
    img: '/img/works/e_ais.webp',
    alt: 'AiScriptドキュメンテーションサイトの画面',
    kind: 'ゲーム ・ ツールづくり',
    title: 'AiScript ドキュメント',
    body: 'Misskeyの中でゲームやツールをつくれる言語「AiScript」のドキュメントサイト。ブラウザ上でそのままコードを試せます。',
}];

const steps = [{
    icon: 'i-ph-chat-circle-dots',
    bg: 'bg-tc-pink-paper',
    title: '話しかける',
    body: 'XのDMかフォームで、活動のことや気になったことを教えてください。思いつきの一言で大丈夫です。',
}, {
    icon: 'i-ph-lightbulb',
    bg: 'bg-tc-mustard',
    title: 'アイデアを広げる',
    body: 'やってみたいことを、技術でできること・難しいことに分けて整理します。「こんなの無理かな」も歓迎です。',
}, {
    icon: 'i-ph-scissors',
    bg: 'bg-tc-sage-paper',
    title: '小さく形にしてみる',
    body: 'いきなり大きくつくらず、まずは試作から。手ざわりを確かめながら進めます。',
}];

const misskeySteps = [{
    title: 'サーバーを選ぶ',
    body: '世界最大のMisskeyサーバー「Misskey.io」から始めるのがおすすめです。',
}, {
    title: 'アカウントをつくる',
    body: 'ユーザー名を決めて登録すれば、すぐに投稿やリアクションができます。',
}, {
    title: 'まずは誰かをフォロー',
    body: 'よければわたしのアカウントからどうぞ。',
    link: { href: LINKS.misskeyIoMe, label: '@kakkokari_gtyih' },
}];

const faqs = [{
    q: 'エンジニアではないのですが、話しかけても大丈夫ですか？',
    a: 'もちろんです。技術の知識はまったく要りません。むしろ、創作をしている側から見た「こんなのがあったらいいのに」を聞かせてもらえるとうれしいです。',
}, {
    q: 'まだ具体的なアイデアがありません。',
    a: 'それで大丈夫です。雑談やアイデアの壁打ちだけでも歓迎しています。話しているうちに形が見えてくることも多いので、気軽にどうぞ。',
}, {
    q: 'どうやって連絡すればいいですか？',
    a: 'XのDMか、お問い合わせフォームからお願いします。どちらも、内容は一言からで大丈夫です。',
}, {
    q: 'おしながきシステムは、いつ使えますか？',
    a: 'いま開発を進めているところです。公開の時期が決まったら、XとMisskeyでお知らせします。サークル側の目線での意見も大歓迎です。',
}, {
    q: 'Misskeyは、ほかのSNSと何が違うのですか？',
    a: '大きな違いは、誰でも自分のサーバーを建てられることです。サーバーごとにルールや雰囲気、使える絵文字が違っていて、別のサーバーの人ともつながれます。',
}, ...(SHOW_INVITE_NOTICE ? [{
    q: 'Misskey.io に登録しようとしたら、招待コードが必要でした。',
    a: '現在、Misskey.io は新規登録を制限しています。The CREATORS 7 の会場で招待コードをお渡しできるので、気軽に声をかけてください。',
}] : []), {
    q: 'どんな技術でつくっているのですか？',
    a: '主にWebの技術です。Vue.jsやNuxt、Astroを使ったサイトやアプリのほか、Canvasでの画像生成や、ブラウザだけで動くARなどをつくってきました。アプリのインストールが要らないので、イベントやSNSで気軽に使ってもらいやすいのが強みです。',
}, {
    q: 'The CREATORS 7 では話せなかったのですが……',
    a: '大丈夫です。このページにたどり着いてくださった方なら、どなたでも歓迎です。',
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
