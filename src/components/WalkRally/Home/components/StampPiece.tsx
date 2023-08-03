import Image from 'next/image';
import { EstampEvent } from '@/types/estamp';
import React from 'react';

const StampPiece: React.FC<{
    id: string;
    isVisible: boolean;
    imgUrl: string;
    style?: string;
}> = ({ id, isVisible, imgUrl, style }) => {
    return (
        <div className={`${style} relative`}>
            <Image
                src={imgUrl}
                alt={id}
                fill
                priority
                className={`${isVisible ? 'visible' : 'invisible'}`}
            />
        </div>
    );
};

export default StampPiece;
