'use client';

import styles from './catalog.module.css';
import Article from '@/components/article/Article';
import Slider from '@/components/slider/Slider';
import Search from '@/components/search/Search';
import Image from 'next/image';
import { categories } from '@/data/categories';
import { articles } from '@/data/articles';
import { useState, useMemo, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { chunkArray } from '@/utils/chunkArray';
import { usePathname } from 'next/navigation';

type Category = (typeof categories)[number];

type CatalogProps = {
    onOpenFilter: () => void;
    activeCategory: Category;
    setActiveCategory: (category: Category) => void;
};

export default function Catalog({
    onOpenFilter,
    activeCategory,
    setActiveCategory,
}: CatalogProps) {
    const [query, setQuery] = useState('');

    const isMobile = useMediaQuery('(max-width: 768px)');
    const isSearching = query.trim().length > 0;

    const filteredArticles = useMemo(() => {
        if (isSearching) {
            return articles.filter((article) =>
                article.title.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (activeCategory === 'All') {
            return articles;
        }

        return articles.filter(
            (article) => article.category === activeCategory
        );
    }, [query, activeCategory, isSearching]);

    const slides = useMemo(
        () => chunkArray(filteredArticles, 9),
        [filteredArticles]
    );

    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        const el = document.querySelector(hash);
        if (!el) return;

        el.scrollIntoView({ behavior: 'smooth' });
    }, [pathname]);

    return (
        <section className={styles.catalogSection} id='catalog'>
            <div className={styles.buttons}>
                {!isMobile ? (
                    categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.button} ${
                                activeCategory === category ? styles.active : ''
                            }`}
                            onClick={() => {
                                setActiveCategory(category);
                                setQuery('');
                            }}
                        >
                            {category === 'All' ? 'All Posts' : category}
                        </button>
                    ))
                ) : (
                    <button
                        className={styles.filterBtn}
                        onClick={onOpenFilter}
                        aria-label="Open menu"
                    >
                        <Image
                            src="/filter.svg"
                            alt="Filter menu"
                            width={24}
                            height={24}
                            className={styles.filterIcon}
                        />
                    </button>
                )}

                <Search onSearch={setQuery} />
            </div>

            {filteredArticles.length === 0 ? (
                <h2 className={styles.error}>Nothing found</h2>
            ) : activeCategory === 'All' && !isSearching ? (
                <Slider showNumbers>
                    {slides.map((section, index) => (
                        <div
                            key={index}
                            className={styles.productsGrid}
                        >
                            {section.map((article) => (
                                <Article
                                    key={article.id}
                                    {...article}
                                />
                            ))}
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className={styles.productsGrid}>
                    {filteredArticles.map((article) => (
                        <Article
                            key={article.id}
                            {...article}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
