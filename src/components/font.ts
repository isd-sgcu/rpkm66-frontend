import { IBM_Plex_Sans_Thai } from 'next/font/google';

export const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ['latin', 'thai'],
    weight: ['500', '600', '700'],
    display: 'swap',
    variable: '--font-ibm',
});
