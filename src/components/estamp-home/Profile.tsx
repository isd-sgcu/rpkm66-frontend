import {
    HomeIcon,
    PencilSquareIcon,
    QrCodeIcon,
} from '@heroicons/react/24/solid';
import Human from '@/public/images/pfp-placeholder.svg';
import Image from 'next/image';
const Profile = () => {
    return (
        <div className="flex h-52 w-80 justify-center rounded-3xl bg-white ring-4 ring-white/40">
            <div className="mx-5 flex">
                <div className="justify-cente mx-8 flex items-center">
                    <div className="relative aspect-square h-36 w-24 max-w-full rounded-xl ring-4 ring-blue-950">
                        <Image
                            src={Human}
                            fill
                            alt="placeholder-icon"
                            className="rounded-xl bg-black"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center text-lg font-bold text-purple-400">
                    <h1>แจฮยอน</h1>
                    <h1>คงแก่การเรียน</h1>
                    <div className="my-3 flex h-auto w-36 rounded-xl border-2 border-pink-400 px-4 py-1 text-pink-400">
                        <HomeIcon className="h-4 w-4" />
                        <p className="mx-1 text-sm">บ้านทรายทอง</p>
                    </div>
                    <button
                        className="mt-1 h-8 w-28 rounded-md bg-purple-400 ring-4 ring-gray-300"
                        onClick={() => console.log('Clicked')}
                    >
                        <div className="flex justify-center py-2 text-sm text-white">
                            <p>แก้ไขข้อมูล</p>
                            <PencilSquareIcon className="ml-1 h-5 w-4" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
