import Image from 'next/image';

import Rocket from '@/public/images/rocket.svg';
import RocketSmoke from '@/public/images/rocket-smoke.svg';
import { useAuth } from '@/context/AuthContext';

const Home = () => {
    const { login } = useAuth();
    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center font-ibm bg-background-mobile lg:bg-background-desktop bg-no-repeat bg-cover bg-center text-white text-center relative z-0 overflow-clip select-none">
            <h1 className="text-5xl lg:text-9xl font-bold relative z-0">
                รับเพื่อนก้าวใหม่
                <Image
                    src={Rocket}
                    alt=""
                    className="absolute left-16 -top-16 w-32 h-32 -z-10 lg:-top-32 lg:w-52 lg:h-52 -translate-x-3/4 -translate-y-3/4 rotate-12 lg:rotate-0 origin-bottom"
                />
                <Image
                    src={RocketSmoke}
                    alt=""
                    className="absolute left-16 -top-16 lg:-top-32 rotate-12 lg:rotate-0 origin-top-left pointer-events-none -z-20"
                />
            </h1>
            <h2 className="text-4xl lg:text-8xl font-bold z-0">2023</h2>
            <button
                className="bg-pink font-bold text-lg px-6 z-0 py-1 mt-3 lg:text-5xl lg:px-20 lg:py-4 lg:mt-16 focus:outline-none ring-8 lg:ring-16 ring-pink/30 rounded-3xl"
                onClick={login}
            >
                เข้าสู่ระบบด้วย Chula SSO
            </button>
        </div>
    );
};

export default Home;
