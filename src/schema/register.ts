import { z } from 'zod';

export const registerSchema = z
    .object({
        name: z.string().min(2, 'Имя слишком короткое'),
        login: z.string().email('Некорректный email'),
        password: z
            .string()
            .min(8, 'Минимум 8 символов')
            .max(32, 'Максимум 32 символа'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Пароли не совпадают',
        path: ['confirmPassword'],
    });

export type RegisterFormData = z.infer<typeof registerSchema>;
