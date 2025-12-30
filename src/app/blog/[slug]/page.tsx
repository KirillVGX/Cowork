import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import Post from '@/components/post/Post';
import Recommendations from '@/components/recommendations/Recommendations';
import Button from '@/components/button/Button';
import styles from './post.module.css';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = articles.flat().find((a) => a.slug === slug);

    if (!article) notFound();

    return (
        <>
            <Post title={article.title} />
            <div className={styles.post}>
                <Recommendations />
                <Button
                    text="View all"
                    color="blue"
                />
            </div>
        </>
    );
}
