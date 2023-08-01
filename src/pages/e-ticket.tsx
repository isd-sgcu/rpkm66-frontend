import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import {
    ArrowUturnLeftIcon,
    ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import Ticket from '@/public/images/ticket.svg';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

const ETicket = () => {
    const { user } = useAuth();
    const router = useRouter();

    return (
        <>
            <Button
                content={
                    <>
                        <ArrowUturnLeftIcon className="ml-6 h-12 w-12" />
                    </>
                }
                onClick={() => router.push('/estamp-home')}
            />

            <div className="flex h-auto min-h-screen flex-col items-center justify-items-center">
                <Image
                    src={Ticket}
                    width={350}
                    height={400}
                    className="absolute"
                    alt="ticket"
                />
                <div className="relative flex flex-col items-center">
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
                        <div className="relative left-3 top-4 flex flex-col gap-1 text-center text-blue-950">
                            <p className="text-4xl">
                                {user?.firstname || 'Null'}
                            </p>
                            <p>{user?.firstname || 'Null'}</p>
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
                        additionalStyle="mt-10 mb-20 py-2 w-full rounded-lg bg-pink-400 ring-pink-400/30 ring-4"
                    />
                </div>
            </div>
        </>
    );
};

export default ETicket;
