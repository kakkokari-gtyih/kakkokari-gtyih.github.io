import { createContentLoader } from 'vitepress';
import type { HeadConfig } from 'vitepress';

interface Post {
    title: string
    url: string
    date: {
        time: number
        string: string
    }
}

declare const data: Post[]
export { data }

export default createContentLoader('blog/*.md', {
    // excerpt: true,
    transform(raw): Post[] {
        return raw
            .filter(({ url }) => !url.match(/^\/blog(\/?$|\/index($|\.(md|html)$))/))
            .map(({ url, frontmatter }) => ({
                title: frontmatter.head ? frontmatter.head.find((e: HeadConfig) => e[1].property === 'og:title')[1].content : frontmatter.title ?? '',
                url,
                date: formatDate(frontmatter.date),
            }))
            .sort((a, b) => b.date.time - a.date.time);
    },
})

function formatDate(raw: string): Post['date'] {
    const date = new Date(raw)
    date.setUTCHours(12)
    return {
        time: +date,
        string: date.toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
    }
}
