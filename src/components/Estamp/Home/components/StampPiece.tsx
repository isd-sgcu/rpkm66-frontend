import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { StampInfo } from '@/types/stamp';

const StampPiece: React.FC<StampInfo> = ({ stampId, check, imgUrl }) => {
    const [isStampCheck, setStamp] = useState<boolean>(check);
    return (
        <div className="relative">
            <Image
                src={imgUrl}
                alt={stampId}
                fill
                priority
                onClick={() => setStamp(!isStampCheck)}
                className={!isStampCheck ? 'grayscale' : ''}
            />
        </div>
    );
};

export default StampPiece;
