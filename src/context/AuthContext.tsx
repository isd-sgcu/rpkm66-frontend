import { IGroup } from '@/types/group';
import { IUser } from '@/types/user';
import { getGroupProfile } from '@/utils/group';
import { getUserProfile } from '@/utils/user';
import { useRouter } from 'next/router';

import {
    ReactNode,
    createContext,
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
    loginWithGoogle: () => void;
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

            if (!userProfile) {
                localStorage.clear();
                window.location.href = '/';
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
        if (isFetching.current) {
            return;
        }

        switch (router.pathname) {
            case '/':
                if (user?.studentID && user?.studentID.startsWith('66')) {
                    router.push('/walk-rally');
                } else if (
                    user?.studentID &&
                    !user?.studentID.startsWith('66')
                ) {
                    router.push('/only-107');
                }
                break;
            case '/login/choose':
                if (isAuthenticated) {
                    router.push('/');
                }
                break;
            case '/announce-baan':
            case '/register':
            case '/wait-baan-selection':
            case '/profile':
            case '/baan-selection':
                if (!user) {
                    router.push('/');
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

    const loginWithGoogle = useCallback(() => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google`;
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
            loginWithGoogle,
        }),
        [
            isReady,
            isAuthenticated,
            user,
            group,
            login,
            logout,
            refreshContext,
            loginWithGoogle,
        ]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
