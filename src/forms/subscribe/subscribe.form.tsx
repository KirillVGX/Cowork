'use client';

import Input from '@/components/formActions/input';
import styles from './subscribe.module.css';
import Button from '@/components/button/Button';
import { useActionState, useEffect, useState } from 'react';
import { emailFooterUser, EmailFooterState } from '@/actions/subscribe';
import Toast from '@/components/toast/Toast';

const initialState: EmailFooterState = {
    ok: false,
};

export default function SubscribeForm() {
    const [state, formAction] = useActionState(emailFooterUser, initialState);
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (!state.submittedAt) return;

        if (state.ok) {
            setEmail('');
            setShowToast(true);

            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [state.submittedAt]);

    return (
        <>
            <form
                className={styles.subscribe}
                action={formAction}
            >
                <Input
                    id="emailFooter"
                    name="emailFooter"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Button
                    text="Subscribe"
                    type="submit"
                />
            </form>
            <Toast
                show={showToast}
                text="Successfully subscribed 🎉"
            />
        </>
    );
}
