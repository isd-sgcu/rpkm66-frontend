import { exchangeGoogleCodeForToken } from '@/utils/auth';
import { httpPost } from '@/utils/axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

// example: https://freshmen2023.sgcu.in.th/oauth/google?code=4%2F0Adeu5BXJOzVuq9DUnfXhMaFmv8olktEtZato8IIX6_hvL_s1SWTZdv6Cj9LwJ00qg8duGw&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=consent
export default function Google() {
    const { query, replace, isReady } = useRouter();

    const [message, setMessage] = useState('Loading...');

    const handleLogin = useCallback(async (code: string) => {
        try {
            const token = await exchangeGoogleCodeForToken(code);
            localStorage.setItem('token', JSON.stringify(token));
            window.location.href = '/register';
        } catch {
            setMessage('Failed to login.');
        }
    }, []);

    useEffect(() => {
        if (isReady) {
            if (query?.code) {
                setMessage('Logging in...');
                handleLogin(query.code as string);
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
}
