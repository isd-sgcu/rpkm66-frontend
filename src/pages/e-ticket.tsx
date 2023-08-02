import QRCode from 'react-qr-code';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import {
    ArrowUturnLeftIcon,
    ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { toPng } from 'html-to-image';
import { useToast } from '@/components/Toast';

const ETicket = () => {
    const { user, isAuthenticated, isReady } = useAuth();
    const router = useRouter();
    const toast = useToast();
    const imageRef = useRef<HTMLDivElement>(null);
    const saveImage = () => {
        toPng(imageRef.current as HTMLElement, { quality: 0.95 }).then(
            (dataUrl: string) => {
                const link = document.createElement('a');
                link.download = `${user?.firstname || '__'}-${
                    user?.lastname || '__'
                }-e-ticket.png`;
                link.href = dataUrl;
                link.click();
                link.remove();
            }
        );
    };
    useEffect(() => {
        if (!isReady) return;
        if (!isAuthenticated) {
            toast?.setToast('error', 'Please login to the website!');
            router.push('/login');
        }
    }, [isAuthenticated, isReady]);

    return (
        <>
            <div className="flex min-h-screen w-full flex-col">
                <button
                    className="my-6"
                    onClick={() => router.push('/estamp-home')}
                >
                    <ArrowUturnLeftIcon className="ml-6 h-9 w-9 md:h-12 md:w-12" />
                </button>
                <div
                    ref={imageRef}
                    className="flex items-center justify-center"
                >
                    <Image
                        src="/images/ticket.svg"
                        width={350}
                        height={400}
                        className="absolute -z-10"
                        alt="ticket"
                    />
                    <div className="flex flex-col items-center">
                        <p className="mb-64 mt-24 text-8xl">
                            {user?.firstname || 'Null'}
                        </p>
                        <div className="mt-9 flex items-center">
                            <div className="relative bottom-2 right-8">
                                <QRCode
                                    value={user?.id || 'No User'}
                                    size={127}
                                    fgColor="#3C415F"
                                />
                            </div>
                            <div className="relative left-4 top-2 flex flex-col gap-1 text-center text-blue-950">
                                <p className="text-4xl">
                                    {user?.firstname || ''}
                                </p>
                                <p>{user?.firstname || ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    content={
                        <div className="flex items-center justify-center">
                            <ArrowDownTrayIcon
                                width={30}
                                height={30}
                                className="mx-2"
                            />
                            <p className="font-bold">Save Image</p>
                        </div>
                    }
                    onClick={saveImage}
                    additionalStyle="mt-10 mb-20 py-2 w-80 rounded-lg bg-pink-400 ring-pink-400/30 ring-4"
                />
            </div>
        </>
    );
};

export default ETicket;
