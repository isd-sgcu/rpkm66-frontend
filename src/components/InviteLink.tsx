import Image from 'next/image';
import CopyIcon from '@/public/images/copy_24px.svg';
import { useAuth } from '@/context/AuthContext';

const InviteLink = () => {
    const { group } = useAuth();
    const inviteLink = `${
        process.env.NEXT_PUBLIC_APP_BASE_URL
    }/?join=${encodeURIComponent(
        group ? group.token : 'GROUP_TOKEN_NOT_FOUND'
    )}`;

    function handleLinkCopy() {
        navigator.clipboard.writeText(`${inviteLink}`);
        //Copy link
    }

    return (
        <>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center">
                <h1 className="mb-3 text-2xl lg:mr-8 lg:text-3xl">
                    Invite Link
                </h1>
                <div className="flex flex-row items-center rounded-5xl bg-white py-1 pl-4 pr-3 ring-8 ring-gray-100/30">
                    <form className="max-w-xs">
                        <input
                            className="text-base font-medium text-gray-900 lg:w-[500px] lg:text-xl "
                            type="text"
                            value={`${inviteLink}`}
                            disabled={true}
                        />
                    </form>
                    <button
                        className="flex min-h-[30px] min-w-[30px] items-center  justify-center rounded-full bg-pink-500 p-2 transition-all hover:scale-110 hover:bg-pink-600 lg:ml-48"
                        onClick={handleLinkCopy}
                    >
                        <Image
                            src={CopyIcon}
                            alt={'copy'}
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};
export default InviteLink;
