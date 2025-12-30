'use client';

import styles from './login.module.css';
import { useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { signInWithCredentials, LoginState } from '@/actions/sign-in';
import { getSession } from 'next-auth/react';

const initialState: LoginState = {
    ok: false,
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
        >
            {pending ? 'Вход...' : 'Войти'}
        </button>
    );
}

export default function LoginForm() {
    const [state, formAction] = useActionState(
        signInWithCredentials,
        initialState
    );

    const router = useRouter();

    useEffect(() => {
        if (state.ok) {
            getSession();
            router.push('/');
        }
    }, [state.ok]);

    return (
        <form action={formAction}>
            <input
                name="email"
                type="email"
                placeholder="Email"
            />

            <input
                name="password"
                type="password"
                placeholder="Пароль"
            />

            <SubmitButton />
            {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

            {state.ok && <p style={{ color: 'green' }}>Вы вошли ✅</p>}
        </form>
    );
}
