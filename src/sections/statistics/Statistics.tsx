import Image from 'next/image';
import styles from './statistics.module.css';
import { stats } from '@/data/stats';

export default function Statistics() {
    return (
        <section className={styles.statisticsSection}>
            <div className={styles.statisticsBlock}>
                <div className={styles.info}>
                    <h6>Cowork in Numbers</h6>
                    <h2>Transformative Statistics That Speak Volumes</h2>
                </div>

                <div className={styles.statBlock}>
                    {stats.map((stat) => (
                        <div
                            className={styles.stat}
                            key={stat.id}
                        >
                            <h2 className={styles.procent}>{stat.procent}</h2>
                            <p className={styles.paragraph}>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Image
                src="/statistics-bg.jpg"
                alt="Office"
                width={640}
                height={595}
            />
        </section>
    );
}
