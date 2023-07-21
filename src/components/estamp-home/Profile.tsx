import { HomeIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import placeHolder from '@/public/images/pfp-placeholder.svg';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
const Profile = (props: any) => {
    const { user } = useAuth();
    const router = props.router;
    return (
        <div className="flex h-52 w-80 justify-center rounded-3xl bg-white ring-4 ring-white/40">
            <div className="justify-cente mx-8 flex items-center">
                <div className="relative aspect-square h-36 w-24 max-w-full rounded-xl ring-4 ring-blue-950">
                    <Image
                        src={user?.imageUrl || placeHolder}
                        fill
                        alt="placeholder-icon"
                        className="rounded-xl object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center text-lg font-bold text-purple-400">
                <h1>{user?.firstname || 'No First Name'}</h1>
                <h1>{user?.lastname || 'No Surname'}</h1>
                <div className="my-3 flex h-auto w-32 justify-center rounded-xl border-2 border-pink-400 px-4 py-1 text-pink-400">
                    <HomeIcon className="h-4 w-4" />
                    <p className="mx-1 text-sm">Baaaan</p>
                </div>
                <button
                    className="mt-1 h-8 w-28 rounded-md bg-purple-400 ring-4 ring-gray-300"
                    onClick={() => router.push('/edit')}
                >
                    <div className="flex justify-center py-1 text-sm text-white">
                        <p>แก้ไขข้อมูล</p>
                        <PencilSquareIcon className="ml-1 h-5 w-4" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Profile;
