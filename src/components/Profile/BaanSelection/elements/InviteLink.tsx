import { Square2StackIcon } from '@heroicons/react/24/outline';

export default function InviteLink() {
    return (
        <div className="mb-5 w-full flex-nowrap justify-center p-3 text-2xl text-white">
            <form method="post">
                <div className="flex w-full flex-row  items-center">
                    <label className="mr-0 flex w-1/6 text-xl lg:text-2xl">
                        Invite Link
                    </label>
                    <div className="flex w-full items-center">
                        <div className="w-5/6 rounded-full bg-white px-5 py-2 text-sm text-black ring-8 ring-white ring-opacity-25">
                            rpkm.sgcu.in.th/3D9EKB
                        </div>
                        <button className="-translate-x-8">
                            <Square2StackIcon
                                className="rounded-full  bg-[#E95682] p-1"
                                width={28}
                                height={28}
                            />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
