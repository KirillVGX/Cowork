import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css';

export function Logo() {
    return (
        <Link href="/">
            <Image
                className={styles.logo}
                src="/logo.svg"
                alt="Site logo"
                width={120}
                height={24}
                priority
            />
        </Link>
    );
}
