'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    <li>
                        <Link
                            href="/"
                            className={`${styles.link} ${
                                pathname === '/' ? styles.activeLink : ''
                            }`}
                        >
                            {'home'}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/guestbook"
                            className={`${styles.link} ${
                                pathname === '/guestbook' ? styles.activeLink : ''
                            }`}
                        >
                            {'guestbook'}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
