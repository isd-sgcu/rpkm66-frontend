import Background from '@/components/Background';
import AuthProvider from '@/context/AuthContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import Script from 'next/script';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/PhaseTwoNavbar';
import { ToastProvider } from '@/components/Toast';
import { AppContextProvider } from '@/context/ModalContext';

import { ibmPlexSansThai } from '@/components/font';

function MetaData() {
    return (
        <Head>
            <title>รับเพื่อนก้าวใหม่ 2023</title>
            <meta
                content="พัฒนาโดยฝ่ายพัฒนาระบบสารสนเทศ องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย"
                name="description"
            />
            {/* og */}
            <meta content="รับเพื่อนก้าวใหม่ 2023" property="og:title" />
            <meta
                content="พัฒนาโดยฝ่ายพัฒนาระบบสารสนเทศ องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย"
                property="og:description"
            />
            <meta content="https://freshmen2023.sgcu.in.th" property="og:url" />
            <meta
                content="https://freshmen2023.sgcu.in.th/images/og.png"
                property="og:image"
            />
            <meta content="image/png" property="og:image:type" />
            <meta content="1200" property="og:image:width" /> {/* 1.91:1 */}
            <meta content="630" property="og:image:height" />
            {/* twitter */}
            <meta content="รับเพื่อนก้าวใหม่ 2023" name="twitter:title" />
            <meta
                content="พัฒนาโดยฝ่ายพัฒนาระบบสารสนเทศ องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย"
                name="twitter:description"
            />
            <meta
                content="https://freshmen2023.sgcu.in.th"
                name="twitter:url"
            />
            <meta
                content="https://freshmen2023.sgcu.in.th/images/og.png"
                name="twitter:image"
            />
            <meta content="image/png" name="twitter:image:type" />
            <meta content="1200" name="twitter:image:width" /> {/* 1.91:1 */}
            <meta content="630" name="twitter:image:height" />
        </Head>
    );
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${ibmPlexSansThai.variable} font-ibm text-white`}>
            <ToastProvider>
                <AuthProvider>
                    <AppContextProvider>
                        <MetaData />

                        <Navbar />
                        <Component {...pageProps} />

                        <Background />
                        <Footer />
                    </AppContextProvider>
                </AuthProvider>
            </ToastProvider>

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
        </main>
    );
}
