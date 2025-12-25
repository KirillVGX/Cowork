'use client'

import Image from 'next/image';
import styles from './hero.module.css';
import Button from '@/components/button/Button';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Hero() {
    const isTablet = useMediaQuery('(max-width: 768px)');
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
                {!isTablet ? (
                    <Image
                        className={styles.backImage}
                        src="/image.svg"
                        alt="Mens in cafe with laptop"
                        width={460}
                        height={642}
                    />
                ) : (
                    <Image
                        src="/Image-small.jpg"
                        alt="Mens in cafe with laptop"
                        width={360}
                        height={260}
                        
                    />
                )}
            </div>
        </section>
    );
}
