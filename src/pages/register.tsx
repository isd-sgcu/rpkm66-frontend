import { useAuth } from '@/context/AuthContext';
import { httpPatch } from '@/utils/axios';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    RegisterForm,
    getFormData,
    profilePicPlaceholderURL,
} from '@/components/Profile/Register';

const Register = () => {
    const { user, refreshContext } = useAuth();
    const router = useRouter();
    const [bottleModal, setBottleModal] = useState(false);
    const [error, setError] = useState<string[]>([]);
    const [previewImage, setPreviewImage] = useState<string>(
        profilePicPlaceholderURL
    );

    function onFormComplete(e: FormEvent<HTMLFormElement>) {
        setBottleModal(true);
    }

    const handleSubmit = async (wantBottle: boolean) => {
        const body = getFormData(user, wantBottle);

        try {
            await httpPatch(`/user`, body);
            await refreshContext();
            router.push('/profile');
        } catch (_error: any) {
            setBottleModal(false);
            console.error(_error);
            setError([_error]);
        }
    };

    return (
        <div className="relative flex pt-8 lg:justify-center">
            {bottleModal && (
                <AnimatePresence>
                    <motion.div
                        className="fixed left-1/2 top-1/2 z-[99] flex w-full max-w-md -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg bg-white shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key="water-bottle-modal"
                    >
                        <div className="relative px-16 py-16">
                            <Image
                                src="/images/czw.jpg"
                                className="mx-auto mb-4"
                                width={200}
                                height={500}
                                alt="Bottle"
                            />

                            <h1 className="text-center text-2xl font-bold text-purple-400">
                                ต้องการรับกระบอกน้ำ <br />
                                Chula Zero Waste <br />
                                ในงานรับเพื่อนก้าวใหม่หรือไม่
                            </h1>
                            <div className="absolute right-2 top-4">
                                <button onClick={() => setBottleModal(false)}>
                                    <XMarkIcon className="h-6 w-6 text-black" />
                                </button>
                            </div>
                            <div className="mt-4 flex w-full flex-col items-center justify-center gap-4">
                                <button
                                    onClick={() => {
                                        setBottleModal(false);
                                        handleSubmit(false);
                                    }}
                                    className="w-full rounded-full border-pink-400 px-5 py-2 text-xl font-bold text-pink-400 ring-2 ring-pink-400/30 transition-all duration-500 hover:ring-8 hover:ring-pink-400/50"
                                >
                                    ไม่ต้องการ
                                </button>
                                <button
                                    onClick={() => {
                                        setBottleModal(false);
                                        handleSubmit(true);
                                    }}
                                    className="w-full rounded-full bg-pink-400 px-5 py-2 text-xl font-bold text-white ring-2 ring-pink-400/30 transition-all duration-500 hover:bg-pink-400/80 hover:ring-8"
                                >
                                    ต้องการ
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    <div
                        onClick={() => setBottleModal(false)}
                        className="fixed left-0 top-0 z-50 h-screen w-full bg-black/25 backdrop-blur-md"
                    ></div>
                </AnimatePresence>
            )}

            <RegisterForm
                error={error}
                setError={setError}
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
                onFormComplete={onFormComplete}
            />
        </div>
    );
};

export default Register;
