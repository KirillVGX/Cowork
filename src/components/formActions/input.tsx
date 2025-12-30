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
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    type = 'text',
    placeholder,
    value,
    onChange,
    name,
    id,
    autoComplete = 'off',
    isRequired = false,
}: InputProps) {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
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
                className={`${styles.label} ${
                    value ? styles.filled : ''
                }`}
            >
                {placeholder}
                {isRequired && <span className={styles.required}> *</span>}
            </label>
        </div>
    );
}
