import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner.js";
import CardContent from "./CardContent.js";

const CardContainer = () => {
    return (
        <div className="card-container">
                <CardBanner 
                    image="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" 
                    alt="react"
                    url="https://www.reactjs.com"
                />
        </div>
    )
}

export default CardContainer;
