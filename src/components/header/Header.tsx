'use client';

import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import styles from './header.module.css';
import { DesktopMenu } from './DesktopMenu';
import { Logo } from './Logo';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MobileMenu } from './MobileMenu';
import { useState } from 'react';

export default function Header() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const isTablet = useMediaQuery('(max-width: 768px)');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className={styles.header}>
            <Logo />

            {!isTablet ? (
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
        </section>
    );
}
