import Background from '@/components/Background';
import AuthProvider from '@/context/AuthContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
    display: 'swap',
    variable: '--font-ibm',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <main className={`${ibmPlexSansThai.variable} font-ibm text-white`}>
                <Component {...pageProps} />
                <Background />
            </main>

            <title>รับเพื่อนก้าวใหม่ 2023</title>
            <meta content="รับเพื่อนก้าวใหม่ 2023" name="description" />

            <Analytics />
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-0ZFDD1EKVW"
            />
            <Script
                id="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-0ZFDD1EKVW');
          `,
                }}
            />
        </AuthProvider>
    );
}
