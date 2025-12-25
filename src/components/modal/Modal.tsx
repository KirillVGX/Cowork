import type { ReactNode, CSSProperties  } from 'react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import styles from './modal.module.css';
import Image from 'next/image';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    color?: CSSProperties;
};

export default function Modal({ isOpen, onClose, children, color }: ModalProps) {
    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
            style={color}
        >
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <Image
                        src="./close-button.svg"
                        alt="close menu"
                        width={32}
                        height={32}
                    />
                </button>

                {children}
            </div>
        </div>
    );
}
