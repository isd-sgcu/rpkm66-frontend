import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const profilePic = '/images/pfp-placeholder.svg';

const BaanProfile = () => {
    const bgStyle: string = 'lg:mb-none mb-6 p-auto py-8 px-8';
    const bottonStyle: string =
        'lg:mx-4 lg:px-6 text-sm py-2 mx-auto px-3 rounded-lg ring-4';
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
            name: 'Dalai',
            surname: 'Salikorn',
            imgUrl: profilePic,
            role: 'leader',
        },
        {
            name: 'แจฮยอน',
            surname: 'คงแก่การเรียน',
            imgUrl: profilePic,
            role: 'member',
        },
        { name: '', surname: '', imgUrl: profilePic, role: '' },
    ];
    const baan: SelectedBaan[] = [
        { name: 'บ้านนอก', imgUrl: profilePic, size: 'M', num: 1 },
        { name: 'บ้านโดต้าทู', imgUrl: profilePic, size: 'XL', num: 2 },
        { name: 'บ้านพ่องดองเขียน', imgUrl: profilePic, size: 'XXL', num: 3 },
    ];

    return (
        <>
            <Navbar />
            <div className="w-screen lg:h-screen grid place-items-center mx-5 ">
                <div className="w-full lg:h-full text-md lg:text-4xl font-ibm flex lg:flex-row justify-center items-center flex-col text-white overflow-clip lg:z-50 lg:-translate-y-[2.5rem] translate-y-24">
                    <div
                        className={`${bgStyle} h-3/5 grid bg-white rounded-l-2xl place-items-center`}
                    >
                        <Image
                            className="border-2 rounded-lg"
                            src={profilePic}
                            width={150}
                            height={367}
                            alt="profile pic"
                        />
                        <h1 className=" text-purple font-bold relative z-0 leading-none select-none py-4 text-center">
                            <p>
                                แจฮยอน
                                <br />
                                คงแก่การเรียน
                            </p>
                        </h1>
                        <button className={`${bottonStyle} bg-purple`}>
                            แก้ไขข้อมูล
                        </button>
                    </div>

                    <div
                        className={`${bgStyle} mr-5 h-3/5 grid-rows-2 place-items-center bg-black rounded-r-2xl bg-opacity-50 justify-center items-center`}
                    >
                        <div className="p-3 text-2xl text-white w-full justify-center mb-5">
                            <form method="post">
                                <div className="flex">
                                    <label className="pr-5 flex">
                                        Invite Link
                                    </label>
                                    <input
                                        className="rounded-full w-5/6 px-3"
                                        type="text"
                                        id="first"
                                        name="first"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex w-full h-4/5 justify-center items-stretch">
                            <div className="w-1/2 flex flex-col bg-white rounded-lg mr-5 p-4">
                                <div className="text-purple text-center mb-4">
                                    <b>สมาชิกในกลุ่ม(2/3)</b>{' '}
                                </div>

                                <div className="flex w-full h-ful justify-center items-center">
                                    {group.map((data: GroupMember) => {
                                        return (
                                            <div
                                                className="flex w-full h-full"
                                                key={data.name}
                                            >
                                                <div className="w-full h-full flex justify-center items-center">
                                                    <div className="w-36 h-40 flex flex-col items-center">
                                                        <Image
                                                            className="border-2 rounded-lg "
                                                            src={data.imgUrl}
                                                            width={125}
                                                            height={100}
                                                            alt={data.name}
                                                        />
                                                        <div className=" text-purple text-lg lg:text2xl relative z-0 leading-none select-none py-4 text-center">
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
                                <div className="flex justify-center mt-auto mb-5">
                                    <button
                                        className={`${bottonStyle} text-bold bg-pink-400 ring-pink-400/40 bg-gradient-to-bl from-pink-400 to-pink-800/20`}
                                    >
                                        ออกจากกลุ่ม
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col bg-white rounded-lg mr-5 p-4">
                                <div className="text-purple text-center mb-4">
                                    <b>บ้านรับเพื่อนที่เลือก</b>
                                </div>
                                <div className="flex w-full h-full justify-center items-center">
                                    {baan.map((data: SelectedBaan) => {
                                        return (
                                            <div
                                                className="flex"
                                                key={data.name}
                                            >
                                                <div className="w-full h-full flex justify-center items-center">
                                                    <div className="w-36 h-40 flex flex-col items-center">
                                                        <div>
                                                            <Image
                                                                className="border-4 border-purple rounded-lg"
                                                                src={
                                                                    data.imgUrl
                                                                }
                                                                width={100}
                                                                height={100}
                                                                alt={data.name}
                                                            />
                                                        </div>
                                                        <div className=" text-purple text-lg lg:text2xl relative z-0 leading-none select-none py-4 text-center">
                                                            <p>{`${data.size} : ${data.name}`}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center mt-auto mb-5">
                                    <button
                                        className={`${bottonStyle} text-bold bg-pink-400 ring-pink-400/40 bg-gradient-to-bl from-pink-400 to-pink-800/20`}
                                    >
                                        เปลี่ยนอันดับ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BaanProfile;
