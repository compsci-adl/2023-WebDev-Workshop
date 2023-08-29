import { Inter } from 'next/font/google';
import Navbar from './components/navbar/navbar.jsx';
import './styles/globals.css';

const INTER = Inter({ subsets: ['latin'] });

/* Briefly explain layout.js and why it helps with things like global navbar */
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={INTER.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
