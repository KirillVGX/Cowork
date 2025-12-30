'use server';

import { saltAndHashPassword } from '@/utils/password';
import prisma from '@/utils/prisma';

export type RegisterState = {
    ok: boolean;
    error?: string;
    fields?: {
        name?: string;
        login?: string;
        password: string;
        confirmPassword: string;
    };
};

export async function registerUser(
    prevState: RegisterState,
    formData: FormData
): Promise<RegisterState> {
    const name = formData.get('name') as string;
    const login = formData.get('login') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!name || !login || !password || !confirmPassword) {
        return {
            ok: false,
            error: 'All fields are required',
            fields: { name, login, password, confirmPassword },
        };
    }

    if (password !== confirmPassword) {
        return {
            ok: false,
            error: 'Passwords do not match',
            fields: { name, login, password, confirmPassword },
        };
    }

    if (password.length < 8) {
        return {
            ok: false,
            error: 'Password must be at least 8 characters',
            fields: { name, login, password, confirmPassword },
        };
    }

    const existingUser = await prisma.user.findUnique({
        where: { email: login },
    });

    if (existingUser) {
        return {
            ok: false,
            error: 'User with this email already exists',
            fields: { name, login, password, confirmPassword },
        };
    }

    const pwHash = await saltAndHashPassword(password);

    await prisma.user.create({
        data: {
            name,
            email: login.toLowerCase(),
            password: pwHash,
        },
    });

    return { ok: true };
}

