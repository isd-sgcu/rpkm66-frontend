import Image from 'next/image';

import Rocket from '@/public/images/rocket.svg';
import RocketSmoke from '@/public/images/rocket-smoke.svg';
import { useAuth } from '@/context/AuthContext';
import { shimmer, toBase64 } from '@/utils/shimmer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
    const { login } = useAuth();
    return (
        <>
            <Navbar />
            <main className="relative z-0 flex min-h-screen w-full flex-col items-center justify-center text-center">
                <h1 className="relative z-0 select-none text-5xl font-bold leading-none lg:text-7xl">
                    รับเพื่อนก้าวใหม่
                    <Image
                        src={Rocket}
                        alt=""
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xmlpng;base64, ${toBase64(
                            shimmer(1024, 1024)
                        )}`}
                        className="pointer-events-none absolute -top-16 left-16 -z-10 h-32 w-32 origin-bottom -translate-x-3/4 -translate-y-3/4 rotate-12 select-none lg:-top-32 lg:h-52 lg:w-52 lg:rotate-0"
                    />
                    <Image
                        src={RocketSmoke}
                        alt=""
                        priority
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xmlpng;base64, ${toBase64(
                            shimmer(1024, 1024)
                        )}`}
                        className="pointer-events-none absolute -top-16 left-16 -z-20 origin-top-left rotate-12 select-none lg:-top-32 lg:rotate-0"
                    />
                </h1>
                <h2 className="z-0 mt-2 select-none text-5xl font-bold lg:text-8xl">
                    2023
                </h2>
                <button
                    className="z-0 mt-6 select-none rounded-3xl bg-pink-400 px-6 py-3 text-2xl font-bold ring-8 ring-pink-400/30 transition-all duration-500 hover:scale-105 focus:outline-none lg:mt-16 lg:px-20 lg:py-4 lg:text-3xl lg:ring-16"
                    onClick={login}
                >
                    เข้าสู่ระบบด้วย Chula SSO
                </button>
            </main>
            <Footer />
        </>
    );
};

export default Home;
