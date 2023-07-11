import { exchangeTicketForToken } from '@/utils/auth';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const Login = () => {
    const { query, replace, isReady } = useRouter();

    const [message, setMessage] = useState('Loading...');

    const handleLogin = useCallback(async (ticket: string) => {
        const token = await exchangeTicketForToken(ticket);
        localStorage.setItem('token', JSON.stringify(token));

        window.location.href = '/register';
    }, []);

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
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <p>{message}</p>
        </div>
    );
};

export default Login;
