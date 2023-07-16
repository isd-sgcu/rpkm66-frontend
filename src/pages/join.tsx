import { httpPost } from '@/utils/axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';

const JoinPage: NextPage = () => {
    const { query, replace } = useRouter();
    const [message, setMessage] = useState('Loading...');

    const id = useMemo(
        () => decodeURI((query.id as string | undefined) ?? ''),
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
        if (!id) return;

        joinBaan(id);
    }, [id, joinBaan]);

    return <div>{message}</div>;
};

export default JoinPage;
