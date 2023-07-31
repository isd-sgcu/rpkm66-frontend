import { HomeIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import placeHolder from '@/public/images/pfp-placeholder.svg';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getBaan } from '@/utils/baan';
import { IUser } from '@/types/user';
const Profile = () => {
    const { user } = useAuth();
    const router = useRouter();
    const [baanName, setBaanName] = useState<string | null>(null);
    useEffect(() => {
        async function getBaanName(user: IUser | null): Promise<void> {
            const baan = await getBaan(user?.baanId || '');
            setBaanName(baan?.name || null);
        }
        getBaanName(user || null);
    }, [user]);
    return (
        <div className="flex h-52 w-80 justify-center rounded-3xl bg-white ring-4 ring-white/40">
            <div className="justify-cente mx-8 flex items-center">
                <div className="relative aspect-square h-36 w-24 max-w-full rounded-xl ring-4 ring-blue-950">
                    <Image
                        src={user?.imageUrl || placeHolder}
                        fill
                        alt="Photo"
                        className="relative rounded-xl object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center text-lg font-bold text-purple-400">
                <div className="flex flex-col">
                    <h1>{user?.firstname || 'Null'}</h1>
                    <h1>{user?.lastname || 'Null'}</h1>
                </div>
                <div className="my-3 flex h-auto w-32 justify-center rounded-xl border-2 border-pink-400 px-4 py-1 text-pink-400">
                    <HomeIcon className="h-4 w-4" />
                    <p className="mx-1 text-sm">{baanName || 'ไม่มีบ้าน'}</p>
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
