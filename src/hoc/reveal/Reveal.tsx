'use client';

import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import styles from './reveal.module.css';

type RevealProps = {
    children: ReactNode;
    className?: string;
    rootMargin?: string;
};

export default function Reveal({
    children,
    className = '',
    rootMargin = '120px',
}: RevealProps) {
    const { ref, isVisible } = useInView<HTMLDivElement>({ rootMargin });

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${
                isVisible ? styles.show : ''
            } ${className}`}
        >
            {children}
        </div>
    );
}
