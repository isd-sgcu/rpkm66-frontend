import Image from 'next/image';
import { EstampEvent } from '@/types/estamp';
import React from 'react';

const StampPiece: React.FC<{
    stamp: EstampEvent;
    is_taken: boolean;
    image: string;
}> = ({ stamp, is_taken, image }) => {
    return (
        <div className="relative">
            <Image
                src={image}
                alt={stamp.id}
                fill
                priority
                className={is_taken ? 'visible' : 'invisible'}
            />
        </div>
    );
};

export default StampPiece;
