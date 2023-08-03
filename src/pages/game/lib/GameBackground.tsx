import type { NextPage } from 'next';
import Image from 'next/image';
import scene4 from '@/public/images/gameBG/scene4.svg';
import scene15 from '@/public/images/gameBG/scene15.svg';
import scene17 from '@/public/images/gameBG/scene17.svg';
import scene19 from '@/public/images/gameBG/scene19.svg';
import scene21 from '@/public/images/gameBG/scene21.svg';
import scene24 from '@/public/images/gameBG/scene24.svg';
import scene25 from '@/public/images/gameBG/scene25.svg';
import scene29 from '@/public/images/gameBG/scene29.svg';
import scene30 from '@/public/images/gameBG/scene30.svg';
import scene32 from '@/public/images/gameBG/scene32.svg';
import scene33 from '@/public/images/gameBG/scene33.svg';
import scene34 from '@/public/images/gameBG/scene34.svg';
import scene37 from '@/public/images/gameBG/scene37.svg';
import scene42 from '@/public/images/gameBG/scene48.svg';
import scene48 from '@/public/images/gameBG/scene34.svg';
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
        case '15':
            return (
                <Image
                    src={scene15}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '17':
            return (
                <Image
                    src={scene17}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '19':
            return (
                <Image
                    src={scene19}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '21':
            return (
                <Image
                    src={scene21}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '24':
            return (
                <Image
                    src={scene24}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '25':
            return (
                <Image
                    src={scene25}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '29':
            return (
                <Image
                    src={scene29}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '30':
            return (
                <Image
                    src={scene30}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '32':
            return (
                <Image
                    src={scene32}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '33':
            return (
                <Image
                    src={scene33}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '34':
            return (
                <Image
                    src={scene34}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '37':
            return (
                <Image
                    src={scene37}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '42':
            return (
                <Image
                    src={scene42}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
        case '48':
            return (
                <Image
                    src={scene48}
                    alt=""
                    sizes="(min-width: 1024px) 0, 100vw"
                    className="pointer-events-none fixed left-0 top-0 -z-40 block h-full w-full select-none object-cover"
                />
            );
    }
}
