import { httpPost } from '@/utils/axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';

const JoinPage: NextPage = () => {
    const { query, replace } = useRouter();
    const [message, setMessage] = useState('Loading...');

    const token = useMemo(
        () => decodeURI((query.token as string | undefined) ?? ''),
        [query]
    );

    const joinBaan = useCallback(
        async (token: string) => {
            const { status } = await httpPost(`/group/${token}`, {});

            if (status === 404) {
                setMessage('Baan Not Found');
            }

            if (status === 200) {
                replace('/profile');
            }
        },
        [replace]
    );

    useEffect(() => {
        if (!token) return;

        joinBaan(token);
    }, [token, joinBaan]);

    return <div>{message}</div>;
};

export default JoinPage;
