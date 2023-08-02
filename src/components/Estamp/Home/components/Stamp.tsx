import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import StampPiece from './StampPiece';
import { EstampEvent, UserEstampEvent } from '@/types/estamp';
import { stampPiecePicture, stampPieceStyle } from '@/utils/estamp';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/Toast';
import { httpPost } from '@/utils/axios';
import { getRedeemStatus, getUserStamp } from '@/api/stamp';
import Container from './Container';

const Stamp = () => {
    const { isAuthenticated, isReady } = useAuth();
    useEffect(() => {
        const fetchUserEstamp = async (): Promise<void> => {
            const { status, data } = await getUserStamp();

            if (status === 'error') {
                toast?.setToast('error', 'เกิดข้อผิดพลาดในการโหลด E-Stamp');
            } else {
                setUserStamp(data?.events ?? []);
            }
        };

        if (!isReady) return;

        fetchUserEstamp();
    }, [isAuthenticated, isReady]);

    const toast = useToast();
    const [userStamp, setUserStamp] = useState<UserEstampEvent[] | null>([]);
    const [isRedeemed, setIsRedeemed] = useState<boolean | null>(null);

    useEffect(() => {
        const fetchRedeemStatus = async (): Promise<void> => {
            const { status, data } = await getRedeemStatus();

            if (status === 'error') {
                toast?.setToast('error', 'เกิดข้อผิดพลาดในการโหลด E-Stamp');
            } else {
                setIsRedeemed(data?.redeemed ?? null);
            }
        };

        fetchRedeemStatus();
    }, [isRedeemed]);

    return (
        <Container className="flex flex-col items-center justify-center">
            <div className="w-full md:w-1/2">
                <div className="relative flex aspect-square h-auto w-full max-w-full items-center justify-center">
                    {isRedeemed && (
                        <h1 className="absolute z-20 text-4xl text-white md:text-4xl">
                            REDEEMED
                        </h1>
                    )}
                    <Image
                        src={'/images/estamp-background.png'}
                        alt="background"
                        fill
                        className="absolute -z-10"
                    />
                    <div className="flex-block grid h-full w-full grid-cols-2 gap-1 p-3">
                        {stampPiecePicture.map(
                            (stampPiece: EstampEvent, index: number) => {
                                return (
                                    <StampPiece
                                        key={stampPiece.id}
                                        id={stampPiece.id}
                                        style={stampPieceStyle[index].style}
                                        imgUrl={stampPieceStyle[index].imgUrl}
                                        isVisible={
                                            index < (userStamp?.length || 0)
                                        }
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
                <button
                    className={`my-8 flex h-12 w-full items-center justify-center rounded-xl bg-yellow text-xl font-bold ring-4 ring-yellow/40 transition-all duration-300 ease-in-out hover:ring-8 disabled:opacity-80 disabled:hover:ring-4`}
                    onClick={async () => {
                        const { status } = await httpPost('/estamp/redeem', {});
                        if (status === 200) {
                            toast?.setToast('success', 'Redeem Success');
                            window.location.reload();
                        }
                    }}
                    disabled={
                        (userStamp?.length ?? 0) < 4 || isRedeemed
                            ? true
                            : false
                    }
                >
                    <CheckBadgeIcon className="mx-2 h-8 w-8" />
                    <h1>Redeem Ticket</h1>
                </button>
            </div>
        </Container>
    );
};
export default Stamp;
