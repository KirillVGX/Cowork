import '@/styles/globals.css';
import '@/styles/normalize.css';
import '@/styles/fonts.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { SessionProvider } from 'next-auth/react';
import { AppLoader } from '@/hoc/app-loader';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Cowork</title>
            </head>
            <body>
                <SessionProvider>
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
