import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, NewspaperIcon, BellIcon } from '@heroicons/react/24/solid';
import Favicon from '@/public/images/favicon.svg';
import { useRouter } from 'next/router';

function PhaseTwoNavbar() {
    const router = useRouter();

    return (
        <nav className="sticky top-0 z-40 flex h-11 w-full justify-between bg-black/50 p-2 backdrop-blur-sm md:px-5 lg:h-20 lg:px-10 lg:py-4">
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
            <div className="relative flex h-full gap-8">
                {/* wait for link to be added */}
                <Link href="/">
                    <NewspaperIcon
                        className={`h-full w-12 hover:text-amber-400 ${
                            router.pathname === '/article-page'
                                ? 'text-amber-400'
                                : ''
                        }`}
                    />
                </Link>
                {/* wait for link to be added */}
                <Link href="/">
                    <BellIcon
                        className={`h-full w-12 hover:text-amber-400 ${
                            router.pathname === '/WAITTOADD'
                                ? 'text-amber-400'
                                : ''
                        }`}
                    />
                </Link>
                {/* wait for link to be added */}
                <Link href="/">
                    <HomeIcon
                        className={`h-full w-12 hover:text-amber-400 ${
                            router.pathname === '/' ? 'text-amber-400' : ''
                        }`}
                    />
                </Link>
            </div>
        </nav>
    );
}

export default PhaseTwoNavbar;
