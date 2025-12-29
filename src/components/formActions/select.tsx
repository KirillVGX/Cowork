'use client';

import Image from 'next/image';
import inputStyles from './formActions.module.css';
import styles from './dropdown.module.css'
import { use, useEffect, useRef, useState } from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    value: string;
    options: Option[];
    name?: string;
    isRequired?: boolean;
    ariaLabel: string;
    onChange: (value: string) => void;
}

export default function Select({
    value,
    options,
    onChange,
    name,
    isRequired = true,
    ariaLabel,
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const activeOption = options.find((o) => o.value === value);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <div
            ref={ref}
            className={styles.wrapper}
        >
            <button
                className={`${inputStyles.input} ${styles.list}`}
                aria-label={ariaLabel}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <p className={styles.openButtonText}>
                    {activeOption?.label ?? 'Select a plan'}
                </p>

                <Image
                    src="./bottom-arrow.svg"
                    alt=""
                    className={`${styles.openBtnImg} ${
                        isOpen ? styles.rotate : ''
                    }`}
                    width={32}
                    height={24}
                />
            </button>

            <ul
                className={`${styles.dropdown} ${
                    isOpen ? styles.dropdownOpen : styles.dropdownClosed
                }`}
                role="listbox"
            >
                {options.map((option) => {
                    const isActive = option.value === value;

                    return (
                        <li
                            key={option.value}
                            className={`${styles.listItem} ${
                                isActive ? styles.activeItem : ''
                            }`}
                            role="option"
                            aria-selected={isActive}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                        >
                            <div className={styles.listHeader}>
                                <p
                                    className={`${styles.listTitle} ${
                                        isActive ? styles.listTitleActive : ''
                                    }`}
                                >
                                    {option.label}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
