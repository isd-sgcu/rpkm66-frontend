import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {
    const { query, replace } = useRouter();

    useEffect(() => {
        if (query?.ticket) {
            localStorage.setItem('token', query.ticket as string);
            replace('/register');
        }
    }, [query, replace]);

    return null;
};

export default Login;
