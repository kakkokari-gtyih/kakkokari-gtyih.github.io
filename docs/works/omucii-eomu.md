---
title: OMUエントランスページ
thumbnail: /img/works/o_eomu.webp
---

<script setup>
import WorksCta from '../../.vitepress/theme/components/WorksCta.vue';
</script>

# OMUエントランスページ

![OMUエントランスページ](/img/works/o_eomu.webp)

<WorksCta url="https://e.omu.ac.jp/" />

学内システムへの入口として機能し、システムの障害情報の掲示板も兼ねる「OMUエントランスページ」をリニューアルしました。

フロントエンドをPHPからAstroに更新し、よりモダンな技術スタックに生まれ変わったほか、学内システムの死活監視を行うステータスページも内包するようになり、よりリアルタイムに障害情報を表示できるようになっています。

## 技術スタック

### フロントエンド

- Astro
- Vue.js v3
- UnoCSS
- 大阪公立大学 学生プロジェクト フロントエンド共通ライブラリ

### システム死活監視

- Uptime Kuma
