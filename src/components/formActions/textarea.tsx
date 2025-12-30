import styles from './formActions.module.css';
import { ChangeEvent } from 'react';

interface TextareaProps {
    placeholder: string;
    value: string;
    name?: string;
    id: string;
    required?: boolean;
    error: boolean;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
    placeholder,
    value,
    name,
    id,
    required = false,
    error = false,
    onChange,
}: TextareaProps) {
    return (
        <textarea
            className={`${styles.input} ${styles.textarea} ${
                error ? styles.error : ''
            } `}
            name={name || id}
            placeholder={placeholder}
            value={value}
            id={id}
            onChange={onChange}
            aria-label={placeholder}
            required={required}
        />
    );
}
