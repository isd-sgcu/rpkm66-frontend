import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const profilePic = '/images/pfp-placeholder.svg';

export default function ProfileInfoPanel() {
    return (
        <div className="flex min-h-full flex-col items-center justify-center gap-8 rounded-t-2xl bg-white p-12 xl:rounded-l-2xl xl:rounded-tr-none">
            <div className="relative aspect-3/4 w-full rounded-lg ring-8 ring-gray-300">
                <StarIcon className="absolute h-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow stroke-orange stroke-2 p-2" />
                <Image src={profilePic} fill alt="profile pic" />
            </div>
            <div className="flex flex-col">
                <div className="select-none text-center text-3xl font-bold text-purple">
                    แจฮยอน <br /> คงแก่การเรียน
                </div>
                <button className="mx-auto mt-8 w-36 rounded-lg bg-pink-400 py-2 text-xl ring-4 ring-pink-400/30 transition-all duration-500 hover:ring-8">
                    แก้ไขข้อมูล
                </button>
            </div>
        </div>
    );
}
