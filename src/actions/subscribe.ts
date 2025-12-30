'use server';

import prisma from '@/utils/prisma';

export type EmailFooterState = {
    ok: boolean;
    submittedAt?: number;
    error?: string;
};

export async function emailFooterUser(
    prevState: EmailFooterState,
    formData: FormData
): Promise<EmailFooterState> {
    const emailFooter = formData.get('emailFooter') as string;

    if (!emailFooter) {
        return {
            ok: false,
            error: 'Все поля обязательны',
        };
    }

    const existingUser = await prisma.subscribe.findUnique({
        where: { email: emailFooter },
    });

    if (existingUser) {
        return {
            ok: false,
            error: 'User with such email is existing',
        };
    }

    await prisma.subscribe.create({
        data: {
            email: emailFooter.toLowerCase(),
        },
    });

    return {
        ok: true,
        submittedAt: Date.now(),
    };
}
