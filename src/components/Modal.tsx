import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import Button from './Button';
import { ibmPlexSansThai } from './font';

export interface ModalProps {
    open: boolean;
    /**
     * 1 for answer1
     * 2 for answer2
     * undefined for close modal (click outside)
     */
    onClose: (answer: 1 | 2 | undefined) => unknown;
    children?: ReactNode;
    answer1?: string;
    answer2?: string;
}

export const Modal = ({
    open,
    onClose,
    children,
    answer1,
    answer2,
}: ModalProps) => {
    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className={`relative z-50 text-white ${ibmPlexSansThai.variable} font-ibm`}
                    onClose={() => onClose(undefined)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-gray-900 p-8 py-10 text-center shadow-xl transition-all">
                                    <div className="text-center text-lg text-white">
                                        {children}
                                    </div>
                                    <div className="mt-6 flex flex-row justify-center gap-6">
                                        {/* แก้ button */}
                                        <Button
                                            content={answer1}
                                            additionalStyle="bg-pink-600 mx-0 shadow-sm rounded-3xl font-semibold text-lg hover:ring-2 hover:ring-pink-600/20 hover:ring-offset-4 hover:ring-offset-pink-600/50"
                                            onClick={() => onClose(1)}
                                            disabled=""
                                        />
                                        <Button
                                            content={answer2}
                                            additionalStyle="bg-purple-300 mx-0 shadow-sm rounded-3xl font-semibold text-lg hover:ring-2 hover:ring-purple-600/20 hover:ring-offset-4 hover:ring-offset-purple-600/50"
                                            onClick={() => onClose(2)}
                                            disabled=""
                                        />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};
