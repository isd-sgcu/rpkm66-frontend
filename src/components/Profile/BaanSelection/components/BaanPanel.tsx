import Image from 'next/image';
import { SelectedBaan } from '..';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const profilePic = '/images/pfp-placeholder.svg';

export default function BaanPanel() {
    const baan: SelectedBaan[] = [
        { name: 'บ้านนอก', imgUrl: profilePic, size: 'M', num: 1 },
        { name: 'บ้านโดต้าทู', imgUrl: profilePic, size: 'XL', num: 2 },
        { name: 'บ้านไำดอไำด', imgUrl: profilePic, size: 'XL', num: 3 },
    ];

    return (
        <div className="flex flex-col rounded-xl bg-white p-4 ring-8 ring-white ring-opacity-25">
            <p className="mb-4 text-center text-xl font-bold text-purple lg:text-3xl">
                บ้านรับเพื่อนที่เลือก
            </p>
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
                {baan.map((data: SelectedBaan) => {
                    return (
                        <div
                            key={data.name}
                            className="flex h-full w-full flex-col items-center justify-center gap-4 px-4"
                        >
                            <div className="relative aspect-3/4 w-full max-w-xxs overflow-clip rounded-lg border-2 border-purple lg:w-28">
                                <p className="text-md absolute flex h-7 items-center justify-center rounded-br-lg bg-purple px-2 font-bold leading-none lg:h-7 lg:text-lg">
                                    {data.num}
                                </p>
                                <Image fill src={data.imgUrl} alt={data.name} />
                            </div>
                            <div className="flex select-none flex-col text-center text-xl leading-none text-purple lg:w-28">
                                <p>{data.name}</p>
                                <p>({data.size})</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-6 flex flex-col place-items-center items-center justify-center gap-2 text-center text-sm text-green">
                <p className="relative flex items-center justify-center">
                    <CheckCircleIcon className="h-8" />
                    ระบบได้ทำการบันทึกเรียบร้อยแล้ว
                </p>
                <Link href="/baan-selection">
                    <button className="mx-auto rounded-lg bg-pink-400 px-3 py-2 text-xl text-white ring-4 ring-pink-400/30 transition-all duration-500 hover:ring-8">
                        เปลี่ยนอันดับ
                    </button>
                </Link>
            </div>
        </div>
    );
}
