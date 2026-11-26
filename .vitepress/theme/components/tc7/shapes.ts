// SVG イラスト用の図形パス生成ヘルパー

/** 5角の星 */
export function starPoints(cx: number, cy: number, outer: number, inner = outer * 0.45) {
    const pts: string[] = [];
    for (let i = 0; i < 10; i++) {
        const r = i % 2 === 0 ? outer : inner;
        const a = (-90 + i * 36) * (Math.PI / 180);
        pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
    }
    return pts.join(' ');
}

/** ハート（幅 16 × 高さ 14 を基準に scale 倍） */
export function heartPath(x: number, y: number, scale = 1) {
    const p = (px: number, py: number) => `${(x + px * scale).toFixed(2)} ${(y + py * scale).toFixed(2)}`;
    return `M${p(8, 14)} C${p(2, 10)} ${p(0, 7)} ${p(0, 4.5)} C${p(0, 2)} ${p(2, 0)} ${p(4.5, 0)} C${p(6, 0)} ${p(7.3, 1)} ${p(8, 2.3)} C${p(8.7, 1)} ${p(10, 0)} ${p(11.5, 0)} C${p(14, 0)} ${p(16, 2)} ${p(16, 4.5)} C${p(16, 7)} ${p(14, 10)} ${p(8, 14)} Z`;
}

/** 4方向に光るきらめき */
export function sparklePath(cx: number, cy: number, r: number) {
    const k = r * 0.18;
    return `M${cx} ${cy - r} Q${cx + k} ${cy - k} ${cx + r} ${cy} Q${cx + k} ${cy + k} ${cx} ${cy + r} Q${cx - k} ${cy + k} ${cx - r} ${cy} Q${cx - k} ${cy - k} ${cx} ${cy - r} Z`;
}
