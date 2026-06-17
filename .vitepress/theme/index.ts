// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme-without-fonts';
import TLayout from './TLayout.vue';
import 'virtual:uno.css';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: TLayout,
} satisfies Theme;
