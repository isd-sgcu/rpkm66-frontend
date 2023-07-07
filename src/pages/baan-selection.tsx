import type { NextPage } from 'next';
import Image from 'next/image';

import Rocket from '@/public/images/rocket.svg';

const WaitForBaanselection: NextPage = () => {
    return (
        <div className="flex relative items-center min-h-screen w-full overflow-x-hidden bg-gray-800/30 backdrop-filter backdrop-blur-sm px-8">
            <div className="relative mx-auto flex flex-col w-full gap-8 px-5 pt-10 pb-8 lg:pl-16 lg:pt-24 lg:pb-16 lg:pr-52 text-center lg:text-left lg:w-auto bg-gradient-to-bl from-purple to-pink-800/20 rounded-3xl lg:rounded-6xl ring-16 lg:ring-32 ring-purple/30">
                <h1 className="font-bold text-2xl lg:text-8xl">
                    กรุณารอการเลือกบ้าน
                </h1>
                <div className="flex flex-col gap-1 lg:gap-4 text-xs lg:text-4xl">
                    <p>การลงทะเบียนของคุณเสร็จสิ้นเรียบร้อย</p>
                    <p>กรุณาลงทะเบียนเลือกบ้านวันที่ 17 กรกฎาคม 2566</p>
                    <p>สามารถสอบถามข้อมูลเพิ่มเติมได้ที่ CU for Freshmen</p>
                </div>
                <div className="absolute right-1/2 translate-x-1/2 -translate-y-full aspect-3/4 w-1/3 lg:right-0 lg:top-1/3 lg:-translate-y-1/3 ">
                    <Image
                        src={Rocket}
                        alt=""
                        fill
                        loading="lazy"
                        className="rotate-45"
                    />
                </div>
            </div>
        </div>
    );
};
export default WaitForBaanselection;
