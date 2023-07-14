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
        <div className="mb-8 flex flex-col rounded-xl bg-white p-4 ring-8 ring-white ring-opacity-25 lg:mb-0 lg:mr-10">
            <div className="lg:text-auto mb-4 text-center text-3xl text-purple">
                <b>สมาชิกในกลุ่ม(2/3)</b>
            </div>
            <div className="flex h-full w-full items-center justify-center">
                {group.map((data: GroupMember) => {
                    return (
                        <div className="flex h-full w-full" key={data.name}>
                            <div className="flex h-full w-full items-center justify-center">
                                <div className="flex h-40 w-36 flex-col items-center ">
                                    <div>
                                        <Image
                                            className="rounded-lg border-2 border-purple"
                                            src={data.imgUrl}
                                            width={100}
                                            height={100}
                                            alt={data.name}
                                        />
                                    </div>
                                    <div className=" relative z-0 select-none py-4 text-center text-lg leading-none text-purple">
                                        <p>
                                            {data.name}
                                            <br />
                                            {data.surname}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-8 flex justify-center">
                <button
                    className={`button-style text-bold mt-3 bg-pink-400 bg-gradient-to-bl from-pink-400 to-pink-800/20 text-xl ring-pink-400/40`}
                >
                    ออกจากกลุ่ม
                </button>
            </div>
        </div>
    );
}
