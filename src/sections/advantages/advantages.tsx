import Image from 'next/image';
import styles from './advantages.module.css';
import { advantages } from '@/data/advantages';

export default function Advantages() {
    return (
        <section className={styles.advantagesSection}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Why Choose</h2>
                <span>
                    <Image
                        src="/advantages/title.jpg"
                        alt="railway"
                        width={180}
                        height={58}
                        className={styles.image}
                    />
                </span>
                <h2 className={styles.title}>Cowork?</h2>
            </div>

            <div className={styles.advantages}>
                {advantages.map((item) => (
                    <div
                        className={styles.advantage}
                        key={item.id}
                    >
                        <Image
                            className={styles.svg}
                            src={item.src}
                            alt={item.alt}
                            width={48}
                            height={48}
                        />
                        <h3 className={styles.advantageTitle}>{item.title}</h3>
                        <p className={styles.advantageInfo}>{item.info}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
