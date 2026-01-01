import Image from 'next/image';
import styles from './logotypes.module.css';
import { logotypes } from '@/data/logotypes';

export default function Logotypes() {
    return (
        <section className={styles.logotypes}>
            <h6>Trusted by Leading Companies</h6>

            <div className={styles.logosContainer}>
                {logotypes.map((logo) => (
                    <Image
                        key={logo.id}
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className={styles.logo}
                    />
                ))}
            </div>
        </section>
    );
}
