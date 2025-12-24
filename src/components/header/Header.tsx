import Button from '@/components/button/Button';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/data/nav';

export default function Header() {
    return (
        <section className={styles.header}>
            <Link href="/">
                <Image
                    className={styles.logo}
                    src="/logo.svg"
                    alt="Site logo"
                    width={120}
                    height={24}
                    priority
                />
            </Link>

            <div className={styles.actions}>
                <nav className={styles.nav}>
                    <ul className={styles.navMenu}>
                        {navItems.map(({ href, label }) => (
                            <li
                                key={href}
                                className={styles.navItem}
                            >
                                <Link href={href}>
                                    <p>{label}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.AuthButtons}>
                    <Button text="Log In" />
                    <Button
                        text="Sign Up"
                        color="blue"
                    />
                </div>
            </div>
        </section>
    );
}
