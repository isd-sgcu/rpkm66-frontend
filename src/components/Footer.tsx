import Link from 'next/link';
import Image from 'next/image';
import SGCU from '@/public/images/logo-sgcu.svg';
import Facebook from '@/public/images/facebook.svg';
import Instagram from '@/public/images/instagram.svg';
import Twitter from '@/public/images/twitter.svg';
import Tiktok from '@/public/images/tiktok.svg';
import Major from '@/public/images/Major.png';
import Fourgle from '@/public/images/fourgle.jpg';
import Ptt from '@/public/images/Ptt.png';
import ParkOrigin from '@/public/images/ParkOrigin.png';
import ThaiBev from '@/public/images/ThaiBev.png';
import WuaLuanLuan from '@/public/images/Wua.png';
import { useAuth } from '@/context/AuthContext';
const Footer = () => {
    const { login, logout, isAuthenticated } = useAuth();

    return (
        <footer className="relative w-full">
            <div className="relative m-0 w-full bg-gray-900 pt-3 lg:p-4">
                <div className="relative flex flex-col items-center justify-center lg:ml-3 lg:flex-row lg:justify-between">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mt-3 flex shrink-0 justify-center lg:mr-4 lg:px-3">
                            <Image
                                src={SGCU}
                                alt="SGCU"
                                width={47}
                                height={79}
                            />
                        </div>
                        <div className="items-end text-xs font-semibold lg:mt-5">
                            <h6 className="my-1 flex items-center justify-center text-xl font-normal leading-snug lg:justify-start">
                                รับเพื่อนก้าวใหม่ 2023
                            </h6>
                            <p className="flex justify-center font-normal leading-snug lg:justify-start">
                                พัฒนาโดยฝ่ายพัฒนาระบบสารสนเทศ
                            </p>
                            <p className="flex justify-center font-normal leading-snug lg:justify-start">
                                องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
                            </p>
                        </div>
                    </div>
                    <div className="order-2 flex flex-col items-center text-center">
                        <p className="mb-1 font-normal">ขอขอบคุณ</p>
                        {/* size base on figma */}
                        <div className="mb-4 flex h-fit w-fit flex-wrap items-center justify-center gap-5 px-8">
                            <Image
                                src={Major}
                                width={30}
                                height={50}
                                className="object-contain"
                                alt="Major"
                            />
                            <Image src={Ptt} width={40} height={30} alt="Ptt" />
                            <Image
                                src={ThaiBev}
                                width={50}
                                height={20}
                                alt="ThaiBev"
                            />
                            <Image
                                src={Fourgle}
                                width={50}
                                height={50}
                                alt="Fourgle"
                            />
                            <Image
                                src={ParkOrigin}
                                width={75}
                                height={20}
                                alt="ParkOrigin"
                            />
                            <Image
                                src={WuaLuanLuan}
                                width={40}
                                height={50}
                                alt="WuaLuanLuan"
                            />
                        </div>
                    </div>
                    <div className="order-1 flex items-center justify-center p-4 md:mb-0 lg:order-2 lg:mb-2 lg:mt-5 lg:p-3">
                        <div>
                            <Link
                                href="https://www.facebook.com/chulafreshmen"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="shrink-0 px-3">
                                    <Image
                                        src={Facebook}
                                        alt="Facebook"
                                        width={40}
                                        height={40}
                                    />
                                </button>
                            </Link>

                            <Link
                                href="https://www.instagram.com/rubpuenkaomai2023/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="shrink-0 px-3">
                                    <Image
                                        src={Instagram}
                                        alt="Instagram"
                                        width={40}
                                        height={40}
                                    />
                                </button>
                            </Link>

                            <Link
                                href="https://twitter.com/rubpuenkaomai?t=iBpKzuaUEwj-0CdSkiwmTw&s=09"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="shrink-0 px-3">
                                    <Image
                                        src={Twitter}
                                        alt="Twitter"
                                        width={40}
                                        height={40}
                                    />
                                </button>
                            </Link>

                            <Link
                                href="https://www.tiktok.com/@rubpuenkaomai2023?_t=8e5u3IvWury&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="shrink-0 px-3">
                                    <Image
                                        src={Tiktok}
                                        alt="TikTok"
                                        width={40}
                                        height={40}
                                    />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <button
                    onClick={isAuthenticated ? logout : login}
                    className="w-full cursor-pointer pb-4 pt-6 text-center text-xs font-light text-gray-200 underline underline-offset-2 hover:no-underline"
                >
                    {isAuthenticated ? 'ออกจาก' : 'เข้าสู่'}ระบบ
                </button>
            </div>
            <div className="flex w-full items-center justify-center gap-4 bg-black p-3">
                <Link
                    className="cursor-pointer text-xs font-light text-gray-200 underline underline-offset-2 hover:no-underline"
                    href="/terms-conditions"
                >
                    เงื่อนไขการใช้งาน
                </Link>

                <Link
                    className="cursor-pointer text-xs font-light text-gray-200 underline underline-offset-2 hover:no-underline"
                    href="/privacy-policy"
                >
                    นโยบายความเป็นส่วนตัว
                </Link>
                <Link
                    className="cursor-pointer text-xs font-light text-gray-200 underline underline-offset-2 hover:no-underline"
                    href="/pdpa"
                >
                    นโยบายคุ้มครองข้อมูลส่วนบุคคล
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
