import { lazy, Suspense } from 'react';
import Reveal from '@/hoc/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Register = lazy(() => import('@/sections/register/Register'));

export default function RegisterPage() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Register />
            </Reveal>
        </Suspense>
    );
}
