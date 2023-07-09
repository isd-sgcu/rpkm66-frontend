import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const profilePic = '/images/pfp-placeholder.svg';

const BaanProfile = () => {
    const bgStyle: string = 'lg:mb-none mb-6 p-auto py-8 px-8';
    const bottonStyle: string =
        'lg:mx-4 lg:px-6 text-sm py-2 mx-auto px-3 rounded-lg ring-4';

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="flex">
                    <div
                        className={`${bgStyle} grid bg-white rounded-l-lg place-items-center`}
                    >
                        <Image
                            className="border-2 rounded-lg"
                            src={profilePic}
                            width={150}
                            height={367}
                            alt="profile pic"
                        />
                        <h1 className=" text-black font-bold text-3xl lg:text2xl relative z-0 leading-none select-none py-4 text-center">
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
                        className={`${bgStyle} grid-rows-2 place-items-center bg-black rounded-r-lg bg-opacity-50 justify-center items-center`}
                    >
                        <div className="p-3 text-white w-full justify-center">
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
                        <div className="flex mx-3 w-full justify-center">
                            <div className="grid-rows-2 place-items-center bg-white rounded-lg justify-center items-center mr-auto p-4">
                                <h2 className="text-black text-center">
                                    <b>สมาชิกในกลุ่ม(1/3)</b>{' '}
                                </h2>
                                <div className="flex space-x-4">
                                    <div className="">
                                        <Image
                                            className="border-2 rounded-lg"
                                            src={profilePic}
                                            width={50}
                                            height={50}
                                            alt="profile pic1"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            className="border-2 rounded-lg"
                                            src={profilePic}
                                            width={50}
                                            height={367}
                                            alt="profile pic2"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            className="border-2 rounded-lg"
                                            src={profilePic}
                                            width={50}
                                            height={367}
                                            alt="profile pic3"
                                        />
                                    </div>
                                </div>
                                <button
                                    className={`${bottonStyle} text-bold bg-pink-400 ring-pink-400/40 bg-gradient-to-bl from-pink-400 to-pink-800/20`}
                                >
                                    ออกจากกลุ่ม
                                </button>
                            </div>
                            <div className="grid-rows-2 place-items-center bg-white rounded-lg justify-center items-center mr-auto p-4">
                                <h2 className="text-black text-center">
                                    <b>บ้านรับเพื่อนที่เลือก</b>{' '}
                                </h2>
                                <div className="flex space-x-4">
                                    <div className="">
                                        <Image
                                            className="border-2 rounded-lg"
                                            src={profilePic}
                                            width={50}
                                            height={50}
                                            alt="profile pic"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            className="border-2 rounded-lg"
                                            src={profilePic}
                                            width={50}
                                            height={367}
                                            alt="profile pic"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            className="border-2 rounded-lg"
                                            src={profilePic}
                                            width={50}
                                            height={367}
                                            alt="profile pic"
                                        />
                                    </div>
                                </div>
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

            <Footer />
        </>
    );
};

export default BaanProfile;
