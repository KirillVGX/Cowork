'use client';

import styles from './login.module.css';
import { Formik, Form, Field } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { signInSchema, SignInFormData } from '@/schema/login';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Toast from '@/components/toast/Toast';
import Button from '@/components/button/Button';

const initialValues: SignInFormData = {
    email: '',
    password: '',
};

export default function LoginForm() {
    const router = useRouter();
    const [successToast, setSuccessToast] = useState(false);
    const [redirectToast, setRedirectToast] = useState(false);
    const [errorToast, setErrorToast] = useState(false);

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={toFormikValidationSchema(signInSchema)}
                onSubmit={async (values, { setSubmitting }) => {
                    const res = await signIn('credentials', {
                        email: values.email,
                        password: values.password,
                        redirect: false,
                    });

                    setSubmitting(false);

                    if (res?.ok) {
                        setSuccessToast(true);

                        setTimeout(() => {
                            setSuccessToast(false);
                            setRedirectToast(true);
                        }, 1200);

                        setTimeout(() => {
                            setRedirectToast(false);
                            router.push('/');
                        }, 2500);
                    } else {
                        setErrorToast(true);

                        setTimeout(() => {
                            setErrorToast(false);
                        }, 3000);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.login}>
                        <Field
                            name="email"
                            placeholder="Email"
                            className={styles.input}
                        />
                        <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                        />

                        <Button
                            type="submit"
                            text="Log In"
                            color="blue"
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>

            <Toast
                show={successToast}
                text="Login successful 👋"
                variant="success"
            />

            <Toast
                show={redirectToast}
                text="Redirecting to the homepage…"
                variant="loading"
            />

            <Toast
                show={errorToast}
                text="Invalid email or password"
                variant="error"
            />
        </>
    );
}
