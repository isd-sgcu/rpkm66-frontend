import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { IShortUser } from '@/types/user';
import { useMemo } from 'react';
import { IGroup } from '@/types/group';

const profilePic = '/images/pfp-placeholder.svg';

export default function GroupPanel() {
    const { group } = useAuth();

    const members = useMemo(() => {
        const gMembers = [...(group?.members ?? [])];

        while (gMembers.length < 3) {
            gMembers.push({
                id: `placeholder-${gMembers.length}`,
                firstname: '',
                lastname: '',
                image_url: profilePic,
            } satisfies IShortUser);
        }

        return gMembers;
    }, [group]);

    return (
        <div className="flex flex-col gap-4 rounded-xl bg-white p-4 ring-8 ring-white/30">
            <p className="h-12 text-center text-xl font-bold text-purple lg:text-3xl">
                สมาชิกในกลุ่ม ({group?.members.length ?? 1}/3)
            </p>
            <div className="flex h-full flex-col items-center justify-center gap-4 lg:flex-row">
                {members?.map((data: IShortUser) => {
                    return (
                        <div
                            className="relative flex h-full w-full flex-col items-center gap-4 px-4"
                            key={data.id}
                        >
                            <div className="relative aspect-3/4 w-full overflow-clip rounded-lg border-2 border-purple lg:w-28">
                                <Image
                                    src={data.image_url}
                                    fill
                                    alt={data.firstname}
                                />
                            </div>
                            <div className="relative z-0 flex select-none flex-col text-center text-lg leading-none text-purple">
                                <p>{data.firstname}</p>
                                <p>{data.lastname}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className="mx-auto mt-6 rounded-lg bg-pink-400 px-3 py-2 text-xl text-white ring-4 ring-pink-400/30 transition-all duration-500 hover:ring-8">
                ออกจากกลุ่ม
            </button>
        </div>
    );
}
