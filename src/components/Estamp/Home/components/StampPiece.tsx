import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { StampInfo } from '@/types/stamp';

const StampPiece: React.FC<StampInfo> = ({ stampId, check, imgUrl }) => {
    const [isStampCheck, checkStamp] = useState<boolean>(check);
    return (
        <div className="relative">
            <Image
                src={imgUrl}
                alt={stampId}
                fill
                className={`h-full w-full ${!isStampCheck && 'grayscale'}`}
            />
        </div>
    );
};

export default StampPiece;
