export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function POST(req: Request) {
    try {
        const { login, name, password, confirmPassword } = await req.json();

        await prisma.user.create({
            data: {
                name,
                email: login,
                password,
            },
        });

        return NextResponse.json({ ok: true });
    } catch (error: any) {
        console.error('REGISTER ERROR:', error);

        return NextResponse.json(
            { ok: false, error: 'Ошибка сервера' },
            { status: 500 }
        );
    }
}
