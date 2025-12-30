import Modal from '@/components/modal/Modal';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import { navItems } from '@/data/nav';
import Button from '@/components/button/Button';

type ModalBodyProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ModalBody({ isOpen, onClose }: ModalBodyProps) {
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
                    <Button text="Log In" />
                    <Button
                        text="Sign Up"
                        color="blue"
                    />
                </div>
            </div>
        </Modal>
    );
}
