'use client';

import { useState } from 'react';
import Article from '@/components/article/Article';
import Slider from '@/components/slider/Slider';
import styles from './catalog.module.css';
import { articles } from '@/data/articles';
import Search from '@/components/search/Search';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Modal from '@/components/modal/Modal';
import Image from 'next/image';
import { chunkArray } from '@/utils/chunkArray';

const categories = [
    'All',
    'Trending',
    'Productivity',
    'Career',
    'Lifestyle',
    'Talk',
] as const;

type Category = (typeof categories)[number];

export default function Catalog() {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [query, setQuery] = useState('');
    const isTablet = useMediaQuery('(max-width: 768px)');
    const [isOpen, setIsOpen] = useState(false);

    const allArticles = articles;
    const slides = chunkArray(articles, 9);

    const searchedArticles = allArticles.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    const filteredArticles =
        activeCategory === 'All'
            ? []
            : allArticles.filter(
                  (article) => article.category === activeCategory
              );

    const isSearching = query.trim().length > 0;

    return (
        <section className={styles.catalogSection}>
            <div className={styles.buttons}>
                {!isTablet ? (
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
                    <>
                        <button
                            className={styles.filterBtn}
                            onClick={() => setIsOpen(true)}
                            aria-label="Open menu"
                        >
                            <Image
                                src="/filter.svg"
                                alt="Filter menu"
                                width={24}
                                height={24}
                                priority
                                className={styles.filterIcon}
                            />
                        </button>
                    </>
                )}

                <Search onSearch={setQuery} />
            </div>

            {isSearching ? (
                <div className={styles.productsGrid}>
                    {searchedArticles.length > 0 ? (
                        searchedArticles.map((article) => (
                            <Article
                                key={article.id}
                                {...article}
                            />
                        ))
                    ) : (
                        <h2 className={styles.error}>Nothing found</h2>
                    )}
                </div>
            ) : activeCategory === 'All' ? (
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
                    {filteredArticles.map((product) => (
                        <Article
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            )}

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                color={{ backgroundColor: '#FFF' }}
            >
                <div className=""></div>
            </Modal>
        </section>
    );
}
