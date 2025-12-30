import LoginForm from '@/forms/login/login.form';
import styles from './login.module.css';

export default function Login() {
    return (
        <section className={styles.page}>
            <h1 className={styles.title}>Sign In</h1>

            <LoginForm />
        </section>
    );
}
