import type { NextPage } from 'next';
import Image from 'next/image';

import Rocket from '@/public/images/rocket.svg';

const WaitForBaanselection = () => {
    return (
        <div className="relative flex min-h-screen w-full items-center overflow-x-hidden bg-gray-800/30 px-8 backdrop-blur-sm backdrop-filter">
            <div className="relative mx-auto flex w-full flex-col gap-8 rounded-3xl bg-gradient-to-bl from-purple-400 to-pink-800/20 px-5 pb-8 pt-10 text-center ring-16 ring-purple-400/30 lg:w-auto lg:rounded-6xl lg:pb-16 lg:pl-16 lg:pr-52 lg:pt-24 lg:text-left lg:ring-32">
                <h1 className="text-2xl font-bold lg:text-4xl">
                    กรุณารอการเลือกบ้าน
                </h1>
                <div className="flex flex-col gap-1 text-xs lg:gap-4 lg:text-2xl">
                    <p>การลงทะเบียนของคุณเสร็จสิ้นเรียบร้อย</p>
                    <p>กรุณาลงทะเบียนเลือกบ้านวันที่ 17 กรกฎาคม 2566</p>
                    <p>สามารถสอบถามข้อมูลเพิ่มเติมได้ที่ CU for Freshmen</p>
                </div>
                <div className="absolute right-1/2 aspect-3/4 w-1/3 -translate-y-full translate-x-1/2 lg:right-0 lg:top-1/3 lg:-translate-y-1/3 ">
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
