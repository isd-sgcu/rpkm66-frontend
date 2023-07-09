import { IGroup } from '@/types/group';
import { IUser } from '@/types/user';
import { getGroupProfile } from '@/utils/group';
import { getUserProfile } from '@/utils/user';
import { useRouter } from 'next/router';

import {
    ReactNode,
    createContext,
    use,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

export interface IAuthContext {
    isReady: boolean;
    isAuthenticated: boolean;
    user?: IUser;
    group?: IGroup;
    login: () => void;
    logout: () => void;
    refreshContext: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isReady, setIsReady] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<IUser>();
    const [group, setGroup] = useState<IGroup>();
    const isFetching = useRef(false);
    const router = useRouter();

    const refreshContext = useCallback(async () => {
        if (isFetching.current) {
            return;
        }
        isFetching.current = true;

        const token = localStorage.getItem('token');
        if (token) {
            const userProfile = await getUserProfile();
            console.log('Hey!');
            if (!userProfile) {
                localStorage.clear();
                window.location.href = '/';
                return;
            }
            console.log(userProfile);
            if (!userProfile.studentID.startsWith('66')) {
                localStorage.clear();
                window.location.href = '/only-107';
                return;
            }

            const groupProfile = await getGroupProfile(router.locale);
            if (groupProfile) {
                setGroup(groupProfile);
            }

            setUser(userProfile);
            setIsAuthenticated(true);
        }

        isFetching.current = false;
    }, [router]);

    useEffect(() => {
        const alreadyRegistered = user && user.email && user.email !== '';
        switch (router.pathname) {
            case '/':
                if (user) {
                    if (alreadyRegistered) router.push('/baan-selection');
                    else router.push('/register');
                }
                break;
            case '/register':
                if (!user) {
                    router.push('/');
                } else if (alreadyRegistered) {
                    router.push('/baan-selection');
                }
                break;
            case '/baan-selection':
                if (!user) {
                    router.push('/');
                } else if (!alreadyRegistered) {
                    router.push('/register');
                }
                break;
            default:
                break;
        }
    }, [isAuthenticated, router, user]);

    useEffect(() => {
        const initializeContext = async () => {
            await refreshContext();
            setIsReady(true);
        };
        initializeContext();
    }, [refreshContext]);

    const login = useCallback(() => {
        window.location.href = `${process.env.NEXT_PUBLIC_SSO_BASE_URL}/login?service=${process.env.NEXT_PUBLIC_APP_BASE_URL}/login`;
    }, []);

    const logout = useCallback(() => {
        localStorage.clear();
        window.location.href = '/login';
    }, []);

    const value = useMemo(
        () => ({
            isReady,
            isAuthenticated,
            user,
            group,
            login,
            logout,
            refreshContext,
        }),
        [isReady, isAuthenticated, user, group, login, logout, refreshContext]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
