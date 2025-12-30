import Image from 'next/image';
import styles from './insights.module.css';
import Recommendations from '@/components/recommendations/Recommendations';
import Button from '@/components/button/Button';

export default function Insights() {
    return (
        <section className={styles.insightsSection}>
            <div className={styles.head}>
                <h6 style={{ marginBottom: 16 }}>Cowork Chronicles</h6>
                <div className={styles.titleBlock}>
                    <h2>Insights, Innovation, and</h2>
                    <span>
                        <Image
                            src="/insights-title.svg"
                            alt="Molekula"
                            width={180}
                            height={58}
                        />
                    </span>
                    <h2>Inspiration</h2>
                </div>
                <p className={styles.description}>
                    Stay updated on the latest trends in coworking, productivity
                    tips, and success stories that define the Cowork experience.
                </p>
            </div>

            <Recommendations />

            <Button
                text="View All"
                color="blue"
                style={{ marginTop: '16px' }}
            />
        </section>
    );
}
