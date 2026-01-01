'use client';

import styles from './header.module.css';
import { DesktopMenu } from './DesktopMenu';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import Toast from '../toast/Toast';

import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useNavigationStore } from '@/store/navigation.store';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';

export default function Header() {
    const { data: session, status } = useSession();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const router = useRouter();
    const { redirectToast } = useNavigationStore();

    return (
        <section className={styles.header}>
            <Logo />

            {!isMobile ? (
                <DesktopMenu
                    status={status}
                    name={session?.user?.name}
                    onSignOut={async () => {
                        await signOut({ redirect: false });
                        router.push('/login');
                    }}
                />
            ) : (
                <MobileMenu
                    isOpen={isMenuOpen}
                    onOpen={() => setIsMenuOpen(true)}
                    onClose={() => setIsMenuOpen(false)}
                    status={status}
                    name={session?.user?.name}
                    onSignOut={async () => {
                        await signOut({ redirect: false });
                        router.push('/login');
                    }}
                />
            )}
            <Toast
                show={redirectToast}
                text="Loading page…"
                variant="loading"
            />
        </section>
    );
}
