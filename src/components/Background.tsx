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
                className="pointer-events-none fixed left-0 top-0 -z-50 hidden h-full w-full select-none object-cover object-top lg:block"
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
                className="pointer-events-none fixed left-0 top-0 -z-50 block h-full w-full select-none object-cover lg:hidden"
            />
        </>
    );
};

export default Background;
