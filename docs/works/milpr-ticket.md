---
title: 【二次創作】ミリプロ 1st Live "Million Story" チケット風カードジェネレーター
thumbnail: /img/works/e_milprticket.webp
---

<script setup>
import WorksCta from '../../.vitepress/theme/components/WorksCta.vue';
</script>

# ミリプロ 1st Live "Million Story" チケット風カードジェネレーター

![Moodle Plus](/img/works/e_milprticket.webp)

<WorksCta url="https://tickets.milpr.vstreams.app/" />

2026年5月9日にVTuberプロダクション「ミリプロ」が開催したライブイベント「[ミリプロ 1st Live "Million Story"](https://milpr.com/millipro_1stlive)」のチケット風画像を作成し、SNS等で共有できる非公式サービスです。ライブ開催前に公開し、タレント本人を含め多くの方に遊んでいただけました。

知人の開発者（でありミリプロのファン）に誘われて共同開発しました。~~わたしはそんなにミリプロには詳しくありませんでした~~が、これをきっかけに詳しく触れるようになりました。

機能としてはシンプルに抑えて使い方で迷わないようにしつつも、特定のタレントだけを表示したチケットを作れるなどの柔軟性を兼ね備えています。また、「[大阪公立大学 ARフォトフレーム](./omusp-arphoto.md)」製作時のノウハウを活かし、iOSでの画像保存挙動を特別対応するなどのUX向上の仕掛けも取り入れているほか、その他のプロジェクトで培ったノウハウを活かして文字フォントの特殊対応や、外部ライブラリ依存のない軽量な描画処理の実現など、様々な機軸を取り入れています。

画像アセットは、チケットのベース・タレント・文字部でレイヤーを分けることで、素材の制作パターンを低減しメンテナンス性を担保しています。

&copy; 2023 Million Production, Inc.\
このサイトはミリプロの二次創作物であり、公式のものではありません。

## 技術スタック

※ Canvasの描画処理に外部ライブラリは使用していません。

- Astro
- Vue.js v3
- UnoCSS
- Microsoft PowerPoint
