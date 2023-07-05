import Image from 'next/image';
import Link from 'next/link';

import Rocket from '@/public/images/rocket.svg';
import RocketSmoke from '@/public/images/rocket-smoke.svg';
import SGCU from '@/public/images/logo-sgcu.svg';
import Facebook from '@/public/images/facebook.svg';
import Instagram from '@/public/images/instagram.svg';
import { useAuth } from '@/context/AuthContext';
import { shimmer, toBase64 } from '@/utils/shimmer';

const Home = () => {
    const { login } = useAuth();
    return (
        <>
            <div className="w-full min-h-screen flex flex-col justify-center items-center font-ibm text-white text-center relative z-0 overflow-clip">
                <h1 className="text-5xl lg:text-9xl font-bold relative z-0 leading-none select-none">
                    รับเพื่อนก้าวใหม่
                    <Image
                        src={Rocket}
                        alt=""
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xmlpng;base64, ${toBase64(
                            shimmer(1024, 1024)
                        )}`}
                        className="absolute left-16 -top-16 w-32 h-32 -z-10 lg:-top-32 lg:w-52 lg:h-52 -translate-x-3/4 -translate-y-3/4 rotate-12 lg:rotate-0 origin-bottom select-none pointer-events-none"
                    />
                    <Image
                        src={RocketSmoke}
                        alt=""
                        priority
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xmlpng;base64, ${toBase64(
                            shimmer(1024, 1024)
                        )}`}
                        className="absolute left-16 -top-16 lg:-top-32 rotate-12 lg:rotate-0 origin-top-left pointer-events-none -z-20 select-none"
                    />
                </h1>
                <h2 className="text-4xl lg:text-8xl font-bold z-0 select-none">
                    2023
                </h2>
                <button
                    className="bg-pink font-bold text-lg px-6 z-0 py-1 mt-3 lg:text-5xl lg:px-20 lg:py-4 lg:mt-16 focus:outline-none ring-8 lg:ring-16 ring-pink/30 rounded-3xl select-none"
                    onClick={login}
                >
                    เข้าสู่ระบบด้วย Chula SSO
                </button>
            </div>
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
        </>
    );
};

export default Home;
