import React from 'react';
import './Header.css';
import ImageThumbnail from "./HeaderThumbnail.js";
import HeaderTitle from "./HeaderTitle.js";
import HeaderContent from "./HeaderContent.js";

export default const HeaderContainer = () => {
    const date = new Date()
    const day = date.getDate();
    const month = date.getMonth();
    const months = [
        "jan",
        "feb",
        "mar",
        "april",
        "may",
        "june",
        "july",
        "aug",
        "sept",
        "oct",
        "nov",
        "dec"
    ]
    return (
        <header>
            <ImageThumbnail url="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"/>
            <HeaderTitle 
                title="Lambda School"
                handle="@LambdaSchool"
                timestamp={`${day}/${months[month]}`}
            />
            <HeaderContent />
        </header>
    )
}
    
