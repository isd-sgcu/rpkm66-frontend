import Image from 'next/image';
import Favicon from '@/public/images/favicon.svg';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

function Navbar() {
    const { user, logout, login } = useAuth();

    return (
        <nav className="sticky top-0 z-40 flex h-11 w-full items-center justify-between bg-black/50 px-2 py-2 backdrop-blur-sm md:px-5 lg:h-20 lg:px-10 lg:py-4">
            <div className="relative h-full w-12">
                <Link href="/">
                    <Image
                        src={Favicon}
                        alt="icon"
                        fill
                        className="object-contain"
                    />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
