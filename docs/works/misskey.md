---
title: Misskey
thumbnail: /img/works/e_misskey.png
---

<script setup>
import WorksCta from '../../.vitepress/theme/components/WorksCta.vue';
</script>

# Misskey

![Misskey](/img/works/e_misskey.png)

<WorksCta url="https://github.com/misskey-dev/misskey" />

Misskeyは、分散型SNSオープンソースの分散型マイクロブログプラットフォームです。豊富な機能やリアルタイム性・カスタマイズ性が特徴です。

2023年から、Misskey Projectのコアメンバー（メンテナー）として、フロントエンド・バックエンド両面の開発に携わっています。特に、フロントエンドの開発を主に担当しており、ユーザーインターフェースの改善や新機能の実装などを行っています。

主にフロントエンドの開発で携わっていますが、必要に応じてバックエンドの開発にも関わっています。また、イシュー（バグ報告・機能要望）やプルリクエストの整理やレビューなども行っています。

[**過去に取り入れられたすべてのプルリクエストを見る**](https://github.com/misskey-dev/misskey/pulls?q=is%3Apr+author%3Akakkokari-gtyih+is%3Amerged)

:::details 特筆すべきコントリビューション

- 画像の読み込みなどを削減する [データセーバーモード](https://github.com/misskey-dev/misskey/pull/10478) の追加
- [プロフィール設定「追加情報」の並び替え・削除UIの対応](https://github.com/misskey-dev/misskey/pull/10766)
- [センシティブな画像を区別しやすくなる枠線を追加](https://github.com/misskey-dev/misskey/pull/11851)
- [ファイルが使われているノートを一覧表示できる機能](https://github.com/misskey-dev/misskey/pull/11995)
- [未読の通知の数を表示できるように](https://github.com/misskey-dev/misskey/pull/11982)
- [Misskeyチュートリアルを追加](https://github.com/misskey-dev/misskey/pull/12141)
- [リアクション選択時の効果音](https://github.com/misskey-dev/misskey/pull/12441)
- [アップロードするファイルの名前をランダムにできる機能](https://github.com/misskey-dev/misskey/pull/13688)
- [「チャンネルにリノート」メニューを追加](https://github.com/misskey-dev/misskey/pull/13855)
- [ノートの埋込機能](https://github.com/misskey-dev/misskey/pull/13929)
- [センシティブなメディアを開こうとしたら確認ダイアログが出せるようにするオプションを追加（誤爆防止）](https://github.com/misskey-dev/misskey/pull/14115)
- [ユーザーの名前に禁止ワードを設定できる機能](https://github.com/misskey-dev/misskey/pull/14756)
- [外部アプリ認証画面のデザイン改良](https://github.com/misskey-dev/misskey/pull/14828)
- [送信したフォローリクエストを確認できる機能](https://github.com/misskey-dev/misskey/pull/14856)
- [使用されていないアイコンを削除してクライアントの読み込みを軽量化する機能](https://github.com/misskey-dev/misskey/pull/15340)
- [チャットの使用をロールポリシーで無効化できるように](https://github.com/misskey-dev/misskey/pull/15765)
- プラグイン・カスタムCSSでクライアントが使用不能になった際に、それらを無効化して起動できる[セーフモード](https://github.com/misskey-dev/misskey/pull/16245)を実装

:::

---

さらに、以下の関連ライブラリのメンテナンスも担当しています。

- [`@misskey-dev/summaly`](https://github.com/misskey-dev/summaly) - URLプレビューの生成のためのライブラリ
- [Misskey Emojis](https://github.com/misskey-dev/emojis) - Misskeyで使用されている絵文字のアセット・データセット
- [mfm.js](https://github.com/misskey-dev/mfm.js) - Misskeyの独自マークアップ言語「MFM」をパースするためのライブラリ

## 技術スタック

### フロントエンド

- TypeScript
- Vue.js v3

### バックエンド

- TypeScript
- Node.js
- NestJS
- Fastify
- TypeORM
- PostgreSQL
- Redis

## 関連リンク

- [Misskey Project 公式サイト「Misskey Hub」](https://www.misskey-hub.net/)
- [Misskey GitHubリポジトリ](https://github.com/misskey-dev/misskey)
- [Misskey.io](https://misskey.io/) - Misskeyの世界最大のサーバー（利用者数約75万人、DAU約2万人）。Misskey Projectとは別組織である株式会社MisskeyHQが運営しています。
