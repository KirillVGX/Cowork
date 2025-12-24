import { plans } from '@/data/plans';
import styles from './plans.module.css';
import Button from '@/components/button/Button';

export default function Plans() {
    return (
        <section className={styles.plansSection}>
            <div className={styles.pricing}>
                <div className={styles.titleBlock}>
                    <h1 className={styles.title}>Membership</h1>
                    <h1 className={`${styles.title} ${styles.beforeEl}`}>
                        Pricing
                    </h1>
                </div>

                <p style={{ maxWidth: 320 }}>
                    Invest in spaces that drives your business. Clear,
                    straightforward and tailored to your needs.
                </p>
            </div>

            <div className={styles.plans}>
                {plans.map((plan) => (
                    <div
                        className={styles.plan}
                        key={plan.price}
                    >
                        <div className={styles.title}>
                            <h3 className={styles.name}>{plan.name}</h3>
                            {plan.popular && (
                                <span className={styles.popular}>popular</span>
                            )}
                        </div>
                        <p style={{ marginBottom: 32 }}>{plan.info}</p>
                        {plan.start && (
                            <p style={{ marginBottom: 8 }}>{plan.start}</p>
                        )}
                        <div className={styles.priceContainer}>
                            <h1 className={styles.num}>${plan.price}</h1>
                            <h2 className={styles.month}>month</h2>
                        </div>
                        <small style={{ marginBottom: 32 }}>
                            Pause or cancel anytime
                        </small>
                        {plan.features.map((feature, index) => (
                            <li
                                key={index}
                                className={styles.feature}
                            >
                                <p>{feature}</p>
                            </li>
                        ))}
                        <h6 className={styles.bonusTitle}>Bonus</h6>
                        <ul className={styles.bonuses}>
                            {plan.bonuses.map((bonus, index) => (
                                <li key={index}>
                                    <small>{bonus}</small>
                                </li>
                            ))}
                        </ul>
                        <Button
                            text="Subscribe Now"
                            color="blue"
                            style={{ width: '100%' }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
