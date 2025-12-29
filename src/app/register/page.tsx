'use client';

import * as React from 'react';
import { useFormStatus } from 'react-dom';
import { registerUser, RegisterState } from '@/actions/register';

const initialState: RegisterState = {
    ok: false,
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Регистрация...' : 'Зарегистрироваться'}
        </button>
    );
}

export default function RegisterPage() {
    const [state, formAction] = React.useActionState(
        registerUser,
        initialState
    );

    return (
        <div style={{ padding: 24, maxWidth: 400 }}>
            <h1>Регистрация</h1>

            <form action={formAction}>
                <input
                    name="login"
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

                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Повторите пароль"
                    required
                />

                <SubmitButton />
            </form>

            {state.error && (
                <p style={{ color: 'red' }}>{state.error}</p>
            )}

            {state.ok && (
                <p style={{ color: 'green' }}>Успех 🎉</p>
            )}
        </div>
    );
}
