import Link from 'next/link';
import Image from 'next/image';
import styles from './article.module.css';

interface ArticleProps {
    id: number;
    slug: string;
    title: string;
    minutes: number;
    category: string;
    imageUrl: string;
}

export default function Article({
    slug,
    title,
    minutes,
    category,
    imageUrl,
}: ArticleProps) {
    return (
        <Link
            href={`/blog/${slug}`}
            className={styles.card}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 460px"
                />
            </div>

            <div className={styles.info}>
                <span className={styles.category}>{category}</span>
                <small>{minutes} min read</small>
            </div>

            <h3 className={styles.title}>{title}</h3>
        </Link>
    );
}
