'use client';

import { useState } from 'react';
import Arlicle from '@/components/article/Article';
import Slider from '@/components/slider/Slider';
import styles from './catalog.module.css';
import { sections } from '@/data/sections';
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

    const allArticles = sections.flat();

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
                        <p>Nothing found</p>
                    )}
                </div>
            ) : activeCategory === 'All' ? (
                <Slider showNumbers={true}>
                    {sections.map((sectionProducts, sectionIndex) => (
                        <div
                            key={sectionIndex}
                            className={styles.productsGrid}
                        >
                            {sectionProducts.map((product) => (
                                <Arlicle
                                    key={product.id}
                                    {...product}
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
