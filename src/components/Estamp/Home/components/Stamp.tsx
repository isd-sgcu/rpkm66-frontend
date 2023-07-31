import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import StampPiece from './StampPiece';
import { UserEstampEvent } from '@/types/estamp';
import { stampPiecePicture } from '@/utils/estamp';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/Toast';
import { httpGet } from '@/utils/axios';

const Stamp = () => {
    const { isAuthenticated } = useAuth();
    const toast = useToast();
    const router = useRouter();
    const [userStamp, setUserStamp] = useState<UserEstampEvent[] | null>([]);
    const getUserStamp = async () => {
        try {
            const { data } = await httpGet<UserEstampEvent[]>('/estamp/my');
            return data;
        } catch (err) {
            return null;
        }
    };
    useEffect(() => {
        async function fetchUserEstamp(): Promise<void> {
            const data = await getUserStamp();
            setUserStamp(data ?? null);
        }
        isAuthenticated
            ? fetchUserEstamp()
            : toast?.setToast('error', 'Please login to view your estamp');
    }, [userStamp]);

    return (
        <div className="my-3 flex w-4/5 flex-col items-center justify-center text-xl font-bold md:w-1/2">
            <Image
                src={'/images/EstampBorder.svg'}
                alt="border"
                width={300}
                height={300}
                className="absolute -z-20 aspect-square h-auto w-4/5 -translate-y-14 md:w-1/2"
            />
            <div className="relative flex aspect-square h-auto w-full max-w-full items-center justify-center">
                <h1 className="absolute z-20 text-5xl text-white">REDEEMED</h1>
                <Image
                    src={'/images/estamp-bg.svg'}
                    alt="background"
                    fill
                    className={`absolute -z-10 ${
                        stampPiecePicture.some((e) => !e.is_taken) &&
                        'grayscale'
                    }`}
                />
                <div className="flex-block grid h-full w-full grid-cols-2 gap-1 p-3">
                    {stampPiecePicture.map((e: UserEstampEvent) => {
                        return (
                            <StampPiece
                                key={e.stamp.id}
                                {...e}
                                image="/images/pfp-placeholder.svg"
                            />
                        );
                    })}
                </div>
            </div>
            <button
                className={`my-8 flex h-12 w-full items-center justify-center rounded-xl bg-yellow ring-4 ring-yellow/40 transition-all duration-300 ease-in-out hover:ring-8 disabled:opacity-80 disabled:hover:ring-4`}
                onClick={() => router.push('/')}
                disabled={stampPiecePicture.some((e) => !e.is_taken)}
            >
                <CheckBadgeIcon className="mx-2 h-8 w-8" />
                <h1>Redeem Ticket</h1>
            </button>
        </div>
    );
};
export default Stamp;
