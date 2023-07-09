import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const profilePic = '/images/pfp-placeholder.svg';

const BaanProfile = () => {
    const bgStyle: string = 'lg:mb-none lg:mb-6 p-auto py-8 px-8';
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
        { name: 'บ้านพ่องดองเขียน', imgUrl: profilePic, size: 'XL', num: 3 },
    ];

    return (
        <>
            <Navbar />
            <div className="w-screen lg:h-screen grid place-items-center lg:mx-5">
                <div className="lg:w-full lg:h-full text-xl lg:text-4xl font-ibm flex lg:flex-row justify-center items-center flex-col text-white overflow-clip lg:z-50 lg:-translate-y-[2.5rem] translate-y-24">
                    <div
                        className={`${bgStyle} lg:w-auto w-full lg:h-3/5 lg:grid flex justify-center bg-white lg:rounded-l-2xl lg:rounded-tr-none rounded-t-2xl place-items-center lg:space-x-0 space-x-10`}
                    >
                        <Image
                            className="border-2 rounded-lg"
                            src={profilePic}
                            width={175}
                            height={367}
                            alt="profile pic"
                        />
                        <div className="flex flex-col ">
                            <div className=" text-purple font-bold relative z-0 leading-none select-none py-4 text-center lg:text-auto text-3xl">
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
                        className={`${bgStyle} lg:w-auto w-full lg:mr-5 lg:mb-0 mb-10 lg:h-3/5 grid-rows-2 bg-black lg:rounded-r-2xl lg:rounded-bl-none rounded-b-2xl bg-opacity-50 justify-center items-center`}
                    >
                        <div className="p-3 text-2xl text-white w-full justify-center mb-5">
                            <form method="post">
                                <div className="flex flex-row items-center">
                                    <label className="pr-5 lg:text-2xl text-xl">
                                        Invite Link
                                    </label>
                                    <input
                                        className="rounded-full w-5/6"
                                        type="text"
                                        id="first"
                                        name="first"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="lg:flex-row flex flex-col w-full justify-center items-stretch">
                            <div className="flex flex-col bg-white rounded-xl p-3 lg:mr-3 lg:mb-0 mb-5">
                                <div className="text-purple text-center mb-4 lg:text-auto text-3xl">
                                    <b>สมาชิกในกลุ่ม(2/3)</b>
                                </div>

                                <div className="flex w-full h-full justify-center items-center">
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
                                                            width={100}
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
                                <div className="flex justify-center mt-8">
                                    <button
                                        className={`${bottonStyle} text-bold text-xl mt-3 bg-pink-400 ring-pink-400/40 bg-gradient-to-bl from-pink-400 to-pink-800/20`}
                                    >
                                        ออกจากกลุ่ม
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl p-4">
                                <div className="text-purple text-center mb-4 lg:text-auto text-3xl">
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
                                                            <p>
                                                                {`${data.size} : ${data.name}`}
                                                                <br />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center mt-8">
                                    <button
                                        className={`${bottonStyle} text-bold text-xl mt-3 bg-pink-400 ring-pink-400/40 bg-gradient-to-bl from-pink-400 to-pink-800/20`}
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
