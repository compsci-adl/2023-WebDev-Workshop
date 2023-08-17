import './styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar/navbar';

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ['latin'] });

/* Briefly explain layout.js and why it helps with things like global navbar */
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
