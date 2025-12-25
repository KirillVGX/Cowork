'use client';

import Button from '@/components/button/Button';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/data/nav';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';
import Modal from '../modal/Modal';

export default function Header() {
    const isTablet = useMediaQuery('(max-width: 768px)');
    const [isOpen, setIsOpen] = useState(false);

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

            {!isTablet ? (
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
            ) : (
                <>
                    <button
                        className={styles.burgerBtn}
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <Image
                            src="/burger-icon.svg"
                            alt="Navigation menu"
                            width={32}
                            height={32}
                            priority
                            className={styles.burgerIcon}
                        />
                    </button>
                </>
            )}

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <div className={styles.actions}>
                    <nav className={styles.nav}>
                        <ul className={styles.navMenu}>
                            <li
                                className={styles.navItem}
                                style={{ marginBlock: '32px 18px' }}
                            >
                                <Link href="/">
                                    <Image
                                        className={styles.logo}
                                        src="/logo-light.svg"
                                        alt="Site logo"
                                        width={99}
                                        height={20}
                                    />
                                </Link>
                            </li>
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
            </Modal>
        </section>
    );
}
