import { CameraIcon, QrCodeIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const Accessibility = () => {
    const router = useRouter();
    return (
        <>
            <button
                className="mt-6 flex h-12 w-4/5 items-center justify-center rounded-xl bg-pink-400 text-xl font-bold ring-4 ring-pink-400/40 transition-all duration-300 ease-in-out hover:ring-8 md:w-1/2"
                onClick={() => router.push('/e-ticket')}
            >
                <QrCodeIcon className="mx-2 h-8 w-8" />
                <h1>My E-Ticket</h1>
            </button>
            <button
                className="my-6 flex h-12 w-4/5 items-center justify-center rounded-xl bg-green text-xl font-bold ring-4 ring-green/40 transition-all duration-300 ease-in-out hover:ring-8 md:w-1/2"
                onClick={() => router.push('/scan')}
            >
                <CameraIcon className="mx-2 h-6 w-6" />
                <h1>Check-in / Check-out</h1>
            </button>
        </>
    );
};
export default Accessibility;
