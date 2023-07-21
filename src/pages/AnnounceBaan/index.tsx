import type { NextPage } from 'next';
import Image from 'next/image';
import Baanposter from '@/public/images/testAnnounceBaan.png';
import IGIcon from '@/public/images/instagram.svg';

const AnnounceBaan: NextPage = () => {
    return (
        <div className="relative flex min-h-screen w-full items-center overflow-x-hidden bg-gray-800/30 px-2 backdrop-blur-sm backdrop-filter">
            <div className="mx-auto block w-5/6 rounded-3xl bg-white px-2 pb-3 pt-4 lg:w-fit lg:pb-8 lg:pt-10">
                <div className="w-full text-center text-xl font-semibold text-yellow lg:text-4xl">
                    ยินดีด้วย! คุณได้รับเลือกเข้า
                </div>
                <div className="my-2 flex w-full justify-center overflow-hidden lg:my-6">
                    <Image
                        src={Baanposter}
                        alt=""
                        loading="lazy"
                        className="w-2/3 rounded-xl border-4 border-pink-400 lg:w-1/2"
                    />
                </div>
                <div className="w-full text-center text-4xl font-bold text-black lg:text-5xl ">
                    บ้านทรายทอง
                </div>
                <div className="w-full text-center text-xl font-semibold text-black lg:text-3xl ">
                    ติดตามข่าวสารได้ที่
                </div>
                <div className="text-l flex h-10 w-full content-center justify-center gap-1 font-medium text-black lg:gap-2 lg:text-2xl ">
                    {/* รอลีอองเเก้ */}
                    <div className="align-center my-auto justify-center overflow-hidden">
                        <Image
                            src={IGIcon}
                            alt=""
                            loading="lazy"
                            className="my-auto h-8  w-8 object-center backdrop-invert"
                        />
                    </div>
                    <div className="my-auto">baan.saithong</div>
                    {/* รอลีอองเเก้ */}
                    <a
                        className="align-center my-auto ml-2 justify-center overflow-hidden lg:ml-3 "
                        href="https://www.instagram.com/sgcu.chula/"
                    >
                        <Image
                            src={IGIcon}
                            alt=""
                            loading="lazy"
                            className=" h-8  w-8 object-center backdrop-invert"
                        />
                    </a>
                    <a
                        className="text-l my-auto font-normal text-black lg:text-2xl "
                        href="https://www.instagram.com/sgcu.chula/"
                    >
                        sgcu.chula
                    </a>
                </div>
            </div>
        </div>
    );
};
export default AnnounceBaan;
