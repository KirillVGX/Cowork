'use client';

import { useState } from 'react';
import Arlicle from '@/components/article/Article';
import Slider from '@/components/slider/Slider';
import styles from './catalog.module.css';
import { articles } from '@/data/articles';
import Search from '@/components/search/Search';

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

    const allArticles = articles.flat();

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
        <section>
            <div className={styles.buttons}>
                {categories.map((category) => (
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
                ))}

                <Search onSearch={setQuery} />
            </div>

            {isSearching ? (
                <div className={styles.productsGrid}>
                    {searchedArticles.length > 0 ? (
                        searchedArticles.map((article) => (
                            <Arlicle
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
                    {articles.map((section, sectionIndex) => (
                        <div
                            key={sectionIndex}
                            className={styles.productsGrid}
                        >
                            {section.map((article) => (
                                <Arlicle
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
                        <Arlicle
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
