import Accessibility from '@/components/WalkRally/Home/components/Accessibility';
import Profile from '@/components/WalkRally/Home/components/Profile';
import Stamp from '@/components/WalkRally/Home/components/Stamp';
import { useAuth } from '@/context/AuthContext';
import Consent from '../Consent';
import { useEffect, useState } from 'react';
import NotAllowed from '@/components/NotAllowed';
import { useRouter } from 'next/router';

const WalkRally = () => {
    const router = useRouter();
    const { isAuthenticated, isReady, user } = useAuth();
    const [isConsent, setIsConsent] = useState<boolean | null>(null);

    const handleAcceptConsent = () => {
        localStorage.setItem('consent', 'true');
        setIsConsent(true);
    };

    useEffect(() => {
        const localConsent = localStorage.getItem('consent');
        if (localConsent == 'true') {
            setIsConsent(true);
        } else {
            setIsConsent(false);
        }
    }, []);

    useEffect(() => {
        if (isReady && !isAuthenticated) {
            router.push('/');
        }
        if (user && !user.studentID.startsWith('66')) {
            router.push('/');
        }
    }, [user, isAuthenticated, isReady]);

    return (
        <div className="min-h-screen w-full py-10">
            {isAuthenticated && isReady && (
                <>
                    <Profile />
                    <Accessibility />
                    <Stamp />
                </>
            )}

            {isConsent == false && (
                <Consent
                    setIsConsent={setIsConsent}
                    handleAcceptConsent={handleAcceptConsent}
                />
            )}
        </div>
    );
};

export default WalkRally;
