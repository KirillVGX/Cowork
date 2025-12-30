import styles from './register.module.css';
import RegisterForm from '@/forms/register/register.form';

export default function Register() {
    return (
        <section className={styles.page}>
            <h1 className={styles.title}>Sign Up</h1>

            <RegisterForm />
        </section>
    );
}
