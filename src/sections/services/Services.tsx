import Image from 'next/image';
import styles from './services.module.css';
import { services } from '@/data/services';
import Button from '@/components/button/Button';

export default function Services() {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.titleBlock}>
                <h2 className={styles.color}>Add-ons</h2>
                <span>
                    <Image
                src="/servicer-title.svg"
                alt="Nothing"
                className={styles.titleImg}
                width={180}
                height={58}
            />
                </span>
                <h2 className={styles.color}>Services</h2>
            </div>

            <div className={styles.services}>
                {services.map((item) => (
                    <div className={styles.card}>
                        <h3>{item.title}</h3>
                        <p style={{marginBottom: 24}}>{item.info}</p>
                        <h2>${item.price}</h2>
                        <h6 className={styles.description}>{item.description}</h6>
                        <Button text='Add to Your Subscription' color='blue' style={{ width: '100%', marginBottom: 12 }} />
                        <h6 className={styles.quote}>{item.quote}</h6>
                    </div>
                ))}
            </div>
        </section>
    );
}
