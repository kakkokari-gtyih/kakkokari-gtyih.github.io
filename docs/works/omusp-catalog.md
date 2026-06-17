---
title: 大阪公立大学授業カタログ
thumbnail: /img/works/o_catalog.webp
---

<script setup>
import WorksCta from '../../.vitepress/theme/components/WorksCta.vue';
</script>

# 大阪公立大学授業カタログ

![大阪公立大学授業カタログ](/img/works/o_catalog.webp)

<WorksCta url="https://catalog.sp.omu.ac.jp/" />

大阪公立大学で開講されている授業を閲覧できるサービス「大阪公立大学 授業カタログ」の全面リニューアルにあたり、UI部分を担当しました。

授業シラバスを美しく表示するために、構成要素を一つずつ整理し、配置を大きく変更しました。また、どのような画面サイズでも無理のない画面レイアウトとなるように調整しています。

また、バックエンドのリプレイス（Go言語ベースに変更）に伴い追加された機能（カリキュラム学科組織設定）に関するUIも新規作成しました。

さらに、SEOのための調整（description文言の微調整・ogp画像の自動生成・xmlサイトマップの自動生成）や多言語対応の強化、Nuxtのレンダリングモードをページごとに切り替えることで最適なパフォーマンスと負荷軽減を実現するなど、さまざまな調整も実施しています。

## 担当内容

- バックエンド全般：他の学生スタッフが担当
- フロントエンド（Nuxt）全般：かっこかり
- 一部グラフィックデザイン：かっこかり
- マスコットキャラクター（おむちゃん＆たこはるさん）デザイン：別の学生スタッフが担当

## 技術スタック

- TypeScript
- Nuxt v4 SSR/SSG/SPA併用 (Vue.js v3)
- UnoCSS
- Bootstrap
- Protobuf / ConnectRPC
- 大阪公立大学 学生プロジェクト フロントエンド共通ライブラリ

## 関連リンク

- [大阪公立大学 授業カタログ](https://catalog.sp.omu.ac.jp/)
- [非公式シラバス作ってたら大学に雇用されて公認サイトになった話](https://zenn.dev/omu_tryangle/articles/d3dfb4f369403d) - 本サイトの誕生の経緯を、開発主担のtomo0611さんが技術記事としてまとめています。
