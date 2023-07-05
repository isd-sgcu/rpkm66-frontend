import Background from '@/components/Background';
import AuthProvider from '@/context/AuthContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { IBM_Plex_Sans_Thai } from 'next/font/google';

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
    display: 'swap',
    variable: '--font-ibm',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <main className={`${ibmPlexSansThai.variable} font-sans`}>
                <Component {...pageProps} />
                <Background />
            </main>
        </AuthProvider>
    );
}
