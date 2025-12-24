import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import Post from '@/components/post/Post';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = articles.flat().find((a) => a.slug === slug);

    if (!article) notFound();

    return (
        <Post title={article.title} />
    );
}
