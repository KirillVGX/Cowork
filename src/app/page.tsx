import { lazy, Suspense } from 'react';
import Reveal from '@/hoc/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Hero = lazy(() => import('@/sections/hero/Hero'));
const Logotypes = lazy(() => import('@/sections/logotypes/Logotypes'));
const Advantages = lazy(() => import('@/sections/advantages/advantages'));
const Tour = lazy(() => import('@/sections/tour/Tour'));
const Statistics = lazy(() => import('@/sections/statistics/Statistics'));
const Reviews = lazy(() => import('@/sections/reviews/Reviews'));
const FAQ = lazy(() => import('@/sections/FAQ/FAQ'));
const CTA = lazy(() => import('@/sections/CTA/CTA'));
const Insights = lazy(() => import('@/sections/insights/Insights'));

export default function HomePage() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Hero />
            </Reveal>
            <Reveal>
                <Logotypes />
            </Reveal>
            <Reveal>
                <Advantages />
            </Reveal>
            <Reveal>
                <Tour />
            </Reveal>
            <Reveal>
                <Statistics />
            </Reveal>
            <Reveal>
                <Reviews />
            </Reveal>
            <Reveal>
                <FAQ />
            </Reveal>
            <Reveal>
                <CTA />
            </Reveal>
            <Reveal>
                <Insights />
            </Reveal>
        </Suspense>
    );
}
