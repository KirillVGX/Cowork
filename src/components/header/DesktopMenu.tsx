'use client';

import Link from 'next/link';
import Button from '../button/Button';
import styles from './header.module.css';
import { Navigation } from './Navigation';

type DesktopMenuProps = {
    status: 'loading' | 'authenticated' | 'unauthenticated';
    name?: string | null;
    onSignOut: () => void;
};

export function DesktopMenu({
    status,
    name,
    onSignOut,
}: DesktopMenuProps) {
    return (
        <div className={styles.actions}>
            <Navigation />

            <div className={styles.AuthButtons}>
                {status === 'loading' && <p>Loading...</p>}

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
                        <Link href="/login">
                            <Button text="Log In" />
                        </Link>
                        <Link href="/register">
                            <Button text="Sign Up" color="blue" />
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
