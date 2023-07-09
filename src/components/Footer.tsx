import Link from 'next/link';
import Image from 'next/image';
import SGCU from '@/public/images/logo-sgcu.svg';
import Facebook from '@/public/images/facebook.svg';
import Instagram from '@/public/images/instagram.svg';

const Footer = () => {
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
                    <div className="mb-2 flex items-center justify-center p-4 lg:mt-5 lg:p-3">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center justify-center gap-4 bg-black p-3">
                <Link
                    className="text-xs font-light text-gray-200 underline underline-offset-2 hover:no-underline"
                    href="/terms-conditions"
                >
                    เงื่อนไขการใช้งาน
                </Link>

                <Link
                    className="text-xs font-light text-gray-200 underline underline-offset-2 hover:no-underline"
                    href="/privacy-policy"
                >
                    นโยบายความเป็นส่วนตัว
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
