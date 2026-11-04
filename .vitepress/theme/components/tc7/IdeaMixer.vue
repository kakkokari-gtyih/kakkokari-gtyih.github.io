<template>
    <div>
        <div role="group" aria-label="あなたの活動を選ぶ" class="flex flex-wrap gap-2">
            <button
                v-for="c in creators"
                :key="c.id"
                type="button"
                :aria-pressed="selected === c.id"
                class="tc7-chip inline-flex items-center gap-2 rounded-full border-2 border-tc-ink px-3 py-2 button-sm"
                :class="selected === c.id ? 'is-on' : ''"
                @click="selected = c.id"
            >
                <span :class="c.icon" class="text-lg" aria-hidden="true"></span>
                {{ c.label }}
            </button>
        </div>

        <div class="mt-8" aria-live="polite">
            <ul :key="selected" class="grid gap-4 md:grid-cols-3">
                <li
                    v-for="(idea, i) in current.ideas"
                    :key="idea.title"
                    class="tc7-pop stitch cut relative rounded-2xl border-2 border-tc-ink bg-tc-card p-6 flex flex-col"
                    :style="{ animationDelay: `${i * 80}ms` }"
                >
                    <span class="tape" :class="tapeClass[i]" :style="{ top: '-12px', left: '24px', transform: `rotate(${[-4, 3, -2][i]}deg)` }" aria-hidden="true"></span>
                    <p class="caption-3 text-tc-ink-2 flex items-center gap-1">
                        <span class="i-ph-lightbulb text-sm text-tc-terra" aria-hidden="true"></span>
                        {{ current.label }} × テクノロジー
                    </p>
                    <h3 class="heading-6 mt-2">{{ idea.title }}</h3>
                    <p class="body-6 text-tc-ink-2 mt-2">{{ idea.body }}</p>
                    <div class="mt-auto pt-4">
                        <a
                            v-if="idea.tag.href"
                            :href="idea.tag.href"
                            class="relative z-10 inline-flex items-center gap-1 rounded-full px-2 py-1 caption-3 transition-opacity duration-300 hover:opacity-70"
                            :class="tagClass[idea.tag.kind]"
                        >
                            {{ tagLabel[idea.tag.kind] }}：{{ idea.tag.label }}
                            <span class="i-ph-arrow-right text-xs" aria-hidden="true"></span>
                        </a>
                        <span v-else class="inline-flex items-center rounded-full px-2 py-1 caption-3" :class="tagClass[idea.tag.kind]">
                            {{ tagLabel[idea.tag.kind] }}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type TagKind = 'made' | 'plan' | 'idea';

type Idea = {
    title: string;
    body: string;
    tag: { kind: TagKind; label?: string; href?: string };
};

type Creator = {
    id: string;
    label: string;
    icon: string;
    ideas: Idea[];
};

const tagLabel: Record<TagKind, string> = {
    made: 'つくったことがある',
    plan: '構想中',
    idea: 'アイデアのタネ',
};

const tagClass: Record<TagKind, string> = {
    made: 'bg-tc-sage-paper text-tc-ink',
    plan: 'bg-tc-pink-paper text-tc-ink',
    idea: 'bg-tc-paper-2 text-tc-ink-2',
};

const tapeClass = ['', 'tape-pink', 'tape-blue'];

const creators: Creator[] = [{
    id: 'illust',
    label: 'イラスト',
    icon: 'i-ph-paint-brush',
    ideas: [{
        title: '推しを連れて歩けるフォトフレーム',
        body: '描き下ろしのイラストをカメラの映像と重ねて、ファンが自分の写真の中に推しを呼べる。アプリのインストールは要りません。',
        tag: { kind: 'made', label: 'ARフォトフレーム', href: '/works/omusp-arphoto' },
    }, {
        title: 'メイキングをめくれる画集',
        body: 'ラフ、線画、色塗り。スクロールに合わせてレイヤーが重なっていき、一枚の絵ができるまでを追体験できるWeb画集。',
        tag: { kind: 'idea' },
    }, {
        title: 'あなたの絵がリアクションになる場所',
        body: '描いたスタンプをカスタム絵文字にして、ファンが投稿へのリアクションに使えるSNSのサーバー。',
        tag: { kind: 'plan', label: 'ファンのための専用Misskey', href: '#project-community' },
    }],
}, {
    id: 'manga',
    label: '漫画',
    icon: 'i-ph-book-open',
    ideas: [{
        title: '同人誌の試し読みを、そのままWebで',
        body: '右綴じも左綴じも、紙と同じ向きでページをめくれるビューア。おしながきから直接読み始められます。',
        tag: { kind: 'plan', label: 'おしながきシステム', href: '#project-oshinagaki' },
    }, {
        title: 'キャラクターがタイムラインにいる世界',
        body: '作中のキャラクターがSNSに投稿し、読者の返信で物語が少し動く。連載の「幕間」を体験として届けます。',
        tag: { kind: 'plan', label: 'SNSを舞台にしたゲーム', href: '#project-snsgame' },
    }, {
        title: '設定資料を探検できる年表',
        body: 'キャラクターの相関や作中の年表を、ファンが自由にたどれるインタラクティブな資料集。',
        tag: { kind: 'idea' },
    }],
}, {
    id: 'music',
    label: '音楽',
    icon: 'i-ph-music-notes',
    ideas: [{
        title: 'クレジットまで見やすいディスク紹介',
        body: 'ディスクとトラック、作詞・作曲・編曲を整理して載せるページ。試聴や配信サービスへのリンクもひとまとめに。',
        tag: { kind: 'plan', label: 'おしながきシステム', href: '#project-oshinagaki' },
    }, {
        title: '聴く人がミックスできる楽曲',
        body: 'パートごとの音源を、ブラウザ上で好きにミュートしたり重ねたりできるプレイヤー。',
        tag: { kind: 'idea' },
    }, {
        title: 'ライブの記念を、手元に残す',
        body: '公演名やお気に入りの曲を入れたチケット風の画像をつくって、SNSで共有できるジェネレーター。',
        tag: { kind: 'made', label: 'チケット風カードジェネレーター', href: '/works/milpr-ticket' },
    }],
}, {
    id: 'voice',
    label: '声',
    icon: 'i-ph-microphone',
    ideas: [{
        title: '声で起こしてくれるWebアラーム',
        body: '収録したボイスを使って、時間や曜日によって台詞が変わるアラームをブラウザだけで。',
        tag: { kind: 'idea' },
    }, {
        title: '聴く場所を選べるボイスドラマ',
        body: '選択肢で展開が分かれたり、登場人物の位置に合わせて声が左右から聞こえたりする音声作品。',
        tag: { kind: 'idea' },
    }, {
        title: 'キャラクターがSNSで話しかけてくる',
        body: 'キャラクターの投稿にボイスが付いて、物語の進行に合わせて届く。声があってこそ成り立つ企画です。',
        tag: { kind: 'plan', label: 'SNSを舞台にしたゲーム', href: '#project-snsgame' },
    }],
}, {
    id: 'vtuber',
    label: 'VTuber・配信',
    icon: 'i-ph-monitor-play',
    ideas: [{
        title: 'ライブ記念のチケット風カード',
        body: '推しを選んで自分だけのチケット画像をつくり、SNSでシェア。開催前の盛り上がりづくりに。',
        tag: { kind: 'made', label: 'チケット風カードジェネレーター', href: '/works/milpr-ticket' },
    }, {
        title: 'ファン同士が集まれる専用SNS',
        body: '配信の告知、切り抜きやファンアートの共有、ファン同士の交流をひとつの場所で。オリジナルの絵文字で反応できます。',
        tag: { kind: 'plan', label: 'ファンのための専用Misskey', href: '#project-community' },
    }, {
        title: '配信と連動するミニゲーム',
        body: 'コメントやリアクションに合わせて画面の演出が変わる、視聴者参加型のWebゲーム。',
        tag: { kind: 'idea' },
    }],
}, {
    id: 'circle',
    label: '同人・グッズ',
    icon: 'i-ph-storefront',
    ideas: [{
        title: 'おしながきを、さがせるデータに',
        body: '頒布物を登録すると、サークルをまたいだ検索や会場マップに載る。画像1枚に収まらない情報も伝えられます。',
        tag: { kind: 'plan', label: 'おしながきシステム', href: '#project-oshinagaki' },
    }, {
        title: '会場を回る順番をつくる',
        body: '欲しいものリストとスペースの配置から、当日に会場を回るルートを組み立てるお手伝い。',
        tag: { kind: 'idea' },
    }, {
        title: 'グッズの大きさを、手のひらと比べる',
        body: 'アクリルスタンドや本の判型を、手のひらと並べた実物大で確かめられる表示。通販のときにも役立ちます。',
        tag: { kind: 'idea' },
    }],
}];

const selected = ref(creators[0].id);
const current = computed(() => creators.find((c) => c.id === selected.value) ?? creators[0]);
</script>

<style>
.tc7 .tc7-chip {
    background: var(--tc-card);
    color: var(--tc-ink);
    transition: transform 300ms var(--tc-ease), background-color 300ms var(--tc-ease), color 300ms var(--tc-ease);
}

.tc7 .tc7-chip:hover {
    transform: translateY(-2px);
}

.tc7 .tc7-chip:active {
    transform: scale(0.98);
}

.tc7 .tc7-chip.is-on {
    background: var(--tc-ink);
    color: var(--tc-card);
}

.tc7 .tc7-pop {
    animation: tc7-rise 500ms var(--tc-ease) both;
}

@media (prefers-reduced-motion: reduce) {
    .tc7 .tc7-pop { animation-name: tc7-fade; }
    .tc7 .tc7-chip:hover,
    .tc7 .tc7-chip:active { transform: none; }
}
</style>
