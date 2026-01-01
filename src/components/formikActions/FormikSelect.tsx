'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useField } from 'formik';

import inputStyles from './formActions.module.css';
import styles from './dropdown.module.css';

export type Option = {
    value: string;
    label: string;
};

interface SelectProps {
    name?: string;
    value?: string;
    options: Option[];
    ariaLabel: string;
    isRequired?: boolean;
    error?: boolean;
    onChange?: (value: string) => void;
}

export default function Select({
    name,
    value,
    options,
    ariaLabel,
    isRequired = true,
    error,
    onChange,
}: SelectProps) {
    const isFormik = Boolean(name);
    const [field, meta, helpers] = isFormik ? useField(name!) : [null, null, null];

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const selectedValue = isFormik ? field!.value : value;
    const setValue = isFormik
        ? (val: string) => helpers!.setValue(val)
        : onChange;

    const hasError =
        error ?? (isFormik ? meta!.touched && !!meta!.error : false);

    const activeOption = options.find(
        (o) => o.value === selectedValue
    );

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
        <div ref={ref} className={styles.wrapper}>
            <input
                type="hidden"
                name={name}
                value={selectedValue}
                required={isRequired}
            />

            <button
                type="button"
                className={`${inputStyles.input} ${styles.list} ${
                    hasError ? styles.error : ''
                }`}
                aria-label={ariaLabel}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className={styles.openButtonText}>
                    {activeOption ? (
                        <p className={styles.activeOption}>
                            {activeOption.label}
                        </p>
                    ) : (
                        <p>Select an option</p>
                    )}
                </div>

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
                    const isActive = option.value === selectedValue;

                    return (
                        <li
                            key={option.value}
                            role="option"
                            aria-selected={isActive}
                            className={`${styles.listItem} ${
                                isActive ? styles.activeItem : ''
                            }`}
                            onClick={() => {
                                setValue?.(option.value);
                                setIsOpen(false);
                            }}
                        >
                            <p
                                className={`${styles.listTitle} ${
                                    isActive ? styles.listTitleActive : ''
                                }`}
                            >
                                {option.label}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
