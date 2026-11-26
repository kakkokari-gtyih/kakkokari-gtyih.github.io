---
title: Misskey連携プラグイン for わんコメ
thumbnail: /img/works/e_misskeyonecomme.png
---

<script setup>
import WorksCta from '../../.vitepress/theme/components/WorksCta.vue';
</script>

# Misskey連携プラグイン for わんコメ

![Misskey連携プラグイン for わんコメ](/img/works/e_misskeyonecomme.png)

<WorksCta url="https://github.com/kakkokari-gtyih/onecomme-misskey-plugin" />

わんコメで、Misskeyの特定のチャンネルのノートをコメントとして表示するプラグインです。

プラグインをインストールしてMisskeyサーバーを連携すると、そのサーバー上の特定のチャンネルに投稿されたノートを、わんコメ上でコメントとして表示できるようになります。カスタム絵文字の表示・nyaize・サポートしないMFMの除去などのMisskey固有の処理はもちろん、複数チャンネルの連携にも対応。

また、モダンな技術スタックでわんコメプラグインを作るための、独自のラッパーなども新たに設計しています。

※このプラグインは非公式です。わんコメおよびMisskey Projectとは直接関係ありません。

## 技術スタック

### プラグイン部

- TypeScript
- Misskey.js
- mfm.js
- わんコメSDK
- tsdown

### フロントエンド

- TypeScript
- Vue.js v3

## 関連リンク

- [GitHubリポジトリ](https://github.com/kakkokari-gtyih/onecomme-misskey-plugin)
- [わんコメ ホームページ](https://onecomme.com/)
