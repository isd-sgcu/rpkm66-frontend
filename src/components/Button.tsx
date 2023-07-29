import React from 'react';

const Button = ({ content, additionalStyle, onClick, disabled }) => {
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
