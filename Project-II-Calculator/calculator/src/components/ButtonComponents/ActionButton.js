import React from 'react';
import './Button.css';

const ActionButton = ({buttonStyle, onClick, text}) => {
    return (
        <button
            className={`general-styles ${buttonStyle}`}
            onClick={onClick}
        >
            <div className="clear-text">{text}</div>
        </button>
    )
}

export default ActionButton;
