import Image from 'next/image';
import { GroupMember } from '..';

const profilePic = '/images/pfp-placeholder.svg';

export default function GroupPanel() {
    const group: GroupMember[] = [
        {
            name: 'แจฮยอน',
            surname: 'คงแก่การเรียน',
            imgUrl: profilePic,
            role: 'member',
        },
        {
            name: 'Dalai',
            surname: 'Salikorn',
            imgUrl: profilePic,
            role: 'leader',
        },
        { name: '', surname: '', imgUrl: profilePic, role: '' },
    ];

    return (
        <div className="flex flex-col gap-4 rounded-xl bg-white p-4 ring-8 ring-white/30">
            <p className="h-12 text-center text-xl font-bold text-purple lg:text-3xl">
                สมาชิกในกลุ่ม(2/3)
            </p>
            <div className="flex h-full flex-col items-center justify-center gap-4 lg:flex-row">
                {group.map((data: GroupMember) => {
                    return (
                        <div
                            className="relative flex h-full w-full flex-col items-center gap-4 px-4"
                            key={data.name}
                        >
                            <div className="relative aspect-3/4 w-full overflow-clip rounded-lg border-2 border-purple lg:w-28">
                                <Image src={data.imgUrl} fill alt={data.name} />
                            </div>
                            <div className="relative z-0 flex select-none flex-col text-center text-lg leading-none text-purple">
                                <p>{data.name}</p>
                                <p>{data.surname}</p>
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
