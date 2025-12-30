import Image from 'next/image';
import styles from './recommendations.module.css';
import { articles } from '@/data/articles';
import Article from '../article/Article';

export default function Recommendations() {
    return (
        <div className={styles.insights}>
            {articles
                .slice()
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map((article) => (
                    <Article
                        key={article.id}
                        {...article}
                    />
                ))}
        </div>
    );
}
