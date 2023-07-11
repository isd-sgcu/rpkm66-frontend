import Image from 'next/image';

const profilePic = '/images/pfp-placeholder.svg';

const BaanProfile = () => {
    const bgStyle: string = 'lg:mb-none lg:mb-6 p-auto py-8 px-8';
    const bottonStyle: string =
        'lg:mx-4 lg:px-6 text-sm py-2 mx-auto px-3 rounded-lg ring-4 ring-gray-300';
    interface GroupMember {
        name: string;
        surname: string;
        imgUrl: string;
        role: string;
    }
    interface SelectedBaan {
        name: string;
        imgUrl: string;
        size: string;
        num: number;
    }
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
    const baan: SelectedBaan[] = [
        { name: 'บ้านนอก', imgUrl: profilePic, size: 'M', num: 1 },
        { name: 'บ้านโดต้าทู', imgUrl: profilePic, size: 'XL', num: 2 },
        { name: 'บ้านไำดอไำด', imgUrl: profilePic, size: 'XL', num: 3 },
    ];

    return (
        <>
            <div className="grid w-screen place-items-center lg:mx-5 lg:h-screen">
                <div className="my-5 flex flex-col items-center justify-center overflow-clip font-ibm text-xl text-white lg:my-0 lg:h-full lg:w-full lg:flex-row lg:text-4xl">
                    <div
                        className={`${bgStyle} flex w-full place-items-center justify-center space-x-10 rounded-t-2xl bg-white lg:grid lg:h-[30rem] lg:w-auto lg:space-x-0 lg:rounded-l-2xl lg:rounded-tr-none`}
                    >
                        <div>
                            <Image
                                className="absolute -translate-x-6 -translate-y-6"
                                src="/images/leader.svg"
                                width={55}
                                height={55}
                                alt="leader star"
                            />
                            <Image
                                className="rounded-lg ring-8 ring-gray-300"
                                src={profilePic}
                                width={175}
                                height={367}
                                alt="profile pic"
                            />
                        </div>

                        <div className="flex flex-col ">
                            <div className=" lg:text-auto relative z-0 select-none py-4 text-center text-3xl font-bold leading-none text-purple">
                                <p>
                                    แจฮยอน
                                    <br />
                                    คงแก่การเรียน
                                </p>
                            </div>
                            <button
                                className={`${bottonStyle} bg-purple text-xl `}
                            >
                                แก้ไขข้อมูล
                            </button>
                        </div>
                    </div>

                    <div
                        className={`${bgStyle} mb-10 w-full grid-rows-2 items-center justify-center rounded-b-2xl  bg-black bg-opacity-50 lg:mb-0 lg:mr-5 lg:h-[30rem] lg:w-auto lg:rounded-r-2xl lg:rounded-bl-none`}
                    >
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
                                        <button className="-translate-x-10">
                                            <Image
                                                src="/images/copy.svg"
                                                width={32}
                                                height={32}
                                                alt="copy"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="flex w-full flex-col items-stretch justify-center lg:flex-row">
                            <div className="mb-8 flex flex-col rounded-xl bg-white p-4 ring-8 ring-white ring-opacity-25 lg:mb-0 lg:mr-10">
                                <div className="lg:text-auto mb-4 text-center text-3xl text-purple">
                                    <b>สมาชิกในกลุ่ม(2/3)</b>
                                </div>
                                <div className="flex h-full w-full items-center justify-center">
                                    {group.map((data: GroupMember) => {
                                        return (
                                            <div
                                                className="flex h-full w-full"
                                                key={data.name}
                                            >
                                                <div className="flex h-full w-full items-center justify-center">
                                                    <div className="flex h-40 w-36 flex-col items-center ">
                                                        <div>
                                                            {/* <Image
                                                                className="absolute"
                                                                src='/images/leader.svg'
                                                                width={55}
                                                                height={55}
                                                                alt="leader  star"
                                                            /> */}
                                                            <Image
                                                                className="rounded-lg border-2 border-purple"
                                                                src={
                                                                    data.imgUrl
                                                                }
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
                                        className={`${bottonStyle} text-bold mt-3 bg-pink-400 bg-gradient-to-bl from-pink-400 to-pink-800/20 text-xl ring-pink-400/40`}
                                    >
                                        ออกจากกลุ่ม
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-xl bg-white p-4 ring-8 ring-white ring-opacity-25">
                                <div className="lg:text-auto mb-4 text-center text-3xl text-purple">
                                    <b>บ้านรับเพื่อนที่เลือก</b>
                                </div>
                                <div className="flex items-center justify-center">
                                    {baan.map((data: SelectedBaan) => {
                                        return (
                                            <div
                                                className="flex"
                                                key={data.name}
                                            >
                                                <div className="flex h-full w-full items-center justify-center">
                                                    <div className="flex h-40 w-36 flex-col items-center">
                                                        <div>
                                                            <div className="absolute h-7 w-7 rounded-br-lg rounded-tl-lg bg-purple pl-2 text-lg font-bold">
                                                                {data.num}
                                                            </div>
                                                            <Image
                                                                className="rounded-lg border-2 border-purple"
                                                                src={
                                                                    data.imgUrl
                                                                }
                                                                width={75}
                                                                height={100}
                                                                alt={data.name}
                                                            />
                                                        </div>
                                                        <div className=" relative z-0 select-none py-4 text-center text-xl leading-none text-purple">
                                                            <p>
                                                                {data.name}
                                                                <br />(
                                                                {data.size})
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mt-5 flex flex-col place-items-center justify-center">
                                    <div className="flex items-center justify-center text-sm text-[#46B9AC]">
                                        <div className="mr-2 flex place-items-center items-center justify-center">
                                            <Image
                                                className="absolute"
                                                src={'/images/donebd.svg'}
                                                width={25}
                                                height={25}
                                                alt="border"
                                            />
                                            <Image
                                                className="flex pl-0.5"
                                                src={'/images/done_24px.svg'}
                                                width={20}
                                                height={20}
                                                alt="done"
                                            />
                                        </div>
                                        ระบบได้ทำการบันทึกเรียบร้อยแล้ว
                                    </div>
                                    <button
                                        className={`${bottonStyle} w-fitr first-letter:text-bold mt-3 bg-pink-400 bg-gradient-to-bl from-pink-400 to-pink-800/20 text-xl ring-pink-400/40`}
                                    >
                                        เปลี่ยนอันดับ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BaanProfile;
