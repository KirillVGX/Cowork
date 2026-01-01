import Modal from '@/components/modal/Modal';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import { navItems } from '@/data/nav';
import Button from '@/components/button/Button';

type ModalBodyProps = {
    isOpen: boolean;
    status: 'loading' | 'authenticated' | 'unauthenticated';
    name?: string | null;
    onClose: () => void;
    onSignOut: () => void;
};

export default function ModalBody({
    isOpen,
    onClose,
    status,
    name,
    onSignOut,
}: ModalBodyProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
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
                                onClick={onClose}
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
                                    onClick={onClose}
                                >
                                    <p>{label}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

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
                                <Button
                                    text="Log In"
                                    onClick={onClose}
                                />
                            </Link>
                            <Link href="/register">
                                <Button
                                    text="Sign Up"
                                    color="blue"
                                    onClick={onClose}
                                />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </Modal>
    );
}
