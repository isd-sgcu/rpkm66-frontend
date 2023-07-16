import { useAuth } from '@/context/AuthContext';
import { httpPatch } from '@/utils/axios';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import {
    RegisterForm,
    getFormData,
    profilePicPlaceholderURL,
} from '@/components/Profile/Register';

const ProfileEdit = () => {
    const { user, refreshContext } = useAuth();
    const router = useRouter();

    const [error, setError] = useState<string[]>([]);
    const [previewImage, setPreviewImage] = useState<string>(
        profilePicPlaceholderURL
    );

    async function onFormComplete(e: FormEvent<HTMLFormElement>) {
        const body = getFormData(user);

        try {
            await httpPatch(`/user`, body);
            await refreshContext();
            router.push('/wait-baan-selection');
        } catch (_error: any) {
            console.error(_error);
            setError([_error]);
        }
    }

    useEffect(() => {
        if (user) {
            console.log({ user });
        }
    }, [user]);

    return (
        <div className="relative flex pt-8 lg:justify-center">
            <RegisterForm
                error={error}
                setError={setError}
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
                onFormComplete={onFormComplete}
                editPage
            />
        </div>
    );
};

export default ProfileEdit;
