import { ReactNode } from 'react';
import '@/styles/globals.css';
import { IBM_Plex_Sans_Thai } from 'next/font/google';

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ['latin', 'thai'],
    weight: ['500', '600', '700'],
    display: 'swap',
    variable: '--font-ibm',
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="th">
            <head>
                <link
                    rel="shortcut icon"
                    href="/images/favicon.svg"
                    type="image/x-icon"
                />
                <title>RPKM 66</title>
            </head>
            <body>
                <main className={`${ibmPlexSansThai.variable} font-sans`}>
                    {children}
                </main>
            </body>
        </html>
    );
}
