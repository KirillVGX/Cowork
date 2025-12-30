'use client';

import LoginForm from '@/forms/login/login.form';

export default function LoginPage() {
    return (
        <div style={{ padding: 24, maxWidth: 400 }}>
            <h1>Вход</h1>

            <LoginForm />
        </div>
    );
}
