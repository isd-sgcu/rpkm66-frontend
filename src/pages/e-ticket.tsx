import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import {
    ArrowUturnLeftIcon,
    ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

const ETicket = () => {
    const { user } = useAuth();
    const router = useRouter();

    return (
        <div className="flex min-h-screen w-full flex-col">
            <button
                className="my-6"
                onClick={() => router.push('/estamp-home')}
            >
                <ArrowUturnLeftIcon className="ml-6 h-9 w-9 md:h-12 md:w-12" />
            </button>
            <div className="flex items-center justify-center">
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
                        <Image
                            alt="E-ticket QR Code"
                            //please change the QR Code
                            className="relative bottom-2 right-12"
                            width={127}
                            height={127}
                            src="https://qr-service.vercel.app/api/code?text=https://freshmen2023.sgcu.in.th/&size=300"
                        />
                        <div className="relative left-3 top-2 flex flex-col gap-1 text-center text-blue-950">
                            <p className="text-4xl">
                                {user?.firstname || 'Null'}
                            </p>
                            <p>{user?.firstname || 'Null'}</p>
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
                // wait for saveImage method
                onClick={() => {
                    router.push('/');
                }}
                additionalStyle="mt-10 mb-20 py-2 w-80 rounded-lg bg-pink-400 ring-pink-400/30 ring-4"
            />
        </div>
    );
};

export default ETicket;
