'use server';

import { signIn } from '@/auth/auth';
import { AuthError } from 'next-auth';

export type LoginState = {
    ok: boolean;
    error?: string;
};

export async function signInWithCredentials(
    prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    try {
        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });

        return { ok: true };
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.type === 'CredentialsSignin') {
                return {
                    ok: false,
                    error: 'Неверный email или пароль',
                };
            }
        }

        console.error('Auth error:', error);

        return {
            ok: false,
            error: 'Ошибка авторизации',
        };
    }
}
