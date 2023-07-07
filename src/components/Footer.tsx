import Link from 'next/link';
import Image from 'next/image';
import SGCU from '@/public/images/logo-sgcu.svg';
import Facebook from '@/public/images/facebook.svg';
import Instagram from '@/public/images/instagram.svg';

const Footer = () => {
    return (
        <footer className="w-full relative lg:fixed bottom-0 left-0">
            <div className="w-full bg-gray-900 relative m-0 lg:p-4 pt-3">
                <div className="flex flex-col lg:flex-row lg:ml-3 justify-center items-center lg:justify-between relative">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mt-3 lg:mr-4 lg:px-3 flex justify-center shrink-0">
                            <Image
                                src={SGCU}
                                alt="SGCU"
                                width={47}
                                height={79}
                            />
                        </div>
                        <div className="text-white font-semibold font-ibm  text-xs items-end lg:mt-5">
                            <h6 className="flex justify-center leading-snug lg:justify-start text-xl font-normal my-1 items-center">
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
                    <div className="flex items-center mb-2 lg:mt-5 p-4 lg:p-3 justify-center">
                        <div>
                            <Link
                                href="https://www.facebook.com/chulafreshmen"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-3 shrink-0">
                                    <Image
                                        src={Facebook}
                                        alt="Facebook"
                                        width={50}
                                        height={50}
                                    />
                                </button>
                            </Link>

                            <Link
                                href="https://www.instagram.com/rubpuenkaomai2023/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-3 shrink-0">
                                    <Image
                                        src={Instagram}
                                        alt="Instagram"
                                        width={50}
                                        height={50}
                                    />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black w-full p-3 flex justify-center items-center">
                <Link
                    className="text-gray-200 font-light text-xs underline underline-offset-2 font-ibm"
                    href="https://gmail.com"
                >
                    ข้อตกลงและเงื่อนไขการใช้งาน
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
