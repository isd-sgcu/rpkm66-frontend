import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import StampPiece from './StampPiece';
import { StampInfo } from '@/types/stamp';
import { stampPiecePicture } from '@/utils/estamp/stamps';

const Stamp = () => {
    const router = useRouter();
    return (
        <div className="my-3 flex w-4/5 flex-col items-center justify-center text-xl font-bold md:w-1/2">
            <div className="relative aspect-square h-auto w-full max-w-full">
                <Image
                    src={'/images/eStampBorder.svg'}
                    alt="background"
                    fill
                    className="absolute -z-10"
                />
                <div className="flex-block grid h-full w-full grid-cols-2 gap-1 p-3">
                    {stampPiecePicture.map((e: StampInfo) => {
                        return (
                            <StampPiece
                                key={e.stampId}
                                stampId={e.stampId}
                                check={e.check}
                                imgUrl={e.imgUrl}
                            />
                        );
                    })}
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
