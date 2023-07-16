import { useAuth } from '@/context/AuthContext';
import { httpPatch } from '@/utils/axios';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import {
    RegisterForm,
    getFormData,
    profilePicPlaceholderURL,
    registerFormId,
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
            router.push('/profile');
        } catch (_error: any) {
            console.error(_error);
            setError([_error]);
        }
    }

    useEffect(() => {
        if (user) {
            setPreviewImage(user.imageUrl || profilePicPlaceholderURL);

            const form = document.getElementById(
                registerFormId
            ) as HTMLFormElement;

            for (const element of form) {
                switch (element.id) {
                    case 'nametitle':
                        (element as HTMLSelectElement).value = user?.title;
                        break;
                    case 'firstname':
                        (element as HTMLInputElement).value = user?.firstname;
                        break;
                    case 'surname':
                        (element as HTMLInputElement).value = user?.lastname;
                        break;
                    case 'nickname':
                        (element as HTMLInputElement).value = user?.nickname;
                        break;
                    case 'phone':
                        (element as HTMLInputElement).value = user?.phone;
                        break;
                    case 'email':
                        (element as HTMLInputElement).value = user?.email;
                        break;
                    case 'lineId':
                        (element as HTMLInputElement).value = user?.lineID;
                        break;
                    case 'diseases':
                        (element as HTMLInputElement).value = user?.disease;
                        break;
                    case 'drugAllergy':
                        (element as HTMLInputElement).value =
                            user?.allergyMedicine;
                        break;
                    case 'foodAllergy':
                        (element as HTMLInputElement).value = user?.allergyFood;
                        break;
                    case 'foodRestriction':
                        (element as HTMLInputElement).value =
                            user?.foodRestriction;
                        break;
                    case 'emergencyNo':
                        (element as HTMLInputElement).value = user?.emerPhone;
                        break;
                    case 'emergencyRel':
                        (element as HTMLInputElement).value =
                            user?.emerRelation;
                        break;
                    case 'wantbottle':
                        (element as HTMLInputElement).checked =
                            user?.wantbottle;
                        break;
                }
            }
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
