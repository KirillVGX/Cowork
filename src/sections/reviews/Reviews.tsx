import Image from 'next/image';
import styles from './reviews.module.css';
import { reviews } from '@/data/reviews';

export default function Reviews() {
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

            <div className={styles.reviews}>
                {reviews.map((item, i) => (
                    <div
                        className={`${styles.card} ${styles[`card-${i}`]}`}
                        key={item.id}
                        style={{ backgroundColor: item.color }}
                    >
                        <Image
                            src={item.avatarSrc}
                            alt={item.avatarAlt}
                            width={56}
                            height={56}
                            style={{ margin: '0 auto', marginBottom: 24 }}
                        />

                        <p>{item.review}</p>

                        <h6 className={styles.name}>{item.name}</h6>
                        <h6 className={styles.role}>{item.role}</h6>
                    </div>
                ))}
            </div>
        </section>
    );
}
