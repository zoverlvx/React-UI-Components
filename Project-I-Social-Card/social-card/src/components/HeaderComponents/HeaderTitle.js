import React from 'react';
import './Header.css';

const HeaderTitle = ({title, handle, timestamp}) => (
    <div className="header-title">
        <h1>{title}</h1>
        <span>{handle}</span><span>{timestamp}</span>
    </div>
)

export default HeaderTitle;
