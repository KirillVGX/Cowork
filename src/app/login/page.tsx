import { lazy, Suspense } from 'react';
import Reveal from '@/hoc/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Login = lazy(() => import('@/sections/login/Login'));

export default function LoginPage() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Login />
            </Reveal>
        </Suspense>
    );
}
