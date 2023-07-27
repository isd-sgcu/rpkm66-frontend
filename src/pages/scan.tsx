import React, { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

function Scan() {
    const [data, setData] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleScanResult = (
        result: { text: React.SetStateAction<string> },
        error: any
    ) => {
        if (result) {
            setData(result.text);
            setShowModal(true);
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
                <div className="absolute right-0 top-0 mr-4 mt-4">
                    <button>
                        <XMarkIcon className="h-6 w-6 rounded-sm bg-white bg-opacity-50 text-white" />
                    </button>
                </div>
            </div>
            <div className="inset-0 flex w-full items-center justify-center bg-black">
                <div className="h-64 w-full rounded-t-2xl bg-white p-8 text-center">
                    {/* {data && (
                        <a href={data} className="break-all text-black">
                            {data}
                        </a>
                    )} */}
                    {showModal ? (
                        <div className="grid">
                            <a
                                href={data}
                                className="truncate text-left text-blue-500"
                            >
                                {data}
                            </a>
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
