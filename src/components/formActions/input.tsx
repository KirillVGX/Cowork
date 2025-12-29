import styles from './formActions.module.css';
import { ChangeEvent } from 'react';

interface InputProps {
    type?: string;
    placeholder: string;
    value?: string;
    name?: string;
    required?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    type = 'text',
    placeholder,
    value,
    onChange,
    name,
    required = false,
}: InputProps) {
    return (
        <input
            className={`${styles.input} ${required ? styles.required : ''}`}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-label={placeholder}
        />
    );
}
