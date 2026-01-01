'use client';

import Image from 'next/image';
import styles from './reviewCard.module.css';

type ReviewCardProps = {
    avatarSrc: string;
    avatarAlt: string;
    review: string;
    name: string;
    role: string;
    color: string;
    index: number;
};

export function ReviewCard({
    avatarSrc,
    avatarAlt,
    review,
    name,
    role,
    color,
    index,
}: ReviewCardProps) {
    return (
        <div
            className={`${styles.card} ${styles[`card-${index}`]}`}
            style={{ backgroundColor: color }}
        >
            <Image
                src={avatarSrc}
                alt={avatarAlt}
                width={56}
                height={56}
                style={{ margin: '0 auto 24px' }}
            />

            <p>{review}</p>

            <h6 className={styles.name}>{name}</h6>
            <h6 className={styles.role}>{role}</h6>
        </div>
    );
}
