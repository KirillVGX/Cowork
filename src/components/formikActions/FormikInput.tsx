'use client';

import styles from './formActions.module.css';
import { ChangeEvent } from 'react';
import { useField } from 'formik';

interface InputProps {
    id?: string;
    name?: string;
    type?: string;
    placeholder: string;
    value?: string;
    isRequired?: boolean;
    autoComplete?: string;
    error?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    type = 'text',
    placeholder,
    value,
    name,
    id,
    autoComplete = 'off',
    isRequired = false,
    error,
    onChange,
}: InputProps) {
    const isFormik = Boolean(name);
    const [field, meta] = isFormik ? useField(name!) : [null, null];

    const inputValue = isFormik ? field!.value : value;
    const inputChange = isFormik ? field!.onChange : onChange;
    const inputError =
        error ?? (isFormik ? meta!.touched && !!meta!.error : false);

    const inputId = id || name;

    return (
        <div className={styles.wrapper}>
            <input
                className={`${styles.input} ${inputError ? styles.error : ''}`}
                type={type}
                id={inputId}
                name={name || id}
                value={inputValue}
                onChange={inputChange}
                autoComplete={autoComplete}
                required={isRequired}
            />

            <label
                htmlFor={inputId}
                className={`${styles.label} ${
                    inputValue ? styles.filled : ''
                }`}
            >
                {placeholder}
                {isRequired && <span className={styles.required}> *</span>}
            </label>
        </div>
    );
}
