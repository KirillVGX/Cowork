'use client';

import Modal from '@/components/modal/Modal';
import styles from './catalogModal.module.css';
import { categories } from '@/data/categories';

type Category = (typeof categories)[number];

type CatalogModalProps = {
    isOpen: boolean;
    onClose: () => void;
    activeCategory: Category;
    setActiveCategory: (category: Category) => void;
};

export default function CatalogModal({
    isOpen,
    onClose,
    activeCategory,
    setActiveCategory,
}: CatalogModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            color={{ backgroundColor: '#FFF' }}
            isLight
        >
            <div className={styles.modalCategories}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.modalButton} ${
                            activeCategory === category ? styles.active : ''
                        }`}
                        onClick={() => {
                            setActiveCategory(category);
                            onClose();
                        }}
                    >
                        {category === 'All' ? 'All Posts' : category}
                    </button>
                ))}
            </div>
        </Modal>
    );
}
