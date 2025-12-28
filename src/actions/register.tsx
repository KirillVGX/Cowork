'use server';
export const runtime = 'nodejs';

import prisma from '@/utils/prisma';

export type RegisterState = {
    ok: boolean;
    error?: string;
};

export async function registerUser(
    prevState: RegisterState,
    formData: FormData
): Promise<RegisterState> {
    console.log('registerUser called');

    const login = formData.get('login') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    // Валидация
    if (!login || !password || !confirmPassword) {
        return { ok: false, error: 'Все поля обязательны' };
    }

    if (password !== confirmPassword) {
        return { ok: false, error: 'Пароли не совпадают' };
    }

    if (password.length < 6) {
        return { ok: false, error: 'Пароль должен быть минимум 6 символов' };
    }

    try {
        // Создаём пользователя
        await prisma.user.create({
            data: {
                email: login,
                password, // Без хеширования пока
            },
        });

        console.log('User created:', login);
        return { ok: true };
    } catch (error: any) {
        console.error('Registration error:', error);

        // Проверяем дубликат email
        if (error.code === 'P2002') {
            return {
                ok: false,
                error: 'Пользователь с таким email уже существует',
            };
        }

        return { ok: false, error: 'Ошибка регистрации. Попробуйте позже.' };
    }
}
