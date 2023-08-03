import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={twMerge('mx-auto max-w-3xl px-8', className)}>
            {children}
        </div>
    );
};

export default Container;
