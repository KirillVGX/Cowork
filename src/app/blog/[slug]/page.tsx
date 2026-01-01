import { lazy, Suspense } from 'react';
import Reveal from '@/hoc/reveal/Reveal';

import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import styles from './post.module.css';
import Loader from '@/components/loader/Loader';
import ViewAllButton from '@/components/viewAllButton/ViewAllButton';

const Post = lazy(() => import('@/components/post/Post'));
const Recommendations = lazy(
    () => import('@/components/recommendations/Recommendations')
);

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = articles.flat().find((a) => a.slug === slug);

    if (!article) notFound();

    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Post title={article.title} />
            </Reveal>
            <Reveal>
                <div className={styles.post}>
                    <Recommendations />
                    <ViewAllButton />
                </div>
            </Reveal>
        </Suspense>
    );
}
