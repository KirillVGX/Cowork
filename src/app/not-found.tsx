'use client';

import Button from '@/components/button/Button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div
            style={{
                minHeight: '33vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 16,
                textAlign: 'center',
            }}
        >
            <h1>404</h1>
            <p>Page not found</p>

            <Link href="/">
                <Button
                    text="Go Home"
                    color="blue"
                    size="large"
                />
            </Link>
        </div>
    );
}
