import Link from "next/link";
import Button from "../button/Button";
import styles from './header.module.css'
import { Navigation } from "./Navigation";

type DesktopMenuProps = {
    isAuth: boolean;
    status: 'loading' | 'authenticated' | 'unauthenticated';
    name?: string | null | undefined;
    onSignOut: () => void;
};

export function DesktopMenu({
    isAuth,
    status,
    name,
    onSignOut,
}: DesktopMenuProps) {
    return (
        <div className={styles.actions}>
            <Navigation />

            <div className={styles.AuthButtons}>
                {isAuth && <p>hello, {name}!</p>}

                {status === 'loading' && <p>Loading...</p>}

                {status !== 'loading' && !isAuth && (
                    <>
                        <Link href="/login">
                            <Button text="Log In" />
                        </Link>
                        <Link href="/register">
                            <Button text="Sign Up" color="blue" />
                        </Link>
                    </>
                )}

                {isAuth && status !== 'loading' && (
                    <Button
                        text="Log out"
                        color="blue"
                        onClick={onSignOut}
                    />
                )}
            </div>
        </div>
    );
}
