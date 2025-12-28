'use client';

import { useState } from 'react';

export default function RegisterPage() {
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
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    login: formData.get('login'),
                    password: formData.get('password'),
                    confirmPassword: formData.get('confirmPassword'),
                }),
            });

            const text = await res.text();
            const data = JSON.parse(text);

            if (!res.ok) {
                throw new Error(data.error || 'Ошибка регистрации');
            }

            setSuccess(true);
            form.reset(); 
        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Ошибка сети');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ padding: 24, maxWidth: 400 }}>
            <h1>Регистрация</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <input
                        name="login"
                        type="email"
                        placeholder="Email"
                        required
                    />
                </div>

                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        required
                    />
                </div>

                <div>
                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Повторите пароль"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Регистрация...' : 'Зарегистрироваться'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Успех 🎉</p>}
        </div>
    );
}
