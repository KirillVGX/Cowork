'use client';

import styles from './hero.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useNavigationStore } from '@/store/navigation.store';
import { useRouter } from 'next/navigation';

export default function Hero() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const router = useRouter();
    const { navigate } = useNavigationStore();

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
                        type="button"
                        onClick={() => navigate(router, '/pricing')}
                    />
                    <h4 className={styles.rocket}>
                        Where innovation meets collaboration 🚀
                    </h4>
                </div>
            </div>
            <div className={styles.img}>
                {!isMobile ? (
                    <Image
                        src="/image.jpg"
                        alt="Mens in cafe with laptop"
                        width={460}
                        height={642}
                        priority
                        className={styles.backImage}
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
