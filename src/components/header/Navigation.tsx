import { navItems } from "@/data/nav";
import Link from "next/link";
import styles from './header.module.css'

export function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navMenu}>
                {navItems.map(({ href, label }) => (
                    <li key={href} className={styles.navItem}>
                        <Link href={href}>
                            <p>{label}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
