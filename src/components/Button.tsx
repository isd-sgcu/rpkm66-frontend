import React from 'react';

interface ButtonProps {
    content: string;
    additionalStyle?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    content,
    additionalStyle,
    onClick,
    disabled,
}) => {
    return (
        <button
            className={`mx-auto w-40 max-w-full items-center py-2 text-white transition-all duration-500 hover:ring-8 disabled:cursor-not-allowed disabled:ring-0 ${additionalStyle}`}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
};

export default Button;
