'use client';

import styles from './header.module.css';
import { navItems } from '@/data/nav';
import Toast from '@/components/toast/Toast';
import { useRouter } from 'next/navigation';
import { useNavigationStore } from '@/store/navigation.store';

export function Navigation() {
    const router = useRouter();
    const { navigate, redirectToast } = useNavigationStore();

    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.navMenu}>
                    {navItems.map(({ href, label }) => (
                        <li key={href} className={styles.navItem}>
                            <button
                                type="button"
                                className={styles.navLink}
                                onClick={() => navigate(router, href)}
                            >
                                <p>{label}</p>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <Toast
                show={redirectToast}
                text="Loading page…"
                variant="loading"
            />
        </>
    );
}
