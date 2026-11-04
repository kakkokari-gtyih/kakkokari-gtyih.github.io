/**
 * /lp/tc7 の差し替えやすい設定をまとめたファイル
 */

/** Misskey.io の招待コード配布の案内を出すかどうか（イベント後は false に） */
export const SHOW_INVITE_NOTICE = true;

/**
 * おしながきシステムのスクリーンショット。
 * docs/public/img/lp/tc7/ などに画像を置き、パスを入れると差し替わる（null の間はプレースホルダー表示）
 */
export const OSHINAGAKI_SCREENSHOTS: { pc: string | null; mobile: string | null } = {
    pc: null,
    mobile: null,
};

export const LINKS = {
    xProfile: 'https://x.com/kakkokari_gtyih',
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSerbQkdTWvmxHTBlzMcohw0BgsyATniR4ZIO-ve00xUZSkUFA/viewform',
    misskeyIo: 'https://misskey.io/',
    misskeyIoMe: 'https://misskey.io/@kakkokari_gtyih',
    misskeyHub: 'https://misskey-hub.net/',
    hanamisskey: 'https://misskey.flowers/@kakkokari_test1',
    github: 'https://github.com/kakkokari-gtyih',
    zenn: 'https://zenn.dev/kakkokari_gtyih',
    event: 'https://creators.twxd.jp/',
} as const;
