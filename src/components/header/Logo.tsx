'use client';

import styles from './header.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useNavigationStore } from '@/store/navigation.store';

export function Logo() {
    const router = useRouter();
    const { navigate } = useNavigationStore();
    
    return (
        <>
            <button
                type="button"
                className={styles.navLink}
                onClick={() => navigate(router, '/')}
            >
                <Image
                    className={styles.logo}
                    src="/logo.svg"
                    alt="Site logo"
                    width={120}
                    height={24}
                    priority
                />
            </button>
        </>
    );
}
