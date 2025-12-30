'use client';

import styles from './register.module.css';
import { useFormStatus } from 'react-dom';
import { registerUser, RegisterState } from '@/actions/register';
import { useActionState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const initialState: RegisterState = {
    ok: false,
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
        >
            {pending ? 'Регистрация...' : 'Зарегистрироваться'}
        </button>
    );
}

export default function RegisterForm() {
    const [state, formAction] = useActionState(registerUser, initialState);

    const router = useRouter();
    useEffect(() => {
        if (state.ok) {
            getSession();
            router.push('/login');
        }
    }, [state.ok]);
    return (
        <form
            className={styles.register}
            action={formAction}
        >
            <input
                name="login"
                type="email"
                placeholder="Email"
                defaultValue={state.fields?.login ?? ''}
            />

            <input
                name="password"
                type="password"
                placeholder="Пароль"
                defaultValue={state.fields?.password ?? ''}
            />

            <input
                name="confirmPassword"
                type="password"
                placeholder="Повторите пароль"
                defaultValue={state.fields?.confirmPassword ?? ''}
            />

            <SubmitButton />

            {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

            {state.ok && <p style={{ color: 'green' }}>Успех 🎉</p>}
        </form>
    );
}
