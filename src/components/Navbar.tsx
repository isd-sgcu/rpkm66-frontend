import Image from 'next/image';
import Favicon from '@/public/images/favicon.svg';

function Navbar() {
    return (
        <nav className="bg-black/50 w-full h-20 flex py-4 justify-between px-10 fixed top-0 left-0 z-50 items-center">
            <div className="w-12 h-full relative">
                <Image
                    src={Favicon}
                    alt="icon"
                    fill
                    className="object-contain"
                />
            </div>
            <button className="bg-orange px-6 font-ibm py-2 rounded-2xl text-white text-lg">
                เข้าสู่ระบบ
            </button>
        </nav>
    );
}

export default Navbar;
