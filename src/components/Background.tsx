import BackgroundDesktop from '@/public/images/background-desktop.svg';
import BackgroundMobile from '@/public/images/background-mobile.svg';
import Image from 'next/image';

import { shimmer, toBase64 } from '@/utils/shimmer';

const Background = () => {
    return (
        <>
            <Image
                src={BackgroundDesktop}
                alt=""
                sizes="(min-width: 1024px) 100vw, 1024px"
                priority
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                    shimmer(1024, 1024)
                )}`}
                className="hidden lg:block fixed w-full h-full -z-50 select-none pointer-events-none top-0 left-0 object-cover object-top"
            />
            <Image
                src={BackgroundMobile}
                alt=""
                sizes="(min-width: 1024px) 0, 100vw"
                priority
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                    shimmer(1024, 1024)
                )}`}
                className="block lg:hidden fixed w-full h-full -z-50 select-none pointer-events-none top-0 left-0 object-cover"
            />
        </>
    );
};

export default Background;
