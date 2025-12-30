'use client';

import { useState } from 'react';
import styles from './search.module.css';
import Image from 'next/image';

export default function Search({
    onSearch,
}: {
    onSearch: (q: string) => void;
}) {
    const [value, setValue] = useState('');

    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder="Search"
                className={styles.input}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    onSearch(e.target.value);
                }}
            />
            <Image
                src="/search.svg"
                alt="Search"
                width={40}
                height={24}
                className={styles.image}
            />
        </div>
    );
}
