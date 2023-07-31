import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToast } from '@/components/Toast';
import { httpPost } from '@/utils/axios';
import { useAuth } from '@/context/AuthContext';

function Scan() {
    const { isAuthenticated } = useAuth();
    const [data, setData] = useState('');
    const [showModal, setShowModal] = useState(false);
    const toast = useToast();
    const router = useRouter();
    const checkIn = async (token: any) => {
        const { status } = await httpPost('/estamp/' + token.text, {
            token: token.text,
        });
        if (status === 200) {
            router.push('/estamp-home');
        } else {
            toast?.setToast('error', 'QR Code is invalid');
        }
    };
    const handleScanResult = (token: any, error: any) => {
        if (token) {
            setData(token.text);
            setShowModal(true);
            isAuthenticated
                ? checkIn(token)
                : toast?.setToast('error', 'Please login to scan QR code');
        }
        if (error) {
            console.info(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-full">
                <QrReader
                    className="bg-black"
                    onResult={handleScanResult}
                    constraints={{ facingMode: 'environment' }}
                />
                <motion.div
                    className="absolute left-1/2 top-1/2 h-48 w-48 max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-3xl border-4 border-white"
                    animate={{ opacity: [0.25, 0.5, 1, 0.5, 0.25] }}
                    transition={{ duration: 1, repeat: Infinity }}
                ></motion.div>
                <button
                    className="absolute right-0 top-0 mr-4 mt-4"
                    onClick={() => router.back()}
                >
                    <XMarkIcon className="h-6 w-6 rounded-sm bg-white bg-opacity-50 text-white" />
                </button>
            </div>
            <div className="flex w-full items-center justify-center bg-black">
                <div className="h-64 w-full rounded-t-2xl bg-white p-8 text-center">
                    {showModal ? (
                        <div className="grid">
                            <Link
                                href={data}
                                className="truncate text-left text-blue-500"
                            >
                                {data}
                            </Link>
                            <p className="text-left text-sm text-gray-500">
                                Tap here to open the link
                            </p>
                        </div>
                    ) : (
                        <p className="break-all text-black">
                            Please scan a QR code
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Scan;