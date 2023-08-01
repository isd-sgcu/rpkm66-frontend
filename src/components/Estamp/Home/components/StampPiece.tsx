import Image from 'next/image';
import { EstampEvent } from '@/types/estamp';
import React from 'react';

const StampPiece: React.FC<{
    event: EstampEvent;
    is_taken: boolean;
    image: string;
    position: string;
}> = ({ event, is_taken, image, position }) => {
    return (
        <div className="relative">
            <Image
                src={image}
                alt={event.id}
                fill
                priority
                className={`${is_taken ? 'visible' : 'invisible'} ${position}`}
            />
        </div>
    );
};

export default StampPiece;
