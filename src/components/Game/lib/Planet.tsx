import { useAuth } from '@/context/AuthContext';
import { planets } from '../utils/planet';
import { Bars3Icon } from '@heroicons/react/24/solid';
import React from 'react';
import Image from 'next/image';
const Bar: React.FC<{ description: string }> = ({ description }) => {
    return (
        <div className="my-4 flex w-4/5 items-center rounded-lg bg-white text-xs text-black ring-4 ring-white/40">
            <div className="flex h-full items-center justify-center py-4 pl-3">
                <Bars3Icon className="inline-block h-6 w-6" />
            </div>
            <div className="break-words p-3">{description}</div>
        </div>
    );
};
const Planet: React.FC<{ num: number }> = ({ num }) => {
    const { user } = useAuth();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="my-4">
                <Image
                    src={planets[num].imgUrl}
                    alt="planet"
                    width={240}
                    height={240}
                />
            </div>
            <div className="flex flex-col items-center font-bold">
                <h1 className="my-1 text-2xl">{planets[num].name}</h1>
                <h2 className="my-1 text-xl">discovered by</h2>
                <h2 className="my-1 text-xl text-pink-500">
                    {user?.firstname || ''} {user?.lastname || ''}
                </h2>
            </div>
            <Bar description={planets[0].planetDes} />
            {planets[num].detail && (
                <Bar description={planets[num].detail as string} />
            )}
            <Bar description={planets[num].personalDes} />
        </div>
    );
};
export default Planet;
