import { useToast } from '@/components/Toast';
import { useAuth } from '@/context/AuthContext';
import { Square2StackIcon } from '@heroicons/react/24/outline';

export default function InviteLink() {
    const { group } = useAuth();
    const toast = useToast();

    const inviteLink = `${
        process.env.NEXT_PUBLIC_APP_BASE_URL
    }/join?token=${encodeURIComponent(
        group ? group.token : 'GROUP_TOKEN_NOT_FOUND'
    )}`;

    function handleLinkCopy() {
        navigator.clipboard.writeText(`${inviteLink}`);
        toast?.setToast('success', 'คัดลอกลิงค์สำเร็จ');
    }
    return (
        <div className="flex w-full flex-col items-center justify-center gap-4 text-white xl:flex-row">
            <label className="min-w-max text-xl lg:text-2xl">Invite Link</label>
            <div className="relative flex w-full overflow-x-auto rounded-full bg-white px-5 py-2 text-sm text-purple-400 ring-8 ring-white/30">
                {inviteLink}
                <Square2StackIcon
                    className="absolute right-2 top-1/2 w-7 -translate-y-1/2 cursor-pointer rounded-full bg-pink-400 p-1 text-white"
                    onClick={handleLinkCopy}
                />
            </div>
        </div>
    );
}
