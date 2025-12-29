import styles from './formActions.module.css';
import { ChangeEvent } from 'react';

interface TextareaProps {
    placeholder: string;
    value: string;
    name?: string;
    required?: boolean;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
    placeholder,
    value,
    onChange,
    name,
    required = false,
}: TextareaProps) {
    return (
        <textarea
            className={`${styles.input} ${styles.textarea} ${required ? styles.required : ''}`}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-label={placeholder}
            required={required}
        />
    );
}
