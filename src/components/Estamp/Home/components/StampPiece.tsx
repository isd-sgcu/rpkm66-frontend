import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

interface Picture {
    src: string;
    alt: string;
}

const stampPiecePicture: Picture[] = [
    {
        src: '/images/E-stamp/E-Stamp-01.svg',
        alt: '1',
    },
    {
        src: '/images/E-stamp/E-Stamp-02.svg',
        alt: '2',
    },
    {
        src: '/images/E-stamp/E-Stamp-03.svg',
        alt: '3',
    },
    {
        src: '/images/E-stamp/E-Stamp-04.svg',
        alt: '4',
    },
    {
        src: '/images/E-stamp/E-Stamp-05.svg',
        alt: '5',
    },
    {
        src: '/images/E-stamp/E-Stamp-06.svg',
        alt: '6',
    },
    {
        src: '/images/E-stamp/E-Stamp-07.svg',
        alt: '7',
    },
    {
        src: '/images/E-stamp/E-Stamp-08.svg',
        alt: '8',
    },
    {
        src: '/images/E-stamp/E-Stamp-09.svg',
        alt: '9',
    },
];

type StampInfo = {
    stampId: string;
    check: boolean;
};

const StampPiece: React.FC<StampInfo> = ({ stampId, check }) => {
    const [isStampCheck, checkStamp] = useState(check);

    // Find the picture that matches the provided stampId
    const picture = stampPiecePicture.find(
        (pic) => pic.alt === String(stampId)
    );

    return (
        <div>
            {isStampCheck ? (
                <div className="">
                    <Image
                        src={picture.src}
                        alt={picture.alt}
                        width={0}
                        height={0}
                        className="h-full w-full"
                    />
                </div>
            ) : (
                <div className="">
                    <Image
                        src={picture.src}
                        alt={picture.alt}
                        width={0}
                        height={0}
                        className="h-full w-full grayscale"
                    />
                </div>
            )}
        </div>
    );
};

export default StampPiece;
