import type { Directive } from 'vue';

const observers = new WeakMap<Element, IntersectionObserver>();

/**
 * 画面に入ったときに一度だけ、下から浮き上がりつつフェードインさせる。
 * `v-reveal="120"` のように値を渡すと、その ms だけ遅らせる。
 * マウント時点ですでに見えている要素には何もしない（ちらつき防止）。
 */
export const vReveal: Directive<HTMLElement, number | undefined> = {
    mounted(el, binding) {
        if (typeof IntersectionObserver === 'undefined') return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) return;

        el.classList.add('tc7-reveal');
        if (binding.value) el.style.transitionDelay = `${binding.value}ms`;

        const io = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                el.classList.add('is-in');
                io.disconnect();
                observers.delete(el);
            }
        }, { rootMargin: '0px 0px -10% 0px' });

        io.observe(el);
        observers.set(el, io);
    },
    unmounted(el) {
        observers.get(el)?.disconnect();
        observers.delete(el);
    },
};
