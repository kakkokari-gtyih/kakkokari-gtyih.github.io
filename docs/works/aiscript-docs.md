---
title: AiScript ドキュメンテーションサイト
thumbnail: /img/works/e_ais.webp
---

<script setup>
import WorksCta from '../../.vitepress/theme/components/WorksCta.vue';
</script>

# AiScript ドキュメンテーションサイト

![AiScript ドキュメンテーションサイト](/img/works/e_ais.webp)

<WorksCta url="https://aiscript-dev.github.io/" />

AiScriptは、[Misskey](./misskey.md)などで使用されている、JavaScript上のサンドボックス環境で動作するプログラミング言語です。Misskeyでは、ユーザー生成コンテンツ（UGC）のうち、ユーザーが自由にゲームなどを作れる「Play」機能や、クライアントの挙動を拡張できる「プラグイン」機能などで使用されています。

今回、そんなAiScriptのドキュメンテーションサイトを、VitePressでリニューアルしました。これまでGitHubのREADMEに記載されていた内容を、より見やすく・わかりやすく整理して掲載しています。

単にVitePressに移行しただけでなく、ドキュメント内のAiScriptのシンタックスハイライトに対応しているほか、ブラウザ内で実行可能という特徴を活かしてドキュメント内にインタラクティブな実行環境を実装したり、実際にAiScriptを書いて試せるフルページのプレイグラウンドを実装したりと多様なカスタマイズを行っています。

また、英語能力を活用して、英語版翻訳を全面的に書き直しました。


## 技術スタック

- TypeScript
- VitePress (Vue.js v3)
- tmLanguage
- Shiki

## 関連リンク

- [AiScript ドキュメンテーションサイト](https://aiscript-dev.github.io/)
- [ドキュメンテーションサイトのGitHubリポジトリ](https://github.com/aiscript-dev/aiscript-dev.github.io)
- [AiScript GitHubリポジトリ](https://github.com/aiscript-dev/aiscript)
