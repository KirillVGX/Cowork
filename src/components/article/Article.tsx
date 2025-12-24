import Image from 'next/image';
import styles from './article.module.css';

interface ArticleProps {
    id: number;
    title: string;
    price: string;
    imageUrl: string;
}

export default function Arlicle({ id, title, price, imageUrl }: ArticleProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={460}
                    height={300}
                    className={styles.image}
                />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.price}>${price}</div>
        </div>
    );
}