import { lazy, Suspense } from 'react';
import Reveal from '@/hoc/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Plans = lazy(() => import('@/sections/plans/Plans'));
const Services = lazy(() => import('@/sections/services/Services'));

export default function About() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Plans />
            </Reveal>
            <Reveal>
                <Services />
            </Reveal>
        </Suspense>
    );
}
