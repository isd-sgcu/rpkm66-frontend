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
        imgUrl: string;
        role: string;
    }
    const group: GroupMember[] = [
        { name: 'Dalai Joti Salikorn', imgUrl: profilePic, role: 'leader' },
        { name: 'แจฮยอน คงแก่การเรียน', imgUrl: profilePic, role: 'member' },
        { name: '', imgUrl: profilePic, role: '' },
    ];
    return (
        <>
            <Navbar />
            <div className="w-screen lg:h-screen grid place-items-center">
                <div className="w-4/5 lg:h-full text-md lg:text-4xl font-ibm flex lg:flex-row justify-center items-center flex-col text-white overflow-clip lg:z-50 lg:-translate-y-[2.5rem] translate-y-24 mx-auto">
                    <div
                        className={`${bgStyle} w-1/5 h-3/5 grid bg-white rounded-l-lg place-items-center`}
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
                        className={`${bgStyle} w-4/5 h-3/5 grid-rows-2 place-items-center bg-black rounded-r-lg bg-opacity-50 justify-center items-center`}
                    >
                        <div className="p-3 text-white w-full justify-center m-auto">
                            <form method="post">
                                <label className="pr-5">Invite Link</label>
                                <input
                                    className="rounded-full px-3 w-2/3"
                                    type="text"
                                    id="first"
                                    name="first"
                                />
                            </form>
                        </div>
                        <div className="flex mx-3 w-full h-4/5 justify-center items-stretch">
                            <div className="w-1/2 grid-rows-3 place-items-center bg-white rounded-lg mr-5 p-4">
                                <div className="text-purple text-center mb-4">
                                    <b>สมาชิกในกลุ่ม(2/3)</b>{' '}
                                </div>

                                <div className="flex space-x-8 justify-center">
                                    {group.map((data: GroupMember) => {
                                        return (
                                            <div className="" key={data.name}>
                                                <Image
                                                    className="border-2 rounded-lg"
                                                    src={data.imgUrl}
                                                    width={100}
                                                    height={50}
                                                    alt={data.name}
                                                />
                                                <h1 className=" text-purple text-lg lg:text2xl relative z-0 leading-none select-none py-4 text-center">
                                                    <p>{data.name}</p>
                                                </h1>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className={`${bottonStyle} text-bold bg-pink-400 ring-pink-400/40 bg-gradient-to-bl from-pink-400 to-pink-800/20`}
                                    >
                                        ออกจากกลุ่ม
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/2 grid-rows-3 place-items-center bg-white rounded-lg justify-center items-center mr-auto p-4">
                                <div className="text-purple text-center mb-4">
                                    <b>บ้านรับเพื่อนที่เลือก</b>
                                </div>
                                <div className="flex space-x-4 justify-center">
                                    <div className="">
                                        <Image
                                            className="border-4 border-purple rounded-lg"
                                            src={profilePic}
                                            width={100}
                                            height={50}
                                            alt="profile pic"
                                        />
                                        <h1 className=" text-black text-lg lg:text2xl relative z-0 leading-none select-none py-4 text-center">
                                            <p>S : บ้านทรายทอง</p>
                                        </h1>
                                    </div>
                                    <div className="">
                                        <Image
                                            className="border-4 border-purple rounded-lg"
                                            src={profilePic}
                                            width={100}
                                            height={367}
                                            alt="profile pic"
                                        />
                                        <h1 className=" text-black text-lg lg:text2xl relative z-0 leading-none select-none py-4 text-center">
                                            <p>S : บ้านทรายทอง</p>
                                        </h1>
                                    </div>
                                    <div className="">
                                        <Image
                                            className="border-4 border-purple rounded-lg"
                                            src={profilePic}
                                            width={100}
                                            height={367}
                                            alt="profile pic"
                                        />
                                        <h1 className=" text-black text-lg lg:text2xl relative z-0 leading-none select-none py-4 text-center">
                                            <p>S : บ้านทรายทอง</p>
                                        </h1>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-auto">
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
