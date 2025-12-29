'use client';

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

export default function LoginPage() {
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
        <div style={{ padding: 24, maxWidth: 400 }}>
            <h1>Вход</h1>

            <form action={formAction}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    required
                />

                <SubmitButton />
            </form>

            {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

            {state.ok && <p style={{ color: 'green' }}>Вы вошли ✅</p>}
        </div>
    );
}
