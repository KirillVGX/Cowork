import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/normalize.css';
import '@/styles/fonts.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth/auth';
import { AppLoader } from '@/hoc/app-loader';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <html lang="en">
            <head>
                <title>Cowork</title>
            </head>
            <body>
                <SessionProvider session={session}>
                    <AppLoader>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </AppLoader>
                </SessionProvider>
            </body>
        </html>
    );
}
