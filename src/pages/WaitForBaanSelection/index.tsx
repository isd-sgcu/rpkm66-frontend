import type { NextPage } from 'next';
import Image from 'next/image';
import Rocket from 'public/images/Rocket-y.svg';

const WaitForBaanselection: NextPage = () => {
    return (
        <div className="flex relative items-center h-screen overflow-hidden max-w-100vw">
            <div className="pl-32 relative flex m-[10%] items-center w-2/3 h-2/5 min-w-fit min-h-fit px-14 py-20 bbg-gradient-to-br from-purple-700 to-purple-200 rounded-3xl shadow-custom text-white font-ibm overflow-visible">
                <div className="w-fit mr-16 mt-12">
                    <div className="font-bold text-8xl mb-3 w-max h-max">
                        กรุณารอการเลือกบ้าน
                    </div>
                    <div className="leading-loose font-medium text-4xl block w-max h-max">
                        <p>การลงทะเบียนของคุณเสร็จสิ้นเรียบร้อย</p>
                        <p>กรุณาลงทะเบียนเลือกบ้านวันที่ 24 กรกฎาคม 2565</p>
                        <p>สามารถสอบถามข้อมูลเพิ่มเติมได้ที่ CU for Freshmen</p>
                    </div>
                </div>
                <div className="absolute border-2 h-full w-full items-center justify-end right-0 transform translate-x-3/4 -translate-y-32">
                    <Image
                        src={Rocket}
                        alt=""
                        className="relative m-0 w-50vw"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="fixed top-0 left-0 h-screen w-full bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm -z-40" />
        </div>
    );
};
export default WaitForBaanselection;
