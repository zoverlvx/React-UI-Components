import React from 'react';
import './Card.css';
import CardContent from "./CardContent.js";

const CardBanner = ({image, url, alt}) => {
    return (
        <div className="card-banner">
            <a href={url}>
                <img src={image} alt={alt} />
            </a>
            <CardContent
                title="Get started with React"
                text="React makes it painless to create interactive UIs. Design simple views for each state in your application."
                content="reactjs.org"
            />
        </div>
    )
}

export default CardBanner;
