import { Inter } from 'next/font/google';
import '../styles/globals.css';

const INTER = Inter({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={INTER.className}>
                {children}
            </body>
        </html>
    );
}
