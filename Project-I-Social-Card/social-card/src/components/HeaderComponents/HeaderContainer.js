import React from 'react';
import './Header.css';
import ImageThumbnail from "./HeaderThumbnail.js";
import HeaderTitle from "./HeaderTitle.js";
import HeaderContent from "./HeaderContent.js";

export default const HeaderContainer = () => (
    <div>
        <ImageThumbnail url="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"/>
        <HeaderTitle />
        <HeaderContent />
    </div>
)
