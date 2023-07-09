import Image from 'next/image';
import Favicon from '@/public/images/favicon.svg';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

function Navbar() {
    const { user, logout, login } = useAuth();

    return (
        <nav className="sticky top-0 z-50 flex h-11 w-full items-center justify-between bg-black/50 px-2 py-2 backdrop-blur-sm md:px-5 lg:h-20 lg:px-10 lg:py-4">
            <div className="relative h-full w-12">
                <Image
                    src={Favicon}
                    alt="icon"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="flex items-center gap-2 text-xs lg:gap-8 lg:text-lg">
                <Link
                    href="https://airtable.com/appNLAPRBVMZBgGV9/shr7FWOUnTsw53DxV"
                    className="underline hover:no-underline"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    ร้องเรียนปัญหา
                </Link>
                <button
                    className="rounded-3xl bg-orange px-3 py-1 text-xs ring-4 ring-orange/30 transition-all duration-500 hover:scale-105 hover:ring-8 lg:px-6 lg:py-2 lg:text-lg lg:ring-8 lg:hover:ring-16"
                    onClick={user ? logout : login}
                >
                    {user ? 'ออกจากระบบ' : 'เข้าสู่ระบบ'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
