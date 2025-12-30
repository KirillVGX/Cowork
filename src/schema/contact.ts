import { z } from 'zod';

export const contactSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),

    lastName: z.string().min(1, 'Last name is required'),

    email: z.string().min(1, 'Email is required').email('Invalid email'),

    phone: z.string().min(1, 'Phone is required'),

    plan: z
        .string()
        .min(1, 'Plan is required')
        .refine(
            (val) => ['HOT', 'DEDICATED', 'PRIVATE'].includes(val),
            'Invalid plan'
        ),

    message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
