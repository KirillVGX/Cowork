'use server';

import { signIn } from '@/auth/auth';
import { AuthError } from 'next-auth';
import { signInSchema } from '@/schema/login';

export type LoginState = {
    ok: boolean;
    error?: string;
};

export async function signInWithCredentials(
    prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    const rawData = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    const parsed = signInSchema.safeParse(rawData);

    if (!parsed.success) {
        return {
            ok: false,
            error: 'Некорректные данные',
        };
    }

    try {
        await signIn('credentials', {
            email: parsed.data.email,
            password: parsed.data.password,
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
