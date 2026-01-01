'use client';

import Button from '../button/Button';
import styles from './header.module.css';
import { Navigation } from './Navigation';
import { useRouter } from 'next/navigation';
import { useNavigationStore } from '@/store/navigation.store';

type DesktopMenuProps = {
    status: 'loading' | 'authenticated' | 'unauthenticated';
    name?: string | null;
    onSignOut: () => void;
};

export function DesktopMenu({ status, name, onSignOut }: DesktopMenuProps) {
    const router = useRouter();
    const { navigate } = useNavigationStore();

    return (
        <div className={styles.actions}>
            <Navigation />

            <div className={styles.AuthButtons}>
                {status === 'loading' && (
                    <div className={styles.loader}>
                        <div className={styles.spinner}></div>
                        Loading...
                    </div>
                )}

                {status === 'authenticated' && (
                    <>
                        <p className={styles.greeting}>{name}</p>
                        <Button
                            text="Log out"
                            color="blue"
                            onClick={onSignOut}
                        />
                    </>
                )}

                {status === 'unauthenticated' && (
                    <>
                        <Button
                            text="Log In"
                            type="button"
                            onClick={() => navigate(router, '/login')}
                        />

                        <Button
                            text="Sign Up"
                            color="blue"
                            type="button"
                            onClick={() => navigate(router, '/register')}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
