'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;

        setLoading(true);
        setError(null);
        setSuccess(false);

        const formData = new FormData(form);

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    login: formData.get('login'),
                    password: formData.get('password'),
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Ошибка входа');
            }

            setSuccess(true);
            form.reset();
        } catch (err: any) {
            setError(err.message || 'Ошибка сети');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ padding: 24, maxWidth: 400 }}>
            <h1>Вход</h1>

            <form onSubmit={onSubmit}>
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

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Вход...' : 'Войти'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Успешный вход 🎉</p>}
        </div>
    );
}
