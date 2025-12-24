import Image from 'next/image';
import styles from './our.module.css';

export default function Our() {
    return (
        <section className={styles.ourSection}>
            <div className={styles.head}>
                <div className={styles.titleBlock}>
                    <h1 className={styles.title}>About Our</h1>
                    <h1 className={styles.title}>Coworking</h1>
                    <h1 className={`${styles.title} ${styles.beforeEl}`}>
                        Space
                    </h1>
                </div>

                <p>
                    We're on a mission to reshape how people work and create by
                    providing elevated coworking experiences.
                </p>
            </div>

            <div className={styles.advantages}>
                <div
                    className={styles.card}
                    style={{ flex: 2 }}
                >
                    <Image
                        src="/our/1.jpg"
                        alt="Background image"
                        width={600}
                        height={240}
                        className={styles.image}
                    />
                    <h3 className={styles.name}>Our Story</h3>
                    <p className={styles.description}>
                        Cowork was founded in 2023 by Jensen Turner who saw an
                        unmet need for dynamic, design-focused coworking spaces
                        that foster connection and productivity. What started as
                        a modest shared office has grown into Delaware premier
                        coworking destination serving freelancers, startups,
                        remote teams and more.
                    </p>
                    <h4 className={styles.num}>1</h4>
                </div>
                <div
                    className={styles.card}
                    style={{ backgroundColor: 'hsla(238, 96%, 59%, 1)' }}
                >
                    <Image
                        src="/our/2.jpg"
                        alt="Background image"
                        width={260}
                        height={240}
                        className={styles.image}
                    />
                    <h3 className={styles.name}>Our Spaces</h3>
                    <p className={styles.tap}>Tap to expand</p>
                    <h4 className={styles.num}>2</h4>
                </div>
                <div className={styles.card}>
                    <Image
                        src="/our/3.jpg"
                        alt="Background image"
                        width={260}
                        height={240}
                        className={styles.image}
                    />
                    <h3 className={styles.name}>Our Community</h3>
                    <p className={styles.tap}>Tap to expand</p>
                    <h4 className={styles.num}>3</h4>
                </div>
            </div>
        </section>
    );
}
