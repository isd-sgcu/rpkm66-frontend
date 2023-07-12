import { exchangeTicketForToken } from '@/utils/auth';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const Login = () => {
    const { query, replace, isReady } = useRouter();
    const timeCloseRegister = new Date('2022-07-24T12:00:00+07:00');
    const time = new Date();
    const handleLogin = useCallback(async (ticket: string) => {
        const token = await exchangeTicketForToken(ticket);
        localStorage.setItem('token', JSON.stringify(token));

        window.location.href = '/register';
    }, []);

    useEffect(() => {
        if (isReady) {
            if (query?.ticket) {
                if (time >= timeCloseRegister) {
                    //window.location.href = '/registerClose';
                } else {
                    handleLogin(query.ticket as string);
                }
            } else {
                replace('/');
                if (time < timeCloseRegister) {
                    window.location.href = '/baan-selection';
                }
            }
        }
    }, [query, replace, handleLogin, isReady]);

    return (
        <h1>hi</h1>
        //content
    );
};

export default Login;
