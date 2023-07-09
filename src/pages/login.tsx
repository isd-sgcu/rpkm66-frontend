import { useAuth } from '@/context/AuthContext';
import { ICredential } from '@/types/auth';
import { httpPost } from '@/utils/axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const Login = () => {
    const { query, replace, isReady } = useRouter();

    const [message, setMessage] = useState('Loading...');

    const { refreshContext } = useAuth();

    const handleLogin = useCallback(
        async (ticket: string) => {
            try {
                const { data } = await httpPost<
                    { ticket: string },
                    {
                        access_token: string;
                        refresh_token: string;
                        expires_in: number;
                    }
                >('/auth/verify', { ticket });

                localStorage.setItem(
                    'token',
                    JSON.stringify({
                        accessToken: data.access_token,
                        refreshToken: data.refresh_token,
                        expiresOn: new Date(
                            Date.now() + data.expires_in * 1000
                        ),
                    } satisfies ICredential)
                );
                await refreshContext();
                replace('/register');
            } catch (error) {
                setMessage(`${error}`);
            }
        },
        [replace, refreshContext]
    );

    useEffect(() => {
        if (isReady) {
            if (query?.ticket) {
                setMessage('Logging in...');
                handleLogin(query.ticket as string);
            } else {
                replace('/');
            }
        }
    }, [query, replace, handleLogin, isReady]);

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <p>{message}</p>
        </div>
    );
};

export default Login;
