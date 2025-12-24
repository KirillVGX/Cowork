import Image from 'next/image';
import styles from './hero.module.css';
import Button from '@/components/button/Button';

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.infoBlock}>
                <h1 className={styles.title}>
                    Elevate Your Workspace with{' '}
                    <span className={styles.coworkWrapper}>COWORK</span>
                </h1>

                <div className={styles.claim}>
                    <Button
                        text="Claim Your Spot"
                        color="red"
                        size="large"
                    />
                    <h4 className={styles.rocket}>
                        Where innovation meets collaboration 🚀
                    </h4>
                </div>
            </div>
            <div className={styles.img}>
                <Image
                    className={styles.logo}
                    src="/image.svg"
                    alt="Mens in cafe with laptop"
                    width={460}
                    height={642}
                />
            </div>
        </section>
    );
}
