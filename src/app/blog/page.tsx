'use client';

import { lazy, Suspense, useState } from 'react';
import Reveal from '@/hoc/reveal/Reveal';
import Loader from '@/components/loader/Loader';
import CatalogModal from '@/sections/catalogModal/CatalogModal';

const Catalog = lazy(() => import('@/sections/catalog/Catalog'));
const CTA = lazy(() => import('@/sections/CTA/CTA'));
const RecentPost = lazy(() => import('@/sections/recent-post/RecentPost'));

import { categories } from '@/data/categories';
type Category = (typeof categories)[number];

export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<Category>('All');

    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <RecentPost />
            </Reveal>
            <Reveal>
                <Catalog
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    onOpenFilter={() => setIsOpen(true)}
                />
            </Reveal>
            <Reveal>
                <CTA />
            </Reveal>
            <CatalogModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
        </Suspense>
    );
}
