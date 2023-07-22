import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import placeHolderPicture from '@/public/images/pfp-placeholder.svg';
import { useRouter } from 'next/router';
import eStampBorder from '@/public/images/eStampBorder.svg';
import eStampBackground from '@/public/images/eStampBackground.svg';
import StampPiece from './StampPiece';

const Stamp = () => {
    const router = useRouter();
    return (
        <div className="my-4 flex w-4/5 flex-col items-center justify-center text-xl font-bold md:w-1/2">
            <div className="relative aspect-square h-auto w-full max-w-full ring-4 ring-blue-950">
                <Image
                    src={eStampBorder}
                    alt="background"
                    className="absolute -z-10"
                />
                <div className="flex-block grid h-full w-full grid-cols-3 gap-1 p-3">
                    <StampPiece stampId={'1'} check={true} />
                    <StampPiece stampId={'2'} check={false} />
                    <StampPiece stampId={'3'} check={false} />
                    <StampPiece stampId={'4'} check={true} />
                    <StampPiece stampId={'5'} check={false} />
                    <StampPiece stampId={'6'} check={true} />
                    <StampPiece stampId={'7'} check={true} />
                    <StampPiece stampId={'8'} check={true} />
                    <StampPiece stampId={'9'} check={false} />
                </div>
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
