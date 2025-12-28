export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function POST(req: Request) {
    try {
        const { login, password } = await req.json();

        if (!login || !password) {
            return NextResponse.json(
                { error: 'Email и пароль обязательны' },
                { status: 400 }
            );
        }

        const user = await prisma.user.findUnique({
            where: { email: login },
        });

        if (!user) {
            return NextResponse.json(
                { error: 'Неверный email или пароль' },
                { status: 401 }
            );
        }

        if (user.password !== password) {
            return NextResponse.json(
                { error: 'Неверный email или пароль' },
                { status: 401 }
            );
        }

        // ⚠️ пока без сессий и JWT
        return NextResponse.json({
            ok: true,
            user: {
                id: user.id,
                email: user.email,
            },
        });
    } catch (error) {
        console.error('LOGIN ERROR:', error);

        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}
