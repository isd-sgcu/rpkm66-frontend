import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import placeHolderPicture from '@/public/images/pfp-placeholder.svg';
import { useRouter } from 'next/router';
const Stamp = () => {
    const router = useRouter();
    return (
        <div className="my-4 flex w-4/5 flex-col items-center justify-center text-xl font-bold md:w-1/2">
            <div className="relative aspect-square h-auto w-full max-w-full rounded-xl bg-white ring-4 ring-blue-950">
                <Image
                    src={placeHolderPicture}
                    fill
                    alt="placeholder-icon"
                    className="rounded-xl"
                />
            </div>
            <button
                className="my-8 flex h-12 w-full items-center justify-center rounded-xl bg-yellow ring-4 ring-yellow/40 transition-all duration-300 ease-in-out hover:ring-8"
                onClick={() => router.push('/')}
            >
                <CheckBadgeIcon className="mx-2 h-8 w-8" />
                <h1>Redeem Ticket</h1>
            </button>
        </div>
    );
};
export default Stamp;
