import React from 'react';

const DefaultButton = ({ content, additionalStyle, onClick, disabled }) => {
    const buttonClassName =
        `max-w-full w-40 mx-auto items-center py-2 text-white transition-all duration-500 hover:ring-8 disabled:cursor-not-allowed disabled:ring-0 ` +
        additionalStyle;

    return (
        <button
            className={buttonClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
};

export default DefaultButton;
