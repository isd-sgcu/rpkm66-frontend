import { createContext, useContext, ReactNode, useState } from 'react';

type ModalId = 'modal-1' | 'modal-2' | 'modal-3' | 'modal-4';

export interface AppContextProps {
    modalToOpen: ModalId | null;
    closeModal: () => void;
    openModal: (id: ModalId) => void;
}

export const AppContext = createContext<AppContextProps>({
    modalToOpen: null,
    closeModal: () => {},
    openModal: (id: ModalId) => {},
});

export interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [modalToOpen, setModalToOpen] = useState<ModalId | null>(null);

    const closeModal = () => {
        setModalToOpen(null);
    };

    const openModal = (id: ModalId) => {
        setModalToOpen(id);
    };

    return (
        <AppContext.Provider value={{ modalToOpen, closeModal, openModal }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
