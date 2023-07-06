import type { NextPage } from 'next';
import Image from 'next/image';
import BackgroundDesktop from 'public/images/background-desktop.png';
import Rocket from 'public/images/Rocket-y.svg';
import BackgroundMobile from 'public/images/background-mobile.png';

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
            <Image
                src={BackgroundDesktop}
                alt="Background"
                className="fixed top-0 left-0 -z-50 h-screen w-full object-cover"
                loading="lazy"
            />
        </div>

        // <div className="flex items-center justify-center h-screen">
        //     <div className="block w-fit h-2/12 min-h-fit bg-gradient-to-br from-purple-700 via-purple-400 rounded-2xl shadow-shodoWCustom border-2 text-white font-ibm">
        //         <div className='relative w-full height-screen flex justify-center items-center'>
        //             <Image
        //             src={Rocket}
        //             alt="Rocket"
        //             className="absolute h-40 transform -translate-y-4"
        //             loading="lazy"
        //             />
        //         </div>
        //             <div className="text-center text-xs leading-loose m-4">
        //                 <p className="font-bold text-2xl mb-3 mt-10">กรุณารอการเลือกบ้าน</p>
        //                 <p>
        //                     การลงทะเบียนของคุณเสร็จสิ้นเรียบร้อย
        //                 </p>
        //                 <p>กรุณาลงทะเบียนเลือกบ้านวันที่ 24 กรกฎาคม 2565</p>
        //                 <p>สามารถสอบถามข้อมูลเพิ่มเติมได้ที่ CU for Freshmen</p>
        //             </div>

        //     </div>
        //     <div className="fixed top-0 left-0 h-screen w-full bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm -z-40"/>
        //     <Image
        //         src={BackgroundMobile}
        //         alt="Background"
        //         className="fixed top-0 left-0 -z-50 h-screen w-full object-cover"
        //         loading="lazy"
        //     />

        // </div>
    );
};
export default WaitForBaanselection;
