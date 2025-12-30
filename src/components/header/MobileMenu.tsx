import Image from "next/image";
import ModalBody from "./ModalBody";
import styles from './header.module.css'

type MobileMenuProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export function MobileMenu({ isOpen, onOpen, onClose }: MobileMenuProps) {
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
            />
        </>
    );
}
