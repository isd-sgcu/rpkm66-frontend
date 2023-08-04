import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import NotAllowed from '@/components/NotAllowed';

function Scan() {
    const { isAuthenticated, isReady, user } = useAuth();
    const [data, setData] = useState<string | null>(null);
    const [isScanned, setIsScanned] = useState<boolean>(false);
    const router = useRouter();

    const handleScanResult = (token: any, error: any) => {
        if (token) {
            setData(token.text);
        }
        if (error) {
            console.info(error);
        }
    };

    useEffect(() => {
        if (data && !isScanned) {
            //Call api
            setIsScanned(true);
            setData(null);
        }
    }, [data]);

    if (!isAuthenticated || !isReady || user?.studentID.startsWith('66'))
        return <NotAllowed />;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
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
        </div>
    );
}

export default Scan;
