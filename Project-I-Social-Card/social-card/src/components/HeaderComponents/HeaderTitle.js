import React from 'react';
import './Header.css';

export default const HeaderTitle = ({title, handle, timestamp}) => (
    <div>
        <h1>{title}</h1>
        <span>{handle}</span><span>{timestamp}</span>
    </div>
)
