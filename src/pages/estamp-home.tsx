import CheckIn from '@/components/estamp-home/CheckIn';
import MyETicket from '@/components/estamp-home/MyETicket';
import Profile from '@/components/estamp-home/Profile';
import Stamp from '@/components/estamp-home/Stamp';
import { useRouter } from 'next/router';

const EstampHome = () => {
    const router = useRouter();
    return (
        <div className="flex min-h-screen w-full flex-col items-center px-6 py-10">
            <Profile router={router} />
            <MyETicket router={router} />
            <CheckIn router={router} />
            <Stamp router={router} />
        </div>
    );
};

export default EstampHome;
