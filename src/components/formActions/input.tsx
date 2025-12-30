import styles from './formActions.module.css';
import { ChangeEvent } from 'react';

interface InputProps {
    type?: string;
    placeholder: string;
    id: string;
    value?: string;
    name?: string;
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
    error = false,
    onChange,
}: InputProps) {
    return (
        <div className={styles.wrapper}>
            <input
                className={`${styles.input} ${error ? styles.error : ''}`}
                type={type}
                name={name || id}
                id={id}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                required={isRequired}
            />

            <label
                htmlFor={id}
                className={`${styles.label} ${value ? styles.filled : ''}`}
            >
                {placeholder}
                {isRequired && <span className={styles.required}> *</span>}
            </label>
        </div>
    );
}
