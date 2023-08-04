import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, NewspaperIcon, BellIcon } from '@heroicons/react/24/solid';
import Favicon from '@/public/images/favicon.svg';
import { useRouter } from 'next/router';

function PhaseTwoNavbar() {
    const router = useRouter();

    return (
        <nav className="sticky top-0 z-40 flex w-full justify-between bg-black/50 p-4 backdrop-blur-sm md:px-5 lg:h-20 lg:px-10 lg:py-4">
            <div className="relative h-8 w-8">
                <Link href="/">
                    <Image
                        src={Favicon}
                        alt="icon"
                        fill
                        className="object-contain"
                    />
                </Link>
            </div>
            <div className="relative flex flex-row gap-6">
                <Link href="/articles">
                    <NewspaperIcon
                        className={`h-8 w-8 hover:text-amber-400 ${
                            router.pathname === '/articles'
                                ? 'text-amber-400'
                                : ''
                        }`}
                    />
                </Link>

                <Link href="/walk-rally">
                    <HomeIcon
                        className={`h-8 w-8 hover:text-amber-400 ${
                            router.pathname === '/walk-rally'
                                ? 'text-amber-400'
                                : ''
                        }`}
                    />
                </Link>
            </div>
        </nav>
    );
}

export default PhaseTwoNavbar;
