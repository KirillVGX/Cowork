'use client';

import styles from './toast.module.css';

type Props = {
    text: string;
    show: boolean;
};

export default function Toast({ text, show }: Props) {
    if (!show) return null;

    return (
        <div className={styles.toastWrapper}>
            <div className={styles.toast}>{text}</div>
        </div>
    );
}
