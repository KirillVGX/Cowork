'use client';

import Image from 'next/image';
import styles from './tour.module.css';
import Button from '@/components/button/Button';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Tour() {
    const isTablet = useMediaQuery('(max-width: 1024px)');

    return (
        <section className={styles.tourSection}>
            <div className={styles.explore}>
                <div className={styles.titleBlock}>
                    <h1 className={styles.title}>Virtual</h1>
                    <h1 className={`${styles.title} ${styles.beforeEl}`}>
                        Tour
                    </h1>
                </div>

                <div className={styles.quoteAndBtn}>
                    <p className={styles.paragraph}>
                        Our immersive 📺 video tour gives you a sneak peek into
                        the vibrant atmosphere that define the Cowork
                        experience.
                    </p>
                    <Button
                        text="Explore Spaces"
                        color="null"
                        size="large"
                    />
                </div>
            </div>

            <div className={styles.videoBlock}>
                {!isTablet ? (
                    <Image
                        className={styles.preview}
                        src="/virtual-bg.jpg"
                        alt="Virtual tour video"
                        width={1488}
                        height={700}
                    />
                ) : (
                    <Image
                        className={styles.preview}
                        src="/virtual-bg-small.jpg"
                        alt="Virtual tour video"
                        width={1080}
                        height={720}
                        style={{ width: '100%', height: 'auto' }}
                    />
                )}
                <button className={styles.playBtn}>
                    <Image
                        src="/Play-Button.svg"
                        alt="Play button"
                        width={128}
                        height={103}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </button>
            </div>
        </section>
    );
}
