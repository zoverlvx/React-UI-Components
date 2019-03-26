import React from 'react';
import './Button.css';

const NumberButton = ({
    customStyle, 
    buttonStyle,
    onClick,
    text
}) => {
    return (
        <button
            className={`${customStyle} ${buttonStyle}`}
            onClick={onClick}
        >
            <span className="number-text">{text}</span>
        </button>
    )
}

export default NumberButton;
