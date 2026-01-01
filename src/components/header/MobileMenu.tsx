import Image from 'next/image';
import ModalBody from './ModalBody';
import styles from './header.module.css';

import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type MobileMenuProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    status: 'loading' | 'authenticated' | 'unauthenticated';
    name?: string | null;
    onSignOut: () => void;
};

export function MobileMenu({
    isOpen,
    onOpen,
    onClose,
    status,
    name,
    onSignOut,
}: MobileMenuProps) {
    const { data: session, status: stat } = useSession();
    const router = useRouter();

    return (
        <>
            <button
                className={styles.burgerBtn}
                onClick={onOpen}
                aria-label="Open menu"
            >
                <Image
                    src="/burger-icon.svg"
                    alt="Navigation menu"
                    width={32}
                    height={32}
                    priority
                    className={styles.burgerIcon}
                />
            </button>

            <ModalBody
                isOpen={isOpen}
                onClose={onClose}
                status={stat}
                name={session?.user?.name}
                onSignOut={async () => {
                    await signOut({ redirect: false });
                    router.push('/login');
                }}
            />
        </>
    );
}
