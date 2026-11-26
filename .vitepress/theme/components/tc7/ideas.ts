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
        title: '推しと旅行先で記念撮影！？オリジナルARフォトフレーム',
        body: 'イラストをスマホカメラの映像と重ねて、気軽に記念撮影。最新のWeb技術でブラウザ内で動くから、別途アプリのインストールは要りません。',
        tag: { kind: 'made', label: 'ARフォトフレーム', href: '/works/omusp-arphoto' },
    }, {
        title: 'メイキングをたどれる画集・ポートフォリオ',
        body: '線を描いて、重ねて、また消して──そうして一枚の絵ができるまでを追体験できる、そんな新しい体験が作れるかも。',
        tag: { kind: 'idea' },
    }, {
        title: 'あなたのイラストに感情が宿るSNS',
        body: '描いたスタンプをカスタム絵文字にして、投稿の文面やリアクションに使える。幅広な絵文字も登録できるMisskeyならではの体験です。',
        tag: { kind: 'idea' },
    }],
}, {
    id: 'manga',
    label: 'マンガ・物語',
    icon: 'i-ph-book-open',
    color: 'bg-tc-sage',
    ideas: [{
        title: '同人誌の試し読みを、そのままWebで',
        body: '気になる作品を横断検索して、おしながきから直接読み始められる、気軽でシームレスな体験で、あなたの作品をもっと見つけてもらいやすく。',
        tag: { kind: 'plan', label: 'おしながきシステム', href: '#projects' },
    }, {
        title: 'キャラクターがタイムラインにいる世界',
        body: 'Misskeyをベースにした本物さながらのSNSの中で、キャラクターが投稿し、会話する。プレイヤーの行動で物語が動き出す、SNSを舞台にしたリアリティあふれるゲーム。',
        tag: { kind: 'idea' },
    }, {
        title: '物語をより深く探検できる公式資料サイト',
        body: 'キャラクターの相関や作中の年表を、自由にたどれるインタラクティブな資料集。新たなファンも、既存の読者も楽しめる、わかりやすい公式資料集。',
        tag: { kind: 'idea' },
    }],
}, {
    id: 'music',
    label: '音楽',
    icon: 'i-ph-music-notes',
    color: 'bg-tc-mustard',
    ideas: [{
        title: '作品データをそのままおしながきに',
        body: 'M3などのイベントのために特設サイトを作っていますか？おしながきシステムを使えば、ディスクやトラック、楽曲のクレジットや試聴や配信サービスへのリンクもひとまとめにできて、サイトを用意しなくても割といい感じの見た目のページがすぐできあがります。',
        tag: { kind: 'plan', label: 'おしながきシステム', href: '#projects' },
    }, {
        title: 'ダウンロードコンテンツの配布をもっと簡単に',
        body: '音源や映像データなどのデジタルコンテンツのダウンロードカード頒布に特化したアップローダー。個別のQRコードや各種制限をかけられる仕組みなども考えられそう。',
        tag: { kind: 'idea' },
    }, {
        title: 'ライブの記念を、手元に残す',
        body: '公演名やお気に入りの曲を入れたチケット風の画像をつくって、SNSで共有できるジェネレーター。',
        tag: { kind: 'made', label: 'チケット風カードジェネレーター', href: '/works/milpr-ticket' },
    }],
}, {
    id: 'voice',
    label: '声優・VTuber',
    icon: 'i-ph-microphone',
    color: 'bg-tc-terra',
    ideas: [{
        title: 'オリジナルアラームアプリを自作できるプラットフォーム',
        body: '収録したボイスを使ってオリジナルのアラームを作れるプラットフォーム。そういったアラームのアプリを専門に開発する企業などもありますが、もしそれを声優やVTuberの方が自分自身で簡単に作れるとしたら、ぐっとハードルは下がりそうです。',
        tag: { kind: 'idea' },
    }, {
        title: '機材が無くてもバイノーラル音声を作るための加工アプリ',
        body: '高価なマイクが用意できなくても、後から音声を3次元空間に配置することで疑似的にバイノーラル音声を実現できるアプリ。より気軽に録音できるので、シチュエーションボイスの収録のハードルを下げられるかも。',
        tag: { kind: 'idea' },
    }, {
        title: '位置情報をベースにした音声作品',
        body: '選択肢で展開が分かれたり、登場人物の位置に合わせて声が左右から聞こえたりする音声作品。',
        tag: { kind: 'idea' },
    }],
}, {
    id: 'vtuber',
    label: 'VTuber・配信',
    icon: 'i-ph-monitor-play',
    color: 'bg-tc-blue',
    ideas: [{
        title: 'ライブ記念のチケット風カード',
        body: '推しを選んで自分だけのチケット画像をつくり、SNSでシェア。開催前の話題づくりに最適です。',
        tag: { kind: 'made', label: 'チケット風カードジェネレーター', href: '/works/milpr-ticket' },
    }, {
        title: 'ファン同士が集まれる専用SNS',
        body: 'Misskeyをベースに、配信の告知・切り抜きやファンアートの共有・ファン同士の交流を、ひとつの場所で。メンバーシップ用の絵文字などはMisskeyにそのままカスタム絵文字として追加できるので、ファン同士のコミュニケーションもより豊かになりそうです。',
        tag: { kind: 'idea' },
    }, {
        title: '配信と連動するミニゲーム',
        body: 'コメントやリアクションに合わせて画面の演出が変わる、視聴者参加型のWebゲーム。わんコメなどの既存アプリと連携することで、配信者側のセットアップは最小限で済みます。',
        tag: { kind: 'made', label: 'わんコメプラグインの作例', href: '/works/misskey-onecomme' },
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
