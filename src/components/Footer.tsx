import Link from 'next/link';
import Image from 'next/image';
import SGCU from '@/public/images/logo-sgcu.svg';
import Facebook from '@/public/images/facebook.svg';
import Instagram from '@/public/images/instagram.svg';

const Footer = () => {
    return (
        <footer>
            <div className="w-full bg-gray-900 relative m-0 p-3 ">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between relative">
                    <div className="flex flex-col lg:flex-row">
                        <div className=" mt-3 mr-4 lg:pb-3 flex justify-center">
                            <Image
                                src={SGCU}
                                alt="SGCU"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="text-white font-semibold font-ibm flex-row text-xs mt-3 items-end">
                            <p className="flex justify-center lg:justify-start text-lg font-semibold my-1 items-center">
                                รับเพื่อนก้าวใหม่ 2023
                            </p>
                            <p className="flex justify-center lg:justify-start">
                                พัฒนาโดยฝ่ายพัฒนาระบบสารสนเทศ
                            </p>
                            <p className="flex justify-center lg:justify-start">
                                องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mt-3">
                        <div>
                            <Link
                                href="https://www.facebook.com/chulafreshmen"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-3">
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
                                <button className="px-3">
                                    <Image
                                        src={Instagram}
                                        alt="Instagram"
                                        width={40}
                                        height={40}
                                    />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black w-full p-3 flex justify-center items-center">
                <a
                    className="text-amber-50 text-xs underline underline-offset-2 font-ibm"
                    href="https://gmail.com"
                >
                    ข้อตกลงและเงื่อนไขการใช้งาน
                </a>
            </div>
        </footer>
    );
};

export default Footer;
