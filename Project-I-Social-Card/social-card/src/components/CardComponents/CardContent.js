import React from 'react';
import './Card.css';

const CardContent = ({title, text, content}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{content}</p>
        </div>
    )
}

export default CardContent;
