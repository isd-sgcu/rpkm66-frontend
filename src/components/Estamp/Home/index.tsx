import Accessibility from '@/components/Estamp/Home/components/Accessibility';
import Profile from '@/components/Estamp/Home/components/Profile';
import Stamp from '@/components/Estamp/Home/components/Stamp';
import { useAuth } from '@/context/AuthContext';

const EstampHome = () => {
    const { isAuthenticated, isReady } = useAuth();

    return (
        <div className="flex min-h-screen w-full flex-col items-center px-6 py-10">
            {isAuthenticated && isReady && (
                <>
                    <Profile />
                    <Accessibility />
                    <Stamp />
                </>
            )}
        </div>
    );
};

export default EstampHome;
