import { lazy, Suspense } from 'react';
import Reveal from '@/hoc/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Our = lazy(() => import('@/sections/about/Our'));
const CTA = lazy(() => import('@/sections/CTA/CTA'));
const FAQ = lazy(() => import('@/sections/FAQ/FAQ'));

export default function About() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Our />
            </Reveal>
            <Reveal>
                <FAQ />
            </Reveal>
            <Reveal>
                <CTA />
            </Reveal>
        </Suspense>
    );
}
