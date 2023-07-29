import Button from '@/components/Button';
import { useAuth } from '@/context/AuthContext';
import { StarIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';

const profilePic = '/images/pfp-placeholder.svg';

export default function ProfileInfoPanel() {
    const { user, group } = useAuth();
    const router = useRouter();

    return (
        <div className="flex min-h-full flex-col items-center justify-center gap-8 rounded-t-2xl bg-white p-12 xl:rounded-l-2xl xl:rounded-tr-none">
            <div className="relative aspect-3/4 w-full max-w-xxs rounded-lg ring-8 ring-gray-300">
                {group && group?.leaderID === user?.id && (
                    <StarIcon className="absolute z-10 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow stroke-orange stroke-2 p-2" />
                )}
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
                {/* แก้ Button */}
                <Button
                    additionalStyle="rounded-lg bg-purple-400 ring-purple-400/30"
                    content={
                        <>
                            แก้ไขข้อมูล{' '}
                            <PencilSquareIcon className="ml-2 inline-block h-5" />
                        </>
                    }
                    onClick={() => {
                        router.push('/edit');
                    }}
                    disabled={false}
                />
            </div>
        </div>
    );
}
