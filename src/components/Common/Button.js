import React from 'react';

const Button = ({ type = 'button', className, onClick, text, disabled = false }) => {
    return (
        <button
            type={type}
            className={`btn ${className || ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;