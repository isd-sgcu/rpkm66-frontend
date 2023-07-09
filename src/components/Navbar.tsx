import Image from 'next/image';
import Favicon from '@/public/images/favicon.svg';

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex h-11 w-full items-center justify-between bg-black/50 px-2 py-2 backdrop-blur-sm lg:h-20 lg:px-10 lg:py-4">
            <div className="relative h-full w-12">
                <Image
                    src={Favicon}
                    alt="icon"
                    fill
                    className="object-contain"
                />
            </div>
            <button className="rounded-2xl bg-orange px-3 py-1 text-xs ring-8 ring-orange/30 transition-all duration-500 hover:scale-105 lg:px-6 lg:py-2 lg:text-lg">
                เข้าสู่ระบบ
            </button>
        </nav>
    );
}

export default Navbar;
