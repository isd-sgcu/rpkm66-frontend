import Image from 'next/image';

import Rocket from '@/public/images/rocket.svg';
import RocketSmoke from '@/public/images/rocket-smoke.svg';
import { useAuth } from '@/context/AuthContext';
import { shimmer, toBase64 } from '@/utils/shimmer';

const Home = () => {
    const { login } = useAuth();
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center text-center relative z-0 overflow-clip">
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
                className="bg-pink-400 font-bold text-lg px-6 z-0 py-1 mt-3 lg:text-5xl lg:px-20 lg:py-4 lg:mt-16 focus:outline-none ring-8 lg:ring-16 ring-pink-400/30 rounded-3xl select-none"
                onClick={login}
            >
                เข้าสู่ระบบด้วย Chula SSO
            </button>
        </div>
    );
};

export default Home;
