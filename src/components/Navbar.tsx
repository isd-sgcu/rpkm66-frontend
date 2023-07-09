import Image from 'next/image';
import Favicon from '@/public/images/favicon.svg';

function Navbar() {
    return (
        <nav className="bg-black/50 w-full lg:h-20 h-11 flex lg:py-4 py-2 justify-between lg:px-10 md:px-5 px-2 fixed top-0 left-0 z-50 items-center">
            <div className="w-12 h-full relative">
                <Image
                    src={Favicon}
                    alt="icon"
                    fill
                    className="object-contain"
                />
            </div>
            <button className="bg-orange lg:px-6 px-3 font-ibm lg:py-2 py-1 rounded-2xl text-white lg:text-lg text-xs">
                เข้าสู่ระบบ
            </button>
        </nav>
    );
}

export default Navbar;
