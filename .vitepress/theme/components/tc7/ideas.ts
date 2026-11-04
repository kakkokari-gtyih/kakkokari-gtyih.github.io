// 「かけ合わせマシン」と「ぜんぶのアイデア」の帯で共有するデータ
// ※ クラス名は UnoCSS が抽出できるよう、必ず完全な文字列で書くこと

export type TagKind = 'made' | 'plan' | 'idea';

export type Idea = {
    title: string;
    body: string;
    tag: { kind: TagKind; label?: string; href?: string };
};

export type Creator = {
    id: string;
    label: string;
    icon: string;
    /** 帯のチップなどで使う色 */
    color: string;
    ideas: Idea[];
};

export const creators: Creator[] = [{
    id: 'illust',
    label: 'イラスト',
    icon: 'i-ph-paint-brush',
    color: 'bg-tc-pink',
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
        body: '描いたスタンプをカスタム絵文字にして、ファンが投稿へのリアクションに使える。Misskeyを改造した、自分たちだけのSNSです。',
        tag: { kind: 'idea' },
    }],
}, {
    id: 'manga',
    label: 'マンガ・物語',
    icon: 'i-ph-book-open',
    color: 'bg-tc-sage',
    ideas: [{
        title: '同人誌の試し読みを、そのままWebで',
        body: '右綴じも左綴じも、紙と同じ向きでページをめくれるビューア。おしながきから直接読み始められます。',
        tag: { kind: 'plan', label: 'おしながきシステム', href: '#projects' },
    }, {
        title: 'キャラクターがタイムラインにいる世界',
        body: '本物そっくりのSNSの中で、作中のキャラクターが投稿し、会話し、ときどき何かを隠している。読者の返信で物語が少し動く、SNSを舞台にしたゲームです。',
        tag: { kind: 'idea' },
    }, {
        title: '設定資料を探検できる年表',
        body: 'キャラクターの相関や作中の年表を、ファンが自由にたどれるインタラクティブな資料集。',
        tag: { kind: 'idea' },
    }],
}, {
    id: 'music',
    label: '音楽',
    icon: 'i-ph-music-notes',
    color: 'bg-tc-mustard',
    ideas: [{
        title: 'クレジットまで見やすいディスク紹介',
        body: 'ディスクとトラック、作詞・作曲・編曲を整理して載せるページ。試聴や配信サービスへのリンクもひとまとめに。',
        tag: { kind: 'plan', label: 'おしながきシステム', href: '#projects' },
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
    color: 'bg-tc-terra',
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
        tag: { kind: 'idea' },
    }],
}, {
    id: 'vtuber',
    label: 'VTuber・配信',
    icon: 'i-ph-monitor-play',
    color: 'bg-tc-blue',
    ideas: [{
        title: 'ライブ記念のチケット風カード',
        body: '推しを選んで自分だけのチケット画像をつくり、SNSでシェア。開催前の盛り上がりづくりに。',
        tag: { kind: 'made', label: 'チケット風カードジェネレーター', href: '/works/milpr-ticket' },
    }, {
        title: 'ファン同士が集まれる専用SNS',
        body: 'Misskeyをベースに、配信の告知、切り抜きやファンアートの共有、ファン同士の交流をひとつの場所で。オリジナルの絵文字で反応できます。',
        tag: { kind: 'idea' },
    }, {
        title: '配信と連動するミニゲーム',
        body: 'コメントやリアクションに合わせて画面の演出が変わる、視聴者参加型のWebゲーム。',
        tag: { kind: 'idea' },
    }],
}, {
    id: 'circle',
    label: '同人・グッズ',
    icon: 'i-ph-storefront',
    color: 'bg-tc-terra-deep',
    ideas: [{
        title: 'おしながきを、さがせるデータに',
        body: '頒布物を登録すると、サークルをまたいだ検索や会場マップに載る。画像1枚に収まらない情報も伝えられます。',
        tag: { kind: 'plan', label: 'おしながきシステム', href: '#projects' },
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
