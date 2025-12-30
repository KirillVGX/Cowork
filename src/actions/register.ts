'use server';

import { saltAndHashPassword } from '@/utils/password';
import prisma from '@/utils/prisma';

export type RegisterState = {
    ok: boolean;
    error?: string;
    fields?: {
        login?: string;
        password: string;
        confirmPassword: string;
    };
};

export async function registerUser(
    prevState: RegisterState,
    formData: FormData
): Promise<RegisterState> {
    const login = formData.get('login') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!login || !password || !confirmPassword) {
        return {
            ok: false,
            error: 'Все поля обязательны',
            fields: { login, password, confirmPassword },
        };
    }

    if (password !== confirmPassword) {
        return {
            ok: false,
            error: 'Пароли не совпадают',
            fields: { login, password, confirmPassword },
        };
    }

    if (password.length < 8) {
        return {
            ok: false,
            error: 'Пароль должен быть минимум 8 символов',
            fields: { login, password, confirmPassword },
        };
    }

    const existingUser = await prisma.user.findUnique({
        where: { email: login },
    });

    if (existingUser) {
        return {
            ok: false,
            error: 'User with such email is existing',
            fields: { login, password, confirmPassword },
        };
    }

    const pwHash = await saltAndHashPassword(password);

    await prisma.user.create({
        data: {
            email: login.toLowerCase(),
            password: pwHash,
        },
    });

    return { ok: true };
}
