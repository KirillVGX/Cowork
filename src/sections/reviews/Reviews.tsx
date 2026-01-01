'use client';

import Image from 'next/image';
import styles from './reviews.module.css';
import { reviews } from '@/data/reviews';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import ScrollbarSwiper from '@/components/scrollbar/Scrollbar';
import { ReviewCard } from '@/components/reviewCard/ReviewCard';

export default function Reviews() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const cards = reviews.map((item, i) => (
        <ReviewCard
            key={item.id}
            index={i}
            avatarSrc={item.avatarSrc}
            avatarAlt={item.avatarAlt}
            review={item.review}
            name={item.name}
            role={item.role}
            color={item.color}
        />
    ));

    return (
        <section className={styles.reviewsSection}>
            <div className={styles.reviewsHeader}>
                <div className={styles.head}>
                    <h1 className={styles.title}>Hear It from Our Clients</h1>
                    <Image
                        src="/testimonials-icon.svg"
                        alt="testimonials icon"
                        width={64}
                        height={64}
                    />
                </div>

                <h4 className={styles.subtitle}>Cowork in Words</h4>
            </div>

            {isMobile ? (
                <ScrollbarSwiper>{cards}</ScrollbarSwiper>
            ) : (
                <div className={styles.reviews}>{cards}</div>
            )}
        </section>
    );
}
