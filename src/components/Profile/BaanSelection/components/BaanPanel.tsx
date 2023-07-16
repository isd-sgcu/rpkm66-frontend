import Image from 'next/image';
import { SelectedBaan } from '..';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { useMemo } from 'react';
import Link from 'next/link';

const profilePic = '/images/pfp-placeholder.svg';

export default function BaanPanel() {
    const router = useRouter();
    const { user, group, isAuthenticated } = useAuth();

    const baans = useMemo(() => {
        const gBaans = (group?.baans ?? []).map(
            (baan, index) =>
                ({
                    id: baan.id,
                    name: baan.name,
                    imgUrl: baan.imageUrl,
                    size: '69XL',
                    num: index + 1,
                } satisfies SelectedBaan & { id: string })
        );

        while (gBaans.length < 3) {
            gBaans.push({
                id: '-1',
                name: '-',
                imgUrl: profilePic,
                size: '-',
                num: gBaans.length + 1,
            });
        }

        return gBaans;
    }, [group?.baans]);

    const isNotGroupOwner = useMemo(
        () => !isAuthenticated || group?.leaderID !== user?.id,
        [isAuthenticated, group, user]
    );

    return (
        <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-4 ring-8 ring-white ring-opacity-25">
            <p className="mb-4 text-center text-xl font-bold text-purple-400 lg:text-3xl">
                บ้านรับเพื่อนที่เลือก
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                {baans.map((data) => {
                    return (
                        <div
                            key={`${data.num}-${data.id}`}
                            className="relative flex w-full flex-col items-center gap-4 px-4"
                        >
                            <div className="relative aspect-3/4 w-32 max-w-full overflow-clip rounded-lg border-2 border-purple-400">
                                <p className="text-md absolute z-10 flex h-7 items-center justify-center rounded-br-lg bg-purple-400 px-2 font-bold leading-none lg:h-7 lg:text-lg">
                                    {data.num}
                                </p>
                                <Image fill src={data.imgUrl} alt={data.name} />
                            </div>
                            <div className="relative z-0 flex select-none flex-col text-center text-lg leading-none text-purple-400">
                                <p>{data.name}</p>
                                <p>({data.size})</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-6 flex flex-col place-items-center items-center justify-center gap-2 text-center text-sm">
                {isNotGroupOwner ? (
                    <p className="relative flex items-center justify-center text-pink-500">
                        <XCircleIcon className="h-8" />
                        หัวหน้ากลุ่มเท่านั้นที่สามารถเปลี่ยนบ้านได้
                    </p>
                ) : (
                    <hr className="h-8" />
                )}

                <button
                    className="mx-auto rounded-lg bg-pink-400 px-3 py-2 text-xl text-white ring-4 ring-pink-400/30 transition-all duration-500 enabled:hover:ring-8 disabled:bg-pink-300"
                    onClick={() => {
                        router.push('/baan-selection');
                    }}
                    disabled={isNotGroupOwner}
                >
                    เปลี่ยนอันดับ
                </button>
            </div>
        </div>
    );
}
