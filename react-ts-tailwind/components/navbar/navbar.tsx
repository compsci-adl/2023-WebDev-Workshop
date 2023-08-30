'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="w-[min(50rem,80vw)]">
            <nav className="pt-16">
                <ul className="flex flex-row gap-8">
                    <li>
                        <Link
                            href="/"
                            className={`text-xl font-light text-neutral-200 transition-opacity duration-200 ease-linear hover:opacity-100 ${
                                pathname === '/' ? 'opacity-100' : 'opacity-40'
                            }`}
                        >
                            {'home'}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/guestbook"
                            className={`text-xl font-light text-neutral-200 transition-opacity duration-200 ease-linear hover:opacity-100 ${
                                pathname === '/guestbook' ? 'opacity-100' : 'opacity-40'
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
