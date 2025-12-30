'use server';

import prisma from '@/utils/prisma';
import { Plan } from '@prisma/client';
import { contactSchema } from '@/schema/contact';

export type ContactState = {
    ok: boolean;
    submittedAt?: number;
    error?: string;
};

export async function ContactUser(
    prevState: ContactState,
    formData: FormData
): Promise<ContactState> {
    const rawData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        plan: formData.get('plan'),
        message: formData.get('message'),
    };

    const parsed = contactSchema.safeParse(rawData);

    if (!parsed.success) {
        return {
            ok: false,
            error: 'Некорректные данные',
        };
    }

    const { firstName, lastName, email, phone, plan, message } = parsed.data;

    await prisma.contactUs.create({
        data: {
            firstName,
            lastName,
            email: email.toLowerCase(),
            phone,
            plan: plan as Plan,
            message: message || null,
        },
    });

    return {
        ok: true,
        submittedAt: Date.now(),
    };
}
