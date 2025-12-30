'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './header.module.css';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { signOutFunc } from '@/actions/sign-out';
import { useAuthStore } from '@/store/auth.store';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';

export default function Header() {
    const isTablet = useMediaQuery('(max-width: 768px)');
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const { isAuth, status, session, setAuthState } = useAuthStore();

    const handleSignOut = async () => {
        try {
            await signOutFunc();
            setAuthState('unauthenticated', null);
            router.push('/login');
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };

    const closeModal = () => setIsOpen(false);

    console.log(session?.user);

    return (
        <section className={styles.header}>
            <Logo />

            {isTablet ? (
                <MobileMenu
                    isOpen={isOpen}
                    onOpen={() => setIsOpen(true)}
                    onClose={closeModal}
                />
            ) : (
                <DesktopMenu
                    isAuth={isAuth}
                    status={status}
                    name={session?.user?.name}
                    onSignOut={handleSignOut}
                />
            )}
        </section>
    );
}
