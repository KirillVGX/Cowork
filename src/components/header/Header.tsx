'use client';

import Button from '@/components/button/Button';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/data/nav';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';
import Modal from '../modal/Modal';
import { signOutFunc } from '@/actions/sign-out';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth.store';

export default function Header() {
    const isTablet = useMediaQuery('(max-width: 768px)');
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const { isAuth, status, session, setAuthState } = useAuthStore();

    const HandleSignOut = async () => {
        try {
            await signOutFunc();
        } catch (error) {
            console.log('Error:', error);
        }
        setAuthState('unauthenticated', null);
        router.push('/login');
    };

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
                        {isAuth && <p>hello, {session?.user?.email}!</p>}
                        {status === 'loading' ? (
                            <p>Loading...</p>
                        ) : !isAuth ? (
                            <>
                                <Link href="/login">
                                    <Button text="Log In" />
                                </Link>
                                <Link href="/register">
                                    <Button
                                        text="Sign Up"
                                        color="blue"
                                    />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button
                                    text="Log out"
                                    color="blue"
                                    onClick={HandleSignOut}
                                />
                            </>
                        )}
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
                                <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                >
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
                                    <Link
                                        href={href}
                                        onClick={() => setIsOpen(false)}
                                    >
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
