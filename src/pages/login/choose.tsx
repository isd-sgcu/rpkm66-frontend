import { useAuth } from '@/context/AuthContext';

export default function LoginChoice() {
    const { login, loginWithGoogle } = useAuth();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-10">
            <h1 className="relative z-0 select-none text-5xl font-bold leading-none lg:text-7xl">
                เข้าสู่ระบบ
            </h1>

            <div className="flex flex-col gap-4">
                <button
                    className="z-0 select-none rounded-3xl bg-pink-400 px-6 py-3 text-2xl font-bold ring-8 ring-pink-400/30 transition-all duration-500 hover:scale-105 hover:ring-16 focus:outline-none lg:mt-16 lg:px-20 lg:py-4 lg:text-3xl lg:ring-16 lg:hover:ring-24"
                    onClick={login}
                >
                    เข้าสู่ระบบด้วย Chula SSO
                </button>

                <button
                    className="z-0 select-none rounded-3xl bg-pink-400 px-6 py-3 text-2xl font-bold ring-8 ring-pink-400/30 transition-all duration-500 hover:scale-105 hover:ring-16 focus:outline-none lg:mt-16 lg:px-20 lg:py-4 lg:text-3xl lg:ring-16 lg:hover:ring-24"
                    onClick={loginWithGoogle}
                >
                    เข้าสู่ระบบด้วย Google
                </button>
            </div>
        </div>
    );
}
