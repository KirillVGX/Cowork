import Image from 'next/image';
import styles from './footer.module.css';
import Button from '@/components/button/Button';
import { tags } from '@/data/tags';
import Input from '../formActions/input';

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.footerMain}>
                <div className={styles.newsletter}>
                    <Image
                        className={styles.logo}
                        src="/logo-dark.svg"
                        alt="Site logo"
                        width={120}
                        height={24}
                        priority
                    />
                    <small>
                        Join our newsletter to stay up to date on features and
                        releases.
                    </small>
                    <form
                        className={styles.form}
                        autoComplete="off"
                    >
                        <Input
                            type="email"
                            placeholder="Enter your email"
                        />
                        <Button text="Subscribe" />
                    </form>
                    <small>
                        By subscribing you agree to with our Privacy Policy and
                        provide consent to receive updates from our company.
                    </small>
                </div>

                <div className={styles.tagsContainer}>
                    {tags.map((section) => (
                        <div
                            className={styles.column}
                            key={section.title}
                        >
                            <h6 className={styles.title}>{section.title}</h6>

                            <ul className={styles.list}>
                                {section.links.map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            className={styles.link}
                                        >
                                            <small>{link.title}</small>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.copyrightBlock}>
                <small>© 2024 Cowork. All rights reserved.</small>
                <ul className={styles.privacy}>
                    <li>
                        <a
                            href="/"
                            className={styles.undelline}
                        >
                            <small>Privacy Policy</small>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={styles.undelline}
                        >
                            <small>Terms of Service</small>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={styles.undelline}
                        >
                            <small>Cookies Settings</small>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
