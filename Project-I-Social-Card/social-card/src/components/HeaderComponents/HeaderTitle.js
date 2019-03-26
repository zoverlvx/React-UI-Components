import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent.js";

const HeaderTitle = ({title, handle, timestamp}) => (
    <div className="header-title">
        <div className="heading">
            <h1>{title}</h1>
            <span>{handle}</span><span>{timestamp}</span>
        </div>
        <HeaderContent 
            text="Let's learn React by building simple interfaces with components"
        />
    </div>
)

export default HeaderTitle;
