import NotAllowed from '@/components/NotAllowed';
import Button from '@/components/WalkRally/Home/components/Button';
import { useAuth } from '@/context/AuthContext';
import { CameraIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Staff = () => {
    const { user, isAuthenticated, isReady } = useAuth();

    if (!isAuthenticated || !isReady || user?.studentID.startsWith('66'))
        return <NotAllowed />;

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center px-8">
            <div className="space-y-6 rounded-xl bg-white px-4 py-12 text-center text-2xl text-black backdrop-blur-md">
                <h1 className="text-4xl font-bold text-black">สวัสดี!</h1>
                <p className="text-black">นี่คือหน้าของเหล่าพวกเรา ฮาฮาฮ่า</p>
                <div>
                    <Link href="/staff/scan">
                        <Button color="pink">
                            <CameraIcon className="mx-2 h-6 w-6" />
                            <h1 className="text-lg">Freshmen Night Check-in</h1>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Staff;
