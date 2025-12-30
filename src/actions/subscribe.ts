'use server';

import prisma from '@/utils/prisma';
import { subscribeSchema } from '@/schema/subscribe';

export type EmailFooterState = {
    ok: boolean;
    submittedAt?: number;
    error?: string;
};

export async function emailFooterUser(
    prevState: EmailFooterState,
    formData: FormData
): Promise<EmailFooterState> {
    const rawData = {
        emailFooter: formData.get('emailFooter'),
    };

    const parsed = subscribeSchema.safeParse(rawData);

    if (!parsed.success) {
        return {
            ok: false,
            error: 'Invalid email',
        };
    }

    const email = parsed.data.emailFooter.toLowerCase();

    const existingUser = await prisma.subscribe.findUnique({
        where: { email },
    });

    if (existingUser) {
        return {
            ok: false,
            error: 'User with such email already exists',
        };
    }

    await prisma.subscribe.create({
        data: { email },
    });

    return {
        ok: true,
        submittedAt: Date.now(),
    };
}
