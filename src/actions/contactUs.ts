'use server';

import prisma from '@/utils/prisma';
import { Plan } from '@prisma/client';

export type ContactState = {
    ok: boolean;
    error?: string;
};

export async function ContactUser(
    prevState: ContactState,
    formData: FormData
): Promise<ContactState> {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string | null;

    const PLANS = ['HOT', 'DEDICATED', 'PRIVATE'] as const;
    type PlanValue = (typeof PLANS)[number];

    const planValue = formData.get('plan');

    if (!planValue || !PLANS.includes(planValue as PlanValue)) {
        return { ok: false, error: 'Неверный тариф' };
    }

    const plan = planValue as Plan;

    if (!firstName || !lastName || !email || !phone || !plan) {
        return {
            ok: false,
            error: 'Заполните все обязательные поля',
        };
    }

    await prisma.contactUs.create({
        data: {
            firstName,
            lastName,
            email: email.toLowerCase(),
            phone,
            plan,
            message: message || null,
        },
    });

    return { ok: true };
}
