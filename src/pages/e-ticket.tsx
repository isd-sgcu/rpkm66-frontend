import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowUturnLeftIcon,
    ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import Sponsor from '@/components/Sponsor';
import Ticket from '@/public/images/ticket.svg';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { useRef } from 'react';

// using https://github.com/dephraiim/qrcode
// example: https://qr-service.vercel.app/api/code?text=https://freshmen2023.sgcu.in.th/&size=200

const ETicket = () => {
    const { user } = useAuth();
    const router = useRouter();

    return (
        <>
            <Link href="https://freshmen2023.sgcu.in.th/profile">
                <ArrowUturnLeftIcon className="w-2- ml-6 h-20" />
            </Link>
            <div className="flex h-auto min-h-screen flex-col items-center justify-items-center">
                <Image
                    src={Ticket}
                    className="absolute"
                    width={380}
                    height={335}
                    alt="ticket"
                />
                <div className="relative top-10 flex min-h-screen flex-col items-center">
                    <p className="mb-72 mt-24 text-7xl">
                        {user?.firstname || 'เฟซ'}
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
                        <div className="relative left-5 top-4 flex flex-col gap-1 text-center text-blue-950">
                            <p className="text-4xl">
                                {user?.firstname || 'Null'}
                            </p>
                            <p>{user?.firstname || 'Null'}</p>
                        </div>
                    </div>
                    <Button
                        content={
                            <>
                                <ArrowDownTrayIcon
                                    width={40}
                                    height={40}
                                    className="inline-block"
                                />
                                <p>Save Image</p>
                            </>
                        }
                        // wait for saveImage method
                        onClick={() => {
                            router.push('/');
                        }}
                        additionalStyle="gap-4 mt-10 mb-20 py-2 flex w-full px-32 rounded-lg bg-pink-400 ring-pink-400/30"
                        disabled={false}
                    />
                </div>
            </div>
        </>
    );
};

export default ETicket;
