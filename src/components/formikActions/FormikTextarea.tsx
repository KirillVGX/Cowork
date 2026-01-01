'use client';

import styles from './formActions.module.css';
import { ChangeEvent } from 'react';
import { useField } from 'formik';

interface TextareaProps {
    id?: string;
    name?: string;
    placeholder: string;
    value?: string;
    required?: boolean;
    error?: boolean;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
    placeholder,
    value,
    name,
    id,
    required = false,
    error,
    onChange,
}: TextareaProps) {
    const isFormik = Boolean(name);
    const [field, meta] = isFormik ? useField(name!) : [null, null];

    const textareaValue = isFormik ? field!.value : value;
    const textareaChange = isFormik ? field!.onChange : onChange;

    const hasError =
        error ?? (isFormik ? meta!.touched && !!meta!.error : false);

    const textareaId = id || name;

    return (
        <textarea
            className={`${styles.input} ${styles.textarea} ${
                hasError ? styles.error : ''
            }`}
            id={textareaId}
            name={name || id}
            placeholder={placeholder}
            value={textareaValue}
            onChange={textareaChange}
            aria-label={placeholder}
            required={required}
        />
    );
}
