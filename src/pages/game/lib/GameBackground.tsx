import type { NextPage } from 'next';
import Image from 'next/image';
import scene4 from '@/public/images/gameBG/scene4.svg';
import scene7 from '@/public/images/gameBG/scene17.svg';
export default function GameBackground(bg: any) {
    switch (bg.bg) {
        case '1':
            return <></>;
        case '2':
            return (
                <div className="pointer-events-none fixed left-0 top-0 -z-40 h-full w-full select-none bg-white object-cover object-top" />
            );
        case '3':
            return (
                <div className="pointer-events-none fixed left-0 top-0 -z-40 h-full w-full select-none bg-black object-cover object-top" />
            );
        case '4':
            return (
                <Image
                    src={scene4}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
    }
}
