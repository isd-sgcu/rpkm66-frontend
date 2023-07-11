// toast provider
import clsx from 'clsx';

import {
    CheckCircleIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
// import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { createContext, ReactNode, useContext, useState } from 'react';

interface IToastContext {
    setToast: (type: 'error' | 'success', message: string) => void;
    data: { message: string; type: 'error' | 'success' } | null;
}

const ToastContext = createContext<IToastContext | null>(null);

export const useToast = () => {
    return useContext(ToastContext);
};

function getStyle(type: 'error' | 'success') {
    switch (type) {
        case 'error':
            return 'bg-red-500';
        case 'success':
            return 'bg-green-500';
        default:
            return 'bg-blue-500';
    }
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const toast = useProvideToast();

    return (
        <ToastContext.Provider value={toast}>
            {toast.data?.message && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: -300, x: '-50%' }}
                        animate={{ opacity: 1, y: 25, x: '-50%' }}
                        exit={{ opacity: 0, y: -300, x: '-50%' }}
                        className={clsx(
                            getStyle(toast.data?.type),
                            'fixed left-1/2 z-[101] rounded-full px-4 py-2 text-white'
                        )}
                    >
                        <div className="flex items-center space-x-1">
                            {toast.data?.type === 'error' && (
                                <ExclamationCircleIcon className="h-5 w-5" />
                            )}
                            {toast.data?.type === 'success' && (
                                <CheckCircleIcon className="h-5 w-5" />
                            )}
                            <span className="font-display text-sm">
                                {toast.data?.message}
                            </span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
            {children}
        </ToastContext.Provider>
    );
};

const TOAST_TIMEOUT = 3000;

function useProvideToast() {
    const [toast, setToast] = useState<null | {
        message: string;
        type: 'error' | 'success';
    }>(null);

    const setToastDisplay = (type: 'error' | 'success', message: string) => {
        if (toast) {
            setToast(null);
            setTimeout(() => {
                setToast({ type, message });

                window.setTimeout(() => {
                    setToast(null);
                }, TOAST_TIMEOUT);
            }, 1000);
        }

        setToast({ type, message });
        window.setTimeout(() => {
            setToast(null);
        }, TOAST_TIMEOUT);
    };

    return { setToast: setToastDisplay, data: toast };
}
