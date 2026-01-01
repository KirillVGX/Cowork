import { lazy, Suspense } from 'react';
import Reveal from '@/hoc/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Contact = lazy(() => import('@/sections/contact/Contact'));

export default function About() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Contact />
            </Reveal>
        </Suspense>
    );
}
