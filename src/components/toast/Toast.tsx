'use client';

import styles from './toast.module.css';

type Props = {
    text: string;
    show: boolean;
    loading?: boolean;
    variant?: 'success' | 'error' | 'loading';
};

export default function Toast({
    text,
    show,
    loading = false,
    variant = 'success',
}: Props) {
    if (!show) return null;

    return (
        <div className={styles.toastWrapper}>
            <div className={`${styles.toast} ${styles[variant]}`}>
                {loading && <span className={styles.spinner} />}
                <span>{text}</span>
            </div>
        </div>
    );
}
