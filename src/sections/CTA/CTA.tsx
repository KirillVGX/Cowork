import Image from 'next/image';
import styles from './CTA.module.css';
import Button from '@/components/button/Button';

export default function CTA() {
    return (
        <section className={styles.CTAsection}>
            <div className={styles.titleBlock}>
                <h1>Seize</h1>
                <span className={styles.imageWrapper}>
                    <Image
                        src="/title-cta.svg"
                        alt="puzzle"
                        width={240}
                        height={96}
                        className={styles.image}
                    />
                </span>
                <h1>The Moment</h1>
                <h1>Join Cowork Today!</h1>
            </div>
            <p className={styles.description}>
                Uncover the transformative power of Cowork as echoed by those
                who've made it their professional haven. This is more than
                finding a desk; it's discovering a community that fuels your
                journey to success.
            </p>
            <Button
                text="Claim Your Spot"
                color="red"
                size="large"
            />
        </section>
    );
}
