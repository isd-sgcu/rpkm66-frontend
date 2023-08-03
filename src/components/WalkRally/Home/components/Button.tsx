import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

interface ButtonProps {
    children: ReactNode;
    color: 'pink' | 'green' | 'yellow';
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

const Button = ({
    children,
    color,
    disabled,
    onClick,
    className,
}: ButtonProps) => {
    const button = tv({
        base: twMerge(
            'flex w-full items-center justify-center rounded-xl py-2 text-xl font-bold ring-4 transition-all duration-300 ease-in-out hover:ring-8',
            className
        ),
        variants: {
            color: {
                pink: 'bg-pink-400 ring-pink-400/40 disabled:opacity-80 disabled:hover:ring-4',
                green: 'bg-green ring-green/40 disabled:opacity-80 disabled:hover:ring-4',
                yellow: 'bg-yellow ring-yellow/40 disabled:opacity-80 disabled:hover:ring-4',
            },
        },
    });

    return (
        <button
            type="button"
            className={button({ color })}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
