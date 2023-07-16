import { useAuth } from '@/context/AuthContext';
import { StarIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const profilePic = '/images/pfp-placeholder.svg';

export default function ProfileInfoPanel() {
    const { user } = useAuth();

    return (
        <div className="flex min-h-full flex-col items-center justify-center gap-8 rounded-t-2xl bg-white p-12 xl:rounded-l-2xl xl:rounded-tr-none">
            <div className="relative aspect-3/4 w-full max-w-xxs rounded-lg ring-8 ring-gray-300">
                <StarIcon className="absolute z-10 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow stroke-orange stroke-2 p-2" />
                <Image
                    src={user?.imageUrl || profilePic}
                    fill
                    alt="profile pic"
                />
            </div>
            <div className="flex flex-col">
                <p className="select-none text-center text-3xl font-bold text-purple-400">
                    {user?.firstname} <br /> {user?.lastname}
                </p>

                <button
                    className="mx-auto mt-8 flex w-40 max-w-full items-center justify-center rounded-lg bg-purple-400 px-4 py-2 text-base ring-4 ring-purple-400/30 transition-all duration-500 hover:ring-8"
                    onClick={() => {
                        console.log('edit profile');
                    }}
                >
                    แก้ไขข้อมูล
                    <PencilSquareIcon className="ml-2 inline-block h-5" />
                </button>
            </div>
        </div>
    );
}
