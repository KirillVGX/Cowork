'use client';

import { useState } from 'react';
import styles from './search.module.css';
import Image from 'next/image';

interface searchProps {}

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
        </div>
    );
}
