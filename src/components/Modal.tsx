import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

export interface ModalProps {
    open: boolean;
    onClose: () => any;
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
                    className="relative z-50 text-white"
                    onClose={onClose}
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
                                    <div>
                                        <div className="text-center">
                                            <div className="text-lg text-white">
                                                {children}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex flex-row justify-center gap-6">
                                        <button
                                            type="button"
                                            className={` ${
                                                `${answer1}` == ''
                                                    ? 'aria-hidden hidden'
                                                    : 'inline-flex max-w-fit flex-1 justify-center rounded-3xl bg-pink-600 px-8 py-2 text-lg font-semibold text-white shadow-sm transition-all hover:ring-2 hover:ring-pink-600/20 hover:ring-offset-4 hover:ring-offset-pink-600/50'
                                            } 
                                            `}
                                            onClick={onClose}
                                        >
                                            {answer1}
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex max-w-fit flex-1 justify-center rounded-3xl bg-purple-300 px-8 py-2 text-lg font-semibold text-white shadow-sm transition-all hover:ring-2 hover:ring-purple-300/20 hover:ring-offset-4 hover:ring-offset-purple-300/50"
                                            onClick={onClose}
                                        >
                                            {answer2}
                                        </button>
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
