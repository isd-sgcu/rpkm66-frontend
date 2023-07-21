import CheckIn from '@/components/estamp-home/CheckIn';
import MyETicket from '@/components/estamp-home/MyETicket';
import Profile from '@/components/estamp-home/Profile';

const EstampHome = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center px-6 py-16">
            <Profile />
            <MyETicket />
            <CheckIn />
        </div>
    );
};

export default EstampHome;
