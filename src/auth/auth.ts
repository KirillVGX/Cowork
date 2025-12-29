import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { ZodError } from 'zod';
import { signInSchema } from '@/schema/zod';
import { getUserFromDb } from '@/utils/user';
import { prisma } from '@/utils/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const { email, password } = signInSchema.parse(credentials);

                    const user = await getUserFromDb(email.toLowerCase());
                    if (!user || !user.password) return null;

                    const isValid = await bcrypt.compare(
                        password,
                        user.password
                    );
                    if (!isValid) return null;

                    return {
                        id: user.id,
                        email: user.email,
                        name: user.email,
                    };
                } catch (error) {
                    if (error instanceof ZodError) return null;
                    throw error;
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 3600,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
    },
});
