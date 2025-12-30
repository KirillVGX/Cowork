import { z } from 'zod';

export const subscribeSchema = z.object({
    emailFooter: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email'),
});

export type SubscribeFormData = z.infer<typeof subscribeSchema>;
