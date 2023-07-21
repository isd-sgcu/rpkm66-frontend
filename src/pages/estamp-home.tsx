import CheckIn from '@/components/estamp-home/CheckIn';
import MyETicket from '@/components/estamp-home/MyETicket';
import Profile from '@/components/estamp-home/Profile';
import Stamp from '@/components/estamp-home/Stamp';

const EstampHome = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center px-6 py-10">
            <Profile />
            <MyETicket />
            <CheckIn />
            <Stamp />
        </div>
    );
};

export default EstampHome;
